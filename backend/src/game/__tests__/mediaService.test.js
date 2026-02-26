jest.mock('axios', () => ({
    get: jest.fn()
}));

const axios = require('axios');
const { resolveRoundMedia, __clearMediaCache } = require('../mediaService');

function buildAnimePayload() {
    return {
        name: 'Demo Anime',
        animethemes: [
            {
                type: 'OP',
                slug: 'OP1',
                song: { title: 'Opening Song' },
                animethemeentries: [
                    {
                        videos: [{ link: 'https://cdn.example/op.mp4', audio: 'https://cdn.example/op.mp3', duration: 90 }]
                    }
                ]
            },
            {
                type: 'ED',
                slug: 'ED1',
                song: { title: 'Ending Song' },
                animethemeentries: [
                    {
                        videos: [{ link: 'https://cdn.example/ed.mp4', audio: 'https://cdn.example/ed.mp3', duration: 90 }]
                    }
                ]
            },
            {
                type: 'IN',
                slug: 'IN1',
                song: { title: 'Insert Song' },
                animethemeentries: [
                    {
                        videos: [{ link: 'https://cdn.example/in.mp4', audio: 'https://cdn.example/in.mp3', duration: 90 }]
                    }
                ]
            }
        ]
    };
}

function mockProviderSuccess(animePayload = buildAnimePayload()) {
    axios.get
        .mockResolvedValueOnce({
            data: {
                resources: [{ anime: [{ id: 999 }] }]
            }
        })
        .mockResolvedValueOnce({
            data: {
                anime: [animePayload]
            }
        });
}

describe('mediaService.resolveRoundMedia', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        __clearMediaCache();
    });

    test('resolves OP theme when mode is OP_ONLY', async () => {
        mockProviderSuccess();

        const media = await resolveRoundMedia({
            animeId: 5114,
            animeTitle: 'FMA:B',
            themeMode: 'OP_ONLY',
            sampleSeconds: 12,
            roundIndex: 1
        });

        expect(media).toMatchObject({
            animeId: 5114,
            animeTitle: 'Demo Anime',
            themeType: 'OP',
            themeTitle: 'Opening Song',
            sampleDurationSec: 12,
            solutionVideoUrl: 'https://cdn.example/op.mp4',
            solutionAudioUrl: 'https://cdn.example/op.mp3'
        });
        expect(axios.get).toHaveBeenCalledTimes(2);
    });

    test('uses mixed pool with deterministic round-based selection', async () => {
        mockProviderSuccess();

        const media = await resolveRoundMedia({
            animeId: 16498,
            themeMode: 'MIXED',
            sampleSeconds: 10,
            roundIndex: 3
        });

        expect(media).toMatchObject({
            animeId: 16498,
            themeType: 'IN',
            themeTitle: 'Insert Song',
            solutionVideoUrl: 'https://cdn.example/in.mp4'
        });
    });

    test('returns null when requested mode has no playable themes', async () => {
        const edOnlyPayload = {
            name: 'ED Anime',
            animethemes: [
                {
                    type: 'ED',
                    song: { title: 'Only Ending' },
                    animethemeentries: [{ videos: [{ link: 'https://cdn.example/only-ed.mp4' }] }]
                }
            ]
        };
        mockProviderSuccess(edOnlyPayload);

        const media = await resolveRoundMedia({
            animeId: 9253,
            themeMode: 'OP_ONLY',
            sampleSeconds: 8,
            roundIndex: 1
        });

        expect(media).toBeNull();
    });

    test('reuses cache for repeated anime lookups', async () => {
        mockProviderSuccess();

        const first = await resolveRoundMedia({
            animeId: 38000,
            themeMode: 'MIXED',
            sampleSeconds: 10,
            roundIndex: 1
        });
        const second = await resolveRoundMedia({
            animeId: 38000,
            themeMode: 'MIXED',
            sampleSeconds: 10,
            roundIndex: 2
        });

        expect(first).toBeTruthy();
        expect(second).toBeTruthy();
        expect(axios.get).toHaveBeenCalledTimes(2);
    });

    test('maps provider errors to http 502', async () => {
        axios.get.mockRejectedValue({
            response: { status: 500 }
        });

        await expect(resolveRoundMedia({
            animeId: 1,
            themeMode: 'MIXED',
            sampleSeconds: 10,
            roundIndex: 1
        })).rejects.toMatchObject({
            status: 502
        });
    });

    test('picks bounded random sample start when duration is known', async () => {
        mockProviderSuccess();
        const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);

        const media = await resolveRoundMedia({
            animeId: 321,
            themeMode: 'OP_ONLY',
            sampleSeconds: 15,
            roundIndex: 1
        });

        // duration=90s and sample=15s => maxStart=75
        expect(media.sampleDurationSec).toBe(15);
        expect(media.sampleStartSec).toBeGreaterThanOrEqual(0);
        expect(media.sampleStartSec).toBeLessThanOrEqual(75);
        expect(media.sampleStartSec).toBe(38);

        randomSpy.mockRestore();
    });

    test('uses sample start 0 when media duration is too short', async () => {
        const shortPayload = {
            name: 'Short Anime',
            animethemes: [
                {
                    type: 'OP',
                    song: { title: 'Short OP' },
                    animethemeentries: [{ videos: [{ link: 'https://cdn.example/short-op.mp4', duration: 10 }] }]
                }
            ]
        };
        mockProviderSuccess(shortPayload);

        const media = await resolveRoundMedia({
            animeId: 654,
            themeMode: 'OP_ONLY',
            sampleSeconds: 15,
            roundIndex: 1
        });

        expect(media.sampleDurationSec).toBe(15);
        expect(media.sampleStartSec).toBe(0);
    });
});

jest.mock('axios', () => ({
    get: jest.fn()
}));
jest.mock('../animeCatalogService', () => ({
    searchCatalog: jest.fn(),
    upsertCatalogEntries: jest.fn().mockResolvedValue({
        source: 'search_fallback',
        processed: 0,
        upserted: 0,
        skipped: 0
    })
}));

const axios = require('axios');
const animeCatalogService = require('../animeCatalogService');
const { searchAnime, __clearSearchCache } = require('../searchService');

describe('searchService.searchAnime', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        __clearSearchCache();
        animeCatalogService.searchCatalog.mockResolvedValue([]);
    });

    test('maps Jikan data to normalized search results', async () => {
        const futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
        axios.get.mockResolvedValue({
            data: {
                data: [
                    {
                        mal_id: 1,
                        title: 'Naruto',
                        title_english: 'Naruto',
                        title_japanese: 'NARUTO -ナルト-',
                        year: 2002,
                        images: {
                            jpg: { image_url: 'https://img.example/naruto.jpg' }
                        }
                    },
                    {
                        mal_id: 7777,
                        title: 'Future Anime',
                        status: 'Not yet aired',
                        aired: {
                            from: futureDate
                        }
                    },
                    {
                        mal_id: 20,
                        title_english: 'Dragon Ball',
                        images: {}
                    },
                    {
                        mal_id: 30,
                        title: 'Komi-san wa, Comyushou desu.',
                        title_english: "Komi Can't Communicate",
                        title_japanese: '古見さんは、コミュ症です。',
                        images: {}
                    }
                ]
            }
        });

        const result = await searchAnime('naruto', { limit: 5 });

        expect(result.source).toBe('jikan');
        expect(result.cached).toBe(false);
        expect(result.limit).toBe(5);
        expect(result.results).toEqual([
            {
                id: 1,
                title: 'Naruto',
                titleEnglish: 'Naruto',
                titleJapanese: 'NARUTO -ナルト-',
                year: 2002,
                imageUrl: 'https://img.example/naruto.jpg'
            },
            {
                id: 20,
                title: 'Dragon Ball',
                titleEnglish: 'Dragon Ball',
                titleJapanese: null,
                year: null,
                imageUrl: null
            },
            {
                id: 30,
                title: "Komi Can't Communicate",
                titleEnglish: "Komi Can't Communicate",
                titleJapanese: '古見さんは、コミュ症です。',
                year: null,
                imageUrl: null
            }
        ]);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('serves from local catalog when available', async () => {
        animeCatalogService.searchCatalog.mockResolvedValue([
            {
                id: 42897,
                title: "Komi Can't Communicate",
                titleEnglish: "Komi Can't Communicate",
                titleJapanese: '古見さんは、コミュ症です。',
                year: 2021,
                imageUrl: null
            }
        ]);

        const result = await searchAnime('komi', { limit: 10 });

        expect(result.source).toBe('local_catalog');
        expect(result.cached).toBe(false);
        expect(result.results).toHaveLength(1);
        expect(result.results[0].title).toBe("Komi Can't Communicate");
        expect(axios.get).not.toHaveBeenCalled();
    });

    test('serves repeated query from cache', async () => {
        axios.get.mockResolvedValue({
            data: {
                data: [
                    {
                        mal_id: 5114,
                        title: 'Fullmetal Alchemist: Brotherhood'
                    }
                ]
            }
        });

        const first = await searchAnime('fma', { limit: 3 });
        const second = await searchAnime('fma', { limit: 3 });

        expect(first.cached).toBe(false);
        expect(second.cached).toBe(true);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('maps provider 429 to http 503', async () => {
        axios.get.mockRejectedValue({
            response: { status: 429 }
        });

        await expect(searchAnime('bleach', { limit: 5 })).rejects.toMatchObject({
            status: 503
        });
    });

    test('rejects too-short queries', async () => {
        await expect(searchAnime('a')).rejects.toMatchObject({
            status: 400
        });
        expect(axios.get).not.toHaveBeenCalled();
    });
});

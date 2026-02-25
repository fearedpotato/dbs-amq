jest.mock('axios', () => ({
    get: jest.fn()
}));

const axios = require('axios');
const { searchAnime, __clearSearchCache } = require('../searchService');

describe('searchService.searchAnime', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        __clearSearchCache();
    });

    test('maps Jikan data to normalized search results', async () => {
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
                        mal_id: 20,
                        title_english: 'Dragon Ball',
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
            }
        ]);
        expect(axios.get).toHaveBeenCalledTimes(1);
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

jest.mock('../../lib/telemetry', () => ({
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    debug: jest.fn()
}));

const telemetry = require('../../lib/telemetry');
const { validateStartupEnv } = require('../startupValidation');

function baseEnv() {
    return {
        NODE_ENV: 'development',
        JWT_SECRET: 'jwt-secret-123456',
        SESSION_SECRET: 'session-secret-123456',
        MAL_CLIENT_ID: 'mal-client-id',
        MAL_CLIENT_SECRET: 'mal-client-secret',
        MAL_REDIRECT_URI: 'https://example.com/api/mal/callback',
        ANIMETHEMES_BASE_URL: 'https://api.animethemes.moe',
        ANIMETHEMES_TIMEOUT_MS: '10000',
        MEDIA_PROXY_ENABLED: 'true',
        MEDIA_PROXY_PATH: '/api/game/media/proxy',
        MEDIA_PROXY_FETCH_TIMEOUT_MS: '20000'
    };
}

describe('validateStartupEnv', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('passes for valid environment', () => {
        const result = validateStartupEnv({ env: baseEnv(), skipInTest: false });
        expect(result.ok).toBe(true);
        expect(telemetry.info).toHaveBeenCalledWith(
            'startup.env_validation_passed',
            expect.objectContaining({
                validatedKeys: expect.any(Array)
            })
        );
        expect(telemetry.error).not.toHaveBeenCalled();
    });

    test('reports each invalid key and throws aggregated error', () => {
        const env = baseEnv();
        env.JWT_SECRET = '';
        env.MAL_REDIRECT_URI = 'not-a-url';
        env.ANIMETHEMES_TIMEOUT_MS = '0';

        expect(() => validateStartupEnv({ env, skipInTest: false })).toThrow(
            'Startup env validation failed with 3 issue(s)'
        );

        expect(telemetry.error).toHaveBeenCalledWith(
            'startup.env_key_invalid',
            expect.any(Error),
            expect.objectContaining({ key: 'JWT_SECRET' })
        );
        expect(telemetry.error).toHaveBeenCalledWith(
            'startup.env_key_invalid',
            expect.any(Error),
            expect.objectContaining({ key: 'MAL_REDIRECT_URI' })
        );
        expect(telemetry.error).toHaveBeenCalledWith(
            'startup.env_key_invalid',
            expect.any(Error),
            expect.objectContaining({ key: 'ANIMETHEMES_TIMEOUT_MS' })
        );

        const aggregateCall = telemetry.error.mock.calls.find((call) => call[0] === 'startup.env_validation_failed');
        expect(aggregateCall).toBeTruthy();
        expect(aggregateCall[2]).toMatchObject({
            issueCount: 3
        });
    });

    test('skips in test mode by default', () => {
        const result = validateStartupEnv({
            env: {
                NODE_ENV: 'test'
            }
        });
        expect(result).toMatchObject({
            ok: true,
            skipped: true
        });
        expect(telemetry.error).not.toHaveBeenCalled();
        expect(telemetry.info).not.toHaveBeenCalled();
    });
});

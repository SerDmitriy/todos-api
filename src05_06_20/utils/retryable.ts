export const sleep = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export interface IRetryableConfig {
    attempts: number;
    delay?: number;
}

export const createRetryable = (scopedConfig: IRetryableConfig) => {
    const internalRetryable = async <T>(
        fn: () => Promise<T>,
        config?: IRetryableConfig
    ): Promise<T> => {
        const { delay = 0 } = config || scopedConfig;
        let { attempts } = config || scopedConfig;

        const run = async () => {
            attempts--;
            return await fn();
        };

        try {
            return await run();
        } catch (e) {
            if (attempts < 1) {
                throw new Error(`attempts exhausted: ${e}`);
            }
            if (scopedConfig.delay) {
                await sleep(scopedConfig.delay);
            }
            return await internalRetryable(fn, {
                attempts,
                delay
            });
        }
    };

    return internalRetryable;
};

export const retryable = createRetryable({ attempts: 3 });

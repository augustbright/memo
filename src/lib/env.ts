type Env = {[env: string]: string|null};

export function getEnv(): Env {
    //@ts-ignore
    return window.__buildTimeEnvVariables || {};
}
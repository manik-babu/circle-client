import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({

    // Server private environment variables
    server: {
        SERVER_URL: z.url(),
        APP_URL: z.url(),
    },
    // Client public environment variables
    // client: {}
    runtimeEnv: {
        SERVER_URL: process.env.SERVER_URL,
        APP_URL: process.env.APP_URL,
    }
});
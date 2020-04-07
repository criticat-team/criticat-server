declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'staging' | 'production' | 'test';
    DB_USER: string;
    DB_PASSWORD: string;
    MONGODB_SERVER: string;
    DB_NAME: string;
    INOREADER_APP_ID: string;
    INOREADER_APP_KEY: string;
    INOREADER_USER_ID: string;
    INOREADER_USER_AUTH: string;
    TMDB_API_KEY: string;
    OMDB_API_KEY: string;
    TWITCH_APP_ID: string;
    ENGINE_API_KEY: string;
    ENGINE_SCHEMA_TAG: 'development' | 'staging' | 'production';
    LANGUAGE: string;
  }
}

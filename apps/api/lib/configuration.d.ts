import type { Static } from '@feathersjs/typebox';
export declare const configurationSchema: import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
    authentication: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        secret: import("@feathersjs/typebox/lib").TString<string>;
        entity: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
        entityId: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
        service: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
        authStrategies: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
        parseStrategies: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>>;
        jwtOptions: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{}>>;
        jwt: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            header: import("@feathersjs/typebox/lib").TString<string>;
            schemes: import("@feathersjs/typebox/lib").TString<string>;
        }>>;
        local: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            usernameField: import("@feathersjs/typebox/lib").TString<string>;
            passwordField: import("@feathersjs/typebox/lib").TString<string>;
            hashSize: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TNumber>;
            errorMessage: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
            entityUsernameField: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
            entityPasswordField: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
        }>>;
        oauth: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            redirect: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
            origins: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>>;
            defaults: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
                key: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
                secret: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
            }>>;
        }>>;
    }>>;
    paginate: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        default: import("@feathersjs/typebox/lib").TNumber;
        max: import("@feathersjs/typebox/lib").TNumber;
    }>>;
    origins: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>>;
    mongodb: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TString<string>>;
    mysql: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        client: import("@feathersjs/typebox/lib").TString<string>;
        connection: import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TObject<{
            host: import("@feathersjs/typebox/lib").TString<string>;
            port: import("@feathersjs/typebox/lib").TNumber;
            user: import("@feathersjs/typebox/lib").TString<string>;
            password: import("@feathersjs/typebox/lib").TString<string>;
            database: import("@feathersjs/typebox/lib").TString<string>;
        }>>]>;
        pool: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            min: import("@feathersjs/typebox/lib").TNumber;
            max: import("@feathersjs/typebox/lib").TNumber;
        }>>;
    }>>;
    postgresql: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        client: import("@feathersjs/typebox/lib").TString<string>;
        connection: import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TObject<{
            host: import("@feathersjs/typebox/lib").TString<string>;
            port: import("@feathersjs/typebox/lib").TNumber;
            user: import("@feathersjs/typebox/lib").TString<string>;
            password: import("@feathersjs/typebox/lib").TString<string>;
            database: import("@feathersjs/typebox/lib").TString<string>;
        }>>]>;
        pool: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            min: import("@feathersjs/typebox/lib").TNumber;
            max: import("@feathersjs/typebox/lib").TNumber;
        }>>;
    }>>;
    sqlite: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        client: import("@feathersjs/typebox/lib").TString<string>;
        connection: import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TObject<{
            host: import("@feathersjs/typebox/lib").TString<string>;
            port: import("@feathersjs/typebox/lib").TNumber;
            user: import("@feathersjs/typebox/lib").TString<string>;
            password: import("@feathersjs/typebox/lib").TString<string>;
            database: import("@feathersjs/typebox/lib").TString<string>;
        }>>]>;
        pool: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            min: import("@feathersjs/typebox/lib").TNumber;
            max: import("@feathersjs/typebox/lib").TNumber;
        }>>;
    }>>;
    mssql: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        client: import("@feathersjs/typebox/lib").TString<string>;
        connection: import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TObject<{
            host: import("@feathersjs/typebox/lib").TString<string>;
            port: import("@feathersjs/typebox/lib").TNumber;
            user: import("@feathersjs/typebox/lib").TString<string>;
            password: import("@feathersjs/typebox/lib").TString<string>;
            database: import("@feathersjs/typebox/lib").TString<string>;
        }>>]>;
        pool: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            min: import("@feathersjs/typebox/lib").TNumber;
            max: import("@feathersjs/typebox/lib").TNumber;
        }>>;
    }>>;
}>, import("@feathersjs/typebox/lib").TObject<{
    host: import("@feathersjs/typebox/lib").TString<string>;
    port: import("@feathersjs/typebox/lib").TNumber;
    public: import("@feathersjs/typebox/lib").TString<string>;
}>]>;
export type ApplicationConfiguration = Static<typeof configurationSchema>;
export declare const configurationValidator: import("@feathersjs/schema/lib").Validator<any, any>;

import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const taskSchema: import("@feathersjs/typebox/lib").TObject<{
    id: import("@feathersjs/typebox/lib").TNumber;
    text: import("@feathersjs/typebox/lib").TString<string>;
}>;
export type Task = Static<typeof taskSchema>;
export declare const taskValidator: import("@feathersjs/schema/lib").Validator<any, any>;
export declare const taskResolver: import("@feathersjs/schema/lib").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const taskExternalResolver: import("@feathersjs/schema/lib").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const taskDataSchema: import("@feathersjs/typebox/lib").TPick<import("@feathersjs/typebox/lib").TObject<{
    id: import("@feathersjs/typebox/lib").TNumber;
    text: import("@feathersjs/typebox/lib").TString<string>;
}>, ["text"]>;
export type TaskData = Static<typeof taskDataSchema>;
export declare const taskDataValidator: import("@feathersjs/schema/lib").Validator<any, any>;
export declare const taskDataResolver: import("@feathersjs/schema/lib").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const taskPatchSchema: import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TObject<{
    id: import("@feathersjs/typebox/lib").TNumber;
    text: import("@feathersjs/typebox/lib").TString<string>;
}>>;
export type TaskPatch = Static<typeof taskPatchSchema>;
export declare const taskPatchValidator: import("@feathersjs/schema/lib").Validator<any, any>;
export declare const taskPatchResolver: import("@feathersjs/schema/lib").Resolver<{
    id: number;
    text: string;
}, HookContext<any>>;
export declare const taskQueryProperties: import("@feathersjs/typebox/lib").TPick<import("@feathersjs/typebox/lib").TObject<{
    id: import("@feathersjs/typebox/lib").TNumber;
    text: import("@feathersjs/typebox/lib").TString<string>;
}>, ["id", "text"]>;
export declare const taskQuerySchema: import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TObject<{
    $limit: import("@feathersjs/typebox/lib").TNumber;
    $skip: import("@feathersjs/typebox/lib").TNumber;
    $sort: import("@feathersjs/typebox/lib").TObject<{
        id: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TInteger>;
        text: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TInteger>;
    }>;
    $select: import("@feathersjs/typebox/lib").TUnsafe<("id" | "text")[]>;
    $and: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        id: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TNumber, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
            $gt: import("@feathersjs/typebox/lib").TNumber;
            $gte: import("@feathersjs/typebox/lib").TNumber;
            $lt: import("@feathersjs/typebox/lib").TNumber;
            $lte: import("@feathersjs/typebox/lib").TNumber;
            $ne: import("@feathersjs/typebox/lib").TNumber;
            $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
            $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
        }>, import("@feathersjs/typebox/lib").TObject<{
            [key: string]: import("@feathersjs/typebox/lib").TSchema;
        } | undefined>]>>]>>;
        text: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
            $gt: import("@feathersjs/typebox/lib").TString<string>;
            $gte: import("@feathersjs/typebox/lib").TString<string>;
            $lt: import("@feathersjs/typebox/lib").TString<string>;
            $lte: import("@feathersjs/typebox/lib").TString<string>;
            $ne: import("@feathersjs/typebox/lib").TString<string>;
            $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
            $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
        }>, import("@feathersjs/typebox/lib").TObject<{
            [key: string]: import("@feathersjs/typebox/lib").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@feathersjs/typebox/lib").TObject<{
        $or: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
            id: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TNumber, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
                $gt: import("@feathersjs/typebox/lib").TNumber;
                $gte: import("@feathersjs/typebox/lib").TNumber;
                $lt: import("@feathersjs/typebox/lib").TNumber;
                $lte: import("@feathersjs/typebox/lib").TNumber;
                $ne: import("@feathersjs/typebox/lib").TNumber;
                $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
                $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
            }>, import("@feathersjs/typebox/lib").TObject<{
                [key: string]: import("@feathersjs/typebox/lib").TSchema;
            } | undefined>]>>]>>;
            text: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
                $gt: import("@feathersjs/typebox/lib").TString<string>;
                $gte: import("@feathersjs/typebox/lib").TString<string>;
                $lt: import("@feathersjs/typebox/lib").TString<string>;
                $lte: import("@feathersjs/typebox/lib").TString<string>;
                $ne: import("@feathersjs/typebox/lib").TString<string>;
                $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
                $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
            }>, import("@feathersjs/typebox/lib").TObject<{
                [key: string]: import("@feathersjs/typebox/lib").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
        id: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TNumber, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
            $gt: import("@feathersjs/typebox/lib").TNumber;
            $gte: import("@feathersjs/typebox/lib").TNumber;
            $lt: import("@feathersjs/typebox/lib").TNumber;
            $lte: import("@feathersjs/typebox/lib").TNumber;
            $ne: import("@feathersjs/typebox/lib").TNumber;
            $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
            $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
        }>, import("@feathersjs/typebox/lib").TObject<{
            [key: string]: import("@feathersjs/typebox/lib").TSchema;
        } | undefined>]>>]>>;
        text: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
            $gt: import("@feathersjs/typebox/lib").TString<string>;
            $gte: import("@feathersjs/typebox/lib").TString<string>;
            $lt: import("@feathersjs/typebox/lib").TString<string>;
            $lte: import("@feathersjs/typebox/lib").TString<string>;
            $ne: import("@feathersjs/typebox/lib").TString<string>;
            $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
            $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
        }>, import("@feathersjs/typebox/lib").TObject<{
            [key: string]: import("@feathersjs/typebox/lib").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TObject<{
    id: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TNumber, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
        $gt: import("@feathersjs/typebox/lib").TNumber;
        $gte: import("@feathersjs/typebox/lib").TNumber;
        $lt: import("@feathersjs/typebox/lib").TNumber;
        $lte: import("@feathersjs/typebox/lib").TNumber;
        $ne: import("@feathersjs/typebox/lib").TNumber;
        $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
        $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TNumber>;
    }>, import("@feathersjs/typebox/lib").TObject<{
        [key: string]: import("@feathersjs/typebox/lib").TSchema;
    } | undefined>]>>]>>;
    text: import("@feathersjs/typebox/lib").TOptional<import("@feathersjs/typebox/lib").TUnion<[import("@feathersjs/typebox/lib").TString<string>, import("@feathersjs/typebox/lib").TPartial<import("@feathersjs/typebox/lib").TIntersect<[import("@feathersjs/typebox/lib").TObject<{
        $gt: import("@feathersjs/typebox/lib").TString<string>;
        $gte: import("@feathersjs/typebox/lib").TString<string>;
        $lt: import("@feathersjs/typebox/lib").TString<string>;
        $lte: import("@feathersjs/typebox/lib").TString<string>;
        $ne: import("@feathersjs/typebox/lib").TString<string>;
        $in: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
        $nin: import("@feathersjs/typebox/lib").TArray<import("@feathersjs/typebox/lib").TString<string>>;
    }>, import("@feathersjs/typebox/lib").TObject<{
        [key: string]: import("@feathersjs/typebox/lib").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@feathersjs/typebox/lib").TObject<{}>]>;
export type TaskQuery = Static<typeof taskQuerySchema>;
export declare const taskQueryValidator: import("@feathersjs/schema/lib").Validator<any, any>;
export declare const taskQueryResolver: import("@feathersjs/schema/lib").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        text?: number | undefined;
    };
    $select: ("id" | "text")[];
    $and: ({
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        text?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
    } | {
        $or: {
            id?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number[];
                $nin: number[];
            } & {}> | undefined;
            text?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string[];
                $nin: string[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number[];
            $nin: number[];
        } & {}> | undefined;
        text?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string[];
            $nin: string[];
        } & {}> | undefined;
    }[];
}> & {
    id?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number[];
        $nin: number[];
    } & {}> | undefined;
    text?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string[];
        $nin: string[];
    } & {}> | undefined;
} & {}, HookContext<any>>;

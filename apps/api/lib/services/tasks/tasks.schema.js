"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskQueryResolver = exports.taskQueryValidator = exports.taskQuerySchema = exports.taskQueryProperties = exports.taskPatchResolver = exports.taskPatchValidator = exports.taskPatchSchema = exports.taskDataResolver = exports.taskDataValidator = exports.taskDataSchema = exports.taskExternalResolver = exports.taskResolver = exports.taskValidator = exports.taskSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.taskSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String()
}, { $id: 'Task', additionalProperties: false });
exports.taskValidator = (0, typebox_1.getValidator)(exports.taskSchema, validators_1.dataValidator);
exports.taskResolver = (0, schema_1.resolve)({});
exports.taskExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.taskDataSchema = typebox_1.Type.Pick(exports.taskSchema, ['text'], {
    $id: 'TaskData'
});
exports.taskDataValidator = (0, typebox_1.getValidator)(exports.taskDataSchema, validators_1.dataValidator);
exports.taskDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.taskPatchSchema = typebox_1.Type.Partial(exports.taskSchema, {
    $id: 'TaskPatch'
});
exports.taskPatchValidator = (0, typebox_1.getValidator)(exports.taskPatchSchema, validators_1.dataValidator);
exports.taskPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.taskQueryProperties = typebox_1.Type.Pick(exports.taskSchema, ['id', 'text']);
exports.taskQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.taskQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.taskQueryValidator = (0, typebox_1.getValidator)(exports.taskQuerySchema, validators_1.queryValidator);
exports.taskQueryResolver = (0, schema_1.resolve)({});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const tasks_1 = require("./tasks/tasks");
const services = (app) => {
    app.configure(tasks_1.task);
    // All services will be registered here
};
exports.services = services;

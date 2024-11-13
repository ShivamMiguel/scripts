"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiraCourseModel = void 0;
const mongoose_1 = require("mongoose");
const mira_models_1 = require("./mira-models");
const courseMiraSchema = new mongoose_1.Schema({
    miraId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: mira_models_1.MiraModel,
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    purchased: {
        type: mongoose_1.Schema.Types.Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
exports.MiraCourseModel = (0, mongoose_1.model)("course_mira", courseMiraSchema);

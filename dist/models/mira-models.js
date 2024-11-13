"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiraModel = exports.MiraSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MiraSchema = new mongoose_1.Schema({
    gender: { type: String },
    biography: { type: String },
    applications: Number,
    location: { type: String },
    education: { type: String },
    profession: { type: String },
    openToWork: { type: Boolean },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Account",
    },
    skills: [
        {
            skill: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "skills",
                default: null,
            },
        },
    ],
    tools: [
        {
            tool: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "tools",
                default: null,
            },
        },
    ],
    languages: [
        {
            language: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "languages",
                default: null,
            },
        },
    ],
    companyInterests: [{ type: String }],
    dateOfBirth: { type: Date },
    shareable_sections: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});
exports.MiraModel = (0, mongoose_1.model)("mira", exports.MiraSchema);

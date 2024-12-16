"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamSchemaModel = void 0;
const mongoose_1 = require("mongoose");
const MemberSchema = new mongoose_1.Schema({
    role: { type: String, required: false },
    type: {
        type: String,
        enum: ["member", "leader"],
        default: "member",
        required: false,
    },
    score: { type: Number, required: false, default: 0 },
    status: {
        type: String,
        enum: ["accepted", "rejected", "pending"],
        default: "pending",
        required: false,
    },
});
const CoachSchema = new mongoose_1.Schema({
    score: { type: Number, required: false, default: 0 },
    status: {
        type: String,
        enum: ["accepted", "rejected", "pending"],
        default: "pending",
    },
});
const SponsorSchema = new mongoose_1.Schema({
    name: { type: String },
    amount: { type: Number },
});
const TeamSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, default: null },
    members: { type: [MemberSchema], required: false },
    coach: { type: CoachSchema, required: false, default: null },
    sponsor: { type: SponsorSchema, required: false, default: null },
    investor: { type: SponsorSchema, required: false, default: null },
    score: { type: Number, required: false, default: 0 },
    completedTasks: { type: Number, default: 0 },
    incompleteTasks: { type: Number, default: 0 },
    ranking: { type: Number, default: 0 },
    videoUrl: { type: String, default: null },
    imageUrl: { type: String, default: null },
    status: {
        type: String,
        enum: ["approved", "rejected", "pending", "disqualified"],
        default: "pending",
    },
    lastRanking: { type: Number, default: null },
    lastScore: { type: Number, default: 0 },
    feedback: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
});
exports.teamSchemaModel = (0, mongoose_1.model)("Team", TeamSchema);

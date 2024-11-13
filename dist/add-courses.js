"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mira_models_1 = require("./models/mira-models");
const course_mira_model_1 = require("./models/course-mira-model");
async function addCourses() {
    try {
        await mongoose_1.default.connect('');
        const miras = await mira_models_1.MiraModel.find({ job_fair_type: "gold" });
        await Promise.all(miras.map(async (mira) => {
            const miraCourse = await course_mira_model_1.MiraCourseModel.findOne({
                miraId: mira._id,
                courseId: "670193c5aebe82dc344124bb",
            });
            if (!miraCourse) {
                await course_mira_model_1.MiraCourseModel.create({
                    courseId: "670193c5aebe82dc344124bb",
                    miraId: mira._id,
                    purchased: true,
                });
            }
        }));
        console.log("Processamento concluído.");
    }
    catch (error) {
        console.error("Erro ao processar:", error);
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
addCourses();

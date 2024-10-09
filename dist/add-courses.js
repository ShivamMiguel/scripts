"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mira_models_1 = require("./models/mira-models");
async function addCourses() {
    try {
        await mongoose_1.default.connect("mongodb+srv://statement-admin:cu5xJBInZ2dCnVcU@cluster-st-trading.af1cq.mongodb.net/dev-mirantes-mira?retryWrites=true&w=majority");
        const miras = await mira_models_1.MiraModel.find({ job_fair_type: "gold" });
        console.log(miras);
        //     for (const mira of miras) {
        // // try {
        // //   await mira({
        // //     miraId: mira._id,
        // //     courseId: string;
        // //     purchased?: true
        // //   });
        // //   console.log(`Mira ID ${mira._id} foi atualizado.`);
        // // } catch (saveError: any) {
        // //   console.warn(`Erro ao salvar Mira ID ${mira._id}:`, saveError.message);
        // // }
        //     }
        console.log('Processamento concluído.');
    }
    catch (error) {
        console.error('Erro ao processar:', error);
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
addCourses();

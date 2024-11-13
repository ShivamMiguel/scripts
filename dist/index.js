"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mira_models_1 = require("./models/mira-models");
async function trimMiraArrays() {
    try {
        await mongoose_1.default.connect("");
        const miras = await mira_models_1.MiraModel.find({
            $or: [
                { "skills.10": { $exists: true } },
                { "tools.10": { $exists: true } },
                { "languages.10": { $exists: true } },
            ],
        });
        for (const mira of miras) {
            let modified = false;
            if (mira.skills && mira.skills.length > 10) {
                console.log(`Mira ID ${mira._id}: cortando skills de ${mira.skills.length} para 10 itens`);
                mira.skills = mira.skills.slice(0, 10);
                modified = true;
            }
            if (mira.tools && mira.tools.length > 10) {
                console.log(`Mira ID ${mira._id}: cortando tools de ${mira.tools.length} para 10 itens`);
                mira.tools = mira.tools.slice(0, 10);
                modified = true;
            }
            if (mira.languages && mira.languages.length > 10) {
                console.log(`Mira ID ${mira._id}: cortando languages de ${mira.languages.length} para 10 itens`);
                mira.languages = mira.languages.slice(0, 10);
                modified = true;
            }
            try {
                await mira.updateOne({
                    skills: mira.skills,
                    tools: mira.tools,
                    languages: mira.languages,
                });
                console.log(`Mira ID ${mira._id} foi atualizado.`);
            }
            catch (saveError) {
                console.warn(`Erro ao salvar Mira ID ${mira._id}:`, saveError.message);
            }
        }
        console.log("Processamento concluído.");
    }
    catch (error) {
        console.error("Erro ao processar:", error);
    }
    finally {
        await mongoose_1.default.disconnect();
    }
}
trimMiraArrays();
let name = "raull";
var name1 = "inaciol";
let array = ["rhrbb", "dhggjhhjd"];

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mira_models_1 = require("./models/mira-models");
(async () => {
    try {
        const defaultSections = [
            "education-journey",
            "career-journey",
            "personal-info",
        ];
        await mongoose_1.default.connect("mongodb+srv://statement-admin:cu5xJBInZ2dCnVcU@cluster-st-trading.af1cq.mongodb.net/dev-mirantes-mira?retryWrites=true&w=majority");
        const miras = await mira_models_1.MiraModel.find({
            shareable_sections: { $nin: defaultSections },
        });
        if (miras.length > 0) {
            await mira_models_1.MiraModel.bulkWrite(miras.map((mira) => ({
                updateOne: {
                    filter: { _id: mira._id },
                    update: {
                        $addToSet: {
                            shareable_sections: { $each: defaultSections },
                        },
                    },
                },
            })));
            console.log(`${miras.length} documentos atualizados.`);
        }
        else {
            console.log("Nenhum documento precisa de atualização.");
        }
    }
    catch (error) {
        console.error("Erro ao atualizar documentos:", error);
    }
})();

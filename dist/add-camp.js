"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mira_models_1 = require("./models/mira-models");
(async () => {
    try {
        const defaultSections = [
            "education-journey",
            "career-journey",
            "personal-info",
        ];
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

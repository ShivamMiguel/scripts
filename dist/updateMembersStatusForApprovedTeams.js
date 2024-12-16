"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const team_model_1 = require("./models/team.model");
async function updateMembersStatusForApprovedTeams() {
    try {
        await mongoose_1.default.connect("mongodb+srv://devmirantesuser:6AwN5T1OByexiQEu@cluster-st-trading.af1cq.mongodb.net/dev-mirantes-mira?retryWrites=true&w=majority");
        const approvedTeams = await team_model_1.teamSchemaModel.find({ status: "approved" });
        if (!approvedTeams.length) {
            console.log("Nenhuma equipe com status 'approved' foi encontrada.");
            return;
        }
        for (const team of approvedTeams) {
            if (team.members && team.members.length > 0) {
                const updatedMembers = team.members.map(member => {
                    if (member.status === "pending") {
                        return {
                            ...member,
                            status: "accepted",
                        };
                    }
                    return member;
                });
                team.members = updatedMembers;
                await team.save();
                console.log(`Status dos membros da equipe "${team.name}" atualizado.`);
            }
            else {
                console.log(`Equipe "${team.name}" não possui membros para atualizar.`);
            }
        }
        console.log("Atualização concluída para todas as equipes aprovadas.");
    }
    catch (error) {
        console.error("Erro ao atualizar o status dos membros:", error);
    }
}
updateMembersStatusForApprovedTeams();

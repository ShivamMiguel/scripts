import mongoose from "mongoose";
import { MemberProps, teamSchemaModel } from "./models/team.model";

async function updateMembersStatusForApprovedTeams(): Promise<void> {
  try {

      // await mongoose.connect(
      //     "mongodb+srv://devmirantesuser:6AwN5T1OByexiQEu@cluster-st-trading.af1cq.mongodb.net/dev-mirantes-mira?retryWrites=true&w=majority"
      //   );
  
    const approvedTeams = await teamSchemaModel.find({ status: "approved" });

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
            } as MemberProps;
          }
          return member;
        });

        team.members = updatedMembers as MemberProps[];
        await team.save();
        console.log(`Status dos membros da equipe "${team.name}" atualizado.`);
      } else {
        console.log(`Equipe "${team.name}" não possui membros para atualizar.`);
      }
    }

    console.log("Atualização concluída para todas as equipes aprovadas.");
  } catch (error) {
    console.error("Erro ao atualizar o status dos membros:", error);
  }
}

updateMembersStatusForApprovedTeams();

import mongoose from "mongoose";
import { MiraModel } from "./models/mira-models";

async function trimMiraArrays() {
  try {
    await mongoose.connect("");
    const miras = await MiraModel.find({
      $or: [
        { "skills.10": { $exists: true } },
        { "tools.10": { $exists: true } },
        { "languages.10": { $exists: true } },
      ],
    });

    for (const mira of miras) {
      let modified = false;
      if (mira.skills && mira.skills.length > 10) {
        console.log(
          `Mira ID ${mira._id}: cortando skills de ${mira.skills.length} para 10 itens`
        );
        mira.skills = mira.skills.slice(0, 10);
        modified = true;
      }
      if (mira.tools && mira.tools.length > 10) {
        console.log(
          `Mira ID ${mira._id}: cortando tools de ${mira.tools.length} para 10 itens`
        );
        mira.tools = mira.tools.slice(0, 10);
        modified = true;
      }
      if (mira.languages && mira.languages.length > 10) {
        console.log(
          `Mira ID ${mira._id}: cortando languages de ${mira.languages.length} para 10 itens`
        );
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
      } catch (saveError: any) {
        console.warn(`Erro ao salvar Mira ID ${mira._id}:`, saveError.message);
      }
    }

    console.log("Processamento concluído.");
  } catch (error) {
    console.error("Erro ao processar:", error);
  } finally {
    await mongoose.disconnect();
  }
}
trimMiraArrays();


let name: string = "raull"

var name1: string = "inaciol"

let array: string [] = ["rhrbb", "dhggjhhjd"]
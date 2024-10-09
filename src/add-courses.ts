import mongoose from 'mongoose';
import { MiraModel } from './models/mira-models';

async function addCourses() {
  try {
await mongoose.connect("")
    const miras = await MiraModel.find({job_fair_type: "gold"});

    for (const mira of miras) {
     
try {
  await mira.save({
    miraId: mira._id,
    courseId: string;
    purchased?: true
  });
  console.log(`Mira ID ${mira._id} foi atualizado.`);
} catch (saveError: any) {
  console.warn(`Erro ao salvar Mira ID ${mira._id}:`, saveError.message);
}
    }
    

    console.log('Processamento concluído.');
  } catch (error) {
    console.error('Erro ao processar:', error);
  } finally {
    await mongoose.disconnect();
  }
}
addCourses();
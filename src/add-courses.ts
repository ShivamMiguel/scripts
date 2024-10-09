import mongoose from "mongoose";
import { MiraModel } from "./models/mira-models";
import { MiraCourseModel } from "./models/course-mira-model";

async function addCourses() {
  try {
    await mongoose.connect('');
    const miras = await MiraModel.find({ job_fair_type: "gold" });

    await Promise.all(
      miras.map(async (mira) => {
        const miraCourse = await MiraCourseModel.findOne({
          miraId: mira._id,
          courseId: "670193c5aebe82dc344124bb",
        });

        if (!miraCourse) {
          await MiraCourseModel.create({
            courseId: "670193c5aebe82dc344124bb",
            miraId: mira._id,
            purchased: true,
          });
        }
      })
    );

    console.log("Processamento concluído.");
  } catch (error) {
    console.error("Erro ao processar:", error);
  } finally {
    await mongoose.disconnect();
  }
}
addCourses();

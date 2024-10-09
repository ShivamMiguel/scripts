import { model, Schema } from "mongoose";


export const MiraSchema = new Schema(
  {
    gender: { type: String },
    biography: { type: String },
    applications: Number,
    location: { type: String },
    education: { type: String },
    profession: { type: String },
    openToWork: { type: Boolean },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Account",
    },
    skills: [
      {
        skill: {
          type: Schema.Types.ObjectId,
          ref: "skilss",
          default: null,
        },
      },
    ],
    tools: [
      {
        tool: {
          type: Schema.Types.ObjectId,
          ref: "tools",
          default: null,
        },
      },
    ],
    languages: [
      {
        language: {
          type: Schema.Types.ObjectId,
          ref: "languages",
          default: null,
        },
      },
    ],
   
    companyInterests: [{ type: String }],

    dateOfBirth: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const MiraModel = model("mira", MiraSchema);
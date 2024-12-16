import { model, Schema } from "mongoose";

export interface CoachProps
  extends Partial<Pick<MemberProps, "profile" | "score" | "status">> {}

export interface MemberProps {
  profile?: string;
  role?: string;
  score?: number;
  type?: "member" | "leader";
  status?: "accepted" | "rejected" | "pending";
}

export interface SponsorProps {
  name?: string;
  amount?: number;
}

export interface InvestorProps extends SponsorProps {}

export type MemberSchemaProps = Required<Omit<MemberProps, "profile">> & {
  profile: Schema.Types.ObjectId;
};

export interface TeamProps {
  id: string;
  name: string;
  phone: string;
  email: string;
  description?: string;
  members?: MemberProps[];
  coach?: CoachProps;
  sponsor?: SponsorProps;
  investor?: InvestorProps;
  score?: number;
  completedTasks?: number;
  incompleteTasks?: number;
  ranking?: number;
  imageUrl?: string;
  videoUrl?: string;
  status?: "approved" | "rejected" | "pending" | "disqualified";
  feedback?: string;
  lastRanking?:number;
  lastScore?: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

const MemberSchema = new Schema<MemberSchemaProps>({
  role: { type: String, required: false },
  type: {
    type: String,
    enum: ["member", "leader"],
    default: "member",
    required: false,
  },
  score: { type: Number, required: false, default: 0 },
  status: {
    type: String,
    enum: ["accepted", "rejected", "pending"],
    default: "pending",
    required: false,
  },
});

type CoachSchemaProps = Required<Omit<CoachProps, "profile">> & {
  profile: Schema.Types.ObjectId;
};

const CoachSchema = new Schema<CoachSchemaProps>({
  score: { type: Number, required: false, default: 0 },
  status: {
    type: String,
    enum: ["accepted", "rejected", "pending"],
    default: "pending",
  },
});

const SponsorSchema = new Schema<SponsorProps>({
  name: { type: String },
  amount: { type: Number },
});

const TeamSchema = new Schema<TeamProps>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String, default: null },
  members: { type: [MemberSchema], required: false },
  coach: { type: CoachSchema, required: false, default: null },
  sponsor: { type: SponsorSchema, required: false, default: null },
  investor: { type: SponsorSchema, required: false, default: null },
  score: { type: Number, required: false, default: 0 },
  completedTasks: { type: Number, default: 0 },
  incompleteTasks: { type: Number, default: 0 },
  ranking: { type: Number, default: 0 },
  videoUrl: { type: String, default: null },
  imageUrl: { type: String, default: null },
  status: {
    type: String,
    enum: ["approved", "rejected", "pending", "disqualified"],
    default: "pending",
  },
  lastRanking: { type: Number, default: null },
  lastScore: { type: Number, default: 0 },
  feedback: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

export const teamSchemaModel = model("Team", TeamSchema);

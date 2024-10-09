import { Schema } from 'mongoose';
import { MiraModel } from './mira-models';

const courseMiraSchema = new Schema({
  miraId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: MiraModel,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  
  purchased: {
    type: Schema.Types.Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

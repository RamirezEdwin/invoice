import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';

const { Schema } = mongoose;
const { singularName, pluralName } = getModelName('invoice');

const schema = new Schema(
  {
    name: {
      type: String,
    },
    total: {
      type: String,
    },

    date: {
      type: Date,
    },
    DocumentType: {
      type: String,

    },
    status: {
      type: String,
      enum: ['Slope', 'overdue', 'paid out'],
      default: 'payable',
    },
  },
  {
    versionKey: false,
  }
);

// Ensure virtual fields are serialised.
schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(_doc, ret) {
    delete ret._id;
  },
});

// rename name Example to singular Model
export default mongoose.models[singularName]
 || mongoose.model(pluralName, schema);

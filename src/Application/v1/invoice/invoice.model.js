import mongoose from 'mongoose';
import getModelName from 'Utils/getModelName';

const { Schema } = mongoose;
const { singularName, pluralName } = getModelName('invoice');

const schema = new Schema(
  {
    name: {
      type: String,
    },
    amount: {
      type: String,
    },

    date: {
      type: Date,
      default: Date.now
    },
    idInvoice: {
      type: String,
    },
    typeDocument: {
      type: String,

    },
    status: {
      type: String,
      enum: ['pay', 'overdue', 'payable'],
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

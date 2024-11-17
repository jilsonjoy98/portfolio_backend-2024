import mongoose, { Schema, Document, Model } from "mongoose";

interface HomeModel extends Document {
  name: string;
  position: string;
  imageURL: string;
}
export type HomeModelDocument = HomeModel & Document;

const homeSchema: Schema<HomeModel> = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  imageURL: { type: String, required: true },
});

export default mongoose.model<HomeModelDocument>("Home", homeSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    // _id: mongoose.Types.ObjectId,
    title: {
      type: String,
      required: [true, "Enter the title"],
    },
    url: {
      type: String,
      required: [true, "Enter the url"],
    },
    description: {
      type: String,
      required: [true, "Enter the description"],
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Post", PostSchema);

const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
      enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Note = model("Note", noteSchema);
module.exports = { Note };

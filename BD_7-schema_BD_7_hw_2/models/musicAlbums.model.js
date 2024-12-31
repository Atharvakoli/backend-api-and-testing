const { Schema, model } = require("mongoose");

const musicAlbumsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: String,
    },
    genre: {
      type: String,
      enum: [
        "Rock",
        "Pop",
        "Hip-Hop",
        "Jazz",
        "Classical",
        "Country",
        "Electronic",
        "R&B",
        "Reggae",
        "Indie",
      ],
    },
    releaseYear: {
      type: Number,
    },
    recordLabel: String,
    format: String,
    isExplicit: {
      type: Boolean,
      default: false,
    },
    isAvailableOnStreaming: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const MusicAlbums = model("MusicAlbums", musicAlbumsSchema);

module.exports = { musicAlbumsSchema };

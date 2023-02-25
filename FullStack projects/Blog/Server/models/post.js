const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      maxLength: [2000, "max 2000 characters"],
      minLength: [10, "at least 10 characters"],
      required: true,
    },
    image: { type: String, default: "no-photo.jpg" },
    likes: {
      type: Number,
      default: 0,
    },
    intrested: {
      type: Number,
      default: 0,
    },
    publishDate: { type: Date, default: Date.now },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

postSchema.virtual("user", {
  ref: "users",
  localField: "owner",
  foreignField: "_id",
  justOne: true,
});

postSchema.virtual("comments", {
  ref: "comments",
  localField: "_id",
  foreignField: "post",
  justOne: false,
});

postSchema.pre("remove", async function (next) {
  await this.model("comments").deleteMany({ post: this._id });
  next();
});

bgPhoto = [
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677322857/Blog/images_fz7ios.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677322858/Blog/images_vodmkg.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677322858/Blog/ncw899dkr3hecupecths.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677322859/Blog/xuhgejn72myj88y3uwjq.png",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677322860/Blog/nl8sgaptgxwj04jkrhto.jpg",
  "https://res.cloudinary.com/dalheltnm/image/upload/v1677322861/Blog/tscgzpiundco6zqrosn5.png",
];

postSchema.methods.bgImageGenerator = async function (image) {
  if (!image) {
    randomPicture = bgPhoto[Math.floor(Math.random() * bgPhoto.length)];
    this.image = randomPicture;
  }

  return this.image;
};

const Post = mongoose.model("posts", postSchema);

module.exports = Post;

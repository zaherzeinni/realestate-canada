import mongoose from "mongoose";
import User from "./user";
import Category from "./category";

const schema = new mongoose.Schema(
  {
    propertyId: {
      type: String,
      required: [true, "Please Enter Property ID"],
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    titlefr: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },

    story: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },

    storyfr: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },

    image: { type: [String], default: [] },
    sizes: { type: [String], default: [] },
    featuresPlus: { type: [], default: [] },
    author: String,

    // addBy: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

schema.virtual("id").get(function () {
  return this._id;
});

schema.statics.paginate = async function ({
  limit = 9,
  page = 1,
  sort = -1,
  where = {},
}) {
  const skip = limit * (page - 1);
  const books = await this.find({ ...where })
    .limit(limit)
    .skip(skip)
    .sort({ createdAt: sort })
    // .populate({
    //   path: "category",
    //   select: "name nametr",
    //   model: Category,
    // })
    .exec();

  const pages = Math.ceil((await this.count({ ...where }).exec()) / limit);
  const total = await this.count({}).exec();
  return {
    books,
    pages,
    total,
  };
};

schema.set("toJSON", {
  virtuals: true,
});

export default mongoose.models.Blog || mongoose.model("Blog", schema);

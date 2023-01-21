const postModel = require("../models/postModel");
const asyncHandler = require("../middleWare/asyncHandler");

exports.getTags = asyncHandler(async (req, res, next) => {
  const mapedTag = [];

  const tags = await postModel.find({});

  tags.map((el) => {
    if (el.tags.length !== 0) {
      return mapedTag.push(el.tags);
    }
  });

  res.status(200).json({
    isDone: true,
    data: mapedTag,
    message: "amjilttai bvh tag vvdiin medeeleliig avlaa",
  });
});

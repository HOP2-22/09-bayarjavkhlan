const tagModel = require("../models/tagModel");

exports.getTags = async (req, res, next) => {
  try {
    const tags = await tagModel.find();

    res.status(200).json({
      isDone: true,
      data: tags,
      message: "amjilttai bvh tag vvdiin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

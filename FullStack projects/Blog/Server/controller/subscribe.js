const asyncHandler = require("../middleWare/asyncHandler");
const Subscribe = require("../models/subscribe");

exports.getSubscribes = asyncHandler(async (req, res, next) => {
  const subscribe = await Subscribe.find({});

  res.status(200).json({
    success: true,
    data: subscribe,
    message: "Get all subscribes information",
  });
});

exports.createSubscribe = asyncHandler(async (req, res, next) => {
  const subscribe = await Subscribe.create(req.body);

  res.status(200).json({
    success: true,
    data: subscribe,
    message: "Subscribe successfully",
  });
});

exports.deleteSubscribe = asyncHandler(async (req, res, next) => {
  const { id } = req.body;

  const subscribe = await Subscribe.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    data: subscribe,
    message: "Subscribe deleted",
  });
});

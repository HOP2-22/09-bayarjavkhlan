const todo = require("../models/todoModel");

exports.getLists = async (req, res) => {
  try {
    const lists = await todo.find();
    res.status(200).json({
      isDone: true,
      allData: lists,
      message: "amjilttai medeelelvvdiig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.getList = async (req, res) => {
  try {
    const list = await todo.findById(req.params.id);

    if (!list) {
      return res.status(404).json({
        isDone: false,
        error: `iim ${req.params.id}-tai data alga bn id gaa `,
      });
    }
    res.status(200).json({
      isDone: true,
      data: list,
      message: "amjilttai medeelel avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.createList = async (req, res) => {
  try {
    const newList = await todo.create(req.body);

    res.status(200).json({
      isDone: true,
      createdData: newList,
      message: "amjilttai data vvsgelee",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.updateList = async (req, res) => {
  try {
    const updatedList = await todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedList) {
      res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai data alga bn id gaa `,
      });
    }

    res.status(200).json({
      isDone: true,
      uptadedData: updatedList,
      message: "amjilttai data oorchilloo",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const deletedList = await todo.findByIdAndDelete(req.params.id);

    if (!deletedList) {
      return res.status(404).json({
        success: false,
        error: `iim ${req.params.id}-tai data alga bn id gaa `,
      });
    }

    res.status(200).json({
      isDone: true,
      deletedData: deletedList,
      message: "amjilttai data ustaglaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

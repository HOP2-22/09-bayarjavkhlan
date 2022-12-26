const postModel = require("../models/postModel");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await postModel.find();

    res.status(200).json({
      isDone: true,
      data: posts,
      message: "amjilttai bvh post iin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

// exports.getPostsByUser = async (req, res, next) => {
//   try {
//     const postsById = await postModel.findById(req.params.id);

//     if (!postsById) {
//       return res.status(404).json({
//         isDone: false,
//         message: `iim ${req.params.id}-tai user alga`,
//       });
//     }

//     res.status(200).json({
//       isDone: true,
//       data: postsById,
//       message: "amjilttai user iin bvh postiig avlaa",
//     });
//   } catch (err) {
//     res.status(404).json({
//       isDone: false,
//       error: err,
//     });
//   }
// };

// exports.getPostsByTag = async (req, res, next) => {
//   try {
//     const postsByTag = await postModel.findById(req.params.id);

//     if (!postsByTag) {
//       return res.status(404).json({
//         isDone: false,
//         message: `iim ${req.params.id}-tai tag alga`,
//       });
//     }

//     res.status(200).json({
//       isDone: true,
//       data: postsByTag,
//       message: "amjilttai tag iin bvh postiig avlaa",
//     });
//   } catch (err) {
//     res.status(404).json({
//       isDone: false,
//       error: err,
//     });
//   }
// };

exports.getPostById = async (req, res, next) => {
  try {
    const postsById = await postModel.findById(req.params.id);

    if (!postsById) {
      return res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai post alga`,
      });
    }

    res.status(200).json({
      isDone: true,
      data: postsById,
      message: "amjilttai postiin medeeleliig avlaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const createdPost = await postModel.create(req.body);

    res.status(200).json({
      isDone: true,
      data: createdPost,
      message: "amjilttai post vvsgellee",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const updatedPosted = await postModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
      }
    );

    if (!updatedPosted) {
      return res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai post alga`,
      });
    }

    res.status(200).json({
      isDone: true,
      data: updatedPosted,
      message: "amjilttai postiin medeeliig oorchilloo",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deletedPost = await postModel.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        isDone: false,
        message: `iim ${req.params.id}-tai post alga`,
      });
    }

    res.status(200).json({
      isDone: true,
      data: deletedPost,
      message: "amjilttai post ustaglaa",
    });
  } catch (err) {
    res.status(404).json({
      isDone: false,
      error: err,
    });
  }
};

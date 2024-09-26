const Content = require("../models/Content");
const asyncHandler = require("express-async-handler");
const getAllContents = asyncHandler(async (req, res) => {
  const getcontents = await Content.find().sort({ createdAt: -1 });
  res.status(200).json(getcontents);
});

const postContent = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = await Content.create({
      title,
      body,
    });

    res.status(200).json({
      message: "Post successful",
      newPost,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to create",
      error,
    });
  }
});
const getSingleContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const gozie = await Content.findById(id);
    if (!gozie) {
      res.status(600).json({
        message: "Id not found",
      });
    }
    res.status(200).json({
      message: "Successful",
      gozie,
    });
  } catch (error) {
    res.status(404).json({
      message: "Ishi okpushirigi?",
      error,
    });
  }
});

module.exports = {
  getAllContents,
  postContent,
  getSingleContent,
};

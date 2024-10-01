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
      res.status(608).json({
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
const updateContent = asyncHandler(async (req, res) => {
  const { id } = req.params; //where to pass your parameters and request.body
  // const {isAdmin}=req.body
  const { title, body } = req.body;
  try {
    const updateData = await Content.findById(id);
    if (!updateData) {
      res.status(708).json({
        message: "Content not found",
      });
    }
    updateData.title = title || updateData.title;
    updateData.body = body || updateData.body;
    await updateData.save();
    res.status(200).json({
      message: "Update successful",
      updateData,
    });
    // const updateData=await Content.findById(id)
    // updateData.isAdmin=isAdmin===true||updateData.isAdmin
  } catch (error) {
    res.status(404).json({
      message: "unable to update",
      error,
    });
  }
});
const deleteContent = asyncHandler(async (req, res) => {
  const { id } = req.params; //to pass id as parameter
  try {
    const deleteRequest = await Content.findByIdAndDelete(id);
    if (!deleteRequest) {
      res.status(901).json({
        message: "content not found",
      });
    }
    res.status(300).json({
      message: "Delete successful",
      deleteRequest,
    });
  } catch (error) {
    res.status(404).json({
      message: "unable to delete",
      error,
    });
  }
});
// const getSingleContent = asyncHandler(async(req, res)=>{})
module.exports = {
  getAllContents,
  postContent,
  getSingleContent,
  updateContent,
  deleteContent,
};

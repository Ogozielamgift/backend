const express = require("express");
const {
  getAllContents,
  postContent,
  getSingleContent,
  updateContent,
  deleteContent,
} = require("../controllers/Content");
const router = express.Router();
router.get("/", getAllContents);
router.post("/", postContent);
router.get("/:id", getSingleContent);
router.put("/:id", updateContent);
router.delete("/:id", deleteContent);
module.exports = router;

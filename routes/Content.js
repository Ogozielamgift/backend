const express = require("express");
const {
  getAllContents,
  postContent,
  getSingleContent,
} = require("../controllers/Content");
const router = express.Router();
router.get("/", getAllContents);
router.post("/", postContent);
router.get("/:id", getSingleContent);
module.exports = router;

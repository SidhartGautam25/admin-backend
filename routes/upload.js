import express from "express";
import { createBlog, createReport } from "../controllers/upload.js";
import { verifyUser } from "../utils/verifyTokens.js";
import { cReport, editReport } from "../controllers/updatedReport.js";

const router = express.Router();

router.post("/uploadreport", createReport);
router.post("/uploadblog", createBlog);
router.post("/ureport", cReport);
router.put("/ureport", editReport);

export default router;

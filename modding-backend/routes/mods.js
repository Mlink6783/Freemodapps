const express = require("express");
const router = express.Router();
const Mod = require("../models/Mod");

// Get all mods
router.get("/", async (req, res) => {
  const mods = await Mod.find().sort({ createdAt: -1 });
  res.json(mods);
});

// Get single mod
router.get("/:id", async (req, res) => {
  try {
    const mod = await Mod.findById(req.params.id);
    res.json(mod);
  } catch (error) {
    res.status(404).json({ error: "Mod not found" });
  }
});

// Add new mod
router.post("/", async (req, res) => {
  try {
    const mod = new Mod(req.body);
    await mod.save();
    res.status(201).json(mod);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
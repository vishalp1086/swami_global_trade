const express = require("express")

const {
  getMaster,
  createMaster,
  deleteMaster
} = require("../controllers/masterController")

const router = express.Router()

router.get("/:type", getMaster)
router.post("/:type", createMaster)
router.delete("/:type/:id", deleteMaster)

module.exports = router
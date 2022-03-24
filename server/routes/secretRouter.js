const express = require("express");
const router = express.Router();
const secretController = require("../controllers/secretController");

router.get("/:hash", secretController.getSecretByHash);
router.post("/", secretController.addSecrets);

module.exports = router;
const Secret = require("../models/secretModel");
const { encrypt, decrypt } = require("../utils/crypt");
const mySecret = "mySecret";

exports.getSecretByHash = async (req, res, next) => {
  try {
    const hash = req.params.hash;
    const secret = await Secret.findOne({ hash }).exec();
    if (!secret) {
      return res.status(404).send({
        message: "Secret not found",
      });
    }
    const secretText = decrypt(secret.secretText, mySecret);
    console.log(secretText);

    res.status(200).json(secretText);
  } catch (err) {
    next(err);
  }
};

exports.addSecrets = async (req, res, next) => {
  try {
    const secretText = req.body.secretText;
    const expiresAfter = parseInt(req.body.expiresAfter);
    console.log(expiresAfter);
    if (!secretText || isNaN(expiresAfter) || expiresAfter < 0) {
      return res.status(400).send({
        message:
          "Please provide secretText as text and expiresAfter as numbers",
      });
    }
    let time = new Date();
    time.setSeconds(time.getSeconds() + expiresAfter);
    const secret = new Secret({
      secretText: encrypt(secretText, mySecret),
      expiresAt: expiresAfter === 0 ? null : time,
    });
    await secret.save();
    res.status(201).json(secret.hash);
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
    next(err);
  }
};

exports.getAllSecrets = async (req, res) => {
  try {
    const secrets = await Secret.find({});
    const hashes = secrets.map((secret) => secret.hash);
    res.status(200).json(hashes);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Bad request" });
  }
};

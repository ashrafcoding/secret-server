const crypto = require("crypto-js");

exports.encrypt = (text, secret) => {
  return crypto.AES.encrypt(text, secret).toString();
};

exports.decrypt = (text, secret) => {
  const bytes = crypto.AES.decrypt(text, secret);
  return bytes.toString(crypto.enc.Utf8);
};

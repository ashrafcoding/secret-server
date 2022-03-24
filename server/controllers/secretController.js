const Secret = require("../models/secretModel");

exports.getSecretByHash = async (req, res) => {
    try{ 
        const hash = req.params.hash;
        const secret = await Secret.find({hash});
        res.status(200).json(secret[0]);
    }
    catch(err){
        res.status(404).json({message: "Secret not found"});
    }
};

exports.addSecrets = async (req, res) => {
    try{
        const secretText= req.body.secretText;
        const expiresAfter = parseInt(req.body.expiresAfter) ;
        if(!secretText || !expiresAfter){
            res.status(400).json({message: "Please provide secretText and expiresAfter"});
        }
        let time = new Date();
        time.setSeconds(time.getSeconds() + expiresAfter);
        const secret = new Secret({
            secretText,
            expiresAt: time,
        });
        await secret.save();
        res.status(201).json(secret);
    }
    catch(err){
        res.status(400).json({message: "Bad request"});
    }
}
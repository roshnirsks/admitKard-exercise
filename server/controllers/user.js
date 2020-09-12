const User = require("../models/user");

exports.sendOtp = (req, res, next) => {
    let otp = 1234;
    let countryCode = req.body.code;
    const filter = { phone: req.body.phone };
    console.log(req.body)
    const update = {
        otp: otp,
        code: countryCode
    };
    User
        .updateOne(filter, update, {
            new: true,
            upsert: true
        })
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: "User created!",
                otp: otp,
                result: result,
            });
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).json({
                message: "Something went wrong!",
                error: err.message
            });
        });
}
exports.verifyOtp = (req, res, next) => {
    const filter = { phone: parseInt(req.body.phone) };
    User.findOne(filter)
        .then(phone => {
            if (!phone) {
                return res.status(401).json({
                    message: "Otp verification failed!",
                    verified: false
                });
            }
            return parseInt(req.body.otp) === phone.otp ? true : false;
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Otp verification failed!",
                    verified: false
                });
            }
            res.status(200).json({
                message: "Otp verification successful!",
                verified: true
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid otp!",
                verified: false
            });
        });
}
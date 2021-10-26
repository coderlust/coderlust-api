const sendEmail = require("../helpers/Email");
const Subscriber = require("../models/subscribers");

exports.sendemail = (req, res) => {
    const { subject, text, html } = req.body
    const to = req.emails
    sendEmail(
        to,
        subject,
        text,
        html
    ).then((data) => {
        return res.json({
            data
        });
    }).catch((error) => {
        return res.status(400).json({
            error: error.message
        });
    })
}

exports.addemail = (req, res) => {
    const subscriber = new Subscriber(req.body)
    subscriber.save((error, subscriber) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        return res.json({
            subscriber
        });
    })
}

exports.listemails = (req, res, next) => {
    Subscriber.find((error, users) => {
        if (error) {
            return res.status(400).json({
                error
            });
        }
        const emails = users.map(user => {
            return user.email
        });
        req.emails = emails.toString();
        next();
    })
}
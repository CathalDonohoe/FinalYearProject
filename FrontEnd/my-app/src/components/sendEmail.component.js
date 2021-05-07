const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(4949, () => console.log("Server Running"));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "barter4tradenc@gmail.com",
        pass: "Nathan&Cathal4",
    },
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/send", (req, res) => {
    const name = req.body.name;
    const item = req.body.item;
    const email = req.body.email;
    const message = req.body.message;
    const sendersEmail = req.body.sendersEmail;
    console.log(name, item, email)
    const templateMsg =
        `<p><b>${name}</b> wants to contact you about your item:</p>
    <h5><b>${item}</b></h5>
    <p>They said: </p>
    <h5><b>${message}</b></h5>
    <p>Contact <b>${name}</b> by email address: </p>
    <h5><b>${sendersEmail}</b></h5>
    `
    
    const mail = {
        from: name,
        to: email,
        subject: "Interest in your item",
        html: templateMsg
    };

    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});
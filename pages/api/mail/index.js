import dbConnect from "../../../util/mongo";
import Mail from "../../../models/Mail";


const handler = async(req, res) => {
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    const {method} = req;

    dbConnect()

    const contactEmail =  await nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "DeMobieleSlager43@gmail.com",
            pass: process.env.GOOGLE_SEC,
        },
    });

    contactEmail.verify((error) => {
        if (error) {
            console.log("this error==>", error);
        } else {
            console.log("Ready to Send");
        }

    });
    if(method==="GET"){
        try{
            const messages = await Mail.find();
            res.status(200).json(messages)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method==="POST"){

        const {firstName, lastName, email, phone, subject, message} = req.body
        const mail = {
            from: firstName, lastName,
            to: "chrismcnabb6691@gmail.com",
            subject: subject,
            html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Telefoon: ${phone}</p>
           <p>Message: ${message}</p>`,
        };
        const newMessage = new Mail(req.body);
        try{

            await contactEmail.sendMail(mail);
            await newMessage.save()
            res.status(200).json({ status: "Message Sent" });
        }catch(error){
            res.status(500).json({ status: "ERROR" });
        }
    }
}
export default handler;

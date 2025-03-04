import nodemailer from "nodemailer"

const mailSender = async (fromemail = ' -  <example@gmail.com>', toemail, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from: fromemail,
            to: toemail,
            subject: title,
            html: body,
        })

        console.log("Email info", info);

        return info;

    } catch (error) {
        console.log(error.message)
    }
}

export default mailSender
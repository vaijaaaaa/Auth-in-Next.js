import nodemailer from 'nodemailer';
import User from "@/models/userModel"
import bcryptsjs from 'bcryptjs'

export const sendEmail =  async({email,emailtype,userId}:any) =>{
    try {
        const hasedtoken = await bcryptsjs.hash(userId.toString(),10)

        if(emailtype === "VERIFY"){
            await User.findByIdAndUpdate(userId,{verifyToken:hasedtoken,
                verifyTokenExpiry:Date.now()+ 3600000
            })
        }else if(emailtype === "RESET"){
            await User.findByIdAndUpdate(userId,{forgotPasswordToken:hasedtoken,
                forgotPasswordTokenExpiry:Date.now() + 3600000
            })
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
          var transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                user: "a049c7e68b5bc2",
                pass: "de3b80ba23caab"
                }
            });

            const mailOptions = {
                from: "vaijuwalker111@gmail.com",
                to:email,
                subject:emailtype === "VERIFY" ? "Verify your email" : "Reset your password",
                html:`<p> Click <a href="${process.env.domain}/verifyemail?token-${hasedtoken}">here</a> to $
                {emailType === "VERIFY"? "verify your your email":"reset your password"} or copy and paste the link below in your browser.<br> ${process.env.DOMAIN}/verifyemail?token=${hasedtoken}</p>`
            }

            const  mailresponse = await transport.sendMail(mailOptions);
            return mailresponse;


    } catch (error) {
        
    }
}



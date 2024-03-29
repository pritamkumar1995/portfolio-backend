const router = require("express").Router();
const nodeMailer = require("nodemailer");




router.post("/contact", (req, res, next) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the fields" });
  }
  let smtpTransporter = nodeMailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: 'prituraj9774@gmail.com',
      pass: 'mmqc trgk rfmy ndsu',
    },
  });
  let mailOptions = {
    from: data.email,
    to: "prituraj9774@gmail.com",
    subject: `message from ${data.name}`,
    html: `
         <h3>Information</h3>
         <ul>
         <li>Name : ${data.name}</li>
         <li>Email: ${data.email}</li>
         </ul>
         <h3>Message</h3>
         <p>${data.message}</p>
        `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error){
        console.log("error",error);
        return res.status(400).json({ msg: "Please fill all the fields" });
      }
      res.status(200).json({ msg: "Thank you for contacting Pritam ! Good Day" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is some server error" });
    }
  });
});
router.get('/',(req,res)=>{
    console.log('hi');
    res.send('<h1>Hello</h1>');
})

module.exports = router;

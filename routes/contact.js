var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {myownTitle:'contact'}); // The Jadefile
});


router.post('/send',function(req,res,next){
  // user info 
  var name = req.body.name;
  var email = req.body.Email;
  var message = req.body.message;

  var transporter= nodemailer.createTransport(
    {
      service : 'gmail',
      auth:{
        user:'Email@gmail.com',
        pass:'Password'
      }
    }
    );

  var mailoptions = {
    from:'Khaskia <mohamedkhaskia@gmail.com>',
    to  :'mohamedalik88@gmail.com',
    subject:'website submission',
    text:'you have a new submission : \nName '+name +'\nemail '+
          email+'\nMessage '+message,
    html:'<h1>New Submission With This details </h1> <h4>'+name +'\nemail'+
          email+'\nMessage '+message+'</h4>'
          
  };

  transporter.sendMail(mailoptions,function(error,info){
    if(error){
      console.log(error);
      res.redirect('/');
    }else{
      console.log('Message Sent'+info.response);
      res.redirect('/');
    }
  })



});

module.exports = router;
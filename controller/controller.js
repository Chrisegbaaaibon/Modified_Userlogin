const bodyparser = require('body-parser');
const schema = require('../validation/validate')
const bcrypt = require('bcrypt');


 exports.signUp = async (req, res, next)=>{
    const someone ={
      firstName, lastName, userName, email, password, confirm_password, role
   } = req.body
   
   try {
      // validation
      const validated = schema(someone.username,someone.firstName,someone.lastName,someone.email,someone.password,someone.role,someone.confirm_password)
      console.log(validated)
      const user = User({someone})
      // hashing password -- Bcrypt
      const salt = await bcrypt.genSalt(10);
      hashPwd = await bcrypt.hash(hashPwd, salt)
      if(!someone){
         res.render('signup.ejs', 
         {message: {
            error: 'All fields are required!'
         }}
         )
      }
      if(someone.password !== someone.confirm_password){
         return res.render('signup.ejs', {message: {error: 'Passwords do not match!'}})
      }
      let userEmail = User.findOne({email: someone.email})
      if(userEmail){
         return res.render('signup.ejs', {message: {error: 'Email already exists'}})
      }
      user = new User({...someone, password: hasPwd(somene.password)})
      await user.save();
      // save user to session
      req.session.userId = user._id;
      res.redirect('/data')
   } catch (error) {
      console.log(error.message)
      res.render('signup.ejs', {
         error:{
            message: error.message
         }
      })
   }
   console.log(req.body);
  return res.redirect('/data')
   next();
};


exports.login = async(req, res, next) =>{
   console.log('should work')
   User.findOne({email:req.body.email}, (err, data)=>{
      try {
         if(data){
            const verifyPwd =  bcrypt.compare(somene.password, hashPwd)
            if(verifyPwd(data.password = req.body.password)){
               req.session.userId = data._id
               return res.redirect('/data')
            }else{
               res.render('login.ejs', {message:{error:"Wrong password!"}})
            }
         }else{
            res.render('login.ejs', {message:{error:"Email is registered!"}})
         }
      } catch (error) {
         console.log(err)
      }
   })
   next();
}



const Joi = require('joi')

const schema = Joi.object(someone = {
   firstName: Joi.string()
      .min(2)
      .max(30)
      .required(),
   lastName: Joi.string()
      .min(2)
      .max(30)
      .required(),
   userName: Joi.string()
      .min(3)
      .max(30)
      .alphanum()
      .required(),
   email: Joi.string()
      .email({ minDomainSegments: 2, tlds:{alllow: ['com', 'net', 'io', 'au']}})
      .required(),
   password: Joi.string()
      .pattern( new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required(),
   confirm_password: Joi.ref('password'),
   role:Joi.string()
      .valid('admin', 'user')
      .required(),
})
.with('password', 'confirm_password');

const validateUser = (someone)=>{
   const data ={
      someone
   }
   const {error, value}= schema.validate(someone);
   if (error) {
   throw new Error(error);      
   }
   return value
};

module.exports = schema;
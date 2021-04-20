const mongoose=require('mongoose');
const productSchema= mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
    // validate(value){}
  },
  category:{
    type:String,
    required:true,
    unique:false,
    // validate(value){}
  },
  isActive:{
    type: Boolean,
    required: true,
    unique: false,
    default : true
  },
  details:{
    required:true,
    description:{
      type:String,
      required:true,
      unique:false,
      validate(value){
        const checkValue= value.join(' ');
        if(checkValue.length<10){
          throw new Error('Description must be longer than 10 letters!');
        }else {
          return value;
        };
      }
    },
    price:{
      type:Number,
      required:true,
      unique:false,
      validate(value){
        if (value <=0){
          throw new Error('Inavlid price!');
        }else {
          return value;
        };
      }
    },
    discount:{
      type:Number,
      required:false,
      unique:false,
      default:0
      // validate(value){}
    },
    images:{
      type:Array,
      required:true,
      unique:false,
      validate(value){
        if (value.length<2){
          throw new Error('You must upload at least 2 photos of the product');
        }else return value;
      }
    },
    phone:{
      type:String,
      required:true,
      unique:false,
      minLength:10
      // validate(value){}
    },
    date:{
      type:Date,
      required:false,
      unique:false,
      default:Date.now()
    },

  },
});
const productModel=mongoose.model('product',productSchema);
module.exports=productModel

import jwt from "jsonwebtoken"

const userAuth = async(req,res,next)=>{
    const {token} = req.headers;

    if(!token){
       return  res.json({success:false , message : "Not authorize user login again"});
    }

    try {
        let tokenDecode = jwt.verify(token,process.env.SECRET);
        if(tokenDecode.id){
            req.user = tokenDecode;
        }else{
            return res.json({success:false , message:" Not Authorized login again "})
        }
        //  console.log("Autorization is done");
        next();
    } catch (error) {
        // console.log("Error occure in the Auth.js") 
        res.json({success:false , message:error.message});
    }
}

export default userAuth;
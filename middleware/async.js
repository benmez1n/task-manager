const asyncWrapper = (fctn)=>{
    return async(req,res,next) => {
        try{
            await fctn(req,res,next)
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = asyncWrapper
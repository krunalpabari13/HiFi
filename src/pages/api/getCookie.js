import jwt from'jsonwebtoken'
export default async function getCookie(req,res)
{
    const cookies=req.headers.cookie;
   
    if(cookies)
    {
        const cookie=cookies.split(';');
        
        let jwtCookie;
        for(const c in cookie)
        { 
            const[name,value]=cookie[c].trim().split('=');
            console.log(name)
            if(name=='jwt'){
                jwtCookie=value;
                break;
            }
        }
    if(jwtCookie){
        
        
    await jwt.verify(jwtCookie,"mychatapplication",(err,done)=>{
        if(done)
        {
            res.status(200).json({currentUser:done})
        }
        else if (err)
        {
            res.status(500).json({error:'some internal server error'})
        }


    })}
    else{

        res.status(200).json({message:'Please Register or Login'})
    }
    res.end();
}
}
import { serialize } from "cookie";
export default function logout(req,res){
    const hostname=req.headers.host;
const serailizeCookie=    serialize('jwt',null,{
        httpOnly:true,
        secure:true,
        expires:new Date(0),
        domain:hostname,
        path:'/'
    })
    res.setHeader('Set-Cookie',serailizeCookie);
    res.status(200).json({success:'Logout Successfully'})
}
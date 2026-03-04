import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Mail, Lock, UserPlus } from "lucide-react"

function Register(){

const navigate = useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [message,setMessage]=useState("")

const getStrength = ()=>{

if(password.length > 10) return "Strong"
if(password.length > 6) return "Medium"
if(password.length > 0) return "Weak"
return ""

}

const handleRegister = async (e: React.FormEvent) => {

e.preventDefault()

setMessage("")

try{

const res = await fetch("http://localhost:5000/register",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email,password})

})

const data = await res.json()

if(data.success){

setMessage("Account created!")

setTimeout(()=>navigate("/"),1500)

}else{

setMessage(data.message)

}

}catch{

setMessage("Server error")

}

}

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0f172a] to-black text-white">

<form
onSubmit={handleRegister}
className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl w-[380px] space-y-6"
>

<h2 className="text-3xl text-purple-400 text-center">
Create Account
</h2>

{message && (
<div className="bg-purple-500/20 p-3 rounded text-center">
{message}
</div>
)}

<div className="relative">

<Mail className="absolute left-3 top-3 text-gray-400"/>

<input
type="email"
placeholder="Email"
className="w-full pl-10 p-3 bg-black/40 rounded-xl"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

</div>


<div className="relative">

<Lock className="absolute left-3 top-3 text-gray-400"/>

<input
type="password"
placeholder="Password"
className="w-full pl-10 p-3 bg-black/40 rounded-xl"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

</div>

{password && (
<p className="text-sm text-gray-400">
Password Strength : <span className="text-purple-400">{getStrength()}</span>
</p>
)}

<button
className="w-full bg-purple-600 p-3 rounded-xl flex items-center justify-center gap-2"
>
<UserPlus size={18}/>
Create Account
</button>

<p className="text-gray-400 text-center">

Already have account?

<Link to="/" className="text-purple-400 ml-2">
Login
</Link>

</p>

</form>

</div>

)

}

export default Register
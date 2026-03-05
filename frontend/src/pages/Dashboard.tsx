import { useEffect, useState } from "react"
const API = "https://ai-powered-loan-underwriting-credit-risk-3at2.onrender.com/";

function Dashboard(){

const [stats,setStats]=useState<any>(null)

useEffect(()=>{

fetch(`${API}/analytics`,)
.then(res=>res.json())
.then(data=>setStats(data))

},[])

if(!stats) return <div className="p-8 text-white">Loading...</div>

return(

<div className="space-y-10">

<div>

<h1 className="text-4xl font-bold text-white">
AI Credit Risk Dashboard
</h1>

<p className="text-gray-400">
Real-time insights for loan underwriting decisions
</p>

</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
<p className="text-gray-400">Total Applications</p>
<h2 className="text-3xl font-bold mt-2 text-purple-400">
{stats.total}
</h2>
</div>


<div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
<p className="text-gray-400">Approved Loans</p>
<h2 className="text-3xl font-bold mt-2 text-green-400">
{stats.approved}
</h2>
</div>


<div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
<p className="text-gray-400">Rejected Loans</p>
<h2 className="text-3xl font-bold mt-2 text-red-400">
{stats.rejected}
</h2>
</div>


<div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
<p className="text-gray-400">Average Risk</p>
<h2 className="text-3xl font-bold mt-2 text-yellow-400">
{Math.round(stats.avg_risk)}
</h2>
</div>

</div>

</div>

)

}

export default Dashboard
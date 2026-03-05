import { useEffect, useState } from "react"

interface Application {
  name: string
  age: number
  income: number
  loan: number
  decision: string
  risk: number
}

const API = "https://ai-powered-loan-underwriting-credit-risk-3at2.onrender.com/";

export default function Applications() {

  const [apps, setApps] = useState<Application[]>([])

  useEffect(() => {

    fetch(`${API}/applications`)
      .then(res => res.json())
      .then(data => {
        setApps(data)
      })

  }, [])


  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Loan Applications
      </h1>

      <table className="w-full text-left border-collapse">

        <thead>
          <tr className="border-b border-gray-700 text-gray-300">

            <th className="py-3">Name</th>
            <th className="py-3">Age</th>
            <th className="py-3">Income</th>
            <th className="py-3">Loan</th>
            <th className="py-3">Decision</th>
            <th className="py-3">Risk</th>

          </tr>
        </thead>

        <tbody>

          {apps.map((app, i) => (

            <tr key={i} className="border-b border-gray-800">

              <td className="py-3">{app.name}</td>
              <td className="py-3">{app.age}</td>
              <td className="py-3">{app.income}</td>
              <td className="py-3">{app.loan}</td>
              <td className="py-3">{app.decision}</td>
              <td className="py-3">{app.risk}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}
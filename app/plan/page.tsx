```tsx
"use client"
import { useEffect, useState } from "react"
import type { Plan } from "@/lib/types"


export default function PlanPage() {
const [plan, setPlan] = useState<Plan|null>(null)
useEffect(()=>{ const raw = localStorage.getItem("lastPlan"); if (raw) setPlan(JSON.parse(raw)) },[])
if (!plan) return <main>No plan. <a href="/intake">Make one</a></main>
return (
<main className="p-6 max-w-3xl mx-auto">
<h1 className="text-2xl font-bold">{plan.split_name}</h1>
{plan.sessions.map(s=>(<section key={s.day}><h2>Day {s.day}</h2><ul>{s.exercises.map((e,i)=>(<li key={i}>{e.name} — {e.sets}×{e.reps} @ RIR {e.RIR}</li>))}</ul></section>))}
</main>
)
}
```

```tsx
"use client"
import { useState } from "react"
import type { Intake } from "@/lib/types"


export default function IntakePage() {
const [loading, setLoading] = useState(false)
const [error, setError] = useState<string|null>(null)


async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault()
setLoading(true)
const form = new FormData(e.currentTarget)
const intake: Intake = {
age: Number(form.get("age")),
sex: (form.get("sex") as any) || "male",
training_age_months: Number(form.get("training_age_months")),
equipment_set: form.get("equipment_set") as any,
days_per_week: Number(form.get("days_per_week")) as any,
goals: form.get("goals") as any,
injuries: String(form.get("injuries")||""),
consent: Boolean(form.get("consent"))
}
if (!intake.consent) { setError("Guardian consent required"); setLoading(false); return }
const res = await fetch("/api/plan", { method:"POST", body: JSON.stringify(intake) })
const data = await res.json()
if (data.refuse) { setError(data.reason); setLoading(false); return }
localStorage.setItem("lastPlan", JSON.stringify(data))
window.location.href = "/plan"
}


return (
<main className="p-6 max-w-3xl mx-auto">
<h1 className="text-2xl font-bold">Intake</h1>
<form onSubmit={onSubmit} className="mt-6 space-y-4">
<div><label>Age</label><input name="age" type="number" required min={13} max={18} className="border p-2 w-full"/></div>
<div><label>Sex</label><select name="sex" className="border p-2 w-full"><option>male</option><option>female</option></select></div>
<div><label>Training Age (months)</label><input name="training_age_months" type="number" required className="border p-2 w-full"/></div>
<div><label>Equipment</label><select name="equipment_set" className="border p-2 w-full"><option value="dumbbells_home">Dumbbells</option><option value="basic_gym">Basic Gym</option><option value="school_gym">School Gym</option></select></div>
<div><label>Days/week</label><select name="days_per_week" className="border p-2 w-full"><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>
<div><label>Goal</label><select name="goals" className="border p-2 w-full"><option>hypertrophy</option><option>strength_base</option><option>general_fitness</option></select></div>
<div><label>Injuries or issues?</label><textarea name="injuries" className="border p-2 w-full"/></div>
<div><input type="checkbox" name="consent" required/> Guardian consent confirmed</div>
{error && <p className="text-red-600">{error}</p>}
<button disabled={loading} className="px-4 py-2 rounded bg-black text-white">{loading ? "Generating…" : "Generate Plan"}</button>
</form>
</main>
)
}
```

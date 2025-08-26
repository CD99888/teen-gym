```ts
import { NextResponse } from "next/server"
import type { Intake, Plan } from "@/lib/types"
import { pickTemplate, applyCaps } from "@/lib/engine"
import { PlanZ } from "@/lib/schema"


export async function POST(req: Request) {
const intake = await req.json() as Intake
if (!intake.consent) return NextResponse.json({refuse:true, reason:"Guardian consent required."})
if ((intake.injuries||"").match(/pain|injury|faint|doctor/i)) return NextResponse.json({refuse:true, reason:"Safety flag: seek medical guidance"})
let plan: Plan = pickTemplate(intake)
plan = applyCaps(plan, intake.age)
PlanZ.parse(plan)
return NextResponse.json(plan)
}
```

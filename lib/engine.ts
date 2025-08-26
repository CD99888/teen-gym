```ts
import type { Intake, Plan } from "./types"
import { TEMPLATE_DB_3 } from "./templates"


export function pickTemplate(intake:Intake):Plan { return TEMPLATE_DB_3 }


export function applyCaps(plan:Plan, age:number):Plan {
let clone = JSON.parse(JSON.stringify(plan));
if(age<15){
for(const s of clone.sessions){
for(const e of s.exercises){
e.RIR = Math.max(e.RIR,1)
}
}
}
return clone
}
```

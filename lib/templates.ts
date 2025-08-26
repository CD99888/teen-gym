```ts
import type { Plan } from "./types"


export const TEMPLATE_DB_3: Plan = {
split_name:"3-Day Full Body (DB)",
days_per_week:3,
sessions:[{
day:1,
exercises:[
{name:"Goblet Squat", sets:3, reps:"8-12", RIR:1, rest_sec:90},
{name:"DB Bench Press", sets:3, reps:"8-12", RIR:1, rest_sec:90},
{name:"DB Row", sets:3, reps:"8-12", RIR:1, rest_sec:90},
{name:"Plank", sets:3, reps:"30s", RIR:2, rest_sec:60}
]
}]
}
```

```ts
import { z } from "zod"
export const ExerciseZ = z.object({ name:z.string(), sets:z.number().min(1).max(5), reps:z.string(), RIR:z.number().min(0).max(3), rest_sec:z.number().min(45).max(150) })
export const SessionZ = z.object({ day:z.number().min(1).max(7), exercises:z.array(ExerciseZ) })
export const PlanZ = z.object({ split_name:z.string(), days_per_week:z.number(), sessions:z.array(SessionZ) })
```

```ts
export type Intake = {
age:number
sex:string
training_age_months:number
equipment_set:"dumbbells_home"|"basic_gym"|"school_gym"
days_per_week:3|4|5
goals:string
injuries?:string
consent:boolean
}


export type ExercisePrescription = { name:string, sets:number, reps:string, RIR:number, rest_sec:number }
export type Session = { day:number, exercises:ExercisePrescription[] }
export type Plan = { split_name:string, days_per_week:number, sessions:Session[] }
```

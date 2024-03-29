import { z } from "zod";

export const acdemicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select a Name" }),
  year: z.string({ required_error: "Please select a Year" }),
  startMonth: z.string({ required_error: "Please select a Start Month" }),
  endMonth: z.string({ required_error: "Please select a End Month" }),
});

export const acdemicFacultySchema = z.object({
  name: z.string({ required_error: "Please select a Name" }),
});

export const acdemicDepartmentSchema = z.object({
  name: z.string({ required_error: "Please Enter a Name" }),
  academicFaculty: z.string({ required_error: "Please select a Name" }),
});

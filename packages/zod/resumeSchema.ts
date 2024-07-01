import { z } from 'zod';

const experienceSchema = z.object({
  name: z.string({
    required_error: 'Company name is required',
  }),
  role: z.string().optional(),
  jobType: z.enum(['Full-Time', 'Part-Time', 'Internship']).optional(),
  dateRange: z.string().optional(),
  location: z.string().optional(),
  jobDescription: z.string().optional(),
});

export const resumeFormSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  title: z.string().optional(),
  summary: z.string().optional(),
  email: z.string().optional(),
  number: z.string().optional(),
  website: z.string().optional(),
  location: z.string().optional(),
  company: z.array(experienceSchema).optional(),
});

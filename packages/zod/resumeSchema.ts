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

const educationSchema = z.object({
  name: z.string({
    required_error: 'Institute name is required',
  }),
  degree: z.string().optional(),
  dateRange: z.string().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
});

const linkSchema = z.object({
  label: z.string().optional(),
  link: z.string().optional(),
});

const skillSchema = z.object({
  skill: z.string().optional(),
  //add skills  level on later version
});

const languageSchema = z.object({
  language: z.string().optional(),
  //add skills  level on later version
});

const certificationSchema = z.object({
  name: z.string({
    required_error: 'Certificate Name is required',
  }),
  issuer: z.string().optional(),
  date: z.string().optional(),
  website: z.string().optional(),
  summary: z.string().optional(),
});

const projectSchema = z.object({
  name: z.string({
    required_error: 'Certificate Name is required',
  }),
  date: z.string().optional(),
  website: z.string().optional(),
  description: z.string().optional(),
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
  education: z.array(educationSchema).optional(),
  links: z.array(linkSchema).optional(),
  skills: z.array(skillSchema).optional(),
  languages: z.array(languageSchema).optional(),
  certificates: z.array(certificationSchema).optional(),
  projects: z.array(projectSchema).optional(),
});

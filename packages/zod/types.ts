import { z } from 'zod';
import { resumeFormSchema } from './resumeSchema';

export type resumeSchemaType = z.infer<typeof resumeFormSchema>;

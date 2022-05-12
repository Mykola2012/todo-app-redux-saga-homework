import * as yup from 'yup';

export const TASK_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .min(2)
    .max(120)
    .required(),
});

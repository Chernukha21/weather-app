import * as Yup from 'yup';

export const searchSchema = Yup.object({
  city: Yup.string()
    .trim()
    .min(2, 'Minimum 2 characters')
    .required('City is required'),
});

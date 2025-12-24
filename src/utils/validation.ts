import * as yup from 'yup';

export const validationSchemas = {
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    )
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),

  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),

  phone: yup
    .string()
    .matches(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),
};

export const loginSchema = yup.object().shape({
  email: validationSchemas.email,
  password: yup.string().required('Password is required'),
});

export const registerSchema = yup.object().shape({
  name: validationSchemas.name,
  email: validationSchemas.email,
  password: validationSchemas.password,
  confirmPassword: validationSchemas.confirmPassword,
});

export const forgotPasswordSchema = yup.object().shape({
  email: validationSchemas.email,
});

export const profileSchema = yup.object().shape({
  name: validationSchemas.name,
  email: validationSchemas.email,
  phone: validationSchemas.phone.optional(),
});

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required('Current password is required'),
  newPassword: validationSchemas.password,
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .required('Please confirm your new password'),
});
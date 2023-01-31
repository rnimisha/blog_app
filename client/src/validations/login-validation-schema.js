import * as Yup from 'yup'

export const LoginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_]{6,50}$/,
      'Must Contain 7 Characters, Start with alphabet and maximum of 50 characters'
    ).required('Username is required'),
  password: Yup.string()
    .min(7, 'Password should be atleast 7 characters')
    .required('Password is required')
})

export default LoginValidationSchema

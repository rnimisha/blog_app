import * as Yup from 'yup'

const REGISTER_VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^[a-zA-Z][a-zA-Z0-9_]{6,50}$/,
      'Must Contain 7 Characters, Start with alphabet and maximum of 50 characters'
    ).required('Username is required'),
  email: Yup.string()
    .email('Provide a valid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/,
      'Must Contain 7 Characters, One Uppercase, One Lowercase, One Number'
    )
    .required('Password is required')
})

export default REGISTER_VALIDATION_SCHEMA

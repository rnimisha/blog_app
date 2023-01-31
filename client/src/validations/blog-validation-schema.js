import * as Yup from 'yup'

export const BlogValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required'),
  description: Yup.string()
    .min(10, 'Description needs to be more than 10 character')
    .required('Description is required'),
  cat_id: Yup.number()
    .integer()
    .min(1, 'Category is required')
    .required('Category is required')
})

export default BlogValidationSchema

import React from 'react'
import { Formik, Field, Form } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import InputBox from '../InputBox/InputBox'
import { Dropdown, FlexBox, Child } from './editor.styled'

const Editor = () => {
  const initialValues = {
    title: '',
    description: '',
    image: '',
    user_id: 1,
    cat_id: -1
  }
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <>
    <Formik
    initialValues={initialValues}
    onSubmit = {onSubmit}
    >
        {({ errors, touched }) => (
            <Form>
                <FlexBox>
                    <Child width='49%'>
                       <InputBox name='title' placeholder='Title' err={errors.title} touched={touched.title} width ='100%' style={{ fontSize: '1.1rem' }}/>
                    </Child>
                    <Child width = '49%'>
                        <Dropdown as="select" name="cat_id">
                            <option value="-1" disabled selected> Category....</option>
                            <option value="1">later</option>
                            <option value="2">from api</option>
                        </Dropdown>
                    </Child>
                    <Child width = '100%'>
                        <Field name='description'>
                            {({ field }) => <ReactQuill value={field.value} onChange={field.onChange(field.name)} />}
                        </Field>
                    </Child>
                    <Child width='49%'>
                                        <InputBox type="file" name='image' placeholder='image' err={errors.image} touched={touched.image} style={{ border: 'none' }}/> <br /><br />
                    </Child>
                    <Child width='49%' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button type ='submit'>Publish</button>
                    </Child>
                </FlexBox>
            </Form>
        )}
    </Formik>
    </>
  )
}

export default Editor

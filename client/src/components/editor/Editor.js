import React from 'react'
import { Formik, Field, Form } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import useGet from '../../hooks/useGet'

// components
import InputBox from '../InputBox/InputBox'

// styles
import { FlexBox, Child } from './editor.styled'
import './styles.css'

const Editor = ({ initialValues, onSubmit }) => {
  const { data } = useGet('http://localhost:3000/categories')
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
                       <InputBox className = 'input-box' name='title' placeholder='Title' err={errors.title} touched={touched.title} width ='100%' style={{ fontSize: '1.1rem' }}/>
                    </Child>
                    <Child width = '49%'>
                        <Field as="select" name="cat_id" className = 'input-box'>
                            <option value={0} disabled> Category....</option>
                            {
                                data && data.length > 0 && data.map((category, id) => {
                                  return <option value={category.cat_id} key ={category.cat_id}>{category.name}</option>
                                })
                            }
                        </Field>
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

import React, { useRef, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import useGet from '../../hooks/useGet'

// components
import InputBox from '../InputBox/InputBox'

// styles
import { FlexBox, Child, MiniButton } from './editor.styled'
import './styles.css'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import BlogValidationSchema from '../../validations/blog-validation-schema'
import { Error } from '../InputBox/InputBox.styled'

const Editor = ({ initial, onSubmit, type }) => {
  const { data } = useGet('http://localhost:3000/categories')
  const [fileName, setFileName] = useState(initial?.image || '')
  const ref = useRef()
  return (
    <>
    {
    Object.keys(initial).length > 0 &&
    <Formik
    initialValues={initial}
    onSubmit = {onSubmit}
    validationSchema= {BlogValidationSchema}
    encType="multipart/form-data"
    >
        {({ errors, touched, setFieldValue }) => (
            <Form>
                <FlexBox>
                    <Child width='46%'>
                       <InputBox className = 'input-box' name='title' placeholder='Title' err={errors.title} touched={touched.title} width ='100%' style={{ fontSize: '1.1rem' }}/>
                    </Child>
                    <Child width = '46%'>
                        <Field as="select" name="cat_id" className = 'input-box'>
                            <option value={0} disabled> Category....</option>
                            {
                                data && data.length > 0 && data.map((category, id) => {
                                  return <option value={category.cat_id} key ={category.cat_id}>{category.name}</option>
                                })
                            }
                        </Field>
                        {errors.cat_id && touched.cat_id
                          ? (
                            <Error>{errors.cat_id} </Error>
                            )
                          : null}
                    </Child>

                    <Child width = '100%'>
                        <Field name='description'>
                            {({ field }) => <ReactQuill value={field.value} onChange={field.onChange(field.name)} />}
                        </Field>
                        {console.log(errors)}
                    </Child>
                    <Child width = '100%'>
                        {errors.description && touched.description
                          ? (
                            <Error>{errors.description} </Error>
                            )
                          : null}
                    </Child>
                    <Child width='46%'>{
                        type !== 'edit' && <>
                        <input
                        style ={{ display: 'none' }}
                        ref = {ref}
                        type='file'
                        name='image'
                        onChange={(e) => {
                          setFieldValue('image', e.currentTarget.files[0])
                          setFileName(e.currentTarget?.files[0])
                        }}
                        />
                        <MiniButton onClick={() => { ref.current.click() }}> <CloudUploadOutlinedIcon/> Upload Image</MiniButton>
                        <div style={{ marginTop: '10px' }}>
                            <span>{fileName?.name && <img style={{ width: '100px', maxHeight: '100px' }} src={URL.createObjectURL(fileName)}/>}</span>
                        </div>
                        </>
                    }
                    </Child>
                    <Child width='46%' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <MiniButton type ='submit' style={{ padding: '20px 40px' }}>{type === 'edit' ? 'Update' : 'Publish'}</MiniButton>
                    </Child>
                </FlexBox>
            </Form>
        )}
    </Formik>
}
    </>
  )
}

export default Editor

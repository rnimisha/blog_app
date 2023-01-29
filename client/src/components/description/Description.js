/* eslint-disable camelcase */
import React from 'react'
import DOMPurify from 'dompurify'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Heading, Category, ImageContainer, Detail, DeleteIcon, EditIcon } from '../../container/IndividualBlog/IndividualBlog.styled'
import { Line, MiniTitle } from '../card/Card.styled'

const Description = ({ data, deleteBlog }) => {
  const user_id = useSelector(state => state.user.user_id)
  const navigate = useNavigate()
  const editBlog = () => {
    navigate(`/editblog/${data.blog_id}`)
  }
  return (
    <>
        <Heading>
            { data.title}
        </Heading>
        <Category>
            {data.name}
        </Category>
        <Line style={{ justifyContent: 'center' }}>
            <MiniTitle style={{ borderRight: '1px solid #999', paddingRight: '15px', textTransform: 'uppercase' }}>
                BY {data.username}
            </MiniTitle>
            <MiniTitle>
                 { moment(data.date).format('DD/MM/YYYY')}
            </MiniTitle>
        </Line>
        {

          user_id === data.user_id &&
          <Line style={{ justifyContent: 'center' }}>
            <MiniTitle style={{ paddingRight: '15px' }}>
                <EditIcon onClick={() => editBlog()}/>
            </MiniTitle>
            <MiniTitle>
                <DeleteIcon onClick = {() => deleteBlog(data.blog_id)}/>
            </MiniTitle>
        </Line>
        }
        <ImageContainer>
            <img src={`${process.env.PUBLIC_URL}/uploads/${data.image}`} style={{ maxWidth: '100%', maxHeight: '100%' }}/>
        </ImageContainer>
        <Detail dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.description)
        }}>
        </Detail>
    </>
  )
}

export default Description

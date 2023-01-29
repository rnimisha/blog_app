/* eslint-disable camelcase */
import React from 'react'
import DOMPurify from 'dompurify'
import moment from 'moment'
import { useSelector } from 'react-redux'

import { Heading, Category, ImageContainer, Detail } from '../../container/IndividualBlog/IndividualBlog.styled'
import { Line, MiniTitle } from '../card/Card.styled'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Description = ({ data }) => {
  const user_id = useSelector(state => state.user.user_id)
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
                <EditOutlinedIcon/>
            </MiniTitle>
            <MiniTitle>
                <DeleteOutlineOutlinedIcon/>
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

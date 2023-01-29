import styled from 'styled-components'
import * as palette from '../../constants/palette'

import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

export const Heading = styled.h1`
    font-size: 2rem;
    text-align: center;
`

export const Category = styled.h2`
    overflow: hidden;
    text-align: center;
    color : ${palette.GREEN_SHADE1};

    &:before,
    &:after {
        background-color: ${palette.GREEN_SHADE1};
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
    }

    &:before {
        right: 0.5em;
        margin-left: -50%;
    }

    &:after {
        left: 0.5em;
        margin-right: -50%;
    }
    
`
export const ImageContainer = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    justify-content: center;
    height: 500px;
`
export const Detail = styled.p`
    margin: 20px 0;
    text-align: justify;
`
export const DeleteIcon = styled(DeleteOutlineOutlinedIcon)`
    &:hover{
        color : #e85165;
        cursor: pointer;
    }
`
export const EditIcon = styled(EditOutlinedIcon)`
    &:hover{
        color : ${palette.GREEN_SHADE1};
        cursor: pointer;
    }
`

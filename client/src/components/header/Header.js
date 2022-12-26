import React from 'react'

// styles
import { Container, LeftHeader, MainImage, RightHeader, Image, UnderLay, MainTitle, MiniTitle } from './Header.styled'

// images
import BANNERIMG from '../../assets/images/banner1.png'

// components
import BoxButton from '../button/BoxButton'

const Header = () => {
  return (
    <>
        <Container>
                <LeftHeader>
                    <MainImage>
                        <Image src={BANNERIMG} alt='product'/>
                        <UnderLay/>
                    </MainImage>
                </LeftHeader>
                <RightHeader>
                    <MainTitle>
                        Glowing Beauty
                    </MainTitle>
                    <MiniTitle>
                        <span>&nbsp;</span>an open diary
                    </MiniTitle>
                    <BoxButton
                        width ='300px'
                        text='Discover now'/>
                </RightHeader>
        </Container>
    </>
  )
}

export default Header

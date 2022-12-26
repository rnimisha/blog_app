import React from 'react'

// styles
import { Container, LeftHeader, MainImage, RightHeader, Image, UnderLay } from './Header.styled'

// images
import BANNERIMG from '../../assets/images/banner1.png'

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

                </RightHeader>
        </Container>
    </>
  )
}

export default Header

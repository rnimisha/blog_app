import React from 'react'

// styles
import { Container, LeftHeader, MainImage, RightHeader, Image, UnderLay, MainTitle, MiniTitle, Paragraph } from './Header.styled'

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
                    <MiniTitle style={{ marginBottom: '40px' }}>
                        <span>&nbsp;</span>an open diary
                    </MiniTitle>
                    <BoxButton
                        width ='280px'
                        text='Discover now'/>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, porro. Expedita maxime vero dolore quo, beatae iste soluta placeat cupiditate aut, magnam quam perferendis officiis consequuntur. Esse itaque ab laudantium eaque.
                    </Paragraph>
                </RightHeader>
        </Container>
    </>
  )
}

export default Header

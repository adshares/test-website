import React from 'react'
import favoriteIcon from './../../assets/icons/favorite-icon.svg'
import logo from './../../assets/icons/adshares-logo.svg'
import {
    Container,
    Header,
    Icon,
    Logo,
    LogoWrapper,
    Title,
} from './headerElements'
import TextContent from "../TextContent/TextContent";
import {Link} from "gatsby";

const FixedHeader = ({shown, title}) => (
    <Header shown={shown}>
        <Container>
            <LogoWrapper>
                <Link to="/">
                    <Logo src={logo} alt="Adshares"/>
                </Link>
                <Title> {title} </Title>
            </LogoWrapper>
            <Container maxWidth='1860px'>
                <TextContent fixed/>
                <Icon src={favoriteIcon}/>
            </Container>
        </Container>
    </Header>
);

export default FixedHeader

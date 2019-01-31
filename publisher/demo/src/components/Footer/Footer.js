import React from 'react'
import {
    Address,
    BottomInfo,
    CompanyName,
    Email,
    FooterElement,
    Icon,
    ImageLink,
    SocialMedia,
} from './FooterStyled'
import telegram from "../../assets/icons/telegram.svg";
import medium from "../../assets/icons/medium.svg";
import reddit from "../../assets/icons/reddit.svg";
import linkedIn from "../../assets/icons/07_linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import {Link} from "../Atoms/atoms";


const Footer = ({children}) => (
    <FooterElement>
        <BottomInfo>
            <Address>
                <CompanyName>Publisher site</CompanyName>
                    <Link src="https://adshares.net/" target="_blanc" >
                        https://adshares.net/
                    </Link>
                <Email href="mailto:office@adshares.net"> office@adshares.net </Email>
            </Address>
            {children}
        </BottomInfo>
        <BottomInfo>
            <SocialMedia>
                <ImageLink href="https://medium.com/adshares/" target="_blanc">
                    <Icon src={medium} alt="medium"/>
                </ImageLink>

                <ImageLink href="https://t.me/adshares" target="_blanc">
                    <Icon src={telegram} alt="telegram"/>
                </ImageLink>
                <ImageLink href="https://www.reddit.com/r/adshares/" target="_blanc">
                    <Icon src={reddit} alt="reddit"/>
                </ImageLink>
                <ImageLink href="https://twitter.com/adsharesNet" target="_blanc">
                    <Icon src={twitter} alt="twitter"/>
                </ImageLink>

                <ImageLink href="https://www.linkedin.com/company/adshares/ target"_blanc>
                    <Icon src={linkedIn} alt="twitter"/>
                </ImageLink>
            </SocialMedia>
        </BottomInfo>
    </FooterElement>
);

export default Footer

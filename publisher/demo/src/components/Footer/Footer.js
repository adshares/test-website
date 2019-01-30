import React from 'react'
import {
    Address,
    BottomInfo,
    CompanyName,
    Email,
    FooterElement, Icon, ImageLink,
    LocationDetail,
} from './FooterStyled'
import telegram from "../../assets/icons/telegram.svg";
import medium from "../../assets/icons/medium.svg";
import reddit from "../../assets/icons/reddit.svg";
import github from "../../assets/icons/github.svg";
import linkedIn from "../../assets/icons/07_linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import {Link} from "../Atoms/atoms";


const Footer = ({children}) => (
    <FooterElement>
        <BottomInfo>
            <Address>
                <CompanyName>Publisher site</CompanyName>
                    <Link src="https://adshares.net/" >
                        https://adshares.net/
                    </Link>
                <Email href="mailto:office@adshares.net"> office@adshares.net </Email>
            </Address>
            {children}
        </BottomInfo>
        <BottomInfo>
            <div>
                <ImageLink href="https://medium.com/adshares/">
                    <Icon src={medium} alt="medium"/>
                </ImageLink>

                <ImageLink href="https://t.me/adshares">
                    <Icon src={telegram} alt="telegram"/>
                </ImageLink>
                <ImageLink href="https://www.reddit.com/r/adshares/">
                    <Icon src={reddit} alt="reddit"/>
                </ImageLink>
                <ImageLink href="https://twitter.com/adsharesNet">
                    <Icon src={twitter} alt="twitter"/>
                </ImageLink>

                <ImageLink href="https://www.linkedin.com/company/adshares/">
                    <Icon src={linkedIn} alt="twitter"/>
                </ImageLink>
            </div>
        </BottomInfo>
    </FooterElement>
);

export default Footer

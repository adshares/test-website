import React from 'react'
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import TextContent from "../Navigation/TextContent";
import {MenuContainer} from "./MobileNavStyled";

class MobileNav extends React.Component {
    toggleMenu = () => {
        this.setState({
            showNav: !this.state.showNav,
        });
    };

    constructor(props) {
        super(props);

        this.state = {
            showNav: true,
        }
    }

    hideMenu(e) {
        if (!this.state.showNav) return;
        if (e.relatedTarget && e.relatedTarget.className && e.relatedTarget.className.includes('nav-link')) return;

        this.setState({
            showNav: false,
        })
    }

    render() {
        return (
            <MenuContainer>
                <HamburgerMenu showMobileMenu={() => this.toggleMenu()} hideMobileMenu={(e) => this.hideMenu(e)}/>
                {this.state.showNav && (<TextContent className="mobile-nav"
                                                     mobileShown={this.state.showNav}/>)}
            </MenuContainer>
        )
    };
}

export default MobileNav

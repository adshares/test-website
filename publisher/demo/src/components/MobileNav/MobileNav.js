import React from 'react'
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Navigation from "../Navigation/Navigation";
import {MenuContainer} from "./MobileNavStyled";

class MobileNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNav: false,
        }
    }

    toggleMenu() {
        this.setState({
            showNav: !this.state.showNav,
        })
    }
    hideMenu(e) {
        console.log('match',e.relatedTarget.className.includes('nav-link'));
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
                <Navigation className="mobile-nav"
                            mobileShown={this.state.showNav}/>
            </MenuContainer>
        )
    };
}

export default MobileNav

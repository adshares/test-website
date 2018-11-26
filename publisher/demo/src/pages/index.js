import React from 'react'
import '../styleUtils/normalize.css'
import '../global-styles'
import Layout from '../components/layout'
import MainPage from '../components/Main/Main'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import backgroundImage from '../assets/backgrounds/bg_2.jpg'
import logo from './../assets/icons/adshares-logo.svg'
import data from '../Data/Page1'
import SEO from "../components/SEO";
import Banners from "../components/AdBanners/AdBanners";
import {FixedButton, FixedButtons} from "../components/Atoms/atoms";
import SERVICES_URLS from "../../../config/servicesConfig";


class IndexPage extends React.Component {
    state = {
        currentService: SERVICES_URLS["1"],
    };

    changeServer = (url) => {
        if (this.state.currentService !== url) {
            this.setState({
                currentService: url,
            })
        }
    };

    render() {
        return (
            <Layout>
                <SEO config={data.config} serverLink={this.state.currentService}/>
                <FixedButtons>
                    <FixedButton onClick={() => this.changeServer(SERVICES_URLS["1"])}> Server 1</FixedButton>
                    <FixedButton onClick={() => this.changeServer(SERVICES_URLS["2"])}> Server 2</FixedButton>
                    <FixedButton onClick={() => this.changeServer(SERVICES_URLS["3"])}> Server 3</FixedButton>
                </FixedButtons>
                <MainPage
                    logo={logo}
                    bgImage={`url("${backgroundImage}")`}
                />
                <Articles articlesData={data.articles}/>
                <Banners banners={data.banners}/>
                <Footer/>
            </Layout>
        )
    }
}


export default IndexPage

import React from 'react';
import '../global-styles';
import Layout from '../components/layout';
import MainPage from '../components/Main/Main';
import Articles from '../components/Articles/Articles';
import Footer from '../components/Footer/Footer';
import backgroundImage from '../assets/backgrounds/bg_3.jpg';
import logo from './../assets/icons/ads_logo.svg';
import data from '../Data/Page1';
import SEO from "../components/SEO";
import Banners from "../components/AdBanners/AdBanners";
import {FixedButton, FixedButtons} from "../components/Atoms/atoms";
import SERVICES_URLS from "../../../config/servicesConfig";

class Page1 extends React.Component {
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
                <MainPage
                    logo={logo}
                    bgImage={`url("${backgroundImage}")`}
                />
                <Banners banners={data.banners}/>
                <Articles articlesData={data.articles} />
                <Footer/>
            </Layout>
        )
    }
};

export default Page1;

import React from 'react'
import '../global-styles'
import Layout from '../components/layout'
import MainPage from '../components/Main/Main'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import backgroundImage from '../assets/backgrounds/bg_3.jpg'
import logo from './../assets/icons/ads_logo.svg'
import data from '../Data/Page2'
import SEO from "../components/SEO";
import Banners from "../components/AdBanners/AdBanners";

class TravelPage extends React.Component {
    render() {
        return (
            <Layout>
                <SEO config={data.config}/>
                <MainPage
                    logo={logo}
                    bgImage={`url("${backgroundImage}")`}
                />
                <Articles articlesData={data.articles} />
                <Banners banners={data.banners}/>
                <Footer />
            </Layout>
        )
    }
};

export default TravelPage;

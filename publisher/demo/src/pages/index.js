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

class IndexPage extends React.Component {
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
}



export default IndexPage

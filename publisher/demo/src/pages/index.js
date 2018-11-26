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
import {AdBanner} from "../components/Atoms/atoms";
import {BannerSizes} from "../../../config/bannerConfig";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <SEO config={data.config}/>
                <MainPage
                    logo={logo}
                    bgImage={`url("${backgroundImage}")`}
                />

                <AdBanner  height={BannerSizes['leaderboard'].height} width={BannerSizes['leaderboard'].width} hideUnder='728px'/>
                <Articles articlesData={data.articles} />
                <AdBanner  height={BannerSizes['wide-skyscraper'].height} width={BannerSizes['wide-skyscraper'].width} position="fixed" left="0" top="20vh" hideUnder="1660px"/>
                <AdBanner  height={BannerSizes['wide-skyscraper'].height} width={BannerSizes['wide-skyscraper'].width} position="fixed" right="0" top="20vh" hideUnder="1660px"/>
                <AdBanner  height={BannerSizes['banner'].height} width={BannerSizes['banner'].width} hideAbove='728px' hideUnder={BannerSizes['banner'].width}/>
                <AdBanner  height={BannerSizes['mobile-banner'].height} width={BannerSizes['mobile-banner'].width} hideAbove={BannerSizes['banner'].width} hideUnder={BannerSizes['mobile-banner'].width}/>

                <Footer />
            </Layout>
        )
    }
}



export default IndexPage

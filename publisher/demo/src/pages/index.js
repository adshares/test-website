import React from 'react'
import '../styleUtils/normalize.css'
import '../global-styles'
import Layout from '../components/layout'
import MainPage from '../components/Main/Main'
import Articles from '../components/Articles/Articles'
import Footer from '../components/Footer/Footer'
import backgroundImage from '../assets/backgrounds/bg_home.jpg'
import logo from './../assets/icons/adshares-logo.svg'
import data from '../Data/index'
import SEO from "../components/SEO";
import {AdBanner} from "../components/AdBanners/AdBanners";
import SERVICES_URLS from "../../../config/servicesConfig";
import TextContent from "../components/TextContent/TextContent";


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
                <AdBanner publisherId={data.leaderboard.publisherId}
                          zoneId={data.leaderboard.zoneId}
                          height={data.leaderboard.height}
                          margin='40px auto'
                          width={data.leaderboard.width}
                          position={'static'}
                          right={data.leaderboard.right || ''}
                          hideUnder={data.leaderboard.hideUnder || ''}
                          hideAbove={data.leaderboard.hideAbove || ''}> </AdBanner>
                <MainPage
                    logo={logo}
                    bgImage={`url("${backgroundImage}")`}
                />
                <Articles articlesData={data.articles} largeBanner={data.largeBanner} largeBannerMobile={data.largeRectangle}/>
                <AdBanner publisherId={data.largeMobileBanner.publisherId}
                          zoneId={data.largeMobileBanner.zoneId}
                          height={data.largeMobileBanner.height}
                          margin='0 auto'
                          width={data.largeMobileBanner.width}
                          position={'static'}
                          right={data.largeMobileBanner.right || ''}
                          hideUnder={data.largeMobileBanner.hideUnder || ''}
                          hideAbove={data.largeMobileBanner.hideAbove || ''}> </AdBanner>
                <TextContent/>
                <Footer/>
            </Layout>
        )
    }
}


export default IndexPage

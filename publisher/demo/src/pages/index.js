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
import TextContent from "../components/Navigation/TextContent";


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
                <MainPage
                    logo={logo}
                    bgImage={`url("${backgroundImage}")`}
                />
                <AdBanner  publisherId={data.largeMobileBanner.publisherId}
                           zoneId={data.largeMobileBanner.zoneId}
                           height={data.largeMobileBanner.height}
                           margin='40px auto'
                           width={data.largeMobileBanner.width}
                           position={'static'}
                           right={data.largeMobileBanner.right || ''}
                           hideUnder={data.largeMobileBanner.hideUnder || ''}
                           hideAbove={data.largeMobileBanner.hideAbove || ''}> </AdBanner>
                <Articles articlesData={data.articles} largeBanner={data.largeBanner}/>
                <AdBanner  publisherId={data.largeMobileBanner.publisherId}
                           zoneId={data.largeMobileBanner.zoneId}
                           height={data.largeMobileBanner.height}
                           margin='0 auto'
                           width={data.largeMobileBanner.width}
                           position={'static'}
                           right={data.largeMobileBanner.right || ''}
                           hideUnder={data.largeMobileBanner.hideUnder || ''}
                           hideAbove={data.largeMobileBanner.hideAbove || ''}> </AdBanner>
                <TextContent>
                    <AdBanner  publisherId={data.largeRectangle.publisherId}
                               zoneId={data.largeRectangle.zoneId}
                               height={data.largeRectangle.height}
                               margin='0'
                               width={data.largeRectangle.width}
                               position={'static'}
                               right={data.largeRectangle.right || ''}
                               hideUnder={data.largeRectangle.hideUnder || ''}
                               hideAbove={data.largeRectangle.hideAbove || ''}> </AdBanner>



                    <AdBanner  publisherId={data.wideSkycraper.publisherId}
                                 zoneId={data.wideSkycraper.zoneId}
                                 height={data.wideSkycraper.height}
                                 margin='0'
                                 width={data.wideSkycraper.width}
                                 position={'static'}
                                 right={data.wideSkycraper.right || ''}
                                 hideUnder={data.wideSkycraper.hideUnder || ''}
                                 hideAbove={data.wideSkycraper.hideAbove || ''}> </AdBanner>
                </TextContent>
                <Footer/>
            </Layout>
        )
    }
}


export default IndexPage

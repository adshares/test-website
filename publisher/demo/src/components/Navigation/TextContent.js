import React from 'react'
import {TextSection, Content, Title, ContentWithImage, ContentWraper} from './NavigationStyled'
import data from '../../Data/index'
import {AdBanner} from "../AdBanners/AdBanners";
import Layout from "../layout";

const TextContent = ({children}) => (
    <TextSection>
        <Title>
            Blockchain in digital advertising. Did 2018 bring us closer to a breakthrough?
        </Title>

        <ContentWithImage>
            <div>
                <AdBanner publisherId={data.wideSkycraper.publisherId}
                          zoneId={data.wideSkycraper.zoneId}
                          height={data.wideSkycraper.height}
                          margin='0'
                          width={data.wideSkycraper.width}
                          position={'static'}
                          right={data.wideSkycraper.right || ''}
                          hideUnder={data.wideSkycraper.hideUnder || ''}
                          hideAbove={data.wideSkycraper.hideAbove || ''}> </AdBanner>
            </div>
            <ContentWraper marginLeft="40px">
                <Content>
                    If we look at programmatic advertising market, it may seem that it has not changed much over the
                    past
                    12 months. There are still those who dominate the market and impose their rules on others. High
                    fees,
                    lack of transparency and questionable traffic are still serious problems advertisers have to
                    struggle with.
                    In that respect not much has changed, however from our perspective a huge step was made to start
                    positive
                    changes in digital advertising, and we are proud that Adshares plays a significant role in this
                    process.
                </Content>
                <Content>
                    <strong>2018 — a general overview</strong><br/>
                    Adshares started 2018 with a successful Token Generation Event, which was a turning point for our
                    blockchain-based advertising ecosystem. It enabled us to accelerate our project significantly,
                    create
                    a community around it, grow the team and reach goals we set earlier. 2018 was a year of constant
                    development,
                    improvement and learning. We have been following the path we chose, and despite difficulties we
                    achieved and
                    learned a lot along the way.
                </Content>
                <Content>
                    <strong>What we accomplished over the past year</strong> <br/>
                    A year ago Adshares was still rather a vision than a product that could change the advertising
                    market.
                    As we are entering 2019, our ecosystem is almost ready, and no one can say that it is just an idea.
                    At
                    this point it’s one of the most active crypto projects worldwide, with an active community and team
                    of
                    highly-qualified and motivated programmers. It is also the most advanced blockchain-based project in
                    the
                    advertising market. Our ADST token is available for trading on Cryptopia, CoinExchange and Mercatox
                    and
                    the ADS cryptocurrency, which is the foundation of our ecosystem, is listed on Bitker exchange.
                </Content>
                <AdBanner publisherId={data.leaderboard.publisherId}
                          zoneId={data.leaderboard.zoneId}
                          height={data.leaderboard.height}
                          margin='40px auto'
                          width={data.leaderboard.width}
                          position={'static'}
                          right={data.leaderboard.right || ''}
                          hideUnder={data.leaderboard.hideUnder || ''}
                          hideAbove={data.leaderboard.hideAbove || ''}> </AdBanner>
            </ContentWraper>
        </ContentWithImage>


        <ContentWithImage>
            <ContentWraper marginRight="40px">
                <Content>
                    One of our main accomplishments of the previous year is the team that we built. We spent the first
                    months
                    of 2018 looking for highly-skilled coders who would be willing to join the founders on a journey to
                    transform
                    digital advertising. We managed to build a team of brilliant, like-minded people who want to make a
                    breakthrough and transform the market.
                </Content>
                <AdBanner publisherId={data.largeMobileBanner.publisherId}
                          zoneId={data.largeMobileBanner.zoneId}
                          height={data.largeMobileBanner.height}
                          margin='0'
                          width={data.largeMobileBanner.width}
                          position={'static'}
                          right={data.largeMobileBanner.right || ''}
                          hideUnder={data.largeMobileBanner.hideUnder || ''}
                          hideAbove={data.largeMobileBanner.hideAbove || ''}> </AdBanner>
                <Content>

                    Last year we also managed to integrate our advertising ecosystem with the ultra-fast ESC Blockchain
                    and
                    connect external node operators to our network. In August the network officially went live, and soon
                    afterwards our team provided ADST-ADS conversion tool. At this point we are halfway through the
                    conversion
                    process.
                </Content>
                <Content>

                    Apart from making significant progress in terms of software development our team also managed to
                    attend trade events and conferences last year. In October we showcased our blockchain-based
                    ecosystem
                    at DIG Publishing Lisbon as well as at Wolves Summit in Warsaw.
                </Content>
                <Content>
                    Over the last 2 months of 2018 Adshares team was focused on the development of key components of
                    the ecosystem. We updated ads-tools and launched ADS Testnet and Blockexplorer along with several
                    other
                    upgrades.
                </Content>
                <AdBanner publisherId={data.largeMobileBanner.publisherId}
                          zoneId={data.largeMobileBanner.zoneId}
                          height={data.largeMobileBanner.height}
                          margin='0'
                          width={data.largeMobileBanner.width}
                          position={'static'}
                          right={data.largeMobileBanner.right || ''}
                          hideUnder={data.largeMobileBanner.hideUnder || ''}
                          hideAbove={data.largeMobileBanner.hideAbove || ''}> </AdBanner>
                <Content>

                    In December we launched our very first campaign on crowdholding.com, and soon afterwards
                    our project was featured on steemhunt.com with outstanding results and positive feedback from the
                    community.
                </Content>
                <Content>

                    Throughout 2018 Adshares was one of the most active blockchain projects on the web. Our
                    programmers made over 3000 commits and modified approx. 24 000 lines of code.
                    By the end of December we exceeded 1 million test transaction in mainnet, which assured
                    us that the network is stable and ready to handle significant traffic.
                </Content>
                <AdBanner publisherId={data.leaderboard.publisherId}
                          zoneId={data.leaderboard.zoneId}
                          height={data.leaderboard.height}
                          margin='40px auto'
                          width={data.leaderboard.width}
                          position={'static'}
                          right={data.leaderboard.right || ''}
                          hideUnder={data.leaderboard.hideUnder || ''}
                          hideAbove={data.leaderboard.hideAbove || ''}> </AdBanner>
                <AdBanner publisherId={data.largeRectangle.publisherId}
                          zoneId={data.largeRectangle.zoneId}
                          height={data.largeRectangle.height}
                          margin='0'
                          width={data.largeRectangle.width}
                          position={'static'}
                          right={data.largeRectangle.right || ''}
                          hideUnder={data.largeRectangle.hideUnder || ''}
                          hideAbove={data.largeRectangle.hideAbove || ''}> </AdBanner>
            </ContentWraper>
            <div>
                <AdBanner publisherId={data.wideSkycraper.publisherId}
                          zoneId={data.wideSkycraper.zoneId}
                          height={data.wideSkycraper.height}
                          margin='0'
                          width={data.wideSkycraper.width}
                          position={'static'}
                          right={data.wideSkycraper.right || ''}
                          hideUnder={data.wideSkycraper.hideUnder || ''}
                          hideAbove={data.wideSkycraper.hideAbove || ''}> </AdBanner>
            </div>
        </ContentWithImage>

    </TextSection>
);

export default TextContent

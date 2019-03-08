import React from 'react';
import styled from "styled-components";

export const AdBanner = styled.div.attrs({
    className: process.env.GATSBY_BANNER_CLASS,
    "data-pub": props => props.publisherId,
    "data-zone": props => props.zoneId,
})`
  margin:  ${props => props.margin || '16px auto'};
  height: ${props => props.height || '0px'};
  width: ${props => props.width || '0px'};
  background: var(--gray);
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
  
  @media only screen and (max-width: ${props => props.hideUnder}) {
    display: none;
  }
    
  @media only screen and (min-width: ${props => props.hideAbove}) {
    display: none;
  }
`;

export const Banners = ({banners}) => {
    const Banners = banners.map((banner, index) => (<AdBanner key={index}
                                                              publisherId={banner.publisherId}
                                                              zoneId={banner.zoneId}
                                                              height={banner.height}
                                                              width={banner.width}
                                                              position={banner.position || ''}
                                                              top={banner.top || ''}
                                                              left={banner.left || ''}
                                                              right={banner.right || ''}
                                                              hideUnder={banner.hideUnder || ''}
                                                              hideAbove={banner.hideAbove || ''}/>));
    return (
        <div>
            {Banners}
        </div>
    )
};

export default Banners;

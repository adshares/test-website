import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './layout.module.css'

const Layout = ({children}) => (
    <div>
        <Helmet
            title="Adshares"
            meta={[
                {name: 'description', content: 'Adshares'},
                {name: 'keywords', content: 'advertising, blockchain'},
            ]}
        >
            <html lang="en"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,300i,400,400i,500,600,700,800"
                  rel="stylesheet"/>
        </Helmet>
        <div
            style={{
                margin: '0 auto',
                fontFamily: 'Poppins, sans-serif'
            }}
        >
            {children}
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout

#!/usr/bin/env bash

set -e

env | sort

if [ ! -v TRAVIS ]; then
  # Checkout repo and change directory

  # Install git
  git --version || apt-get -qq -y install git

  git clone \
    --depth=1 \
    https://github.com/adshares/test-website.git \
    --branch ${BUILD_BRANCH} \
    ${BUILD_PATH}/build

  cd ${BUILD_PATH}/build
fi

export SITE_ZONE_01=${SITE_ZONE_01:-"950A658CACB246F8A142EFB722A2ACD8"}
export SITE_ZONE_02=${SITE_ZONE_02:-"950A658CACB246F8A142EFB722A2ACD9"}
export SITE_ZONE_03=${SITE_ZONE_03:-"950A658CACB246F8A142EFB722A2ACDA"}
export SITE_ZONE_04=${SITE_ZONE_04:-"950A658CACB246F8A142EFB722A2ACDB"}

envsubst < servicesConfig.js.dist | tee publisher/config/servicesConfig.js
envsubst < index.js.dist | tee publisher/demo/src/Data/index.js

cd publisher/demo

# Install dependencies
yarn install

# Add command line Gatsby
yarn global add gatsby-cli

# Build project
gatsby build

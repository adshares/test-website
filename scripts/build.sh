#!/usr/bin/env bash

set -e

env | sort

if [[ -v GIT_CLONE ]]
then
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

SERVER_URL=${ADSERVER_BASE_URL:-"//localhost:8101"}
VERSION_URL_SUFFIX=${VERSION_URL_SUFFIX:-"?v="${APP_VERSION:-`date +%s | sha256sum | base64 | head -c 32 ; echo`}}

export GATSBY_FIND_URL="${SERVER_URL}/supply/find.js$VERSION_URL_SUFFIX"
export GATSBY_BANNER_CLASS=${ADSERVER_BANNER_CLASS:-"ADS_Server"}

envsubst < publisher/demo/.env.dist | tee publisher/demo/.env.production

cd publisher/demo

# Install dependencies
yarn install

# Add command line Gatsby
yarn global add gatsby-cli

# Build project
./node_modules/.bin/gatsby build

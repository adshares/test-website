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

export ADSERVER_BASE_URL=${ADSERVER_BASE_URL:-"//localhost:8101"}
export VERSION_URL_SUFFIX=${VERSION_URL_SUFFIX:-"?v="${APP_VERSION:-`date +%s | sha256sum | base64 | head -c 32 ; echo`}}
envsubst < servicesConfig.js.dist | tee publisher/config/servicesConfig.js

cd publisher/demo

# Install dependencies
yarn install

# Add command line Gatsby
yarn global add gatsby-cli

# Build project
gatsby build

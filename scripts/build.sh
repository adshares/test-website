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
    --branch ${TEST_WEBSITE_BRANCH} \
    ${BUILD_PATH}/build

  cd ${BUILD_PATH}/build
fi

cd publisher/demo

# Install dependencies
yarn install

# Build project
gatsby build ${APP_ENV:-prod}

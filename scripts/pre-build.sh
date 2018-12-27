#!/usr/bin/env bash

set -e

# Ubuntu 18.04 only

yarn --version || export INSTALL_YARN=true

# Install dependencies for yarn operations
if [ -v INSTALL_YARN ]; then
    curl --version || apt-get -qq -y --no-install-recommends install curl
    # Get yarn
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \

    PACKAGE_LIST="${PACKAGE_LIST:-""} yarn"
fi

apt-get -qq update

# Install yarn
apt-get -qq -y --no-install-recommends install $PACKAGE_LIST

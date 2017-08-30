#!/usr/bin/env bash

echo "client deploy to live script"
echo "Add the Cloud Foundry Foundation public key and package repository to your system"
wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb http://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list

sudo apt-get update
sudo apt-get install cf-cli

cf push get-started --docker-image jpwdocker/get-started:part1


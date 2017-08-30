#!/usr/bin/env bash

echo "client deploy to live script"
cf push get-started --docker-image jpwdocker/get-started:part1


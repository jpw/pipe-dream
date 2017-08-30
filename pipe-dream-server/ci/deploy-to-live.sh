#!/usr/bin/env bash

echo "client deploy to live script"
cf push pipe-dream-server --docker-image jpwdocker/pipe-dream-server

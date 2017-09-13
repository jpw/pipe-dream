#!/usr/bin/env bash

echo "client deploy to live script"
cf --version

# log in etc. to cf
cf api https://api.local.pcfdev.io --skip-ssl-validation
cf auth user pass
cf target -o pcfdev-org -s pcfdev-space

# push it
cf push pd-server -o jpwdocker/pipe-dream-server

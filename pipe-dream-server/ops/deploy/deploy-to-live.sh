#!/usr/bin/env bash

echo "client deploy to live script"
cf --version

# log in etc. to cf
cf api https://api.local.pcfdev.io --skip-ssl-validation
cf auth user pass
cf target -o pcfdev-org -s pcfdev-space

# push it
# 	this works:
#cf push pd-server -o jpwdocker/pipe-dream-server
#	lets try with a manifest
cf push pd-server -f ./pipe-dream-server/manifest.yml

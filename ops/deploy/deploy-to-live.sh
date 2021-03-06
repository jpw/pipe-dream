#!/usr/bin/env bash

echo "${APP_DIR} deploy to live script"
cf --version

# log in etc. to cf
cf api https://api.local.pcfdev.io --skip-ssl-validation
cf auth user pass
cf target -o pcfdev-org -s pcfdev-space

# cd out of ops/deploy
cd ../../${APP_DIR}

# Push it
# 	- push Docker Hub app
#cf push pd-server -o jpwdocker/pipe-dream-server

#	- push using CF build pack 
cf push ${APP_DIR} -f ./manifest.yml

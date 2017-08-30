# recent LTS node version
FROM node:boron

RUN apt-get -q update

# necessary for apt update from packages.cloudfoundry.org
RUN apt-get -q install apt-transport-https

# TRY TO INSTALL CF-CLI
# "Add the Cloud Foundry Foundation public key and package repository to your system"
RUN wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | apt-key add -
RUN echo "deb http://packages.cloudfoundry.org/debian stable main" | tee /etc/apt/sources.list.d/cloudfoundry-cli.list

RUN apt-get -q update
RUN apt-get -q install cf-cli

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install --quiet

# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]

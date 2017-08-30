# recent LTS node version
FROM node:boron

# TRY TO INSTALL CF-CLI
# "Add the Cloud Foundry Foundation public key and package repository to your system"
RUN wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
RUN echo "deb http://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list

RUN sudo apt-get update
RUN sudo apt-get install cf-cli

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install


# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]


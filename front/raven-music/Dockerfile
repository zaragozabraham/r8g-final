# Set node image
FROM node:17.9.0-alpine
# Set the working directory to /app
WORKDIR /app
# Copy package.json to our container
ADD package.json  .
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN yarn install
# Copy the current directory contents into the container at /app
ADD . /app
# Executes React project
# RUN yarn start

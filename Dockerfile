# Base image
FROM node:18-alpine

WORKDIR /app

COPY package.json .

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD ["npm", "start"]

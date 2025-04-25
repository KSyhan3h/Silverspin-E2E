# Uses node version 22 as base image 
FROM node:23-slim

# Goes to the app directory 
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*json ./

# Install app dependencies
RUN npm install 

# Copy rest of the app
COPY . . 

# Set port environment variable 
ENV PORT=9000
# Expose port environment variable 
EXPOSE 9000

# Run the app
CMD ["npm", "start"]
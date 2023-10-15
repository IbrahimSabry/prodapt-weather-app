# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire Angular project to the container
COPY . .

# Build the Angular app
RUN npm run build

# Expose a port (e.g., 80) for serving the Angular app
EXPOSE 80

# Start the Angular app when the container starts
CMD ["npm", "start"]

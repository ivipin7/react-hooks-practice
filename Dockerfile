# Base Image
FROM node:22-alpine

# Working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# React/Vite runs on port 5173
EXPOSE 5173

# Start application
CMD ["npm", "run", "dev", "--", "--host"]
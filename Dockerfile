# Use Node.js official image as a build stage
FROM node:22 AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy your app source code
COPY . .

# Build the Angular app
RUN npm run build -- --outputPath=dist

# Use NGINX official image for the final stage
FROM nginx:1.19

# Copy the built Angular app and your custom NGINX configuration (if any)
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY start-nginx.sh /start-nginx.sh

RUN chmod +x /start-nginx.sh

CMD ["/start-nginx.sh"]

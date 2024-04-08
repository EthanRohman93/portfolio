# Use the official NGINX image as a parent image
FROM nginx:alpine

# Copy the static site files to the NGINX server
COPY ./out /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]


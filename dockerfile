# Simple Dockerfile for serving pre-built static files
FROM nginx:alpine

# Copy pre-built files
COPY out/ /usr/share/nginx/html/

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

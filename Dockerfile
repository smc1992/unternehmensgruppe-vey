# Dockerfile for Coolify deployment
# This ensures proper serving of static files with correct MIME types

FROM nginx:alpine

# Copy build files
COPY out/ /usr/share/nginx/html/

# Create nginx configuration for SPA
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    # Proper MIME types \
    types { \
        text/html html htm; \
        text/css css; \
        application/javascript js mjs; \
        application/json json; \
        image/png png; \
        image/jpeg jpg jpeg; \
        image/webp webp; \
        font/woff woff; \
        font/woff2 woff2; \
    } \
    \
    # SPA routing - all requests to index.html \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    # Cache static assets \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#FROM node:10.22.0 as node
#RUN npm install
#RUN npm run build --prod
#FROM nginx:alpine
#COPY  dist/portfolio /usr/share/nginx/html

FROM node:10.22.0 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm i
RUN npm run build


FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/dist/portfolio .
# Containers run nginx with global directives and daemon offnp
ENTRYPOINT ["nginx", "-g", "daemon off;"]

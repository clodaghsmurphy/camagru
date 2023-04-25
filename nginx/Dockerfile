FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /html && chmod 777 /html 

ENTRYPOINT ["nginx", "-g", "daemon off;"]
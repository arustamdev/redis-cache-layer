FROM mongo

COPY ./products.json ./tmp/
COPY importscript.sh /docker-entrypoint-initdb.d/

ENV MONGO_INITDB_ROOT_USERNAME="root"
ENV MONGO_INITDB_ROOT_PASSWORD="secret"
ENV MONGO_INITDB_DATABASE="main"

EXPOSE 27017
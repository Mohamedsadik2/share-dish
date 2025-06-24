# Use default GitHub Codespaces Node image
FROM mcr.microsoft.com/devcontainers/javascript-node:latest

# Install MongoDB
RUN wget -qO - https://pgp.mongodb.com/server-6.0.asc \
    | gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg \
 && echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/debian bookworm/mongodb-org/6.0 main" \
    | tee /etc/apt/sources.list.d/mongodb-org-6.0.list \
 && apt-get update \
 && apt-get install -y mongodb-org \
 && mkdir -p /data/db

# Expose MongoDB port and default app ports
EXPOSE 27017 3000 5000


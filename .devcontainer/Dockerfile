FROM mcr.microsoft.com/devcontainers/javascript-node:18

# Install curl and gnupg
RUN apt-get update && apt-get install -y curl gnupg ca-certificates

# Add MongoDB GPG key and repo directly via curl (no gpg command)
RUN curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
    tee /usr/share/keyrings/mongodb-server-6.0.gpg > /dev/null && \
    echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/debian bookworm/mongodb-org/6.0 main" | \
    tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Install MongoDB
RUN apt-get update && apt-get install -y mongodb-org

# Clean up
RUN rm -rf /var/lib/apt/lists/*

# Prepare data directory
RUN mkdir -p /data/db

EXPOSE 27017

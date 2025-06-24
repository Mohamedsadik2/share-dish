# -----  MongoDB 6.0 for Debian Bookworm  -----------------
# 1. Install core utilities
RUN apt-get update && apt-get install -y \
        curl gnupg ca-certificates

# 2. Fetch the MongoDB public key, convert to a binary keyring
RUN curl -fsSL https://pgp.mongodb.com/server-6.0.asc \
    | gpg --dearmor --batch --yes -o /usr/share/keyrings/mongodb-6.gpg

# 3. Add the repo, wired to the keyring above
RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/mongodb-6.gpg] \
    https://repo.mongodb.org/apt/debian bookworm/mongodb-org/6.0 main" \
    | tee /etc/apt/sources.list.d/mongodb-org-6.list

# 4. Install MongoDB
RUN apt-get update && apt-get install -y mongodb-org

# 5. Clean up & expose port
RUN rm -rf /var/lib/apt/lists/*
RUN mkdir -p /data/db
EXPOSE 27017

# Base image – Node 18 + common tooling
FROM mcr.microsoft.com/devcontainers/javascript-node:18

# ---------- 1. System prerequisites ----------
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        curl \
        gnupg \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# ---------- 2. Add the MongoDB 7.0 APT repo ----------
#   • Debian 12 (bookworm) requires a de-armoured key
#   • We place it in /usr/share/keyrings and reference it in the source line
RUN curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
        gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg && \
    echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg ] \
         https://repo.mongodb.org/apt/debian bookworm/mongodb-org/7.0 main" \
        | tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# ---------- 3. Install MongoDB ----------
RUN apt-get update -y && \
    apt-get install -y mongodb-org && \
    rm -rf /var/lib/apt/lists/*

# ---------- 4. Prepare default data dir ----------
RUN mkdir -p /data/db
EXPOSE 27017

ARG NODE_VERSION=22.15.0
FROM node:${NODE_VERSION}-slim

ENV PORT=5000

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN useradd -m appuser
USER appuser

HEALTHCHECK --interval=10s --timeout=30s --start-period=5s --retries=3 CMD [ "curl", "-f", "http://localhost:5000" ]

EXPOSE 5000
CMD ["node", "src/server.js"]
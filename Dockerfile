# Dockerfile
FROM node:20.4.0-alpin3.18  AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Prisma generate
RUN npx prisma generate

# Build NestJS app
RUN npm run build

# Runtime stage
FROM node:20.4.0-alpin3.18

WORKDIR /usr/src/app

# Copy only built files and node_modules from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER node

CMD ["node", "dist/main.js"]

# Dockerfile
FROM node:20-alpine  AS builder

# Create app directory
WORKDIR /usr/src/app

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
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy only built files and node_modules from the build stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

USER node

EXPOSE 3000

CMD ["node", "dist/main.js"]

# Dockerfile
FROM node:16 AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Prisma generate
RUN npm install prisma
RUN npx prisma generate

# Build NestJS app
RUN npm run build

# Runtime stage
FROM node:16-alpine

WORKDIR /usr/src/app

# Copy only built files and node_modules from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]

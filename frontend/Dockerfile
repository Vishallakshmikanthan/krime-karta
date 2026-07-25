FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:22-alpine AS build
WORKDIR /app
ARG VITE_API_URL=http://localhost:3001/api/v1
ENV VITE_API_URL=$VITE_API_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
RUN npm install -g vite@8.1.1
COPY --from=build /app/dist ./dist
EXPOSE 4173
CMD ["vite", "preview", "--host", "0.0.0.0"]

FROM oven/bun:latest AS build

WORKDIR /app

COPY --from=node:20 /usr/local/bin/node /usr/local/bin/node

COPY . .

RUN bun install --frozen-lockfile

RUN bun prisma:generate

COPY . .

RUN bun build ./server.ts --compile --outfile dist/api

# execute the binary!
CMD ["/app/dist/api"]
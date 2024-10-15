FROM oven/bun:latest AS build

WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile

RUN bun prisma:generate

COPY . .

RUN bun build ./server.ts --compile --outfile dist/api

# execute the binary!
CMD ["/app/dist/api"]
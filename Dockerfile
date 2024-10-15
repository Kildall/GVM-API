FROM oven/bun:latest AS build

WORKDIR /app

COPY . .

RUN bun install --frozen-lockfile

RUN bun prisma:generate

COPY . .

RUN bun build ./server.ts --compile --outfile dist/api

FROM ubuntu:22.04

WORKDIR /app

# copy the compiled binary from the build image
COPY --from=build /app/dist/api /app/api

# execute the binary!
CMD ["/app/api"]
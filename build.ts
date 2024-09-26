console.log("Starting build process...");

const result = await Bun.build({
  entrypoints: ['./server.ts'],
  outdir: './out',
  target: 'node',
  format: 'esm',
  external: ['@prisma/client'],
  plugins: [
    {
      name: 'node-modules',
      setup(build) {
        build.onResolve({ filter: /^node:/ }, args => {
          return { external: true, path: args.path };
        });
      },
    },
  ],
});

console.log("Build completed.");
console.log("Output files:", result.outputs.map(f => f.path));

if (result.success) {
  console.log("Build succeeded!");
} else {
  console.error("Build failed:", result.logs);
}
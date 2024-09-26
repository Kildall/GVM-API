console.log("Starting build process...");

const result = await Bun.build({
  entrypoints: ['./server.ts'],
  outdir: './out',
  target: 'node',
  format: 'esm',
  external: ['@prisma/client']
});

console.log("Build completed.");
console.log("Output files:", result.outputs.map(f => f.path));

if (result.success) {
  console.log("Build succeeded!");
} else {
  console.error("Build failed:", result.logs);
}
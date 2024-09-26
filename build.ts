console.log("Starting build process...");

const result = await Bun.build({
  entrypoints: ['./server.ts'],
  outdir: './out'
});

console.log("Build completed.");
console.log("Output files:", result.outputs.map(f => f.path));

if (result.success) {
  console.log("Build succeeded!");
} else {
  console.error("Build failed:", result.logs);
}
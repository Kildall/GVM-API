await Bun.build({
  entrypoints: ['./server.ts'],
  outdir: './out',
  target: 'browser'
})
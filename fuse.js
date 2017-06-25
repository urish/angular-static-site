const { FuseBox, TypeScriptHelpers } = require('fuse-box');

const fuse = FuseBox.init({
	homeDir: 'src/',
	output: 'dist/$name.js',
	plugins: [ TypeScriptHelpers() ]
});

fuse.dev({ port: 4445 });

fuse.bundle('vendor')
	.hmr()
	.instructions(' ~ main.ts');

fuse.bundle('app')
	.sourceMaps(true)
	.instructions(' !> [main.ts]').watch().hmr();

fuse.run();

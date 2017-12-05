const { FuseBox } = require('fuse-box');

const fuse = FuseBox.init({
	homeDir: 'src/',
	output: 'dist/$name.js',
});

fuse.dev();

fuse.bundle('vendor')
	.hmr()
	.instructions(' ~ main.ts');

fuse.bundle('app')
	.sourceMaps(true)
	.instructions(' !> [main.ts]').watch().hmr();

fuse.run();

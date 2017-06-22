import 'core-js/es7/reflect';
import 'zone.js/dist/zone-node';

import * as fs from 'fs';

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';

import { AppServerModule } from './app/app-server.module';

enableProdMode();

renderModule(AppServerModule, {
	document: fs.readFileSync('src/index.html').toString('utf-8')
}).then((result: string) => {
	fs.writeFileSync('dist/index.html', result, { encoding: 'utf-8' });
});

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { PrebootModule } from 'preboot';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'universal-app' }),
        PrebootModule.withConfig({ appRoot: 'app-root' }),        
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

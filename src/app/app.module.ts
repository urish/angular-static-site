import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule.withServerTransition({ appId: 'universal-app' })],
    bootstrap: [AppComponent]
})
export class AppModule {

}

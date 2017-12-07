import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Hello, {{name}}!</h1>
        Enter your name: <input [(ngModel)]="name" />
    `
})
export class AppComponent {
    name = 'Angular';
}

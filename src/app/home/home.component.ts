import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { Router } from '@angular/router';

@Component({selector: 'app-home',templateUrl: 'home.component.html'})
export class HomeComponent {
    currentUser: User;
    userFromApi: User;

    constructor( private router: Router
    ) {
    }

    ngOnInit() {
    }

    logout() {
        this.router.navigate(['']);
    }

    selectUser() {
        this.router.navigate(['userdata']);
    }
}
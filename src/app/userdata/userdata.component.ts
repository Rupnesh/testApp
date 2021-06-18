import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { Router,ActivatedRoute } from '@angular/router';

@Component({selector: 'app-userdata',templateUrl: 'userdata.component.html'})
export class UserDataComponent {
    currentUser: User;
    userFromApi: User;
    id: any;
    constructor( private router: Router, private activatedRoute: ActivatedRoute
    ) {
        this.id = this.activatedRoute.snapshot.params;
        console.log(this.id)
    }

    ngOnInit() {
    }

    logout() {
        this.router.navigate(['']);
    }
}
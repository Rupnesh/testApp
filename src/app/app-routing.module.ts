import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './userdata/userdata.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'userdata',
        component: UserDataComponent
    },
    { path: 'userdata/:id', component: UserDataComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}


// import { Routes, RouterModule } from '@angular/router';

// //import { HomeComponent } from './home';
// //import { AdminComponent } from './admin';
// import { LoginComponent } from './login/login.component';
// // import { AuthGuard } from './_guards';
// import { Role } from './_models';

// const appRoutes: Routes = [
//     // {
//     //     path: '',
//     //     component: HomeComponent,
//     //     canActivate: [AuthGuard]
//     // },
//     // { 
//     //     path: 'admin', 
//     //     component: AdminComponent, 
//     //     canActivate: [AuthGuard], 
//     //     data: { roles: [Role.Admin] } 
//     // },
//     { 
//         path: 'login', 
//         component: LoginComponent 
//     },

//     // otherwise redirect to home
//     { path: '**', redirectTo: '' }
// ];

// export const routing = RouterModule.forRoot(appRoutes);
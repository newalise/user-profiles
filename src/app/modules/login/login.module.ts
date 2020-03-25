import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "../../components/button/button.module";
import {LoginService} from "./service/login.service";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    RouterModule,
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule {
  constructor() {

  }
}
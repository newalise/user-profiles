import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs/internal/Subscription";
import {LoginService} from "./service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  constructor(private loginService: LoginService) {
  }

  public disabledButton: boolean = true;

  public loginForm = new FormGroup({
    name: new FormControl(""),
    password: new FormControl("")
  });

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(form => {
      form?.name != '' && form?.password != '' ?
        this.disabledButton = false
        :
        this.disabledButton = true
    })
  }

  public onFormSubmit() {
    let formData = {
      name: this.loginForm.get("name").value,
      password: this.loginForm.get("password").value
    };

    this.subscriptions.add(this.loginService.setUserLoginData(formData).subscribe(data => {
      console.log(data);
    }))
  }

  public ngOnDestroy() {
    this.subscriptions && this.subscriptions.unsubscribe();
  }

}

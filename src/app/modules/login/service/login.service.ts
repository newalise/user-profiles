import {Injectable} from "@angular/core";
import {HttpService} from "../../../services/http.service";
import {Observable} from "rxjs/internal/Observable";
import {LoginModel, LoginUserData} from "../model/login.model";

@Injectable()

export class LoginService {
  constructor(private http: HttpService) {
  }

  public setUserLoginData(data: LoginModel):Observable<LoginUserData> {
    return this.http.post<LoginUserData>("user", data);
  }
}
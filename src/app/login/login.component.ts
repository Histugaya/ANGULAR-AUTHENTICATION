import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
 // invalidCaptcha: boolean;
  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }


  // captchaReponse = "";
  // resolved(captchaResponse: string) {
  //   this.captchaReponse = captchaResponse
  // }

  signIn(credentials) {
    // this.authService.checkCaptcha(this.captchaReponse)
    //   .subscribe((response: any) => {
    //     if (response.google_response.success) {
          this.authService.login(credentials)
            .subscribe(result => {
              if (result) {
                debugger
                let returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
                this.router.navigate([returnUrl || '/']);
              }
              else
                this.invalidLogin = true;
            });
        }
  //       else
  //         this.invalidCaptcha = true;
  //     });
  // }
}


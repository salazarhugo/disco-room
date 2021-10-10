import {Component, NgZone, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    public zone: NgZone,
    public auth: AngularFireAuth,
    public authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  trySignInWithGoogle() {
    this.authService.signInWithGoogle().then(res => {
      this.router.navigate(['console/dashboard']);
    })
  }

  trySignInWithGitHub() {
    this.authService.signInWithGitHub().then(res => {
      this.router.navigate(['/console/dashboard']);
    })
  }
}

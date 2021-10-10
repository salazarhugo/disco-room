import {Component, HostListener, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AuthService} from "../services/auth.service";
import {TitleService} from "../services/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public hideFloatingAccount = true;
  prevScrollpos = window.pageYOffset

  constructor(
    public auth: AngularFireAuth,
    public authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public titleService: TitleService,
  ) {
  }

  ngOnInit(): void {
  }

  toggleDarkTheme(checked: boolean) {
    //TODO
  }

  toggleFloatingAccount() {
    this.hideFloatingAccount = !this.hideFloatingAccount;
  }

  tryLogout() {
    this.authService.logout().then((res: any) => {
      this.router.navigate(['../']);
    })
  }

  toggleSideNav() {
    //TODO
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    this.prevScrollpos = window.pageYOffset
  }
}

import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthProviders, AuthMethods, FirebaseAuthState, AngularFireAuth, FirebaseApp } from 'angularfire2';

@Injectable()
export class Auth {
  private authState: FirebaseAuthState;
  private auth: any;

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get uid(): string {
    return this.authState.uid;
  }

  constructor(private auth$: AngularFireAuth,
   @Inject(FirebaseApp) fa : any) {
     this.authState = null;
     this.auth = fa.auth();
  }

  getAuth() {
    this.auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
    return this.auth$;
  }

  login(credentials: { email: string, password: string }) {
    if (credentials.email === null || credentials.password === null) {
      return Promise.reject("Please insert credentials");
    } else {
      return this.auth$.login({
        email: credentials.email,
        password: credentials.password
      }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      });
    }
  }

  register(credentials: { email: string, password: string }) {
    if (credentials.email === null || credentials.password === null) {
      return Promise.reject("Please insert credentials");
    } else {
      return this.auth$.createUser({
        email: credentials.email,
        password: credentials.password
      });
    }
  }

  signOut() {
    this.auth$.logout();
  }
}
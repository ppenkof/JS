import { Injectable, signal } from '@angular/core';
import { User, ApiUser } from '../../models';
import { tap, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private _isLoggedIn = signal<boolean>(false);
  private _currentUser = signal<User | null>(null); // Adjust type as necessary
  

  public isLoggedIn = this._isLoggedIn.asReadonly();
  public currentUser = this._currentUser.asReadonly();  

constructor(private httpClient: HttpClient) {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      this._currentUser.set(user);
      this._isLoggedIn.set(true);
    }
  }

login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/login`, { email, password }, {
      withCredentials: true
    }).pipe(
      map(apiUser => this.mapApiUserToUser(apiUser)), 
      tap(user => {
        this._currentUser.set(user);
        this._isLoggedIn.set(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
      })
    ); 
}

register(username: string, email: string, phone: string, password: string, rePassword: string): Observable<User> {
  return this.httpClient.post<ApiUser>(`${this.apiUrl}/register`, {
    username,
    email,
    tel: phone,
    password,
    rePassword
  }, {
      withCredentials: true
    }).pipe(
        map(apiUser => this.mapApiUserToUser(apiUser)),
        tap(user => {
            this._currentUser.set(user);
            this._isLoggedIn.set(true);
            localStorage.setItem('currentUser', JSON.stringify(user));
        })
);

}

logout(): void {
    this._currentUser.set(null);
    this._isLoggedIn.set(false);
    localStorage.removeItem('currentUser');
  }

  getCurrentUserId(): string | null {
    return this._currentUser()?.id || null;
  }

  update(user: User): void {
    const userIndex = this._users.findIndex(u => u.id === user.id);

    if (userIndex !== -1) {
        this._users[userIndex] = user;
    }

    this._currentUser.set(user);

    localStorage.setItem('currentUser', JSON.stringify(user));
}
}



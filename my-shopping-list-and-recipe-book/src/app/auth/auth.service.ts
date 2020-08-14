
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }


    signup(email: string, password: string) {
       return this.http.post<AuthResponseData>('add you firebase endpoint for sign up with email/password',
            { 
              email: email,
              password: password,
              returnSecureToken: true
            }
        );

    }
}

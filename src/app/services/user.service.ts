import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    loggedIn(data){
		if (data.email == "admin@mailinator.com" && data.password == "admin123") {
			return {
				code : 200,
				message : "Login Successful",
				data : data
			};
		}else{
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}

    get isLoggedIn() {
        return localStorage.getItem('userInfo') != null;
    }
}
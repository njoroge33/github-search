import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
 
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
    this.username = 'njoroge33'
  }

  getProfile() {
    return this.http.get('https://api.github.com/users/' + this.username, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }
}

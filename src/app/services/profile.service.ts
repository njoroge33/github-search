import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username: string;
  repoName: string;
 
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos', ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}

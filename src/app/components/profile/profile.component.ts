import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userRepos:any;
  imageWidth: number = 150;
  imageHeight: number = 200;

  constructor(private profileService: ProfileService) { 
    this.profileService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }

  ngOnInit() {
  }

}

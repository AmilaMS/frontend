import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Login01';
  roles: string[];
  authority :string;

  constructor(private tokenStorage: TokenStorageService, private permissionsService: NgxPermissionsService, private http: HttpClient){}

  ngOnInit(){

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role['authority'] === 'ROLE_MANAGER') {
          this.authority ='manager' ;
        }else if(role['authority'] === 'ROLE_DEPMANAGER'){
          this.authority = 'depmanager';
        }
        else{
          this.authority = 'trainer';
        }

      });
    }

  }
}


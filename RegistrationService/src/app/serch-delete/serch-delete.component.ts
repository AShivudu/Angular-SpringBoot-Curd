import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-serch-delete',
  templateUrl: './serch-delete.component.html',
  styleUrls: ['./serch-delete.component.css']
})
export class SerachDeleteComponent implements OnInit {

  users:any;
  email!: string;
  
  constructor(private service:UserRegistrationService) { }


public delteUser(id:number){
 let resp= this.service.deleteUser(id);
 resp.subscribe((data)=>this.users=data);
}

public findUserByEmailId(){
  let resp= this.service.getUserByEmail(this.email);
  resp.subscribe((data)=>this.users=data);
 }

  ngOnInit() {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
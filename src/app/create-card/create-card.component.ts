import { Component, OnInit } from '@angular/core';
import { CreateCardService } from './create-card.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [CreateCardService, DataService]
})
export class CreateCardComponent implements OnInit {

  private isAuthentication;

  constructor(private createCardService: CreateCardService, fb: FormBuilder, public router : Router) {
  }

  ngOnInit(): void {
    this.systemPing();
  }
  systemPing(): Promise<any> {
    return this.createCardService.getSystemPing()
      .toPromise()
      .then((result) => {
        var Id;
        Id = result['participant'];
        console.log(Id);
        if (Id == null) {
          return;
        }
        else {
          let types = Id.split('.');
          let temptype = types[4]; //with name
          let nametype = temptype.split('#');
          let type = nametype[0];
          console.log('type===  ' + type);
          if(type=='Organization'){
            this.router.navigate(['/dashboard3']);
          }else if(type=='User'){
            this.router.navigate(['/dashboard2']);
          }else if(type=='School'){
            this.router.navigate(['/dashboard4']);
          }else if(type=='Enterprise'){
            this.router.navigate(['/dashboard5']);
          }
        }
        this.isAuthentication = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
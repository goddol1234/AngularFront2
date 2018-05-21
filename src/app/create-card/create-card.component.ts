import { Component, OnInit } from '@angular/core';
import { CreateCardService } from './create-card.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [CreateCardService, DataService]
})
export class CreateCardComponent implements OnInit {

  private isAuthentication;

  constructor(private createCardService: CreateCardService, fb: FormBuilder) {
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
        if (Id == null) {
          this.isAuthentication = false;
          return;
        }
        this.isAuthentication = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
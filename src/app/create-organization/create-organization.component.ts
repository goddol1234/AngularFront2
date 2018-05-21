import { Component, OnInit } from '@angular/core';
import { CreateOrgService } from './create-organization.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css'],
  providers: [CreateOrgService]
})
export class CreateOrganizationComponent implements OnInit {
  private isAuthentication;
  private currentType;
  private myForm: FormGroup;
  private tmpparticipant;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;
  orgId = new FormControl("", Validators.required);
  orgName = new FormControl("", Validators.required);
  address = new FormControl("", Validators.required);
  contactAdress = new FormControl("", Validators.required);
  homepage = new FormControl("", Validators.required);
  discription = new FormControl("", Validators.required);
  requestResumeList = new FormControl("", Validators.required);

  constructor(private createOrgService: CreateOrgService, fb: FormBuilder) {
    this.myForm = fb.group({
      orgId: this.orgId,
      orgName: this.orgName,
      address: this.address,
      contactAdress: this.contactAdress,
      homepage: this.homepage,
      discription: this.discription,
      requestResumeList: this.requestResumeList
    });
  };
  ngOnInit() {
  }


  addParticipant(form: any) {
    this.tmpparticipant = {
      $class: "hansung.ac.kr.participants.Organization",
      "orgId": this.orgId.value,
      "orgName": this.orgName.value,
      "address": this.address.value,
      "contactAdress": this.contactAdress.value,
      "homepage": this.homepage.value,
      "discription": this.discription.value,
      "requestResumeList": this.requestResumeList.value
    };

    const participant = {
      $class: "hansung.ac.kr.participants.Organization",
      "orgId" : this.orgId.value,
      "orgName": this.orgName.value,
      "address": this.address.value,
      "contactAdress": this.contactAdress.value,
      "homepage": this.homepage.value,
      "discription": this.discription.value,
      "requestResumeList": this.requestResumeList.value
    }

    const issueParticipant = {
      participant: "hansung.ac.kr.participants.Organization#" + this.orgId.value,
      userID: this.orgName.value,
      options: {}
    };
    
    this.createOrgService.addParticipant(participant)
      .then(() => {
        console.log(issueParticipant);
        return this.createOrgService.issueParticipant(issueParticipant).then((result) => {

          return this.createOrgService.importCard(result, this.orgName.value).then(()=>{
            history.back();
          });
        });
      })
      .catch((error) => {
        if (error == 'Server error') {
        }
        else {
        }
      });
  
    this.myForm.setValue({
      "userId": null,
      "userName": null,
      "dob": null,
      "address": null,
      "phoneNumber": null,
      "email": null,
      "isPublic": null,
      "isHuntingForJob": null,
      "participantsType": null
    });
  }

}

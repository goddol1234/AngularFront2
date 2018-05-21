import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreateOrgService {

    constructor(private http : HttpClient){
    }


    public addParticipant(itemToAdd: any) {
        return this.http.post('http://13.124.13.55:3001/api/Organization', itemToAdd).toPromise();
    }

    public issueParticipant( identity : any ){
        return this.http.post('http://13.124.13.55:3001/api/system/identities/issue',identity, {responseType: 'blob'}).toPromise();
    }

    public importCard(cardData, userId : string){
        const file = new File([cardData], userId +'.card', {type:'application/octet-stream', lastModified:Date.now()});
        const formData = new FormData();
        formData.append('card',file);
        const headers = new HttpHeaders();
        headers.set('Content-Type','multipart/form-data');
        return this.http.post('http://13.124.13.55:3000/api/wallet/import', formData , {withCredentials : true , headers}).toPromise();
    }
}
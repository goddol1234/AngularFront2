import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreateOrgService {
    // private baseUrl ='http://localhost:';
    private baseUrl ='http://13.209.67.207:';
    private adminUrl= this.baseUrl + '3001/api/';
    private multiUrl= this.baseUrl + '3000/api/';
    constructor(private http : HttpClient){
    }


    public addParticipant(itemToAdd: any) {
        return this.http.post(this.adminUrl +'Organization', itemToAdd).toPromise();
    }

    public issueParticipant( identity : any ){
        return this.http.post(this.adminUrl +'system/identities/issue',identity, {responseType: 'blob'}).toPromise();
    }

    public importCard(cardData, userId : string){
        const file = new File([cardData], userId +'.card', {type:'application/octet-stream', lastModified:Date.now()});
        const formData = new FormData();
        formData.append('card',file);
        const headers = new HttpHeaders();
        headers.set('Content-Type','multipart/form-data');
        return this.http.post(this.multiUrl + 'wallet/import', formData , {withCredentials : true , headers}).toPromise();
    }
}

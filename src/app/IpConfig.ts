export class IpConfig {

     public  fixedIp : string = 'http://13.125.196.66';

     public getIp() : any {
		return this.fixedIp;
	}
	
     public getIpAuthGitHub() : any {
		return this.fixedIp + ':3000/auth/github';
	}

     public getApiIp() : any {
		 return this.fixedIp + ':3000/api/';
     }
}

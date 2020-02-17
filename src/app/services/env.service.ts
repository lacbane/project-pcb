import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://import-export-pcb.local:8088/app_dev.php/';
  API_CLIENT_ID = '1_3k6890qja0e888os4sks0sgk0gco4gcc8csocokks0g88gogk0';
  API_CLIENT_SECRET = '1d16wa3zskbo4ok4kw8w08k4o4ocg4sgskgso44c0go8sgo448';
  API_USER_GRANT_TYPE = 'password';
  
  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferingServicesService {

  private apiUrl="http://localhost:9099/services"
  constructor(private http:HttpClient) { }

  getAllServices():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  getServiceById(id:number):Observable<any>{
    return this.http.get(this.apiUrl+`/${id}`)
  }

  addNewService(serviceData:any):Observable<any>{
    return this.http.post(this.apiUrl,serviceData)
  }

  editServiceById(id:number, serviceData:any):Observable<any>{
    return this.http.put(this.apiUrl+`/${id}`, serviceData)
  }

  deleteServiceById(id:number):Observable<any>{
    return this.http.delete(this.apiUrl+`/${id}`)
  }
  
}

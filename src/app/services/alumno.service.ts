import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private _http : HttpClient) { }
  
  agregarAlumno(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/alumno',data);
  }
  editarAlumno(id: number,data:any): Observable<any>{
    return this._http.put(`http://localhost:3000/alumno/${id}`,data);
  }
  
  getAlumno(): Observable<any>{
    return this._http.get('http://localhost:3000/alumno');
  }
  eliminarAlumno(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/alumno/${id}`);
  }
}

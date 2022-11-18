import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isregistro } from '../models/isregistro';
import { Mensaje } from '../models/mensaje';
import { Nombrep } from '../models/nombrep';
import { Producto } from '../models/producto';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://api-rest-deseos-user.herokuapp.com/api/user/'
  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<any>{
    return this.http.get(this.url)
  }
  eliminarUsuario1(id: string): Observable<any>{
    return this.http.delete(this.url + id);
   }
   guardarUsuario(usuario: Usuario):Observable<any>{
    return this.http.post(this.url, usuario);
   }
   obtenerUsuario(id: string): Observable<any>{
    return this.http.get(this.url + id);
   }
   editarUsuario(id: string, usuario: Usuario): Observable <any>{
    return this.http.put(this.url + id, usuario)
   }
   editarMensaje(id: string, mensaje: Mensaje ): Observable <any>{
    return this.http.put(this.url + id, mensaje)
   }
   guardarProductoUsuario(id: string, nombrep: Nombrep): Observable <any>{
    return this.http.put(this.url + id, nombrep)
   }
   guardarIsRegistro(id: string,isregistro : Isregistro ): Observable <any>{
    return this.http.put(this.url + id, isregistro)
   }

} 

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url= 'https://api-rest-deseos.herokuapp.com/api/deseos/';
  constructor(private htttp: HttpClient) {
    
   }
   getProductos(): Observable<any>{
   return this.htttp.get(this.url)
  }
  eliminarProducto(id: string): Observable<any>{
    return this.htttp.delete(this.url + id);
   }
   guardarProducto(producto: Producto):Observable<any>{
    return this.htttp.post(this.url, producto);
   }
   obtenerProducto(id: string): Observable<any>{
    return this.htttp.get(this.url + id);
   }
   editarDeseo(id: string, producto: Producto): Observable <any>{
    return this.htttp.put(this.url + id, producto)
   }
}

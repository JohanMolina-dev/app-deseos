import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listMensajes: Usuario [] = [];
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.obtenerMensajes();
  }
  obtenerMensajes(){
    this.usuarioService.getUsuarios().subscribe(data =>{
      this.listMensajes = data;
    }, error =>{
      console.log(error)
    })
  }

}

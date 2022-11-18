import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
   listUsuarios: Usuario [] = [];
  constructor(private _usuarioService: UsuarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data =>{
      this.listUsuarios = data;
      console.log(data)
    }, error =>{
      console.log(error);
    })
  }
  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario1(id).subscribe(data =>{
      this.toastr.error('El usuario fue eliminado :(', 'Usuario eliminado')
      this.obtenerUsuarios();
    }, error =>{
      console.log(error);
    })

  }

}

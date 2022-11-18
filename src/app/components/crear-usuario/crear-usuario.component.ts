import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  userForm: FormGroup;
  titulo = 'Crear Usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private usuarioService: UsuarioService,
              private aRouter: ActivatedRoute) {
    this.userForm = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      encrypt:['', Validators.required],
      imagen:['', Validators.required],
    
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarUsuario(){
    
    const USUARIO: Usuario = {
      nombre: this.userForm.get('nombre')?.value,
      apellido: this.userForm.get('apellido')?.value,
      encrypt: this.userForm.get('encrypt')?.value,
      imagen: this.userForm.get('imagen')?.value,
      isregistro: this.userForm.get('isregistro')?.value,
    }
    if(this.id !== null){
      this.usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
        this.toastr.info('Usuario' +" "+ USUARIO.nombre +" "+'Editado con exito', 'Edición Exitosa')
        this.router.navigate(['/listar-usuarios']);
      }, error =>{
        console.log(error);
        this.userForm.reset();
      })

    }else{
      console.log(USUARIO);

      this.usuarioService.guardarUsuario(USUARIO).subscribe(data => {
        this.toastr.success('Usuario' +" "+ USUARIO.nombre +" "+'Registrado con exito', 'Registro Exitoso')
        this.router.navigate(['/listar-usuarios'])
      }, error =>{
        console.log(error);
        this.userForm.reset();
      })
    }
    
    
  }
  esEditar(){
    if(this.id !==null){
      this.titulo = 'Editar Usuario';
      this.usuarioService.obtenerUsuario(this.id).subscribe(data =>{
        this.userForm.setValue({
          nombre: data.nombre,
          apellido:data.apellido,
          encrypt:data.encrypt,
          imagen:data.imagen,

        })
      })
    }
  }

}

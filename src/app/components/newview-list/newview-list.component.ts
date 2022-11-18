import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Isregistro } from 'src/app/models/isregistro';
import { Mensaje } from 'src/app/models/mensaje';
import { Nombrep } from 'src/app/models/nombrep';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-newview-list',
  templateUrl: './newview-list.component.html',
  styleUrls: ['./newview-list.component.css']
})
export class NewviewListComponent implements OnInit {
  userMsg : FormGroup;
  idUser : string |null;
  nombre!: String;
  apellido!: string | null;
  isSelected!: boolean | null;
  nombrep!: Nombrep;
  //idProducto = string | null;
  listProductos : Producto [] = [];
  usuarioNew!: Usuario | null;


  constructor(private _productoService: ProductoService,
              private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router,
              private aRouter: ActivatedRoute,
              private toastr: ToastrService) {
                this.idUser = this.aRouter.snapshot.paramMap.get('id');
                this.userMsg = this.fb.group({
                  mensaje:['', Validators.required]
                })
               }

  ngOnInit(): void {
    this.obtenerUsuario();
    this.obtenerProductos();
    
  }

  
  displayStyle = "none";
  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      this.listProductos = data;
      console.log(data);
      console.log(this.idUser);
    }, error =>{
      console.log(error);
    })
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.router.navigate([''])
    
  }

  obtenerUsuario(){
    if(this.idUser !== null){
      this.usuarioService.obtenerUsuario(this.idUser).subscribe(data =>{
        this.usuarioNew = data;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.isSelected = data.isregistro;
        this.nombrep = data.nombrep;

        //return data;
        console.log(this.nombre, this.apellido);
        console.log(this.usuarioNew);
      })
      
      

  }
  
}
colocarMensaje(){
  const MENSAJE: Mensaje = {
    mensaje:this.userMsg.get('mensaje')?.value,
  }
  if(this.idUser !== null){
    this.usuarioService.editarMensaje(this.idUser,MENSAJE ).subscribe(data =>{
     console.log(Mensaje);
    })
    
    

}

}

guardarProductoUser(id: any){

  this._productoService.obtenerProducto(id).subscribe(data =>{
    const NOMBREp :Nombrep ={
      nombrep: data.nombrep,
    }
    
    if(this.idUser !== null && NOMBREp !== null){
      this.usuarioService.guardarProductoUsuario(this.idUser,NOMBREp).subscribe(data =>{
        this.toastr.error('El producto fue Guardado :(', 'Producto Guardado');
        this.registrarUser();
        this.eliminarProducto(id);
        this.obtenerUsuario();
      })
    }
    console.log(NOMBREp)
  } )

}

registrarUser(){
  const REGISTRO : Isregistro ={
    isregistro : true,
  }
  if(this.idUser !== null){
    this.usuarioService.guardarIsRegistro(this.idUser, REGISTRO).subscribe(data =>{
      this.toastr.info("Se ha registrado con exito tu deseo", "Deseo Registrado")
    })
  }
 
}

  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('El producto fue eliminado :(', 'Producto eliminado')
      this.obtenerProductos();
    }, error =>{
      console.log(error);
    })

  }

  

  
  

}

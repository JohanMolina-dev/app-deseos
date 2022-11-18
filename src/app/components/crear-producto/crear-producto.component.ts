import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear Deseo';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute ) { 
    this.productoForm = this.fb.group({
      nombrep:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarProducto(){
    console.log(this.productoForm);
    const PRODUCTO: Producto ={
      nombrep: this.productoForm.get('nombrep')?.value
    }
    if(this.id !== null){
      this._productoService.editarDeseo(this.id, PRODUCTO).subscribe(data =>{
        this.toastr.success('El deseo'+" "+ PRODUCTO.nombrep+" "+ 'fue Editado con exito', 'Edición exitosa')
      this.router.navigate(['/listar-deseos'])
      }, error =>{
        console.log(error);
        this.productoForm.reset();
      })

    }else{
      console.log(PRODUCTO)
      this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
      this.toastr.success('El deseo'+" "+ PRODUCTO.nombrep+" "+ 'fue registrado con exito', 'Registro exitoso')
      this.router.navigate(['/listar-deseos'])
      }, error =>{
        console.log(error);
        this.productoForm.reset();
      })
    }
   
    
    
  }
  esEditar(){
    if(this.id !==null){
      this.titulo = 'Editar Usuario';
      this._productoService.obtenerProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          nombrep: data.nombrep,
        })
      })
    }

}
}

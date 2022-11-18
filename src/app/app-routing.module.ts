import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { NewviewListComponent } from './components/newview-list/newview-list.component';

const routes: Routes  = [
  {path: 'listar-usuarios', component: ListarUsuarioComponent},
  {path: 'listar-deseos', component: ListarProductoComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
  {path: 'view-list/:id', component: NewviewListComponent},
  {path: 'view-list', component: NewviewListComponent},
  {path: '', component: BlogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

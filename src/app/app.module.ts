import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { NewviewListComponent } from './components/newview-list/newview-list.component';
import { BlogComponent } from './components/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    CrearUsuarioComponent,
    ListarProductoComponent,
    ListarUsuarioComponent,
    NewviewListComponent,
    BlogComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

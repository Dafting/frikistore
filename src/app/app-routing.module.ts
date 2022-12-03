import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FrikitiendaProductosComponent } from './frikitienda-productos/frikitienda-productos.component'
import { FrikitiendaContactoComponent } from './frikitienda-contacto/frikitienda-contacto.component'

const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  {
    path: 'productos',
    component: FrikitiendaProductosComponent,
  },
  {
    path: 'direccion',
    component: FrikitiendaContactoComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

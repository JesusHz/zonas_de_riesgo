import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterPageModule)
  },
  {
    path: "add-post",
    loadChildren: () =>
      import("./add-post/add-post.module").then(m => m.AddPostPageModule)
  },
  {
    path: "edit-post/:id",
    loadChildren: () =>
      import("./edit-post/edit-post.module").then(m => m.EditPostPageModule)
  },
  {
    path: "municipios",
    loadChildren: () => import('./municipios/municipios.module').then( m => m.MunicipiosPageModule)
  },
  {
    path: "add-municipio",
    loadChildren: () => import('./add-municipio/add-municipio.module').then( m => m.AddMunicipioPageModule)
  },
  {
    path: "edit-municipio/:id",
    loadChildren: () => import('./edit-municipio/edit-municipio.module').then( m => m.EditMunicipioPageModule)
  },
  {
    path: "elevaciones",
    loadChildren: () => import('./elevaciones/elevaciones.module').then( m => m.ElevacionesPageModule)
  },
  {
    path: "edit-elevacion/:id",
    loadChildren: () => import('./edit-elevacion/edit-elevacion.module').then( m => m.EditElevacionPageModule)
  },
  {
    path: "add-elevacion",
    loadChildren: () => import('./add-elevacion/add-elevacion.module').then( m => m.AddElevacionPageModule)
  },
  {
    path: 'rios',
    loadChildren: () => import('./rios/rios.module').then( m => m.RiosPageModule)
  },
  {
    path: 'add-rios',
    loadChildren: () => import('./add-rios/add-rios.module').then( m => m.AddRiosPageModule)
  },
  {
    path: 'edit-rios/:id',
    loadChildren: () => import('./edit-rios/edit-rios.module').then( m => m.EditRiosPageModule)
  },
  {
    path: 'cuerpos',
    loadChildren: () => import('./cuerpos/cuerpos.module').then( m => m.CuerposPageModule)
  },
  {
    path: 'add-cuerpos',
    loadChildren: () => import('./add-cuerpos/add-cuerpos.module').then( m => m.AddCuerposPageModule)
  },
  {
    path: 'edit-cuerpos/:id',
    loadChildren: () => import('./edit-cuerpos/edit-cuerpos.module').then( m => m.EditCuerposPageModule)
  },
  {
    path: 'poblados',
    loadChildren: () => import('./poblados/poblados.module').then( m => m.PobladosPageModule)
  },
  {
    path: 'edit-poblados/:id',
    loadChildren: () => import('./edit-poblados/edit-poblados.module').then( m => m.EditPobladosPageModule)
  },
  {
    path: 'add-poblados',
    loadChildren: () => import('./add-poblados/add-poblados.module').then( m => m.AddPobladosPageModule)
  },
  {
    path: 'mas-extensos',
    loadChildren: () => import('./mas-extensos/mas-extensos.module').then( m => m.MasExtensosPageModule)
  },
  {
    path: 'edit-mas-extensos/:id',
    loadChildren: () => import('./edit-mas-extensos/edit-mas-extensos.module').then( m => m.EditMasExtensosPageModule)
  },
  {
    path: 'add-mas-extensos',
    loadChildren: () => import('./add-mas-extensos/add-mas-extensos.module').then( m => m.AddMasExtensosPageModule)
  },
  {
    path: 'menos-extensos',
    loadChildren: () => import('./menos-extensos/menos-extensos.module').then( m => m.MenosExtensosPageModule)
  },
  {
    path: 'add-menos-extensos',
    loadChildren: () => import('./add-menos-extensos/add-menos-extensos.module').then( m => m.AddMenosExtensosPageModule)
  },
  {
    path: 'edit-menos-extensos/:id',
    loadChildren: () => import('./edit-menos-extensos/edit-menos-extensos.module').then( m => m.EditMenosExtensosPageModule)
  },
  {
    path: 'industrializados',
    loadChildren: () => import('./industrializados/industrializados.module').then( m => m.IndustrializadosPageModule)
  },
  {
    path: 'add-industrializados',
    loadChildren: () => import('./add-industrializados/add-industrializados.module').then( m => m.AddIndustrializadosPageModule)
  },
  {
    path: 'edit-industrializados/:id',
    loadChildren: () => import('./edit-industrializados/edit-industrializados.module').then( m => m.EditIndustrializadosPageModule)
  },
  {
    path: 'riesgos',
    loadChildren: () => import('./riesgos/riesgos.module').then( m => m.RiesgosPageModule)
  },
  {
    path: 'asentamientos',
    loadChildren: () => import('./asentamientos/asentamientos.module').then( m => m.AsentamientosPageModule)
  },
  {
    path: 'edit-asentamientos/:id',
    loadChildren: () => import('./edit-asentamientos/edit-asentamientos.module').then( m => m.EditAsentamientosPageModule)
  },
  {
    path: 'add-asentamientos',
    loadChildren: () => import('./add-asentamientos/add-asentamientos.module').then( m => m.AddAsentamientosPageModule)
  },
  {
    path: 'desplazamientos',
    loadChildren: () => import('./desplazamientos/desplazamientos.module').then( m => m.DesplazamientosPageModule)
  },
  {
    path: 'add-desplazamientos',
    loadChildren: () => import('./add-desplazamientos/add-desplazamientos.module').then( m => m.AddDesplazamientosPageModule)
  },
  {
    path: 'edit-desplazamientos/:id',
    loadChildren: () => import('./edit-desplazamientos/edit-desplazamientos.module').then( m => m.EditDesplazamientosPageModule)
  },
  {
    path: 'fracturas',
    loadChildren: () => import('./fracturas/fracturas.module').then( m => m.FracturasPageModule)
  },
  {
    path: 'add-fracturas',
    loadChildren: () => import('./add-fracturas/add-fracturas.module').then( m => m.AddFracturasPageModule)
  },
  {
    path: 'edit-fracturas/:id',
    loadChildren: () => import('./edit-fracturas/edit-fracturas.module').then( m => m.EditFracturasPageModule)
  },
  {
    path: 'erupciones',
    loadChildren: () => import('./erupciones/erupciones.module').then( m => m.ErupcionesPageModule)
  },
  {
    path: 'add-erupciones',
    loadChildren: () => import('./add-erupciones/add-erupciones.module').then( m => m.AddErupcionesPageModule)
  },
  {
    path: 'edit-erupciones/:id',
    loadChildren: () => import('./edit-erupciones/edit-erupciones.module').then( m => m.EditErupcionesPageModule)
  },
  {
    path: 'inundaciones',
    loadChildren: () => import('./inundaciones/inundaciones.module').then( m => m.InundacionesPageModule)
  },
  {
    path: 'add-inundaciones',
    loadChildren: () => import('./add-inundaciones/add-inundaciones.module').then( m => m.AddInundacionesPageModule)
  },
  {
    path: 'edit-inundaciones/:id',
    loadChildren: () => import('./edit-inundaciones/edit-inundaciones.module').then( m => m.EditInundacionesPageModule)
  },
  {
    path: 'inviernos',
    loadChildren: () => import('./inviernos/inviernos.module').then( m => m.InviernosPageModule)
  },
  {
    path: 'add-inviernos',
    loadChildren: () => import('./add-inviernos/add-inviernos.module').then( m => m.AddInviernosPageModule)
  },
  {
    path: 'edit-inviernos/:id',
    loadChildren: () => import('./edit-inviernos/edit-inviernos.module').then( m => m.EditInviernosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const personRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(personRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

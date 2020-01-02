import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadExcelToDBComponent } from './components/upload-excel-to-db/upload-excel-to-db.component';

const routes: Routes = [
  { path: '', redirectTo: 'uploadExcelToDB', pathMatch: 'full' },
  { path: 'uploadExcelToDB', component: UploadExcelToDBComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

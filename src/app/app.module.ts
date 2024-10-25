import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgregarEditarComponent } from './agregar-editar/agregar-editar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

 import { NombreCompletoPipe} from './pipes/nombre-completo.pipe';
import { TamanoDirective } from './directives/tamano.directive'; 



@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComponent,
    NombreCompletoPipe,
    TamanoDirective 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
   HttpClientModule,
   MatSortModule,
   MatPaginatorModule,
   MatTableModule 

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

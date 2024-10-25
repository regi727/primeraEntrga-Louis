import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarEditarComponent } from './agregar-editar/agregar-editar.component';
import { AlumnoService } from './services/alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'appWeb';

  showFiller = false;
  displayedColumns: string[] = [
    'id',
    'nombre',
    'email',
    'direccion',
    'pais',
    'genero',
    'accion'
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 

  constructor(
    private _dialog: MatDialog,
    private _alumnoService: AlumnoService
  ) {}

  ngOnInit(): void {
    this.getAlumno();
  }
 
 
  abrirAgregarEditar() {
    const dialogRef = this._dialog.open(AgregarEditarComponent);
     dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAlumno();
        }
      },
    }); 
  }
  
 
 
  getAlumno() {
    this._alumnoService.getAlumno().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  eliminarAlumno(id: number) {
    this._alumnoService.eliminarAlumno(id).subscribe({
      next: (res) => {
        alert('El alumno fue eliminado con exito');
        this.getAlumno();
      },
      error: console.log,
    });
  }
  editarAlumno(data: any) {
    const dialogRef = this._dialog.open(AgregarEditarComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAlumno();
        }
      },
    });
  }
}

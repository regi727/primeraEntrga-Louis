import { Component,Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../services/alumno.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.scss'],
})
export class AgregarEditarComponent implements OnInit {
  formulario: FormGroup;
  generos: string[] = ['Masculino', 'Femenino'];
  paises: string[] = ['Argentina', 'Chile', 'Brasil', 'Haiti', 'USA'];

  validarNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  constructor(
    private _fb: FormBuilder,
    private _alumnoService: AlumnoService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<AgregarEditarComponent>
  ) {
    this.formulario = this._fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validarNombre),

          Validators.minLength(3),
        ],
      ],
      apellido: [
        '',
        [Validators.required, Validators.pattern(this.validarNombre)],
      ],
      direccion: ['', [Validators.required]],
      pais: ['', [Validators.required]],

      email: ['', [Validators.required, Validators.email]],
      genero: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
     this.formulario.patchValue(this.data);
  }

  agregar() {
    if (this.formulario.valid) {
      if (this.data) {
        this._alumnoService
          .editarAlumno(this.data.id, this.formulario.value)
          .subscribe({
            next: (val: any) => {
              alert('El alumno fue actualizado con exito');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._alumnoService.agregarAlumno(this.formulario.value).subscribe({
          next: (val: any) => {
            this._snackBar.open('El alumno fue agregado correctamente.', '', {
              duration: 1500,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

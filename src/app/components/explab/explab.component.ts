import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-explab',
  templateUrl: './explab.component.html',
  styleUrls: ['./explab.component.scss']
})
export class ExplabComponent implements OnInit {
  info:any;
  Logged = false;
  currentUser: any;
  form: FormGroup;

  constructor(private datos: LoginService, private fb: FormBuilder) {
    this.form = this.fb.group({
      Empresa: [''],
      Puesto: [''],
      Año: [''],
      UrlDelLogo: ['']
      });
  }
    ngOnInit(): void {
      this.datos.ObtenerDatos('Explab').subscribe((data) => {
        this.info = data;
      });
      this.form.patchValue(this.info), this.currentUser = this.datos.UsuarioAutenticado;
    if (this.currentUser && this.currentUser.accessToken) {
      this.Logged = true;
    } else {
      this.Logged = false;
    };
    
}
}
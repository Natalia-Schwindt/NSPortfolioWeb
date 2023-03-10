import { Component, OnInit, Input} from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {
  info:any;
  Logged = false;
  currentUser: any;
  form: FormGroup;

  constructor(private datos: LoginService, private fb: FormBuilder) {
    //this.Logged = this.datos.isAuthenticated();
    this.form = this.fb.group({
      carrera: [''],
      Institución: [''],
      Año: [''],
      UrlDelLogo: ['']
      });
  }
    ngOnInit(): void {
      this.datos.ObtenerDatos('Skills').subscribe((data) => {
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
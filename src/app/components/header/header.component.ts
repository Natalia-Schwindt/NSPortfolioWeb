import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    @Input() isLoggedIn: boolean = false;

    constructor() {}

    ngOnInit(): void {}
};


document.addEventListener('DOMContentLoaded', function() {
  var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
      overlay2 = document.getElementById('overlay2'),
      popup2 = document.getElementById('popup2'),
      btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2')
  
  if (btnAbrirPopup2 && overlay2 && popup2 && btnCerrarPopup2) {
      btnAbrirPopup2.addEventListener('click', function(){
    overlay2 && overlay2.classList.add('active');
    popup2 && popup2.classList.add('active');
      });
    
      btnCerrarPopup2.addEventListener('click', function(){
        overlay2 && overlay2.classList.remove('active');
        popup2 && popup2.classList.remove('active');
      });
    }
  });
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

}
document.addEventListener('DOMContentLoaded', function() {
  var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup')

if (btnAbrirPopup && overlay && popup && btnCerrarPopup) {
  btnAbrirPopup.addEventListener('click', function(){
overlay && overlay.classList.add('active');
popup && popup.classList.add('active');
  });

  btnCerrarPopup.addEventListener('click', function(){
    overlay && overlay.classList.remove('active');
    popup && popup.classList.remove('active');
  });
}
});
import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

}
document.addEventListener('DOMContentLoaded', function() {
  var  btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
      btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
      btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
      btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
      btnAbrirPopup7 = document.getElementById('btn-abrir-popup7'),
      btnAbrirPopup8 = document.getElementById('btn-abrir-popup8'),
      btnAbrirPopup9 = document.getElementById('btn-abrir-popup9'),
      btnAbrirPopup10 = document.getElementById('btn-abrir-popup10'),
      btnAbrirPopup11 = document.getElementById('btn-abrir-popup11'),
      btnAbrirPopup12 = document.getElementById('btn-abrir-popup12'),
      btnAbrirPopup13 = document.getElementById('btn-abrir-popup13'),
      btnAbrirPopup14 = document.getElementById('btn-abrir-popup14'),
        
      overlay3 = document.getElementById('overlay3'),
      overlay4 = document.getElementById('overlay4'),
      overlay5 = document.getElementById('overlay5'),
      overlay6 = document.getElementById('overlay6'),
      overlay7 = document.getElementById('overlay7'),
      overlay8 = document.getElementById('overlay8'),
      overlay9 = document.getElementById('overlay9'),
      overlay10 = document.getElementById('overlay10'),
      overlay11 = document.getElementById('overlay11'),
      overlay12 = document.getElementById('overlay12'),
      overlay13 = document.getElementById('overlay13'),
      overlay14 = document.getElementById('overlay14'),
         
      popup3 = document.getElementById('popup3'),
      popup4 = document.getElementById('popup4'),
      popup5 = document.getElementById('popup5'),
      popup6 = document.getElementById('popup6'),
      popup7 = document.getElementById('popup7'),
      popup8 = document.getElementById('popup8'),
      popup9 = document.getElementById('popup9'),
      popup10 = document.getElementById('popup10'),
      popup11 = document.getElementById('popup11'),
      popup12 = document.getElementById('popup12'),
      popup13 = document.getElementById('popup13'),
      popup14 = document.getElementById('popup14'),
             
      btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3'),
      btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4'),
      btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5'),
      btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6'),
      btnCerrarPopup7 = document.getElementById('btn-cerrar-popup7'),
      btnCerrarPopup8 = document.getElementById('btn-cerrar-popup8'),
      btnCerrarPopup9 = document.getElementById('btn-cerrar-popup9'),
      btnCerrarPopup10 = document.getElementById('btn-cerrar-popup10'),
      btnCerrarPopup11 = document.getElementById('btn-cerrar-popup11'),
      btnCerrarPopup12 = document.getElementById('btn-cerrar-popup12'),
      btnCerrarPopup13 = document.getElementById('btn-cerrar-popup13'),
      btnCerrarPopup14 = document.getElementById('btn-cerrar-popup14')
      
  if (btnAbrirPopup3 && overlay3 && popup3 && btnCerrarPopup3) {
    btnAbrirPopup3.addEventListener('click', function(){
      overlay3 && overlay3.classList.add('active');
      popup3 && popup3.classList.add('active');
      });
  
    btnCerrarPopup3.addEventListener('click', function(){
      overlay3 && overlay3.classList.remove('active');
      popup3 && popup3.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup4 && overlay4 && popup4 && btnCerrarPopup4) {
    btnAbrirPopup4.addEventListener('click', function(){
      overlay4 && overlay4.classList.add('active');
      popup4 && popup4.classList.add('active');
      });
  
      btnCerrarPopup4.addEventListener('click', function(){
      overlay4 && overlay4.classList.remove('active');
      popup4 && popup4.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup5 && overlay5 && popup5 && btnCerrarPopup5) {
    btnAbrirPopup5.addEventListener('click', function(){
      overlay5 && overlay5.classList.add('active');
      popup5 && popup5.classList.add('active');
      });
  
      btnCerrarPopup5.addEventListener('click', function(){
      overlay5 && overlay5.classList.remove('active');
      popup5 && popup5.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup6 && overlay6 && popup6 && btnCerrarPopup6) {
    btnAbrirPopup6.addEventListener('click', function(){
      overlay6 && overlay6.classList.add('active');
      popup6 && popup6.classList.add('active');
      });
  
      btnCerrarPopup6.addEventListener('click', function(){
      overlay6 && overlay6.classList.remove('active');
      popup6 && popup6.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup7 && overlay7 && popup7 && btnCerrarPopup7) {
    btnAbrirPopup7.addEventListener('click', function(){
      overlay7 && overlay7.classList.add('active');
      popup7 && popup7.classList.add('active');
      });
  
      btnCerrarPopup7.addEventListener('click', function(){
      overlay7 && overlay7.classList.remove('active');
      popup7 && popup7.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup8 && overlay8 && popup8 && btnCerrarPopup8) {
    btnAbrirPopup8.addEventListener('click', function(){
      overlay8 && overlay8.classList.add('active');
      popup8 && popup8.classList.add('active');
      });
  
      btnCerrarPopup8.addEventListener('click', function(){
      overlay8 && overlay8.classList.remove('active');
      popup8 && popup8.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup9 && overlay9 && popup9 && btnCerrarPopup9) {
    btnAbrirPopup9.addEventListener('click', function(){
      overlay9 && overlay9.classList.add('active');
      popup9 && popup9.classList.add('active');
      });
  
      btnCerrarPopup9.addEventListener('click', function(){
      overlay9 && overlay9.classList.remove('active');
      popup9 && popup9.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup10 && overlay10 && popup10 && btnCerrarPopup10) {
    btnAbrirPopup10.addEventListener('click', function(){
      overlay10 && overlay10.classList.add('active');
      popup10 && popup10.classList.add('active');
      });
  
      btnCerrarPopup10.addEventListener('click', function(){
      overlay10 && overlay10.classList.remove('active');
      popup10 && popup10.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup11 && overlay11 && popup11 && btnCerrarPopup11) {
    btnAbrirPopup11.addEventListener('click', function(){
      overlay11 && overlay11.classList.add('active');
      popup11 && popup11.classList.add('active');
      });
  
      btnCerrarPopup11.addEventListener('click', function(){
      overlay11 && overlay11.classList.remove('active');
      popup11 && popup11.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup12 && overlay12 && popup12 && btnCerrarPopup12) {
    btnAbrirPopup12.addEventListener('click', function(){
      overlay12 && overlay12.classList.add('active');
      popup12 && popup12.classList.add('active');
      });
  
      btnCerrarPopup12.addEventListener('click', function(){
      overlay12 && overlay12.classList.remove('active');
      popup12 && popup12.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup13 && overlay13 && popup13 && btnCerrarPopup13) {
    btnAbrirPopup13.addEventListener('click', function(){
      overlay13 && overlay13.classList.add('active');
      popup13 && popup13.classList.add('active');
      });
  
      btnCerrarPopup13.addEventListener('click', function(){
      overlay13 && overlay13.classList.remove('active');
      popup13 && popup13.classList.remove('active');
      });
  }
  
  if (btnAbrirPopup14 && overlay14 && popup14 && btnCerrarPopup14) {
    btnAbrirPopup14.addEventListener('click', function(){
      overlay14 && overlay14.classList.add('active');
      popup14 && popup14.classList.add('active');
      });
  
      btnCerrarPopup14.addEventListener('click', function(){
      overlay14 && overlay14.classList.remove('active');
      popup14 && popup14.classList.remove('active');
      });
    }
  });
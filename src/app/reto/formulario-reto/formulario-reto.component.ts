import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reto',
  templateUrl: './formulario-reto.component.html',
  styleUrls: ['./formulario-reto.component.css']
})
export class FormularioRetoComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  registroform = this.formbuilder.group({
    dni: ['',
    {
      validators:[
        Validators.required,
        Validators.pattern('[0-9]{8}')
      ]
    }],
    nombres: ['',
    {
      validators:[
        Validators.required,
      ]
    }],
    apellidos: ['',
    {
      validators:[
        Validators.required,
      ]
    }],
    ciudad: ['',
    {
      validators:[
        Validators.required
      ]
    }],
  })

  get dni(){return this.registroform.get('dni')}
  get nombres(){return this.registroform.get('nombres')}
  get apellidos(){return this.registroform.get('apellidos')}
  get ciudad(){return this.registroform.get('ciudad')}

  send(){
    console.log(this.registroform.value);
  }
}

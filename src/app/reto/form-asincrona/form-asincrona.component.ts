import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-asincrona',
  templateUrl: './form-asincrona.component.html',
  styleUrls: ['./form-asincrona.component.css']
})
export class FormAsincronaComponent implements OnInit {
  objexp = {
  }

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  registroform = this.formbuilder.group({
    
    nombres: ['',
    {
      validators:[
        Validators.required,
      ]
    }],
    email: ['',
    {
      validators:[
        Validators.required,
        Validators.email
      ]
    }],
    telefono: ['',
    {
      validators:[
        // Validators.required,
        Validators.pattern('[0-9]{9}')
      ]
    }],
    asunto: ['',
    {
      validators:[
        Validators.required,
        
      ]
    }],
    mensaje: ['',
    {
      validators:[
        // Validators.required
      ]
    }],

  })

  mensajes = false
  send(){
    this.mensajes = true
  }
}

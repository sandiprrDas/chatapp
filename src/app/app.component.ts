import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted =false;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      comment:['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-forms',
  imports: [CommonModule,FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {
  
    nome:string= '';
    idade = null;
    cidade: string= '';
    naoPode: boolean = true; 

    clicarBotao(){
      if (this.nome == ''){
        alert(" por favor, escreva no campo a cima")
      }else{
        alert("Olá novamente! " + this.nome  +" que saudades.") 
      }
    }
    suaIdade(){
      if(this.idade == null ){
         alert(" por favor, escreva no campo a cima")
        }else{
         alert("sua idade é " + this.idade + " anos")
        }
    }
    cidadezinha(){
          if(this.cidade == ''){
              alert(" por favor, escreva no campo a cima")
          }else{
            alert(" sua cidade é "+ this.cidade )
          }

    }
    apaga(){
    this.nome='';
    this.idade = null;
    this.cidade= '';
    }

    enviar(){
      //if( this.naoPode == false )
    console.log("foi emviado "+ this.nome +" com idade de "+ this.idade + " da cidade de "+ this.cidade )
    this.apaga()
    }

}

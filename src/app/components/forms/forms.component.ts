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
    idParaTransformar? : number;
    nome:string= '';
    idade: number = 0;
    cidade: string= '';
    naoPode: boolean = false; 
    Mostrar:boolean = false;
    status: boolean = true;

    listaPessoa: Array<{ id: number; nome: string; idade: number; cidade: string; status: boolean;}> = [];
id: number = 1; 



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
    this.idade = 0;
    this.cidade= '';
    }

    enviar(){
     
    console.log("foi emviado "+ this.nome +" com idade de "+ this.idade + " da cidade de "+ this.cidade );

    this.listaPessoa.push({
    id: this.id,
    nome: this.nome,
    idade: this.idade,
    cidade: this.cidade,
    status: this.status
  });

    this.id++
    console.log(this.listaPessoa)

      this.apaga()
    }

    botaoEsconde(){
          if ( this.Mostrar == false
           ){
              this.Mostrar = true;
          }else{
              this.Mostrar = false;
          }
    }

    transformando() {
  const pessoa = this.listaPessoa.find(p => p.id === this.idParaTransformar);
  if (pessoa) {
    pessoa.status = !pessoa.status;
  } else {
    console.warn("Pessoa não encontrada com o id:", this.idParaTransformar);
  }}


  
}
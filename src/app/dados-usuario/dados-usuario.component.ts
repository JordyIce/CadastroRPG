import { Component, OnInit } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {
	
	


  enviado: boolean = false;

  _nome: string;
  _nick: string;
  _email: string;
  _tipo: string;
  _sexo: string;
  _car: string;

  tipos: string [] = ['Bárbaro', 'Bruxo', 'Acólito', 'Arqueiro', 'Bardo', 'DanielPaladino'];
  
  sexos: string [] = ['Masculino', 'Feminino'];
  
  cars: string [] = ['Força', 'Inteligência', 'Vitalidade', 'Agilidade', 'Habilidade'];

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
  }

  enviarDados() {
    if(this._tipo == undefined){
      this._tipo = this.tipos[0];
    }
	
	if(this._car == undefined){
      this._car = this.cars[0];
    }
	
	if(this._sexo == undefined){
      this._sexo = this.sexos[0];
    }
	
    let novoContato = new ContatoModel(this._nome, this._nick, this._email, this._tipo, this._sexo, this._car);

    this.dataBaseService.setContato(novoContato);

    this.enviado = ! this.enviado;
  }

  voltar() {
    this._nome = '';
    this._nick = '';
    this._email = '';
    this._tipo = '';
    this.enviado = ! this.enviado;
	this._sexo = '';
	this._car = '';
  }
}
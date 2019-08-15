import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  form: FormGroup;
  @Input() changeCard: boolean = true;
  @Input() CardBandeira: String = 'desativado';

  @Input() validaNumeroCard: boolean = false;
  @Input() validaNomeCard: boolean = false;
  @Input() validaValidadeCard: boolean = false;

  @Input() numeroCartaoCard: String = '';
  @Input() validadeCartaoCard: String = '';
  @Input() nomeCartaoCard: String = '';

  @Input() ngClass: any

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      numeroCartao: [null, Validators.required],
      nome: [null, Validators.required],
      validade: [null, Validators.required],
      cvv: [null, Validators.required],
      parcela: [null, Validators.required]
    })

      
  }
  changeCartao(event){
    if(this.changeCard == true){
      this.changeCard = false;
    }else{
      this.changeCard = true;

    }
  }
  numeroCartaoChange(event){
   
    let numero = event;

    let numeroCartao = event.lenght;
    this.numeroCartaoCard = numero;
    this.validaNumeroCard = true;
    this.validaFormInfo();
  }
  numeroNomeChange(event){

    let nomeTitular = event;
    this.nomeCartaoCard = nomeTitular;

    this.validaNomeCard = true;
    this.validaFormInfo();

    
  }
  numeroValidadeChange(event){
   

    let data = event;
    this.validadeCartaoCard = data;
    this.validaValidadeCard = true;
    this.validaFormInfo();
  }

  validaFormInfo(){

    if(this.nomeCartaoCard != null && this.nomeCartaoCard != ''  
      && this.numeroCartaoCard != null  && this.numeroCartaoCard != ''
      && this.validadeCartaoCard != null && this.validadeCartaoCard != ''){
      
      this.CardBandeira = 'ativado';
    
    }else{
      this.CardBandeira = 'desativado';
    }
  }
  validaForm(){
   
  }

}

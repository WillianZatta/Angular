import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
@Component({
    selector:'cadastro-usuario',
    templateUrl:'cadastro-usuario.html',
    styleUrls:['cadastro-usuario.scss']
})
export class CadastroUsuario implements OnInit {

    public formGroup:FormGroup;
    public grupoUsuario:Usuario = new Usuario();
    constructor(private formBuilder:FormBuilder){
    }
    ngOnInit(){
        this.formGroup = this.formBuilder.group({
            codigo:[null ],
            nome:[null, Validators.required],
            descricao:['']
        });
    }
    public salvar(){
        if (this.formGroup.invalid){
            return;
        }
        alert('Salvo com sucesso!');
    }

    public cancelar(){
        alert('Foi Cancelado!');
    }

}
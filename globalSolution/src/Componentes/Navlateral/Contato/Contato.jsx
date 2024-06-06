import { useState } from "react";

function Contato() {

   const aoDigitado = (evento) => {
    console.log(evento.target.value);
   }

   const submit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        form.classList.add('was-validated');
        
        if (form.checkValidity()) {
            const nome = e.target.nome.value;
            const telefone = e.target.telefone.value;
            const email = e.target.email.value;
            const assunto = e.target.assunto.value;
            const mensagem = e.target.mensagem.value;
            console.log("Nome :" + nome, "\n", 
            "Telefone : " + telefone, "\n", 
            "E-mail : " + email, "\n", 
            "Assunto : " + assunto, "\n", 
            "Mensagem : " + mensagem );
        }
   }

    return (
   
        <div id='contato' className="container mt-4 ">
            <h1 className="py-4 text-center font-bold text-3xl">CONTATO</h1>
            <form onSubmit={submit} className="needs-validation" noValidate>
                <div className="row mb-3 justify-content-center">
                    <div className="col-md-3">
                        <label className="form-label">Nome</label>
                        <input onChange={aoDigitado} className="form-control" type="text" name="nome" required />
                        <div className="invalid-feedback">Por favor, insira seu nome.</div>
                    </div>
                    <div className="col-md-3"> 
                        <label className="form-label">Telefone</label>
                        <input onChange={aoDigitado} className="form-control" type="text" name="telefone" required />
                        <div className="invalid-feedback">Por favor, insira seu telefone.</div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className="mb-3 col-md-6">
                        <label className="form-label">E-mail</label>
                        <input onChange={aoDigitado} 
                        className="form-control" 
                        type="email" 
                        name='email' 
                        placeholder="nome@email.com"
                        required />
                        <div className="invalid-feedback">Por favor, insira um e-mail válido.</div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Assunto</label>
                        <input onChange={aoDigitado} className="form-control" type="text" name='assunto' required />
                        <div className="invalid-feedback">Por favor, insira o assunto.</div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Mensagem</label>
                        <textarea className="form-control" rows='10' name='mensagem' required />
                        <div className="invalid-feedback">Por favor, insira sua mensagem.</div>
                    </div>
                </div>
                <div className="row mb-3 justify-content-center">
                    <button className="btn btn-primary w-60 bg-[#001b5e]" type="submit">Enviar mensagem</button>
                </div>
            </form>
        </div>
    );
}

export default Contato;


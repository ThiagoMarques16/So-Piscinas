import emailjs from "emailjs-com";
import React from 'react';

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const nameInput = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const success = document.querySelector("#success")
const tell = document.querySelector("#tell")
const errorNodes = document.querySelectorAll(".error")

function validateForms(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Digite seu nome.";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Email inválido";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(tell.value.length <1){
        errorNodes[2].innerText = "Telefone inválido";
        tell.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length <1){
        errorNodes[3].innerText = "Mensagen inválida";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Enviado com sucesso!";
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = ""
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    tell.classList.remove("error-border");
}

function emailIsValid(email){
    var pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_myoclp8', e.target, 'user_BLg80uyyFXNabuj2m8IGP')

        .then((result) => {
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
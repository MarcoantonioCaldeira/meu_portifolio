<template>
    <div id="area_mensagem">
        <Message :msg="msg" v-show="msg" />
    </div>

    <h1 class="h1_contato" style=" color: #000000;">Vamos conversar</h1> 

    <form ref="form" @submit.prevent="enviaMesangem">

        <input type="text" id="input" class="input_nome" v-model="nome"  name = "nome" placeholder="Nome Completo" required>

        <input type="text" id="input"  style="margin-top: 15px;" class="input_email"  v-model="email" name="email" placeholder="E-mail" required>

        <textarea id="text_area" name="message" placeholder="Assunto" required></textarea>
       
        <button type="submit" class="btn_enviar">Enviar</button>
        
    </form>

</template>

<script>
import emailjs from '@emailjs/browser';




export default{
    name: 'Contato',
    data(){
        return{
            nome: "",
            sobrenome: "",
            email: "",
            telefone: null,
            message: "",
            msg: null
        }
    },


    methods:{

        enviaMesangem(){

            emailjs.sendForm('service_qrv1zon', 'template_7z9vi38', this.$refs.form, 'ni7t20CXVt0i1byAi')

            .then((result) => {
                console.log('Email enviado com sucesso!', result.text);
                

            }, (error) => {
                console.log('Falha ao enviar email', error.text);
            });

            this.nome = '';
            this.sobrenome = '';
            this.email = '';
            this.telefone = '';
            this.message = '';
            
        }
    }
}

</script>

<style src="./style_input.scss"  lang="scss">
</style>
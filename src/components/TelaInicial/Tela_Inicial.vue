<template>
   
    <Menu />
  
    <div id="tamplate">
      
      <div class="conteudo-template">
        
        <img class="profile" src="../../assets/img/profile.png" />

        <h1 class="h1_Sauda_Nome">Olá, meu nome é Marco Antonio!!!</h1>

        <h4 class="h3_Intro">"Sou Desenvolvedor Full-Stack apaixonado por criatividade e buscando estar em 
        <br>constante evolução, sempre criando soluções inovadoras <br>e que atendam as necessidades das pessoas"</h4>

        <img  class="icon_top" src="../../assets/img/chevron-down-icon.png" />

      </div>
     
    </div>
    <!-- Div que eu quero mudar -->
   
    <div id="Info_Ocu">

      <h1 class="h1_ocupacao">Minha experiência</h1>
        
      <div class="Info_Ocu_Conteudo">
        
          <img class="icon_ocu"  src="../../assets/img/icon_work.png" />
          <h3 class="h3_cargo">Desenvolvedor<br>Front-End</h3>
          <h3 class="h3_nome_empresa">Empresa: T.I Gestor Software</h3>
          <h3 class="h3_nome_empresa">(ago.2022 - dez.2023)</h3>
      
      </div>
    
        <a href="https://www.linkedin.com/in/marco-antonio-caldeira-97548616a/">
          <button class="btn_ver_linkedin" href="https://www.linkedin.com/in/marco-antonio-caldeira-97548616a/"  style="margin-top: 180px;">Ver meu Linkedin</button>
        </a>
             
    </div>  

    <div id="Area_Projetos">

      <h1 class="h1_servicos">Alguns projetos desenvolvidos</h1>

      <ProjetoContainer titulo="Sistema de Cadastro de Clientes e Vendas"  descricao="Sistema de Cadastro de Vendas e Clientes desenvolvido para a Empresa T.I Gestor. Tecnologias utilizadas: VueJS, Sass, Axios, RestAPI e metodologia ágil Kanban"   :hrefProp="href_1"/>
      <ProjetoContainer titulo="Traking-Hub-App"  descricao="Aplicativo para rastreio de Entregas com Sistema de Login e atualização de Status de produtos. Desenvolvido com as tecnologias: ReactJS, TypeScript, RestAPI e NestJS"   :hrefProp="href_1"/>
      <ProjetoContainer titulo="Hungry-Hub-App"  descricao="Futuro Aplicativo para entrega de alimentos via Delivery. Tecnologias utilizadas até o momento: React, React-Router, Sass e Styled-Components"   :hrefProp="href_1"/>
      <ProjetoContainer titulo="Anotation-App"  descricao="Aplicativo para criar, atualizar e deletar anotações. Tecnologias utilizadas: VueJS, Sass, Axios e consumo de RestAPI"   :hrefProp="href_1"/>
      <ProjetoContainer titulo="Sistema-para-Hamburgueria"  descricao="Sistema para criar, atualizar status e deletar pedidos de uma Hamburgueria com FrontEnd desenvolvido em VueJS e BackEnd com Firebase"   :hrefProp="href_1"/>


      <a href="https://github.com/MarcoantonioCaldeira"><button class="btn_ver_completo"  style="margin-top: 70px;">Ver meu Github Completo</button></a>

    </div>

   

    <div id="Skills" @mousemove="updateMousePosition">


        <h1 class="h1_skills">Tecnologias que domino</h1>  

        <h4>"Acredito que cada necessidade demanda um tipo de tecnologia específica.<br> 
          Por isso, busquei aprimorar meus conhecimentos nas principais Skills da atualidade."</h4>

        <img src="../../assets/img/background_laguages.png" class="img_background" />
    </div>

    <div id="Educacao">

      <h1 style=" color: #dad8d8;">Educação</h1> 

   
      <div class="Info_Educacao">
          <h2>Tecnologo em Sistemas para a Internet</h2>
          <h3>Escola: IFSP - Campus Birigui (2022 - 2024)</h3>
          <h3>Nivel: Superior</h3>

     
          <h2>Técnico em Informática</h2>
          <h3>Escola: IFSP - Campus Birigui (2016 - 2018)</h3>
          <h3>Nivel: Tecnico</h3>
      </div>

   
    </div>

    <div id="Contato">

      

      <div id="area_inputs">
        <Contato />
      </div>

    </div>


    <Footer />
</template>

<script>
  import Menu from '../Menu/Menu.vue'
  import Footer from '../Footer/Footer.vue'
  import Contato from '../Contato/Contato.vue'
  import ProjetoContainer from '../ProjetoContainer/ProjetoContainer.vue'
  import '@fortawesome/fontawesome-free/css/all.css'


  export default {
    name: 'Tela_Inicial',
    components:{
      Footer,
      Contato,
      Menu,
      ProjetoContainer
    },

    data(){
      return{ 
        mouseX: 0,
        href_1: "https://github.com/MarcoantonioCaldeira/Sistema-de-cadastro-TI-Gestor",
        href_2: "https://github.com/MarcoantonioCaldeira/Sistema-de-comentarios",
        href_3: "https://github.com/MarcoantonioCaldeira/API-Consulta-de-Usuarios",
        mensagem:{
          msg_site:'',
          msg_loja:'',
          msg_sistema: '',
          hoveredItem: null,
          msg_prototipo: '',
        },
        links: [
            { id: 4, text: 'Saiba Mais', url: '#Contato' },
            //{ id: 5, text: '', url: '#tamplate' },
        ],
        exbir_detalhes:false,
        titulo:"",
        descricao: ""
      }
    },



    methods:{

        updateMousePosition(event) {
          this.mouseX = event.clientX;
        },

        topFunction(){

          var mybutton = document.getElementsByClassName(li)

          window.onscroll = function() {scrollFunction()};

          function scrollFunction() {
            
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }

        },

        handleClick(link) {
          if (link.url === '#Contato') {
            // Rolar suavemente para a seção de Contato
            const contactSection = document.querySelector(link.url);
            if (contactSection) {
              window.scrollTo({
                top: contactSection.offsetTop,
                behavior: 'smooth'
              });
            }
          } else if (link.url === '#tamplate') {
            // Rolar suavemente para a seção de Tamplate
            const templateSection = document.querySelector(link.url);
            if (templateSection) {
              window.scrollTo({
                top: templateSection.offsetTop,
                behavior: 'smooth'
              });
            }
          } else {
            // Rolar suavemente para o topo da página
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        },


        Mostrar_Detalhes(){
          this.exbir_detalhes = true;
        },

        Fechar_Detalhes(){
          this.exbir_detalhes = false;
        }
      }
       
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.scss" lang="scss">
</style>

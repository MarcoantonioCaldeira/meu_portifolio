<template>
    <div class="info-container">
      <p class="titulo">{{ titulo }}</p>
      <p class="descricao">{{ descricao }}</p>
      <button  @click="acessarRepositorio" class="btn_repositorio">Github</button>
    </div>
  </template>
  
  <script>
  export default{
      name: 'ProjetoContainer',
      props: {
          titulo: String,
          descricao: String,
          hrefProp: { 
            type: String,
            required: true,
          },
      },
      methods: {
        acessarRepositorio() {
          window.location.href = this.hrefProp;
        },
      },
  }
  
  </script>
  
  <style scoped>
  @import url( "https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swapel");
  
  .info-container{
    display: inline-block;
    margin-left: 35px;
    margin-top: 100px;
    width: 400px;
    height: 270px;
    border-radius: 15px;
    border: 0.2px solid rgba(95, 95, 95, 0.5); 
    background-color: #0C0C0C;


      p{
        font-size: 18px;
        font-family: 'Nunito', sans-serif;
        margin-top: -220px;
        color: #CECECE;
      }

      .descricao{
          padding-left: 20px;
          padding-right: 16px;
          text-align: left;
          font-size: 13px;
          opacity: 70%;
      }

      .btn_repositorio{
        background-color:#212020;
        border: 1px solid #212020; 
        border-radius: 5px;
        color: #dad8d8;
        padding: 15px 35px;
        font-family: 'Nunito', sans-serif;
        text-decoration: underline;
        cursor: pointer;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }


    @media (max-width: 767.98px) { 
        width: 350px;
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 70px auto;
        flex-direction: column;
    }

    

  }
  
  
  </style>
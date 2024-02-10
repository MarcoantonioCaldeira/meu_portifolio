<template>
    <div id="rodape">
        <p>Copyright © 2024 por Marco Antonio Caldeira</p>

        <div  class="social_media" style="display: inline-block;">
            <img src="../../assets/img/github.png" style="width: 40px;">
            <img src="../../assets/img/linkedin.png" style="width: 40px;">
        </div>
    </div>
</template>

<script>

export default{
    name:"Footer"
}
</script>

<style>

p{
    color: white;
    font-size: 80%;
    font-family: 'Nunito', sans-serif;
    margin:auto;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top:250px;
}

.social_media{
    float: right;
    margin-top: -60px;

    img{
        margin:12px
    }
}


#rodape {
  width: 100%;
  height: 300px;
  background-color: black;
}


</style>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
          <h1>PELISPLUS</h1>


        
		

</div>

 

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: #4355E4;
  border-radius: 30px;
  display: grid;
	justify-content: center;
	margin-bottom: 20px;
	
  


  height: 100px;

}


.nav {
display:grid;
grid-template-columns: 3fr 1fr;
background: #050924;
justify-content: center;

}

.search{
	display:grid;
	justify-content:center;
	grid-template-columns: 2fr 1fr;
}



.buscador {
	
background:white;
width: 400px;
height:20px;
border-radius: 80px;
padding: 20px;
margin-top: 5px;
}

.nav button {
cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 60px;
	width: 200px;
	background: #241744;
	color: #4355E4;
	border-radius: 100px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	transition: .3s ease all;
	font-size: 20px;
	margin-top: 5px;


}

.nav button:hover {
	background: blue;
	color:red;
}



.barra{
	
	height: 50px;
	display:grid;
	grid-template-columns: 1fr 1fr;
	text-align: center;
	color: #4355E4;
	padding:10px;
	margin-bottom: 20px;
	justify-items: center;


}

.barra buttom {
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 70px;
	width: 450px;
	background: #241744;
	color: #4355E4;
	border-radius: 100px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	transition: .3s ease all;
	font-size: 20px;

}

.barra buttom:hover {
	background: blue;
	color:red;
}

body {
	font-family: 'Montserrat', sans-serif;
	background: black;
	color: #1d1d1d;
}

 .contenido{
	 display: grid;
	grid-template-columns: repeat(2, 1fr);

	border: solid;


 }

.contenido .main{
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 50px;
background:#050924;
margin: 40px;
border-radius: 30px;

justify-items: center;

}

.contenido .main .cate .boton{
cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 50px;
	width: 200px;
	background: #241744;
	color: #fff;
	border-radius: 100px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	transition: .3s ease all;
	margin-top:30px;


}

.contenido .main .cate .boton:hover {
	background: #137c32;
}

.contenedor {
	width: 100%;
	max-width: 1000px;
	margin: 10px auto 20px auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
		gap: 50px;
}


.contenedor .pelicula {
	text-align: center;
}

.contenedor .pelicula .titulo {
	font-size: 20px;
	font-weight: 600;
	color: #F2EDF3;
	text-shadow: 1px 1px #1412A5;
}


.contenedor .pelicula .poster {
	width: 100%;
	margin-bottom: 10px;
	border-radius: 15px;
}

.paginacion {
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: left;
	gap: 20px;
	padding: 10px;
}

.paginacion button {
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 50px;
	width: 200px;
	background: #241744;
	color: #fff;
	border-radius: 100px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	transition: .3s ease all;
}

.paginacion button:hover {
	background: #137c32;
}
</style>

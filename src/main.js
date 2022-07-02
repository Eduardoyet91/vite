import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


let pagina = 1;

let titulo = '';



const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnBuscar = document.getElementById('busca');

btnBuscar.addEventListener('click', ()  => {
 titulo = document.getElementById("criterio").value;

 buscarPeliculas();

} );

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

const btnpopular = document.getElementById('popular');

btnpopular.addEventListener('click', () => {

        cargarPeliculas();
        cargarCaterorias();
	
});





const cargarPeliculas = async() => {
	try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
       

        console.log(respuesta);
      

		// Si la respuesta es correcta
		if(respuesta.status === 200){
            const datos = await respuesta.json();
            

			
            let peliculas = '';
            
            
			datos.results.forEach(pelicula => {
                   
                        peliculas += `
                        <div class="pelicula">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <h3 class="titulo">${pelicula.title}</h3>
                        </div>
                    `;
                  
               
               
			});

 

    document.getElementById('contenedor').innerHTML = peliculas;
		} else if(respuesta.status === 401){
			console.log('error de llave, no puedes acceder');
		} else if(respuesta.status === 404){
			console.log('no se encontraron resultados');
		} else {
			console.log('Error desconocido');
		}

	} catch(error){
		console.log(error);
	}

}





const cargarCaterorias = async() => {
	try {
		
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX`);
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&`);

        console.log(res);

		// Si la respuesta es correcta
		if(res.status === 200){
            
            const dat = await res.json();
            const pel = await respuesta.json();

			
            
            let categorias =  ' ';
           
            
			dat.genres.forEach((categoria) => {
               
               
                categorias += `
                <div class="cate">
                    
                    <buttom class="boton" id="selec">${categoria.name}</buttom>
                </div>
            `;   
            
            
            
            });
            
            document.getElementById('categoria').innerHTML = categorias;
           
            
            
            

            const btnS = document.querySelectorAll('buttom');

          
          let peliculas = ' ';
       
          

            btnS.forEach(function(buttom,indec) {
                buttom.addEventListener('click',dentr);
                
                function dentr() {
                       
                        peliculas = ' ';
                           
                                              
                          pel.results.forEach(pelicula => {
                            
                          
                           
                           pelicula.genre_ids.forEach(cad => {
                             

                                if(cad === dat.genres[(indec-1)].id){
                                Boolean = true
                                
                                 }else Boolean = false;

                                   
                                if(Boolean){
                                   
                                    peliculas += `
                                    <div class="pelicula">
                                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                                        <h3 class="titulo">${pelicula.title}</h3>
                                    </div>
                                `;
                               


                                }
                            
                            
                            
                            
                            })
                   
                });
               
                        
                
                document.getElementById('contenedor').innerHTML = peliculas;  
                   
                 }
                 
            }

            )
           
      
           
            
               
   

         

		} else if(res.status === 401){
			console.log('error de llave, no puedes acceder');
		} else if(res.status === 404){
			console.log('no se encontraron resultados');
		} else {
			console.log('error desconocido');
		}

	} catch(error){
		console.log(error);
    }
    
 

}





const buscarPeliculas = async() => {
	try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&query=${titulo}`);
       

        console.log(respuesta);
      

		// Si la respuesta es correcta
		if(respuesta.status === 200){
            const datos = await respuesta.json();
            
			
            let peliculas = '';
            
            
			datos.results.forEach(pelicula => {
                   
                        peliculas += `
                        <div class="pelicula">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <h3 class="titulo">${pelicula.title}</h3>
                        </div>
                    `;
                  
               
               
			});

 

    document.getElementById('contenedor').innerHTML = peliculas;
		} else if(respuesta.status === 401){
			console.log('error con la llave no puedes acceder');
		} else if(respuesta.status === 404){
			console.log('sin resultados');
		} else {
			console.log('error desconocido');}

	} catch(error){
		console.log(error);
	}

}
cargarPeliculas();
cargarCaterorias();

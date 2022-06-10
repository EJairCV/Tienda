//nav responsive

const navbars = document.querySelector(".bars");   
const navul = document.querySelector(".nav-ul");

navbars.addEventListener("click",()=>{
    navul.classList.toggle("ul-oculto");
});



// Postres html buscador
// ---------------------
const divpostres = document.querySelector(".cuerpo");
const fragmento = document.createDocumentFragment();
const formulario = document.getElementById("form");
const nomImput = document.getElementById("nom");
//listar del buscador
const listarPostres = (datos)=>{ 
    divpostres.innerHTML="";
    
    for (postre of datos){
        const item = document.createElement("DIV");
        item.classList.add("postre");
        item.innerHTML=`
        <div class="postre--img">
            <img  src="${postre.imagen}" alt="postre">
        </div>

        <div class="b-medio">
           <a href="">${postre.nombre}</a>
        </div>
        `; 
        fragmento.appendChild(item);
    }
    divpostres.appendChild(fragmento);
}
//listar del mantenimiento

const listarMantenimiento = (datos)=>{ 
    divpostres.innerHTML="";
    for (postre of datos){
        const item = document.createElement("DIV");
        item.classList.add("postre");
        item.innerHTML=`
        <div class="postre--img">
            <img  src="${postre.imagen}" alt="postre">
        </div>

        <div class="opciones">
           
        </div>
        `; 
        fragmento.appendChild(item);
    }
    divpostres.appendChild(fragmento);
}


//fetch general
const fetchData = (listar,formulario)=>{   
    const data= new FormData(formulario);
    
    console.log(data.get("nom"))
    fetch("php/controlador/ControladorPostre.php",{
        method:"POST",
        body: data
    })
    .then(res=>res.json())
    .then(datos=>{listar(datos);   
        }
        );
}


nomImput.addEventListener("keyup", ()=>{fetchData(listarPostres,formulario)});

// ---------------------
//boton registrar y form de registro

const btnguardar= document.getElementById("btn-guardar");
const formregistro = document.getElementById("registro");

//fetch para guardar




//boton nuevo
const btnnuevo= document.getElementById("btn-nuevo");
const formNUevo=document.getElementById("registro");

btnnuevo.addEventListener("click", ()=>{
    formNUevo.classList.toggle("form-oculto");
});
//boton cancelar(igual que btnnuevo)
const btnCancelar=document.getElementById("btn-cancelar");
btnCancelar.addEventListener("click", (e)=>{
    e.preventDefault();
    formNUevo.classList.toggle("form-oculto");
});

//formulario ingresar registro

const fetchRegistro = ()=>{
    const data = new FormData(formregistro);
    fetch("php/controlador/ControladorPostre.php",{
        method:"POST",
        body: data
    });
}

//evento de guardar

btnguardar.addEventListener("click", (event)=>{
    event.preventDefault();
    fetchRegistro();
}



);


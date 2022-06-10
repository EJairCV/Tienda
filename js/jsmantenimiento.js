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
const tablaPostres= document.querySelector(".table")
//listar del buscador
const listarPostres = (datos)=>{ 
    tablaPostres.innerHTML=`<tr>
    <td><h5 class="table-h5">Id</h5></td>
    <td><h5 class="table-h5">Nombre</h5></td>
    <td><H5 class="table-h5">Precio</H5></td>
    <td><h5 class="table-h5">Descripción</h5></td>
    <td><h5 class="table-h5">Ingredientes</h5></td>
    <td><h5 class="table-h5">imagen</h5></td>
    <td><h5 class="table-h5">Opciones</h5></td>
</tr>`;
    //CAMBIAR INNER HTML
    for (postre of datos){
        const item = document.createElement("TR");
        // item.classList.add("");
        item.innerHTML=`
        <td><h5 class="table-h5">${postre.id_postre}</h5></td>
                    <td><h5 class="table-h5">${postre.nombre}</h5></td>
                    <td><H5 class="table-h5">${postre.precio}</H5></td>
                    <td><p>${postre.descripcion}</p></td>
                    <td><p>${postre.ingredientes}</p></td>
                    <td><img class="table-img" src="${postre.imagen}" alt=""></td>
                    <td><button value="${postre.id_postre}"  class="btn-borrar table-boton">Borrar</button><Button value="${postre.id_postre}" class="table-boton btn-modificar">Modificar</Button></td>
        `; 
        fragmento.appendChild(item);
    }
    tablaPostres.appendChild(fragmento);

    //btn borrar registro debe ir adentro de listar postres por que si se pone afuera no son creados aun
    const btnBorrar = document.querySelectorAll(".btn-borrar");
    btnBorrar.forEach(element => {
    element.addEventListener("click", ()=>{
        const data = new FormData(formregistro);
        //imput oculto para mandar el id
        data.set("id_postre", element.value);
        data.set("op", 4);
        //imput op para el controlador del php borrar
        
        fetch("php/controlador/ControladorPostre.php",{
            method:"POST",
            body: data
        });
        data.set("op", 3);
        fetchData(listarPostres,formulario);
    }) 

    });
    
    const btnModificar = document.querySelectorAll(".btn-modificar");
    btnModificar.forEach(element =>{
        element.addEventListener("click",()=>{
            const data= new FormData(formregistro);
            data.set("id_postre", element.value);
            data.set("op", 5);
            fetch("php/controlador/ControladorPostre.php",{
                method:"POST",
                body: data
            })
            .then(res=>res.json())
            //resultado de buscar el id prueba
            .then(datos=>{
                formregistro.id_postre.value=datos[0].id_postre;
                formregistro.precio.value=datos[0].precio;
                formregistro.nombre.value=datos[0].nombre;
                formregistro.imagen.value=datos[0].imagen;
                formregistro.descripcion.value=datos[0].descripcion;
                formregistro.ingredientes.value=datos[0].ingredientes;
                //op 6 para el controlador php modificar
                formregistro.op.value=6;
                console.log(datos[0].precio);
                console.log(formregistro.id_postre.value);
                formNUevo.classList.toggle("form-oculto");
                
            })
        });
    });

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

//boton nuevo
const btnnuevo= document.getElementById("btn-nuevo");
const formNUevo=document.getElementById("registro");

btnnuevo.addEventListener("click", ()=>{
    formNUevo.classList.toggle("form-oculto");
});
//LIMPIAR IMPUTS DEL REGISTRO
const limpiarForm = ()=>{
    formregistro.id_postre.value="";
    formregistro.precio.value="";
    formregistro.nombre.value="";
    formregistro.imagen.value="";
    formregistro.descripcion.value="";
    formregistro.ingredientes.value="";
    formregistro.op.value=3;
}
//boton cancelar(igual que btnnuevo)
const btnCancelar=document.getElementById("btn-cancelar");
btnCancelar.addEventListener("click", (e)=>{
    e.preventDefault();
    formNUevo.classList.toggle("form-oculto");
});

//formulario ingresar registro

const fetchRegistro = (formregistro)=>{
    const data = new FormData(formregistro);
    fetch("php/controlador/ControladorPostre.php",{
        method:"POST",
        body: data
    });
}


const expreciones = {
    nombre: /^[a-zA-Z0-9]{3,16}$/ ,
    precio: /^[0-9\.]{1,10}$/ ,
    descripcion: /^[a-zA-Z0-9,-]{4,50}$/  ,
}

//evento de guardar

btnguardar.addEventListener("click", (event)=>{
    event.preventDefault();
    //aqui falta validar expreciones regulares
    if (!expreciones.nombre.test(formregistro.nombre.value)) {
        alert("el nombre tiene valores no validos");
    }else if(!expreciones.precio.test(formregistro.precio.value)){
        alert("el precio tiene valores no validos");
    }else if (!expreciones.descripcion.test(formregistro.descripcion.value)){
        alert("la descripcíon tiene valores no validos");
    }else if (!expreciones.descripcion.test(formregistro.ingredientes.value)){
        alert("los ingredientes tiene valores no validos");
    }else{
        fetchRegistro(formregistro);
        alert("Nuevo postre guardado");
        limpiarForm();
        fetchData(listarPostres,formulario);
    }
    
}
);

// boton modificar





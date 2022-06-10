<?php
    require_once "../modelo/DaoPostre.php";
    require_once "../modelo/postre.php";

    
    $op=$_REQUEST["op"];
    

    switch($op){
        case 1:{
            $objDaoPostre = new DaoPostre();
            $lista=$objDaoPostre->listarPostres();       
            echo json_encode($lista);
            break;
        }
        case 2:{
            $nomBusqueda= $_POST['nom'];
            $objDaoPostre = new DaoPostre();
            $lista=$objDaoPostre->buscarPostre($nomBusqueda);       
            echo json_encode($lista);
            
            break;
        }
        case 3:{
            $nombre=$_POST["nombre"];
            $precio=$_POST["precio"];
            $imagen=$_POST["imagen"];
            $descripcion=$_POST["descripcion"];
            $ingredientes=$_POST["ingredientes"];
            
            $objPostre = new Postre;
            $objPostre->setNombre($nombre);
            $objPostre->setPrecio($precio);
            $objPostre->setImagen($imagen);
            $objPostre->setDescripcion($descripcion);
            $objPostre->setIngredientes($ingredientes);

            $objDaoPostre= new DaoPostre;
            $objDaoPostre->insertarPostre($objPostre);
            break;
        }
        case 4:{
            $id=$_POST["id_postre"];
            $objDaoPostre= new DaoPostre;
            $objDaoPostre->eliminarPostre($id);
            break;
        }
        case 5:{
            $id= $_POST['id_postre'];
            $objDaoPostre = new DaoPostre();
            $lista=$objDaoPostre->buscarId($id);       
            echo json_encode($lista);
            break;
        }
        case 6:{
            $id=$_POST["id_postre"];
            $nombre=$_POST["nombre"];
            $precio=$_POST["precio"];
            $imagen=$_POST["imagen"];
            $descripcion=$_POST["descripcion"];
            $ingredientes=$_POST["ingredientes"];


            // $id=48;
            // $nombre="nuevo prueba";
            // $precio=48;
            // $imagen="imgprueba";
            // $descripcion="nuevo prueba";
            // $ingredientes="nuevo prueba";
            
            $objPostre = new Postre;
            $objPostre->setId_postre($id);
            $objPostre->setNombre($nombre);
            $objPostre->setPrecio($precio);
            $objPostre->setImagen($imagen);
            $objPostre->setDescripcion($descripcion);
            $objPostre->setIngredientes($ingredientes);

            $objDaoPostre= new DaoPostre;
            $objDaoPostre->modificar($objPostre);
            break;
            
        }
    }



?>
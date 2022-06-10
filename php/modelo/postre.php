<?php
 class Postre{
    public $id_postre;
    public $nombre;
    public $precio;
    public $imagen;
    public $descripcion;
    public $ingredientes;
    public function getId_postre(){
        return $this->id_postre;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getPrecio (){
        return $this->precio;
    }
    public function getImagen(){
        return $this->imagen;
    }
    public function getDescripcion(){
        return $this->descripcion;
    }
    public function getIngredrientes(){
        return $this->ingredientes;
    }
    public function setId_postre($id_postre){
        $this->id_postre=$id_postre;
    }
    public function setNombre($nombre){
        $this->nombre=$nombre;
    }
    public function setPrecio($precio){
        $this->precio=$precio;
    }
    public function setImagen($imagen){
        $this->imagen=$imagen;
    }
    public function setDescripcion($descripcion){
        $this->descripcion=$descripcion;
    }
    public function setIngredientes($ingredientes){
        $this->ingredientes=$ingredientes;
    }
 }

?>
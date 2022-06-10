<?php

use FTP\Connection;

    require_once "postre.php";
    require_once "../util/conexion.php";
    
    class DaoPostre{
        public function listarPostres(){
            try{
                $objc=new ConexionBD();
                $pdo=$objc->getConexionBD();
                $rs=$pdo->query("select * from postres");
                $lista = array();
                while($fila = $rs->fetch())
                {
                    $lista[]=$fila;
                }
            }catch(Exception $ex){
            }
            return $lista;
        }
        public function buscarPostre($nomBuscar){
            try{        
                $objc=new ConexionBD();
                $pdo=$objc->getConexionBD();
                $rs=$pdo->query('select * from postres where postres.nombre like "%'.$nomBuscar.'%";');
                $lista = array();
                while($fila = $rs->fetch())
                {
                    $lista[]=$fila;
                }
            }catch(Exception $ex){
                echo $ex->getMessage();
            }
            return $lista;
        }
        public function insertarPostre( Postre $postre){
            try{
                $obj = new ConexionBD();
                $pdo=$obj->getConexionBD();
                $stmt=$pdo->prepare("insert into `postres` ( `nombre`, `precio`, `imagen`, `descripcion`, `ingredientes`) values (?, ?, ?, ?, ?);");
                $stmt->bindParam(1,$postre->nombre);
                $stmt->bindParam(2,$postre->precio);
                $stmt->bindParam(3,$postre->imagen);
                $stmt->bindParam(4,$postre->descripcion);
                $stmt->bindParam(5,$postre->ingredientes);
                $stmt->execute();
            }catch(Exception $ex){

            }

        }
        public function eliminarPostre($id){
            try {
                $obj= new ConexionBD();
                $pdo=$obj->getConexionBD();
                $stmt=$pdo->prepare("DELETE FROM `postres` WHERE `postres`.`id_postre` = ?");
                $stmt->bindParam(1,$id);
                $stmt->execute();
            } catch (Exception $ex) {
                
            }
        }

        public function buscarId($id){
            try{
                $objc=new ConexionBD();
                $pdo=$objc->getConexionBD();
                $rs=$pdo->query('select * from postres where postres.id_postre ='.$id.'');
                $lista = array();
                while($fila = $rs->fetch())
                {
                    $lista[]=$fila;
                }
            }catch(Exception $ex){

            }
            return $lista;
        }
        public function modificar (Postre $postre){
            try {
                $objc=new ConexionBD();
                $pdo=$objc->getConexionBD();
                $stmt=$pdo->prepare("update postres set nombre=?, precio=?, imagen=?, descripcion=?, ingredientes=? where id_postre=?");
                $stmt->bindParam(1,$postre->nombre);
                $stmt->bindParam(2,$postre->precio);
                $stmt->bindParam(3,$postre->imagen);
                $stmt->bindParam(4,$postre->descripcion);
                $stmt->bindParam(5,$postre->ingredientes);
                $stmt->bindParam(6,$postre->id_postre);
                $stmt->execute();
            } catch (Exception $ex) {
                echo $ex;
            }
        }













    }
    





?>
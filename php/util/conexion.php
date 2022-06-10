<?php
class ConexionBD
{  
   private $pdo =null;
   public function getConexionBD()
   {   try
       {           
           $this->pdo=new PDO("mysql:host=localhost;dbname=bdpostres","root","");
           if($this->pdo)
           {
            
           }
       } catch (PDOException $ex)
       {
        echo $ex->getMessage();             
       }  
       return $this->pdo;       
   }
}

?>
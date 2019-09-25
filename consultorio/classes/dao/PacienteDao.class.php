<?php
  
  /**
    Data da Criação: 26/01/2019
    Responsável: Valdeci Junior
    Ultima Modificação: 26/01/2019 - Criação
  */
  
  ini_set("display_errors",1);ini_set("display_startup_errors",1);error_reporting(E_ALL);

  include("classes/dao/config.php");

  define("CON", pg_connect("host=127.0.0.1 port=5432 dbname=consultorio_marcelo user=postgres password=postgres"));


  /**
   * 
   */
  class PacienteDao
  {

    public function alterarPaciente($cpf, $nome, $dataNascimento, $sexo, $rg, $observacao){

      $query = "SELECT cpf FROM paciente WHERE cpf='{$cpf}'";

      $result = pg_query($con, $sql);

      //Verifica se tem resultado
      if(pg_num_rows($result)!=0){

        $sql = "UPDATE paciente
                SET nome='{$nome}'
                ,cpf='{$cpf}'
                ,data_nascimento='{$dataNascimento}'
                ,sexo='{$rg}'
                ,rg='".$_POST["rg"]."'
                ,observacao='{$observacao}'
                WHERE cpf='{$cpf}";

        // die("<pre>".$sql);
        //Excuta a query
        $result = pg_query($con, $sql);
        
        return $result;
        pg_close(CON);
      }
    }

    public function cadastarPaciente($cpf, $nome, $dataNascimento, $sexo, $rg, $observacao){
      
      $query = "INSERT INTO paciente(cpf, nome, data_nascimento, sexo, rg, observacao)
                VALUES (
                        '{$cpf}',
                        '{$nome}',
                        '{$dataNascimento}',
                        '{$sexo}',
                        '{$rg}',
                        '{$observacao}'
                        )
                ";
      return pg_query(CON, $query);


      pg_close(CON);
    }

    public function excluirPaciente($cpf){
      
      $query = "DELETE FROM paciente WHERE cpf='{$cpf}'";

      return pg_query(CON, $query);


      pg_close($con);
    }

    public function getPacientes(){
      
      $query = "SELECT * FROM paciente ORDER BY nome";
      // die("<pre>".$sql);
      return pg_query(CON, $query);
    }

  }
?>
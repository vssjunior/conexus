<?php
  
  /**
    Data da Criação: 26/01/2019
    Responsável: Valdeci Junior
    Ultima Modificação: 26/01/2019 - Criação
  */
  
  //ini_set("display_errors",1);ini_set("display_startup_errors",1);error_reporting(E_ALL);

  /**
   * 
   */
  class PacienteDao
  {
    
    public function alterarPaciente($cpf, $nome, $dataNascimento, $sexo, $rg, $observacao){
      include("classes/dao/config.php");

      $con = mysqli_connect($host, $login, $senha, $bd);

      $query = "SELECT cpf FROM paciente WHERE cpf='{$cpf}'";

      $result = mysqli_query($con, $sql);

      //Verifica se tem resultado
      if(mysqli_num_rows($result)!=0){

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
        $result = mysqli_query($con, $sql);
        
        return $result;
        mysqli_close($con);
      }
    }

    public function cadastarPaciente($cpf, $nome, $dataNascimento, $sexo, $rg, $observacao){
      include("classes/dao/config.php");

      $con = mysqli_connect($host, $login, $senha, $bd);

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
      return mysqli_query($con, $query);


      mysqli_close($con);
    }

    public function excluirPaciente($cpf){
      include("classes/dao/config.php");

      $con = mysqli_connect($host, $login, $senha, $bd);

      $query = "DELETE FROM paciente WHERE cpf='{$cpf}'";

      return mysqli_query($con, $query);


      mysqli_close($con);
    }

    public function getPacientes(){
      include("classes/dao/config.php");
      $con = mysqli_connect($host, $login, $senha, $bd);
      $query = "SELECT * FROM paciente ORDER BY nome";
      // die("<pre>".$sql);
      return mysqli_query($con, $query);
    }

  }

    
    // header("location: ./principal.php");
?>
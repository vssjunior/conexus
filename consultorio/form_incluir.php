<?php
  /**
    Data da Criação: 26/01/2019
    Responsável: Valdeci Junior
    Ultima Modificação: 26/01/2019 - Criação
  */
  //ini_set("display_errors",1);ini_set("display_startup_errors",1);error_reporting(E_ALL);
?>
<html lang="pt-br">
  <head><!-- Cabeçalho do código fonte -->
    <meta charset="UTF-8"/>
    <title>Conexus & Cia</title>
    <!-- importação do CSS -->
    <link rel="stylesheet" type="text/css" href="../_css/form.css">
  </head>
  <script type="text/javascript" language="javascript" src="_javascript/funcoes.js"></script>
 
  <body>
    <form name="form1" method="POST" action="incluir.php">
      <?php
        //var_dump($_GET);
        if(isset($_GET["codigo"])){	
          include("./config.php");
          $con = mysqli_connect($host, $login, $senha, $bd);
      ?>
      <center><h3>Editar Contato</h3></center>
      <?php
        $sql = "SELECT * FROM paciente WHERE cpf='".$_GET['codigo']."'";
        //die("<pre>".$sql);
        $result = mysqli_query($con, $sql);
        $vetor = mysqli_fetch_array($result, MYSQLI_ASSOC);
        mysqli_close($con);
        //var_dump($vetor);
      ?>
      <input type="hidden" name="codigo" value="<?php echo $_GET['codigo']; ?>">
      <?php
        }else{
      ?>
      <center><h3>Cadastrar Novo Paciente</h3></center>
      <?php
        }
        $vetor['data_nascimento'] == "" ? $vetor['data_nascimento'] == "1900-01-01" : $vetor['data_nascimento'];
      ?>
      <table border="0" align="center" width="35%">
        <tr>
          <td>CPF:</td>
          <td colspan="2" width="90%">
        	  <input type="text" name="cpf" value="<?php echo @$vetor['cpf']; ?>" maxlength="12" size="12">
        	</td>
        </tr>
        <tr>
          <td>RG:</td>
          <td colspan="2" width="90%">
            <input type="text" name="rg" value="<?php echo @$vetor['rg']; ?>" maxlength="9" size="9">
          </td>
        </tr>
        <tr>
          <td>Nome:</td>
          <td colspan="2" width="90%">
            <input type="text" name="nome" value="<?php echo @$vetor['nome']; ?>" maxlength="50" size="31">
          </td>
        </tr>
        <tr>
          <td>Data Nascimento:</td>
          <td>
            <input type="date" name="dataNascimento" value="<?php echo @$vetor['data_nascimento']; ?>">
          </td>
        </tr>
        <tr>
          <td>Sexo:</td>
          <td colspan="2" width="90%">
            <select id="sexo" name="sexo">
              <?php if(@$vetor['sexo'] == "F"): ?>
                <option value="F" selected>Feminino</option>
                <option value="M">Masculino</option>
              <?php elseif(@$vetor['sexo'] == "M"): ?>
                <option value="F" >Feminino</option>
                <option value="M" selected>Masculino</option>
              <?php else: ?>
                <option value="" selected>Selecione</option>
                <option value="F" >Feminino</option>
                <option value="M">Masculino</option>
              <?php endif; ?>
            </select>
          </td>
        </tr>
        <tr>
          <td>Observação:</td>
          <td>
            <input type="text" name="observacao" id="observacao" value="<?php echo @$vetor['observacao'];?>">  
          </td>
        </tr>
        <tr>
          <td colspan="3" align="center">
            <input type="button" value="Cancelar" onclick="location.href='principal.php'">
            <input type="submit" value="Gravar">
          </td>
        </tr>
      </table>
    </form>

  </body>
</html>
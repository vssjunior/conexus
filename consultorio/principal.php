<?php
  /**
    Data da Criação: 26/01/2019
    Responsável: Valdeci Junior
    Ultima Modificação: 26/01/2019 - Criação
  */
  //ini_set("display_errors",1);ini_set("display_startup_errors",1);error_reporting(E_ALL);

  include("classes/dao/PacienteDao.class.php");

  $objDao = new PacienteDao();
  $pacientes = $objDao->getPacientes();
  
?>
<html lang="pt-br">
  <head><!-- Cabeçalho do código fonte -->
    <meta charset="UTF-8"/>
    <title>Conexus & Cia</title>
    <!-- importação do CSS -->
    <link rel="stylesheet" type="text/css" href="../_css/estilo.css">
  </head>

  <body>
    <!-- Importação de imagem 
    <img id="icone" src="../_imagens/home.png"/> 
    -->
    <center><h3>Gerenciamento de Paciente</h3></center>
    <form name="form1" method="POST" action="form_incluir.php">
      <table border="0" align="center" width="90%">
        <?php
          if(mysqli_num_rows($pacientes)==0){
        ?>
        <tr><td align="center">Não há nenhum paciente cadastrado.</td></tr>
        <tr><td align="center"><input type="submit" value="incluir Paciente"></td></tr>
        <?php
          }else{
        ?>
        <tr bgcolor="grey">
          <td width="15%" >CPF</td>
          <td width="50%" >NOME</td>
          <td width="15%" >IDADE</td>
          <td > SEXO</td>
          <td >RG</td>
          <td >OBSERVAÇÃO</td>
          <td >EDITAR</td>
          <td >EXCLUIR</td>
        </tr>
        <?php
          while($dados = mysqli_fetch_row($pacientes)){
        ?>
        <tr>
          <!-- CPF -->
          <td><?php echo $dados[0]; ?></td>
          <!-- NOME -->
          <td><?php echo $dados[1]; ?></td>
          <!-- IDADE -->
          <td><?php echo $dados[2]; ?></td>
          <!-- SEXO -->
          <td><?php echo $dados[3]; ?></td>
          <!-- RG -->
          <td><?php echo $dados[4]; ?></td>
          <!-- OBSERVAÇÃO -->
          <td><?php echo utf8_encode($dados[5]); ?></td>
          <!-- Botão Excluir -->
          <td>
            <input type="button" value="Excluir" onclick="<?php $objDao->excluirPaciente($dados[0])?>">
          </td>
          <!-- Botão editar -->
          <td align="center">
            <input type="button" value="Editar" onclick="location.href='form_incluir.php?codigo=<?php echo $dados[0]; ?>'">
          </td>
        </tr>
        <?php
          }
        ?>
        <tr bgcolor="grey"><td colspan="100%" height="5"></td></tr>
        <?php
          mysqli_close($con);
        ?>
        <tr><td colspan="10"><input type="submit" value="Incluir Novo Paciente"></td></tr>
        <?php
          }
        ?>
      </table>
    </form>
  </body>
</html>

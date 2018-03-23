<?php
header("Content-Type: text/html; charset=iso-8859-1",true);
?>
<html lang="pt-br">
  <head><!-- Cabeçalho do código fonte -->
    <meta charset="UTF-8"/>
    <title>Conexus & Cia</title>
    <!-- importação do CSS -->
    <link rel="stylesheet" type="text/css" href="../_css/estilo.css">
  </head>
  <script type="text/javascript" language="javascript" src="_javascript/funcoes.js"></script>
  <body>
    <div id="interface"> <!-- Criando divisões (colunas) -->
      <header id="cabecalho"> 
        <hgroup><!-- Grupo de Titulos --> 
          <h1>Conexus & Cia</h1>
          <h2>Soluções de T.I para aumentar a performance empresarial</h2>
        </hgroup>
        <!-- Importação de imagem -->
        <img id="icone" src="../_imagens/home.png"/>
        <!-- Listas -->  
      </header>
  <body>
  <head><title>Incluir/Editar um paciente.</title></head>
  <body>
    <form name="form1" method="POST" action="incluir.php">
      <?php
        if(isset($_GET["codigo"])){	
          include("./config.php");
          $con = mysqli_connect($host, $login, $senha, $bd);
      ?>
      <center><h3>Editar Contato</h3></center>
      <?php
        $sql = "SELECT * FROM dados_pessoais WHERE codigo=".$_GET['codigo'];
        $result = mysqli_query($con, $sql);
        $vetor = mysqli_fetch_array($result, MYSQLI_ASSOC);
        mysqli_close($con);
      ?>
      <input type="hidden" name="codigo" value="<?php echo $_GET['codigo']; ?>">
      <?php
        }else{
      ?>
      <center><h3>Cadastrar Novo Paciente</h3></center>
      <?php
        }
      ?>
      <table border="0" align="center" width="35%">
        <tr>
          <td width="20%">Nome:</td>
          <td colspan="2" width="90%">
        	  <input type="text" name="nome" value="<?php echo @$vetor['nome']; ?>" maxlength="50" size="31">
        	</td>
        </tr>
        <tr>
          <td>Telefone:</td>
          <td>
            <input type="text" name="ddd" value="<?php echo @$vetor['ddd']; ?>"   maxlength="2" size="3">
            <input type="text" name="telefone" value="<?php echo @$vetor['telefone']; ?>" maxlength="8" size="9">
          </td>
        </tr>
        <tr>
          <td colspan="3" align="center">
            <input type="button" value="Cancelar" onclick="location.href='index.php'">
            <input type="submit" value="Gravar">
          </td>
        </tr>
      </table>
    </form>
    <footer id="rodape">
        <p>Copyright 2018 - by Conexus & Cia <br/>
        <!-- target blank abre em nova aba -->
        <a href="http://facebook.com/conexusecia" target="_blank"> Facebook </a>  / E-mail: contato@conexueecia.com.br / cel: (35)99195-8111</p>
      </footer>
  </body>
</html>
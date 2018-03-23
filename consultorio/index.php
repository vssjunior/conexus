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
    <center><h3>Gerenciamento de Paciente</h3></center>
    <form name="form1" method="POST" action="form_incluir.php">
      <table border="0" align="center" width="60%">
        <?php
          include("./config.php");
          $con = mysqli_connect($host, $login, $senha, $bd);
          $sql = "SELECT * FROM dados_pessoais ORDER BY nome";
          $tabela = mysqli_query($con, $sql);
          if(mysqli_num_rows($tabela)==0){
        ?>
        <tr><td align="center">Não há nenhum paciente cadastrado.</td></tr>
        <tr><td align="center"><input type="submit" value="incluir Paciente"></td></tr>
        <?php
          }else{
        ?>
        <tr bgcolor="grey"><td width="50%">Nome</td><td width="20%">Telefone</td><td width="30%"></td></tr>
        <?php
          while($dados = mysqli_fetch_row($tabela)){
        ?>
        <tr><td><?php echo $dados[1]; ?></td>
          <td><?php echo "(".$dados[2].") ".$dados[3]; ?></td>
        	<td align="center">
        	  <input type="button" value="Excluir" onclick="location.href='excluir.php?codigo=<?php echo $dados[0]; ?>'">
        	  <input type="button" value="Editar" onclick="location.href='form_incluir.php?codigo=<?php echo $dados[0]; ?>'">
        	</td>
        </tr>
        <?php
          }
        ?>
        <tr bgcolor="grey"><td colspan="3" height="5"></td></tr>
        <?php
          mysqli_close($con);
        ?>
        <tr><td colspan="3" align="center"><input type="submit" value="Incluir Novo Paciente"></td></tr>
        <?php
          }
        ?>
      </table>
    </form>
    <footer id="rodape">
        <p>Copyright 2018 - by Conexus & Cia <br/>
        <!-- target blank abre em nova aba -->
        <a href="http://facebook.com/conexusecia" target="_blank"> Facebook </a>  / E-mail: contato@conexueecia.com.br / cel: (35)99195-8111</p>
      </footer>
  </body>
</html>

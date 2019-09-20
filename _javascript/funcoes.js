//Função responsável por altera um ícone do menu. OBSOLETA
function mudaIcone (foto){
			document.getElementById("icone").src = foto;
}

//Funcao responsavel por ajustar um iframe
function ajustarIframe()
{
	try{    
		var oBody       =       ifrm.document.body;
		var oFrame      =       document.all("principal");          
		oFrame.style.height = oBody.scrollHeight + (oBody.offsetHeight - oBody.clientHeight);
		oFrame.style.width = oBody.scrollWidth + (oBody.offsetWidth - oBody.clientWidth);
	}
	catch(e)
	{
		window.status = 'Error: ' + e.number + '; ' + e.description;
	}
}
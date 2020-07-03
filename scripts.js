var jogo = [];
var tab = [];
var quemJoga = 0; //0 jogador 1- máquina
var verifica;
var jogando = true;
var nivel = 0;
var qualNivel = 0;
var jogadaCpu = 1;
var quemComeca = 1;
var jogada = 0;
var res = 0;
var opc;

//=== função pra máquina jogar =======================================================================================================
function machinePlay(){

	if(jogando){ // 1
		
		if(nivel == 1){
			do{                                        // faz sortei da posição a ser jogada
				l = Math.round(Math.random()*2);      // gera números pseudo-aleatórios
				c = Math.round(Math.random()*2);
			}while(jogo[l][c] != "");                // Enquanto diferente de vázio eapaço vago na matriz
			jogo[l][c] = "O";                       // Marca em uma posição vázia na matriz 3x3 
		}else if(nivel == 2){
			// ataque
			// linha 1====================================================================================================
			if ((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")){ // linha 1
				jogo[0][2] = "O";
			}else if ((jogo[0][0] == "O") && (jogo[0][2] == "O") && (jogo[0][1] == "")){
				jogo[0][1] = "O";
			}else if ((jogo[0][1] == "O") && (jogo[0][2] == "O") && (jogo[0][0] == "")){
				jogo[0][0] = "O";
			}else //linha 2====================================================================================================
			if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")){
				jogo[1][2] = "O";
			}else if ((jogo[1][0] == "O") && (jogo[1][2] == "O") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "O") && (jogo[1][2] == "O") && (jogo[1][0] == "")){
				jogo[1][0] = "O";
			}else //linha 3====================================================================================================
			if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")){
				jogo[2][2] = "O";
			}else if ((jogo[2][0] == "O") && (jogo[2][2] == "O") && (jogo[2][1] == "")){
				jogo[2][1] = "O";
			}else if ((jogo[2][1] == "O") && (jogo[2][2] == "O") && (jogo[2][0] == "")){
				jogo[2][0] = "O";
			}else  // coluna 1====================================================================================================
			if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")){
				jogo[2][0] = "O";
			}else if ((jogo[0][0] == "O") && (jogo[2][0] == "O") && (jogo[1][0] == "")){
				jogo[1][0] = "O";
			}else if ((jogo[1][0] == "O") && (jogo[2][0] == "O") && (jogo[0][0] == "")){
				jogo[0][0] = "O";
			}else  // coluna 2====================================================================================================
			if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")){
				jogo[2][1] = "O";
			}else if ((jogo[0][1] == "O") && (jogo[2][1] == "O") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "O") && (jogo[2][1] == "O") && (jogo[0][1] == "")){
				jogo[0][1] = "O";
			}else // coluna 3====================================================================================================
			if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")){
				jogo[2][2] = "O";
			}else if ((jogo[0][2] == "O") && (jogo[2][2] == "O") && (jogo[1][2] == "")){
				jogo[1][2] = "O";
			}else if ((jogo[1][2] == "O") && (jogo[2][2] == "O") && (jogo[0][2] == "")){
				jogo[0][2] = "O";
			}else // diagonal 1====================================================================================================
			 if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")){
				jogo[2][2] = "O";
			}else if ((jogo[0][0] == "O") && (jogo[2][2] == "O") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "O") && (jogo[2][2] == "O") && (jogo[0][0] == "")){
				jogo[0][0] = "O";
			}else  // diagonal 2====================================================================================================
			if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")){
				jogo[2][0] = "O";
			}else if ((jogo[0][2] == "O") && (jogo[2][0] == "O") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "O") && (jogo[2][0] == "O") && (jogo[0][2] == "")){
				jogo[0][2] = "O";
			}else
			//defesa ###################################################################################################################
			if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")){ // linha 1
				jogo[0][2] = "O";
			}else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")){
				jogo[0][1] = "O";
			}else if ((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")){
				jogo[0][0] = "O";
			}else //linha 2====================================================================================================
			if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")){
				jogo[1][2] = "O";
			}else if ((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "X") && (jogo[1][2] == "X") && (jogo[1][0] == "")){
				jogo[1][0] = "O";
			}else //linha 3====================================================================================================
			if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")){
				jogo[2][2] = "O";
			}else if ((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")){
				jogo[2][1] = "O";
			}else if ((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")){
				jogo[2][0] = "O";
			}else  // coluna 1====================================================================================================
			if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")){
				jogo[2][0] = "O";
			}else if ((jogo[0][0] == "X") && (jogo[2][0] == "X") && (jogo[1][0] == "")){
				jogo[1][0] = "O";
			}else if ((jogo[1][0] == "X") && (jogo[2][0] == "X") && (jogo[0][0] == "")){
				jogo[0][0] = "O";
			}else  // coluna 2====================================================================================================
			if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")){
				jogo[2][1] = "O";
			}else if ((jogo[0][1] == "X") && (jogo[2][1] == "X") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "X") && (jogo[2][1] == "X") && (jogo[0][1] == "")){
				jogo[0][1] = "O";
			}else // coluna 3====================================================================================================
			if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")){
				jogo[2][2] = "O";
			}else if ((jogo[0][2] == "X") && (jogo[2][2] == "X") && (jogo[1][2] == "")){
				jogo[1][2] = "O";
			}else if ((jogo[1][2] == "X") && (jogo[2][2] == "X") && (jogo[0][2] == "")){
				jogo[0][2] = "O";
			}else // diagonal 1====================================================================================================
			 if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")){
				jogo[2][2] = "O";
			}else if ((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "X") && (jogo[2][2] == "X") && (jogo[0][0] == "")){
				jogo[0][0] = "O";
			}else  // diagonal 2====================================================================================================
			if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")){
				jogo[2][0] = "O";
			}else if ((jogo[0][2] == "X") && (jogo[2][0] == "X") && (jogo[1][1] == "")){
				jogo[1][1] = "O";
			}else if ((jogo[1][1] == "X") && (jogo[2][0] == "X") && (jogo[0][2] == "")){
				jogo[0][2] = "O";
			}else{ // ===================================================================================================================

				if (jogada < 8) {

					do{
						l = Math.round(Math.random()*2);      // gera números pseudo-aleatórios
						c = Math.round(Math.random()*2);
					}while(jogo[l][c] != "");                // Enquanto diferente de vázio eapaço vago na matriz
					jogo[l][c] = "O";	
				}else{
					 for(var l= 0; l < 3; l++){
						for( var c = 0; c < 3; c++){
							if(jogo[l][c] == ""){
			 						jogo[l][c] = "O";
							}//end if 3

						}// end for 2

					 }// end for 1

				}//end else
				  
		    }// else

		}//end else if

		verifica = vitoria();
		if (verifica != ""){
			alert(verifica + " Venceu !!");
			jogando = false;
		}
		atualizarTab();
		jogada++;
		quemJoga = 0;
	}// end if jogando


}// machinePlay
//==== Função que verifica quem venceu =====================================================================================================
function vitoria(){

	var l,c;
	
		// verifica vitória linhas
		for(l=0 ; l < 3; l++){

			if((jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])){

				return jogo[l][0]; //retorna simbolo vencedor
			}// end if linhas

		}// end for linhas

		// verifica vitória colunas
		for(c=0 ; c < 3; c++){

			if((jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])){

				return jogo[0][c]; //retorna simbolo vencedor
			}// end if colunas

		}// for colunas

	 // Vitória Diagonais
	 	if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])){

				return jogo[0][0]; //retorna simbolo vencedor
		}// end if 1 diagonal
		if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])){

				return jogo[0][2]; //retorna simbolo vencedor
	}// end if 2 diagonal
	
		return "";
	
}//end vitória
// === função para jogador jogar============================================================================================================
function jogar(p){

	if((jogando)&&(quemJoga==0)){ // 1 if

		switch(p){

			case 1:
				if(jogo[0][0] == ""){

					jogo[0][0]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 1
			break;
			case 2:
				if(jogo[0][1] == ""){

					jogo[0][1]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 2
			break;
			case 3:
				if(jogo[0][2] == ""){

					jogo[0][2]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 3
			break;
			case 4:
				if(jogo[1][0] == ""){

					jogo[1][0]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 4
			break;
			case 5:
				if(jogo[1][1] == ""){

					jogo[1][1]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 5
			break;
			case 6:
				if(jogo[1][2] == ""){

					jogo[1][2]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 6
			break;
			case 7:
				if(jogo[2][0] == ""){

					jogo[2][0]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 7
			break;
			case 8:
				if(jogo[2][1] == ""){

					jogo[2][1]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 8
			break;
			case 9:
				if(jogo[2][2] == ""){

					jogo[2][2]="X";// jogada do jogador
					quemJoga = 1; // passa a jogada pra máquina
				}//end if 9
			break;

		}//end switch
		if(quemJoga == 1){ // 2 if

			atualizarTab(); // chama a função de atualização
			verifica = vitoria();
			if (verifica != ""){ // se houver vitorioso 3 if
				alert(verifica + " Venceu !!");
				jogando = false;
			}
			jogada++;
			machinePlay();
		}//end 2if
		
	}// end 1if

}// jogar

// faz a tualização do tabuleiro ==================================================================================================
function atualizarTab(){

	for(var l = 0; l < 3; l++){// percorrer as linhas da matriz



		for(var c = 0; c < 3; c++){// percorrer as colunas da matriz

			if(jogo[l][c] == "X"){

				tab[l][c].innerHTML="X";
				tab[l][c].style.cursor="default";
			}else if(jogo[l][c] == "O"){

				tab[l][c].innerHTML="O";
				tab[l][c].style.cursor="default";
			}else{

				tab[l][c].innerHTML="";
				tab[l][c].style.cursor="pointer";
			}

		}// end for 2

	}// end for 1

}// end atualizaTab

//--- função responsável por inicializar as variáveis=======================================================================================
function iniciar(){
	
	//nivel = 0;
	opc = prompt("Que jogar nível 1 ou 2 ?");
	qualNivel = confirm(  opc + "Dejesa confirmar o nível?");
	//res = parseInt(qualNivel, 10);
	nivel = opc;
	//nivelDificuldade(qualNivel);
	jogando = true;
	jogadaCpu =1;
	jogada = 0;
	jogo=[["","",""], // inicializa a matriz dp jogo zerada
		  ["","",""],
		  ["","",""]
		];
		// associa as cada posição da matriz a um id
	tab = [
		[document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
		[document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
		[document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
	];

	atualizarTab();
	if(quemComeca == 1){
		quemComeca = 0;
		quemJoga = quemComeca;
		document.getElementById("dvComeca").innerHTML="Quem começa: jogador";
	}else{
		quemComeca = 1;
		quemJoga = quemComeca;
		document.getElementById("dvComeca").innerHTML="Quem começa: Máquina";
		machinePlay();
	}// end else
	
}// end iniciar

//=============================================================================================================================================
window.addEventListener("load",iniciar);






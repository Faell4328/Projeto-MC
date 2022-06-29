let telefone_envio;
let instagram="";
let zap="";
let facebook="";

alert("Seja bem-vindo, o site está em desenvolvimento, então pode ter alguns bugs e falta muitas funcionalidades");

var width_tela;
var height_tela;
var quantidade_elementos;
var elemento_botao_antigo;
var codigo;
var tamanho_roupa_selecionada;
var quantidade_tamanho_roupa_selecionada=0;
var responsividade_compra;
var global;
var controle_de_verificacao_da_memoria;
var controle_responsividade_cadastro=false;


var dispositivo;
var cliente_nome;
var cliente_telefone;
var cliente_rua;
var cliente_numero;
var cliente_ap;
var cliente_bairro;
var cliente_cidade_estado;

//  Objeto de Armazenamento.
var Armazenamento=function(){
    this.lancamento_dados_preco=[];
    this.lancamento_dados_descricao=[];
    this.lancamento_dados_tamanho=[];
    this.lancamento_dados_codigo=[];
    this.lancamento_quantidade=8;

    this.promocao_dados_preco=[];
    this.promocao_dados_descricao=[];
    this.promocao_dados_tamanho=[];
    this.promocao_dados_codigo=[];
    this.promocao_quantidade=9;

    this.locais_disponiveis=[];
    this.locais_ocupado=[];

    this.sacola_codigo=[];
    this.sacola_local=[];
    this.sacola_descricao=[];
    this.sacola_tamanho=[];
    this.sacola_preco=[];
}
var conteudo_pagina=new Armazenamento();
//  Conteudo Lancamento
conteudo_pagina.lancamento_dados_descricao=[
    "Vestido Rosa1",
    "Vestido Salmão1", 
    "Vestidos para festa1",
    "Vestido Rosa2",
    "Vestido Salmão2", 
    "Vestidos para festa2",
    "Vestido Rosa3",
    "Vestido Salmão3", 
    "Vestidos para festa3"
];
conteudo_pagina.lancamento_dados_preco=[
    "51,20",
    "125,10",
    "351,00",
    "51,20",
    "125,10",
    "351,00",
    "51,20",
    "125,10",
    "351,00"
];
conteudo_pagina.lancamento_dados_tamanho=[
    "P (Veste de 38 a 42),M,G,GG,XG",
    "P,M,G",
    "XG",
    "GG,XG",
    "P",
    "M,GG",
    "P,XG",
    "M",
    "GG,XG"
];
conteudo_pagina.lancamento_dados_codigo=[
    "0001",
    "0002",
    "0003",
    "0004",
    "0005",
    "0006",
    "0007",
    "0008",
    "0009",
];

//  Conteudo Promocao
conteudo_pagina.promocao_dados_descricao=[
    "Vestido Rosa",
    "Vestido Salmão", 
    "Vestidos para festa",
    "Vestido Rosa",
    "Vestido Salmão", 
    "Vestidos para festa",
    "Vestido Rosa",
    "Vestido Salmão", 
    "Vestidos para festa"
];
conteudo_pagina.promocao_dados_preco=[
    "51,20",
    "125,10",
    "351,00",
    "51,20",
    "125,10",
    "351,00",
    "51,20",
    "125,10",
    "351,00"
];
conteudo_pagina.promocao_dados_tamanho=[
    "P (Veste de 38 a 42),M,G,GG,XG",
    "P,M,G",
    "XG",
    "GG,XG",
    "P",
    "M,GG",
    "P,XG",
    "M",
    "GG,XG"
];
conteudo_pagina.promocao_dados_codigo=[
    "0010",
    "0011",
    "0012",
    "0013",
    "0014",
    "0015",
    "0016",
    "0017",
    "0018",
];

//----------------------------------------------------------------------------

function redesSociais(rede_social){
    if(rede_social=='instagram'){
        if(instagram==""&&confirm("Seja colocar seu instagram?")){
            instagram="http://"+prompt("Coloque a URL completa");
        }
        else{
            window.location.href=instagram;
        }
    }
    else if(rede_social=='zap'){
        if(instagram==""&&confirm("Seja colocar seu whatsapp?")){
            instagram="http://"+prompt("Coloque a URL completa");
        }
        else{
            window.location.href=zap;
        }
    }
    else{
        if(instagram==""&&confirm("Seja colocar seu facebook?")){
            instagram="http://"+prompt("Coloque a URL completa");
        }
        else{
            window.location.href=facebook;
        }
    }
}


//  Função para mandar mensagem no ZAP
function whatsapp(){

    if(conteudo_pagina.locais_ocupado.length<=0){
        alert("Selecione algum produto para fechar a compra");
    }
    else{
            
        telefone_envio=prompt("Coloque o telefone que vai ser enviado o pedido");

        cliente_nome=localStorage.getItem("nome");
        cliente_telefone=localStorage.getItem("telefone");
        cliente_rua=localStorage.getItem("rua");
        cliente_numero=localStorage.getItem("numero");
        cliente_ap=localStorage.getItem("ap");
        cliente_bairro=localStorage.getItem("bairro");
        cliente_cidade_estado=localStorage.getItem("cidade/estado");

        var mensagem="👋Olá, venho do MC-Moda.%0A";
        if(cliente_nome!="Vazio"){
            mensagem+="Nome do Cliente: "+cliente_nome+"%0A";
        }
        if(cliente_telefone!="Vazio"){
            mensagem+="Telefone do Cliente: "+cliente_telefone+"%0A";
        }
        if(cliente_rua!="Vazio"){
            mensagem+="Rua: "+cliente_rua+",%20";
        }
        if(cliente_numero!="Vazio"){
            mensagem+="Número: "+cliente_numero+",%20";
        }
        if(cliente_ap!="Vazio"){
            mensagem+="Apartamento: "+cliente_ap+",%20";
        }
        if(cliente_bairro!="Vazio"){
            mensagem+="Bairro: "+cliente_bairro+",%20";
        }
        if(cliente_cidade_estado!="Vazio"){
            mensagem+="Cidade/Estado: "+cliente_cidade_estado+".";
        }

        mensagem+="%0A%0APedido:%20%0A%0A";

        for(var i=0; i<quantidade_elementos; i++){

            mensagem+="👗%20Roupa%20"+(i+1)+"%0A";
            var controle=conteudo_pagina.sacola_descricao[i].split(" ");
            var teste="";
            for(var z=0; z<controle.length; z++){
                teste+=controle[z]+"%20";
            }
            conteudo_pagina.sacola_descricao[i]=teste;
            mensagem+="*%20Roupa:%20"+conteudo_pagina.sacola_descricao[i]+"%0A";
            mensagem+="*%20Código:%20"+conteudo_pagina.sacola_codigo[i]+"%0A";
            mensagem+="*%20Local%20da%20Roupa:%20"+conteudo_pagina.sacola_local[i]+"%0A";
            mensagem+="*%20Tamanho%20da%20Roupa:%20"+conteudo_pagina.sacola_tamanho[i]+"%0A";
            mensagem+="*%20Preço:%20R$%20"+conteudo_pagina.sacola_preco[i]+"%0A";
            mensagem+="---------------------------%0A%0A";
        }
        window.location.href="https://wa.me/55"+telefone_envio+"?text="+mensagem;
    }
}

//  Funcao de controle de cadastro
function clienteCadastro(){
//    filter: blur(10px);  Ençadado
    if(localStorage.getItem("nome")!=null&&localStorage.getItem("telefone")!=null&&localStorage.getItem("rua")!=null&&localStorage.getItem("numero")!=null&&localStorage.getItem("ap")!=null&&localStorage.getItem("bairro")!=null&&localStorage.getItem("cidade/estado")!=null){
        document.getElementById("protetor_tela").style="";
        document.getElementsByTagName("body")[0].style="";
        document.getElementById("cliente_cadastro").style="";
        controle_responsividade_cadastro=true;
    }
    else{
        document.getElementById("protetor_tela").style="display:block";
        document.getElementsByTagName("body")[0].style="overflow: hidden;";
        document.getElementById("cliente_cadastro").style="display:block; margem:auto";
        document.getElementById("cliente_apresentacao").innerHTML="👋 Olá, seja bem-vindo, em nosso sistema você não possui cadastro ou ele foi removido por algum possível bug ou uma remoção, então por favor preencha os campos com seus dados para continuar!";
    }

}

function cadastrarCliente(){
    var controle=[];
    controle[0]=document.getElementById("cliente_nome_dado").value;
    controle[1]=document.getElementById("cliente_telefone_dado").value;
    controle[2]=document.getElementById("cliente_endereco_rua").value;
    controle[3]=document.getElementById("cliente_endereco_numero").value;
    controle[4]=document.getElementById("cliente_endereco_ap").value;
    controle[5]=document.getElementById("cliente_endereco_bairro").value;
    controle[6]=document.getElementById("cliente_endereco_cidade").value;

    if(controle[0]==''){
        controle[0]="Vazio";
    }
    if(controle[1]==''){
        controle[1]="Vazio";
    }    
    if(controle[2]==''){
        controle[2]="Vazio";
    }
    if(controle[3]==''){
        controle[3]="Vazio";
    }
    if(controle[4]==''){
        controle[4]="Vazio";
    }
    if(controle[5]==''){
        controle[5]="Vazio";
    }
    if(controle[6]==''){
        controle[6]="Vazio";
    }

    localStorage.setItem("nome",controle[0]);
    localStorage.setItem("telefone",controle[1]);
    localStorage.setItem("rua",controle[2]);
    localStorage.setItem("numero",controle[3]);
    localStorage.setItem("ap",controle[4]);
    localStorage.setItem("bairro",controle[5]);
    localStorage.setItem("cidade/estado",controle[6]);
    clienteCadastro();
}

//  Carregando o Conteudo da Pagina.
var CarregandoElementosInternos=function(){
    this.verificandoSeConteudo=function(){
        var cont=0;   
        var cont2=0;   
        conteudo_pagina.locais_disponiveis.splice(0,14);
        conteudo_pagina.locais_ocupado.splice(0,14);
        for(var i=0; i<15; i++){
            if(localStorage.getItem("codigo"+i)==null){
                conteudo_pagina.locais_disponiveis[cont]=i;
                cont++;
            }
            else{
                conteudo_pagina.locais_ocupado[cont2]=i;
                cont2++;
            }
        }
        quantidade_elementos=15-conteudo_pagina.locais_disponiveis.length;
        document.getElementById("quantidade").innerHTML=quantidade_elementos;
    }
    this.adicionandoCompraSacola=function(codigo, tamanho){
        var b=new AnimacaoDaPagina();
        localStorage.setItem("codigo"+conteudo_pagina.locais_disponiveis[0],codigo);
        localStorage.setItem("tamanho"+conteudo_pagina.locais_disponiveis[0], tamanho);
        b.adicionandoCompraSacola();

    }
}

var CarregarDescricao=function(){
    var elemento_lancamento=document.getElementsByClassName("lancamento_descricao");
    this.carregarDescricaoLancamento=function(){
        for(var i=0; i<conteudo_pagina.lancamento_quantidade; i++){
            elemento_lancamento[i].innerHTML=conteudo_pagina.lancamento_dados_descricao[i];
        }
    }

    var elemento_promocao=document.getElementsByClassName("promocao_descricao");
    this.carregarDescricaoPromocao=function(){
        for(var i=0; i<conteudo_pagina.promocao_quantidade; i++){
            elemento_promocao[i].innerHTML=conteudo_pagina.promocao_dados_descricao[i];
        }
    }
}
var CarregarPreco=function(){
    var elemento_lancamento=document.getElementsByClassName("lancamento_preco");
    this.carregarPrecoLancamento=function(){
        for(var i=0; i<conteudo_pagina.lancamento_quantidade; i++){
            elemento_lancamento[i].innerHTML="R$ "+conteudo_pagina.lancamento_dados_preco[i];
        }
    }

    var elemento_promocao=document.getElementsByClassName("promocao_preco");
    this.carregarPrecoPromocao=function(){
        for(var i=0; i<conteudo_pagina.promocao_quantidade; i++){
            elemento_promocao[i].innerHTML="R$ "+conteudo_pagina.promocao_dados_preco[i];
        }
    }
}

var BarraNavegacao=function(){
    var status=false;
    this.abrirfecharBarraNavegacao=function(){
        var cont=0;
        var tmp;
        if(status==false){
            status=1;
            tmp=setInterval(function(){
                document.getElementById("navegacao").style="width:"+cont+"%;";
                cont++;
                if(cont==41){
                    clearInterval(tmp);
                }
            },15)
        }
        else if(status==true){
            cont=41;
            status=0;
            tmp=setInterval(function(){
                document.getElementById("navegacao").style="width:"+cont+"%";
                cont--;
                if(cont==-2){
                    clearInterval(tmp);
                    document.getElementById("lista").style="right:-400px";
                }
            },15)
        }
    }
}

var FotosDaPagina=function(){
    //  Carregando fotos na pagina.
    var elemento_lancamento=document.getElementsByClassName("lancamento_fotos");
    this.carregarFotoLancamento=function(){
        for(var i=0; i<conteudo_pagina.lancamento_quantidade; i++){
            var atributo=document.createAttribute("src");
            atributo.value="imagem/lancamento/foto"+(i+1)+".jpeg";
            elemento_lancamento[i].setAttributeNode(atributo);
            atributo=document.createAttribute("data-codigo");
            atributo.value=conteudo_pagina.lancamento_dados_codigo[i];
            elemento_lancamento[i].setAttributeNode(atributo);
        }
    }

    var elemento_promocao=document.getElementsByClassName("promocao_fotos");
    this.carregarFotoPromocao=function(){
        for(var i=0; i<conteudo_pagina.promocao_quantidade; i++){
            var atributo=document.createAttribute("src");
            atributo.value="imagem/promocao/foto"+(i+1)+".jpeg";
            elemento_promocao[i].setAttributeNode(atributo);
            atributo=document.createAttribute("data-codigo");
            atributo.value=conteudo_pagina.promocao_dados_codigo[i];
            elemento_promocao[i].setAttributeNode(atributo);
        }
    }

    //  Colocando efeito de expandir e retrair a foto
    var controle=false;
    var tempo=0;
    var tmp1;
    var tmp2;
    var ultimo_elemento;
    this.MouseOn=function(elemento){
        if(dispositivo=="desktop"){
            if(ultimo_elemento==undefined){
                tempo=setTimeout(function(){
                    var tamanho=0;
                    ultimo_elemento=elemento;
                    MouseOnControl(elemento);
                    tmp1=setInterval(function(){
                        elemento.style="width:"+(55+tamanho)+"%;";
                        tamanho++;
                    },1);
                },500);
            }
        }
        else{
            if(ultimo_elemento==undefined){
                tempo=setTimeout(function(){
                    var tamanho=0;
                    ultimo_elemento=elemento;
                    MouseOnControl(elemento);
                    tmp1=setInterval(function(){
                        elemento.style="width:"+(75+tamanho)+"%;";
                        tamanho++;
                    },1);
                },500);
            }
        }
    }
    function MouseOnControl(elemento){
        if(dispositivo=="desktop"){
            setTimeout(function(){
                clearInterval(tmp1);
                elemento.style="width:"+(75)+"%;";
            },75);
        }
        else{
            setTimeout(function(){
                clearInterval(tmp1);
                elemento.style="width:"+(100)+"%;";
            },100);
        }
    }
    this.MouseOf=function(elemento){
        if(dispositivo=="desktop"){
            clearTimeout(tempo);
            if(ultimo_elemento!=undefined){
                ultimo_elemento=undefined;
                var tamanho=20;
                MouseOfControl(elemento);
                tmp2=setInterval(function(){
                    elemento.style="width:"+(55+tamanho)+"%;";
                    tamanho--;
                },1);
            }
        }
        else{
            clearTimeout(tempo);
            if(ultimo_elemento!=undefined){
                ultimo_elemento=undefined;
                var tamanho=25;
                MouseOfControl(elemento);
                tmp2=setInterval(function(){
                    elemento.style="width:"+(75+tamanho)+"%;";
                    tamanho--;
                },1);
            }
        }
    }
    function MouseOfControl(elemento){
        if(dispositivo=="desktop"){
            setTimeout(function(){
                clearInterval(tmp2);
                elemento.style="width:"+(55)+"%;";
            },75);
        }
        else{
            setTimeout(function(){
                clearInterval(tmp2);
                elemento.style="width:"+(75)+"%;";
            },100);
        }
    }
}

var LocalDeCompra=function(){
    //  Abrindo o elemento de compra
    this.MouseClick=function(elemento){
        document.getElementsByTagName("body")[0].style="overflow:hidden;";
        document.getElementById("protetor_tela").style="display:inline";
        document.getElementById("protetor_sacola").style="display:inline";
        document.getElementById("protetor_opcoes").style="display:inline";



        //  Carregando elementos na compra
        codigo=elemento.dataset.codigo;
        var local=elemento.src.split("/");
        var tamanho_conteudo=(local.length-1);
        var onde=local[tamanho_conteudo-1];
        var identificador=local[tamanho_conteudo].split(".");
        identificador=identificador[0];
        identificador=identificador[identificador.length-1];
        identificador--;
        var tamanho_conteudo_lancamento=conteudo_pagina.lancamento_dados_tamanho[identificador].split(",").length
        var tamanho_conteudo_promocao=conteudo_pagina.promocao_dados_tamanho[identificador].split(",").length

        //  Deixando os botao oculto para nao ter bugs(um resete)
        for(var i=0; i<5; i++){
            document.getElementsByClassName("compra_tamanho")[i].style="display:none;";
        }

        if(onde=="lancamento"){
            document.getElementById("p_onde").innerHTML="Lançamento";
            document.getElementById("p_compra_descricao").innerHTML=conteudo_pagina.lancamento_dados_descricao[identificador];
            document.getElementById("p_compra_preco").innerHTML="R$ "+conteudo_pagina.lancamento_dados_preco[identificador];
            for(var i=0; i<tamanho_conteudo_lancamento;i++){
                document.getElementsByClassName("compra_tamanho")[i].style="display:block;";
                document.getElementsByClassName("compra_tamanho")[i].innerHTML=conteudo_pagina.lancamento_dados_tamanho[identificador].split(",")[i];
                quantidade_tamanho_roupa_selecionada+=1;
            }
            var b=new EventosDaPagina();
            b.carregarEventoBotaoTamanhoCompra(tamanho_conteudo_lancamento);
        }
        else if(onde=="promocao"){
            document.getElementById("p_onde").innerHTML="Promoção";
            document.getElementById("p_compra_descricao").innerHTML=conteudo_pagina.promocao_dados_descricao[identificador];
            document.getElementById("p_compra_preco").innerHTML="R$ "+conteudo_pagina.promocao_dados_preco[identificador];
            for(var i=0; i<tamanho_conteudo_promocao;i++){
                document.getElementsByClassName("compra_tamanho")[i].style="display:block;";
                document.getElementsByClassName("compra_tamanho")[i].innerHTML=conteudo_pagina.promocao_dados_tamanho[identificador].split(",")[i];
                quantidade_tamanho_roupa_selecionada+=1;
            }
            var b=new EventosDaPagina();
            b.carregarEventoBotaoTamanhoCompra(tamanho_conteudo_promocao);
        }

        var a=new ResponsividadeDaPagina()
        a.responsividadeElementos(false);


        //  Mostrando local de compra
        var cont=0.0;
        var local=document.getElementById("compra");
        document.getElementById("compra_foto").src=elemento.src;
        responsividadeCompra();
        local.style.opacity=0;
        var tempo=setInterval(function(){
            local.style.opacity=cont;
            cont+=0.1;
            if(cont>=1.0){
                document.getElementById("protetor_tela").style="display:none";
                a.responsividadeElementos(true,2)
                clearInterval(tempo);
            }
        },20);
    }
    //  Fechando o elemento de compra
    this.fecharElementoCompra=function(){
        tamanho_roupa_selecionada=undefined;
        document.getElementById("protetor_tela").style="display:inline";
        document.getElementsByTagName("body")[0].style="";
        quantidade_tamanho_roupa_selecionada=0;
        var cont=1.0;
        var local=document.getElementById("compra");
        document.getElementById("compra_fechar").style.background="#f88";
        if(elemento_botao_antigo!=undefined){
            elemento_botao_antigo.style.backgroundColor="#eee";
            elemento_botao_antigo.style.color="#000"
        }
        var a=new ResponsividadeDaPagina()
        a.responsividadeElementos(false);
        var tempo=setInterval(function(){
            local.style.opacity=cont;
            cont-=0.1;
            if(cont<=0.0){
                local.style.opacity=0.0;
                local.style="display:none;";
                document.getElementById("compra_fechar").style.background="";
                document.getElementById("protetor_tela").style="display:none";
                document.getElementById("protetor_opcoes").style="display:none";
                document.getElementById("protetor_sacola").style="display:none";
                a.responsividadeElementos(true,1);
                clearInterval(tempo);
            }
        },20);
    }

    //  Selecionando tamanho da roupa
    this.selecionandoBotaoTamanho=function(elemento){
        if(elemento_botao_antigo==undefined){
            elemento.style.backgroundColor="#222";
            elemento.style.color="#fff";
            elemento_botao_antigo=elemento;
            tamanho_roupa_selecionada=elemento.innerHTML;
        }
        else{
            elemento_botao_antigo.style.backgroundColor="#eee";
            elemento_botao_antigo.style.color="#000";
            elemento.style.backgroundColor="#222";
            elemento.style.color="#fff";
            elemento_botao_antigo=elemento;
            tamanho_roupa_selecionada=elemento.innerHTML;
        }
    }

    this.finalizarCompra=function(){
        var b=new CarregandoElementosInternos();
        if(conteudo_pagina.locais_disponiveis.length<=0){
            alert("Sacola esta cheia, favor remova algum item!");

        }
        else{
            if(tamanho_roupa_selecionada!=undefined){
            document.getElementById("protetor_tela").style="display:inline";
            elemento_botao_antigo.style.backgroundColor="#eee";
            elemento_botao_antigo.style.color="#000"
            b.adicionandoCompraSacola(codigo,tamanho_roupa_selecionada);
            }
            else{
                alert("selecione algum tamanho");
            }
        }
    }
}

var LocalSacola=function(){
    this.abrirSacola=function(){
        document.getElementById("protetor_tela").style="display:inline";
        var b=new ResponsividadeDaPagina();
        b.responsividadeElementos(false);

        buscandoElementoNaSacola();
        var cont=0.0;
        document.getElementsByTagName("body")[0].style="overflow-y:hidden";
        var local=document.getElementById("minhaSacola");
        responsividadeLoja();
        local.style.opacity=0;
        var tempo=setInterval(function(){
            local.style.opacity=cont;
            cont+=0.1;
            if(cont>=0.9){
                local.style.opacity=1;
                clearInterval(tempo);
                document.getElementById("protetor_tela").style="display:none";
                document.getElementById("protetor_sacola").style="display:inline";
                document.getElementById("protetor_opcoes").style="display:inline";
                b.responsividadeElementos(true,3);
            }
        },20);
    }
    this.fecharSacola=function(){
        document.getElementById("protetor_tela").style="display:inline";
        var cont=1.0;
        document.getElementsByTagName("body")[0].style="";
        var local=document.getElementById("minhaSacola");
        document.getElementById("sacola_fechar").style.background="#f88";
        var b=new ResponsividadeDaPagina();
        b.responsividadeElementos(false);
        if(elemento_botao_antigo!=undefined){
            elemento_botao_antigo.style.backgroundColor="#eee";
            elemento_botao_antigo.style.color="#000"
        }
        var tempo=setInterval(function(){
            local.style.opacity=cont;
            cont-=0.1;
            if(cont<=0.0){
                local.style="display:none; opacity:0.0;";
                document.getElementById("sacola_fechar").style.background="#f00";
                document.getElementById("protetor_tela").style="display:none";
                document.getElementById("protetor_sacola").style="display:none";
                document.getElementById("protetor_opcoes").style="display:none";
                b.responsividadeElementos(true,1);
                clearInterval(tempo);
            }
        },20);
    }
    function buscandoElementoNaSacola(){
        var codigo_sacola=[];
        var posicao_sacola=[];
        var tamanho_sacola=[];
        var cont=0;


        if(conteudo_pagina.locais_ocupado.length>=1){
            for(i=0; i<conteudo_pagina.locais_ocupado.length; i++){
                codigo_sacola[i]=localStorage.getItem("codigo"+conteudo_pagina.locais_ocupado[i]);
                tamanho_sacola[i]=localStorage.getItem("tamanho"+conteudo_pagina.locais_ocupado[i]);

                conteudo_pagina.sacola_codigo[i]=localStorage.getItem("codigo"+conteudo_pagina.locais_ocupado[i]);
                conteudo_pagina.sacola_tamanho[i]=localStorage.getItem("tamanho"+conteudo_pagina.locais_ocupado[i]);

                for(z=0; z<9; z++){
                    if(codigo_sacola[i]==document.getElementsByClassName("lancamento_fotos")[z].dataset.codigo){
                        posicao_sacola[cont]="lancamento."+z;
                        conteudo_pagina.sacola_local[i]="Lançamento";
                        cont++;
                    }
                }
                for(z=0; z<9; z++){
                    if(codigo_sacola[i]==document.getElementsByClassName("promocao_fotos")[z].dataset.codigo){
                        posicao_sacola[cont]="promocao."+z;
                        conteudo_pagina.sacola_local[i]="Promocação";
                        cont++;
                    }
                }
            }
            carregandoElementoNaSacola(posicao_sacola,tamanho_sacola);
        }
    }
    
    this.removerElementoSacola=(elemento)=>{
        localStorage.removeItem("codigo"+conteudo_pagina.locais_ocupado[elemento.dataset.local]);
        localStorage.removeItem("tamanho"+conteudo_pagina.locais_ocupado[elemento.dataset.local]);
        var elemento=document.querySelectorAll(".produto")[elemento.dataset.local];

        cont=1;
        //  Animacao de sumindo o elemento
        var tempo=setInterval(function(){
            elemento.style.opacity=cont;
            cont-=0.1;
            if(cont<=0.0){
                clearInterval(tempo);
                elemento.style.opacity=0;             
                atualizarSacola();
                var b=new CarregandoElementosInternos();
                b.verificandoSeConteudo();
                buscandoElementoNaSacola();
                responsividadeLoja();
            }
        },20);

    }

    this.removerTodosOsElementos=function(){
        for(var i=0; i<conteudo_pagina.locais_ocupado.length; i++){
            localStorage.removeItem("codigo"+conteudo_pagina.locais_ocupado[i]);
            localStorage.removeItem("tamanho"+conteudo_pagina.locais_ocupado[i]);
        }
        var elemento=document.getElementsByClassName("produto");
        var cont=1.0;
        var tempo=setInterval(function(){
            cont-=0.1;
            for(var i=0; i<conteudo_pagina.locais_ocupado.length; i++){
                elemento[i].style.opacity=cont;
            }
            if(cont<=0.0){    
                for(var i=0; i<conteudo_pagina.locais_ocupado.length; i++){
                    elemento[i].style.opacity=0;
                }
                atualizarSacola();
                var b=new CarregandoElementosInternos();
                b.verificandoSeConteudo();
                buscandoElementoNaSacola();
                responsividadeLoja();
                clearInterval(tempo);
            }
        },20);
    }
}

function carregandoElementoNaSacola(local,tamanho){
    var fotos_lancamento=document.getElementsByClassName("lancamento_fotos");
    var descricao_lancamento=document.getElementsByClassName("lancamento_descricao");
    var preco_lancamento=document.getElementsByClassName("lancamento_preco");

    var fotos_promocao=document.getElementsByClassName("promocao_fotos");
    var descricao_promocao=document.getElementsByClassName("promocao_descricao");
    var preco_promocao=document.getElementsByClassName("promocao_preco");


    var local_imagem_sacola=document.getElementsByClassName("sacola_imagem");
    var local_descricao_sacola=document.getElementsByClassName("sacola_descricao");
    var local_preco_sacola=document.getElementsByClassName("sacola_preco");
    var local_tamanho=document.getElementsByClassName("sacola_tamanho");
    var local_global=document.getElementsByClassName("produto");

    for(var i=0; i<conteudo_pagina.locais_ocupado.length; i++){
        var controle=local[i].split(".");
        if(controle[0]=="lancamento"){
            local_global[i].style="display:block";
            local_imagem_sacola[i].src=fotos_lancamento[controle[1]].src;
            local_descricao_sacola[i].innerHTML=descricao_lancamento[controle[1]].innerHTML;
            conteudo_pagina.sacola_descricao[i]=local_descricao_sacola[i].innerHTML
            local_preco_sacola[i].innerHTML=preco_lancamento[controle[1]].innerHTML;
            conteudo_pagina.sacola_preco[i]=local_preco_sacola[i].innerHTML.split("R$ ")[1];
            conteudo_pagina.sacola_preco[i]=conteudo_pagina.sacola_preco[i].split(",")[0]+"."+conteudo_pagina.sacola_preco[i].split(",")[1]
            conteudo_pagina.sacola_preco[i]=parseFloat(conteudo_pagina.sacola_preco[i]);
            local_tamanho[i].innerHTML="Tamanho: "+tamanho[i];
        }
        else if(controle[0]=="promocao"){
            local_global[i].style="display:block";
            local_imagem_sacola[i].src=fotos_promocao[controle[1]].src;
            local_descricao_sacola[i].innerHTML=descricao_promocao[controle[1]].innerHTML;
            conteudo_pagina.sacola_descricao[i]=local_descricao_sacola[i].innerHTML
            local_preco_sacola[i].innerHTML=preco_promocao[controle[1]].innerHTML;
            conteudo_pagina.sacola_preco[i]=local_preco_sacola[i].innerHTML.split("R$")[1];
            conteudo_pagina.sacola_preco[i]=conteudo_pagina.sacola_preco[i].split(",")[0]+"."+conteudo_pagina.sacola_preco[i].split(",")[1]
            conteudo_pagina.sacola_preco[i]=parseFloat(conteudo_pagina.sacola_preco[i]);
            local_tamanho[i].innerHTML="Tamanho: "+tamanho[i];
        }
    }
}

function atualizarSacola(elemento){
    var local_global=document.getElementsByClassName("produto");
    for(var i=0; i<15; i++){
        local_global[i].style="display:none";
    }
}

var AnimacaoDaPagina=function(){
    this.abrirBarraDeNavegacao=function(){
        document.getElementById("protetor_sacola").style="display:inline;";
        document.getElementById("opcoes").style="display:none;";
        var cont=0;
        var tempo=setInterval(function(){
            if(cont>=30){
                clearInterval(tempo);
                document.getElementById("navegacao").style="width:30%;";
            }
            document.getElementById("navegacao").style="width:"+cont+"%;";
            cont++;
        },10);

    }
    this.fecharBarraDeNavegacao=function(){
        document.getElementById("opcoes").style="display:inline;";
        var cont=30;
        var time=setInterval(function(){
            if(cont<=0){
                document.getElementById("protetor_sacola").style="display:none;";
                document.getElementById("navegacao").style="width:0%;";
                clearInterval(time);
            }
            document.getElementById("navegacao").style="width:"+cont+"%;";
            cont--;
        },10);
    }
    this.irParaLocalDaPagina=function(elemento){
        var fim=elemento.dataset.local
        var cont=document.getElementsByTagName("body")[0].getBoundingClientRect().y;
        var controlador=0;
        cont=Math.round(cont);
        cont=cont*-1;
        if(fim=="lancamento"){
            fim=document.getElementById("lancamento").getBoundingClientRect().y;
        }
        else if(fim=="promocao"){
            fim=document.getElementById("promocao").getBoundingClientRect().y;
        }
        fim=Math.round(fim);
        document.getElementsByTagName("body")[0].style="overflow:hidden";
        if(fim>=0){
            var tempo=setInterval(function(){
                window.scroll(0, cont);
                cont+=10;
                controlador+=10;
                if(controlador>=fim-120){
                    clearInterval(tempo);
                    document.getElementsByTagName("body")[0].style="overflow:scroll";
                }
            },1);
        }
        else{
            var tempo=setInterval(function(){
                window.scroll(0, cont);
                cont-=10;
                controlador-=10;
                if(controlador<=fim-150){
                    clearInterval(tempo);
                    document.getElementsByTagName("body")[0].style="overflow:scroll";
                }
            },1);
        }
        
    }
    this.adicionandoCompraSacola=function(){
        var cont=100;
        var cont2=0;
        var posicao_sacola=(document.getElementById("sacola").getBoundingClientRect());
        posicao_sacola=Math.round(posicao_sacola.x);
        document.getElementById("compra2").style="display:none";
        document.getElementById("compra1").style="width:100%; heigth:100%;";
        var tempo=setInterval(function(){
            document.getElementById("compra").style="display: block; opacity: 1; width:"+cont+"%; height:"+cont+"%; margin-left:"+cont2+"px;";            
            if(cont<=25&&cont2>=posicao_sacola){
                clearInterval(tempo);
                opacidadeSacola();
            }
            if(cont>25){
                cont--;
            }
            if(cont2<posicao_sacola&&dispositivo=="celular"){
                cont2+=8;
            }
            else if(cont2<posicao_sacola&&dispositivo=="desktop"){
                cont2+=12;
            }
        },15);

        function opacidadeSacola(){
            var cont2=1.0;
            var tempo=setInterval(function(){
                document.getElementById("compra").style="display: block; opacity:"+cont2+"; width:25%; height:25%; margin-left:"+posicao_sacola+"px;";
                cont2-=0.1;
                if(cont2<=0.0){
                    clearInterval(tempo);
                    rodarSacola();
                }
            },30);
        }

        function rodarSacola(){
            var cont2=1;
            var tempo=setInterval(function(){
                document.getElementById("sacola").style="transform: rotate("+cont2+"deg)";
                cont2+=3;
                if(cont2>=65){
                    clearInterval(tempo);
                    rodarSacola2();
                }
            },3);
        }
        function rodarSacola2(){
            var cont2=65;
            var tempo=setInterval(function(){
                document.getElementById("sacola").style="transform: rotate("+cont2+"deg)";
                cont2-=3;
                if(cont2<=-65){
                    clearInterval(tempo);
                    rodarSacola3();
                }
            },3);
        }
        function rodarSacola3(){
            var cont2=-65;
            var tempo=setInterval(function(){
                document.getElementById("sacola").style="transform: rotate("+cont2+"deg)";
                cont2+=3;
                if(cont2>=0){
                    document.getElementById("sacola").style="transform: rotate(0deg)";
                    cont2+=3;
                    document.getElementById("compra2").style="display:block";
                    document.getElementById("compra1").style="width:50%; heigth:50%;";
                    document.getElementById("compra").style="display:none;";
                    conteudo_pagina.locais_disponiveis.pop();
                    b=new CarregandoElementosInternos()
                    b.verificandoSeConteudo()
                    b=new LocalDeCompra();
                    b.fecharElementoCompra();
                    document.getElementById("protetor_tela").style="display:none";
                    clearInterval(tempo);
                }
            },3);
        }
    }
}

var ResponsividadeDaPagina=function(){
    var escolha_global;
    var width_tela;
    var height_tela
    
    
    this.responsividadeElementos=function(controlador, escolha){
        escolha_global=escolha;
        if(controlador==true){
            verificadorResponsividade();
        }
        else{
            clearInterval(responsividade_compra);  //  Removendo a recrusividade
        }

        function verificadorResponsividade(){
            //  Responsividade da compra
            controladorDeResponsividade();
            antigo_height=0;
            antigo_width=0;
            responsividade_compra=setInterval(function(){
                console.log("rodando");
                width_tela=window.innerWidth;
                height_tela=window.innerHeight;
                if(height_tela!=antigo_height||width_tela!=antigo_width){
                    if((height_tela>antigo_height+300||height_tela<antigo_height-300)||(width_tela>antigo_width+300||width_tela<antigo_width-300)){
                        antigo_height=height_tela;
                        antigo_width=width_tela;
                        if(width_tela>height_tela){
                            dispositivo="desktop";
                            controladorDeResponsividade();
                        }
                        else{
                            dispositivo="celular";
                            controladorDeResponsividade();
                        }
                    }
                }
            },1000);
        }

        function controladorDeResponsividade(){
            // 1 - Pagina principal, 2 - Pagina de compra, 3 - Pagina de sacola.
            if(escolha_global==1){
                responsividadePrincipal();
            }
            else if(escolha_global==2){
                responsividadeCompra();
            }
            else if(escolha_global==3){
                responsividadeLoja();
            }
        }
    }
}

function responsividadePrincipal(){
    var controlador_tamanho=Math.round((innerWidth+innerHeight)/100);
    if(dispositivo=="desktop"){
        //  Resposividade do Cadastro
        if(controle_responsividade_cadastro==false){
            document.getElementById("cliente_cadastro").style="display:block; margem:auto; height:70%";
            document.getElementById("cliente_apresentacao").style="font-size:"+controlador_tamanho/12 +"rem;"
            document.getElementsByClassName("cliente_cadastro_intrucoes")[0].style="font-size:"+controlador_tamanho/14 +"rem";
            document.getElementsByClassName("cliente_cadastro_intrucoes")[1].style="font-size:"+controlador_tamanho/14 +"rem";
            document.getElementsByClassName("cliente_cadastro_intrucoes")[2].style="font-size:"+controlador_tamanho/14 +"rem; text-align: center; margin-top:"+controlador_tamanho/12 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[0].style="font-size:"+controlador_tamanho/14 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[1].style="font-size:"+controlador_tamanho/14 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[2].style="font-size:"+controlador_tamanho/14 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[3].style="font-size:"+controlador_tamanho/14 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[4].style="font-size:"+controlador_tamanho/14 +"rem";
            
            
            document.getElementById("cliente_nome_dado").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_telefone_dado").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_endereco_rua").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_endereco_numero").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_endereco_ap").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_endereco_bairro").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_endereco_cidade").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_cancelar").style="font-size:"+controlador_tamanho/12 +"rem";
            document.getElementById("cliente_cadastrar").style="font-size:"+controlador_tamanho/12 +"rem";
        }

        document.querySelector("#lancamento").style="font-size:"+controlador_tamanho/8+"rem;"
        for(var i=0; i<conteudo_pagina.lancamento_quantidade; i++){
            document.querySelectorAll(".lancamento_descricao")[i].style="font-size:"+controlador_tamanho/12+"rem;";
            document.querySelectorAll(".lancamento_preco")[i].style="font-size:"+controlador_tamanho/12+"rem;";
            document.querySelectorAll(".lancamento_fotos")[i].style="width: 55%;";
        }
        document.querySelector("#promocao").style="font-size:"+controlador_tamanho/8+"rem;"
        for(var i=0; i<conteudo_pagina.promocao_quantidade; i++){
            document.querySelectorAll(".promocao_descricao")[i].style="font-size:"+controlador_tamanho/10+"rem;";
            document.querySelectorAll(".promocao_preco")[i].style="font-size:"+controlador_tamanho/10+"rem;";
            document.querySelectorAll(".promocao_fotos")[i].style="width: 55%;";
        }
    }
    else{
        //  Resposividade do Cadastro
        if(controle_responsividade_cadastro==false){
            document.getElementById("cliente_cadastro").style="display:block; margem:auto; height:50%";
            document.getElementById("cliente_apresentacao").style="font-size:"+controlador_tamanho/12+"rem;"
            document.getElementsByClassName("cliente_cadastro_intrucoes")[0].style="font-size:"+controlador_tamanho/11 +"rem";
            document.getElementsByClassName("cliente_cadastro_intrucoes")[1].style="font-size:"+controlador_tamanho/11 +"rem";
            document.getElementsByClassName("cliente_cadastro_intrucoes")[2].style="font-size:"+controlador_tamanho/11 +"rem; text-align: center; margin-top:"+controlador_tamanho/12 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[0].style="font-size:"+controlador_tamanho/11 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[1].style="font-size:"+controlador_tamanho/11 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[2].style="font-size:"+controlador_tamanho/11 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[3].style="font-size:"+controlador_tamanho/11 +"rem";
            document.getElementsByClassName("cliente_cadastro_local")[4].style="font-size:"+controlador_tamanho/11 +"rem";

            document.getElementById("cliente_nome_dado").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_telefone_dado").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_endereco_rua").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_endereco_numero").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_endereco_ap").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_endereco_bairro").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_endereco_cidade").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_cancelar").style="font-size:"+controlador_tamanho/11+"rem";
            document.getElementById("cliente_cadastrar").style="font-size:"+controlador_tamanho/11+"rem";
        }

        document.querySelector("#lancamento").style="font-size:"+controlador_tamanho/8+"rem;"
        for(var i=0; i<conteudo_pagina.lancamento_quantidade; i++){
            document.querySelectorAll(".lancamento_descricao")[i].style="font-size:"+controlador_tamanho/10+"rem;";
            document.querySelectorAll(".lancamento_preco")[i].style="font-size:"+controlador_tamanho/10+"rem;";
            document.querySelectorAll(".lancamento_fotos")[i].style="";
        }
        document.querySelector("#promocao").style="font-size:"+controlador_tamanho/8+"rem;"
        for(var i=0; i<conteudo_pagina.promocao_quantidade; i++){
            document.querySelectorAll(".promocao_descricao")[i].style="font-size:"+controlador_tamanho/10+"rem;";
            document.querySelectorAll(".promocao_preco")[i].style="font-size:"+controlador_tamanho/10+"rem;";
            document.querySelectorAll(".promocao_fotos")[i].style="";
        }
    }
}

function responsividadeCompra(){
    var controlador_tamanho=Math.round((innerWidth+innerHeight)/100);
    if(dispositivo=="desktop"){
        document.getElementById("compra_foto").style="width:auto; height:85%";
        document.getElementById("compra").style="display:flex; overflow-y:hidden; opacity:1.0; height:"+(innerHeight-100)+" px;";
        document.getElementById("p_onde").style="font-size:"+controlador_tamanho/5+"rem;";
        document.getElementById("p_compra_descricao").style="font-size:"+controlador_tamanho/7+"rem;";
        document.getElementById("p_compra_preco").style="font-size:"+controlador_tamanho/7+"rem;";
        for(var i=0; i < quantidade_tamanho_roupa_selecionada; i++){
            document.getElementsByClassName("compra_tamanho")[i].style="display:block; font-size:"+(controlador_tamanho/16)+"rem; padding:5px; border-radius:"+(controlador_tamanho/2)+"px;";
        }
        document.getElementById("compra_sacola").style="font-size:"+controlador_tamanho/16+"rem;";
    }
    else{
        document.getElementById("compra_foto").style="";
        document.getElementById("compra").style="display:block; overflow-y:scroll; opacity:1.0;";
        document.getElementById("p_onde").style="font-size:"+(Math.round(controlador_tamanho/3))+"rem;";
        document.getElementById("p_compra_descricao").style="font-size:"+(Math.round(controlador_tamanho/5))+"rem;";
        document.getElementById("p_compra_preco").style="font-size:"+(Math.round(controlador_tamanho/5))+"rem;";
        for(var i=0; i < quantidade_tamanho_roupa_selecionada; i++){
            if(document.getElementsByClassName("compra_tamanho")[i].innerHTML==tamanho_roupa_selecionada){
                document.getElementsByClassName("compra_tamanho")[i].style="display:block; font-size:"+(Math.round(controlador_tamanho/14))+"rem; padding:"+(Math.round(controlador_tamanho/10))+"ren; border-radius:"+(Math.round(controlador_tamanho/2))+"px; background-color:#000; color:#fff";
            }
            else{
                document.getElementsByClassName("compra_tamanho")[i].style="display:block; font-size:"+(Math.round(controlador_tamanho/14))+"rem; padding:"+(Math.round(controlador_tamanho/10))+"ren; border-radius:"+(Math.round(controlador_tamanho/2))+"px;";
            }
        }
        document.getElementById("compra_sacola").style="font-size:"+(Math.round(controlador_tamanho/12))+"rem; padding:"+(Math.round(controlador_tamanho/10))+"ren; border-radius:"+(Math.round(controlador_tamanho/2))+"px;"
    }
}

function responsividadeLoja(){
    var controlador_tamanho=Math.round((innerWidth+innerHeight)/100);
    if(dispositivo=="desktop"){
        if(conteudo_pagina.locais_ocupado.length>1){
            document.getElementById("minhaSacola").style="display: block; opacity: 1; margin-top: 110px; overflow-y: scroll; height: "+innerHeight+"px;";
            document.getElementById("secao_sacola").style="display: block; height: "+innerHeight+"px;";
            document.getElementById("minhaSacola2").style="height: auto; padding-bottom:"+(Math.round(controlador_tamanho)/1.5)+"rem";
        }
        else{
            document.getElementById("minhaSacola").style="display: block; opacity: 1; margin-top: 110px; overflow-y: scroll; height: "+innerHeight+"px;";
            document.getElementById("secao_sacola").style="height: "+innerHeight+"px;";
            document.getElementById("minhaSacola2").style="height: "+innerHeight+"px;";
        }
        document.getElementById("sacola_finalizar_compra").style="font-size:"+(Math.round(controlador_tamanho/13))+"rem; padding:"+(Math.round(controlador_tamanho/14))+"rem; border-radius:"+(Math.round((controlador_tamanho)/30))+"rem;";
        for(var i=0; i<quantidade_elementos; i++){
            document.getElementsByClassName("sacola_descricao")[i].style="font-size:"+(Math.round(controlador_tamanho/7))+"rem; margin-top:"+(Math.round((controlador_tamanho/14)))+"rem;";
            document.getElementsByClassName("sacola_tamanho")[i].style="font-size:"+(Math.round(controlador_tamanho/7))+"rem; margin-top:"+(Math.round((controlador_tamanho/3)))+"rem;";
            document.getElementsByClassName("sacola_preco")[i].style="font-size:"+(Math.round(controlador_tamanho/7))+"rem; margin-top:"+(Math.round((controlador_tamanho/1.5)))+"rem;";
            document.getElementsByClassName("sacola_remover")[i].style="font-size:"+(Math.round(controlador_tamanho/12))+"rem; padding:"+(Math.round(controlador_tamanho/22))+"rem; border-radius:"+(Math.round((controlador_tamanho)/20))+"rem;";
            document.getElementsByClassName("sacola_imagem")[i].style="width:auto; height:85%";
            document.getElementsByClassName("produto")[i].style="display:block; height:"+(Math.round(controlador_tamanho*1.5))+"rem;"

        }
    }
    else{
        if(conteudo_pagina.locais_ocupado.length>1){
            document.getElementById("minhaSacola").style="display: block; opacity: 1; margin-top: 110px; overflow-y: scroll; height: "+innerHeight+"px;";
            document.getElementById("secao_sacola").style="display: block; height: "+innerHeight+"px;";
            document.getElementById("minhaSacola2").style="height: auto; padding-bottom:"+(Math.round(controlador_tamanho))+"rem";
        }
        else{
            document.getElementById("minhaSacola").style="display: block; opacity: 1; margin-top: 110px; overflow-y: scroll; height: "+innerHeight+"px;";
            document.getElementById("secao_sacola").style="height: "+innerHeight+"px;";
            document.getElementById("minhaSacola2").style="height: "+innerHeight+"px;";
        }
        document.getElementById("sacola_finalizar_compra").style="font-size:"+(Math.round(controlador_tamanho/13))+"rem; padding:"+(Math.round(controlador_tamanho/14))+"rem; border-radius:"+(Math.round((controlador_tamanho)/30))+"rem;";
        for(var i=0; i<quantidade_elementos; i++){
            document.getElementsByClassName("sacola_descricao")[i].style="font-size:"+(Math.round(controlador_tamanho/7))+"rem; margin-top:"+(Math.round((controlador_tamanho/18)))+"rem;";
            document.getElementsByClassName("sacola_tamanho")[i].style="font-size:"+(Math.round(controlador_tamanho/7))+"rem; margin-top:"+(Math.round((controlador_tamanho/2)))+"rem;";
            document.getElementsByClassName("sacola_preco")[i].style="font-size:"+(Math.round(controlador_tamanho/7))+"rem; margin-top:"+(Math.round((controlador_tamanho)))+"rem;";
            document.getElementsByClassName("sacola_remover")[i].style="font-size:"+(Math.round(controlador_tamanho/12))+"rem; padding:"+(Math.round(controlador_tamanho/25))+"rem; border-radius:"+(Math.round((controlador_tamanho)/30))+"rem;";
            document.getElementsByClassName("sacola_imagem")[i].style="";
            document.getElementsByClassName("produto")[i].style="display:block;"
        }
    }
}

//----------------------------------------------------------------------------
//  Adicionando Eventos na Pagina.
var EventosDaPagina=function(){

    //  Adicionando evento nas fotos da pagina
    this.carregarEventoFoto=function(){
        var b=new FotosDaPagina();
        var c=new LocalDeCompra()
        var elemento_lancamento=document.getElementsByClassName("lancamento_fotos");
        var elemento_promocao=document.getElementsByClassName("promocao_fotos");
        for(var i=0; i<9; i++){
            elemento_lancamento[i].addEventListener("mouseover",function(){b.MouseOn(this)});
            elemento_lancamento[i].addEventListener("mouseout",function(){b.MouseOf(this)});
            elemento_lancamento[i].addEventListener("click",function(){c.MouseClick(this)});

        }
        for(var i=0; i<9; i++){
            elemento_promocao[i].addEventListener("mouseover",function(){b.MouseOn(this)});
            elemento_promocao[i].addEventListener("mouseout",function(){b.MouseOf(this)});
            elemento_promocao[i].addEventListener("click",function(){c.MouseClick(this)});

        }
    }
    //  Barra de Navegacao
    this.carregarEventoBarraDeNavegacao=function(){
        var b=new AnimacaoDaPagina()
        document.getElementById("opcoes").addEventListener("click",function(){b.abrirBarraDeNavegacao()});
        document.getElementById("opcoes2").addEventListener("click",function(){b.fecharBarraDeNavegacao()});
        for(var i=0; i<2; i++){
            document.getElementsByClassName("lista")[i].addEventListener("click",function(){b.irParaLocalDaPagina(this)});
        }
    }

    //  COMPRA
    //  Adicionando evento de fechar compra
    this.carregandoEventoBotaoFecharCompra=function(){
        var b=new LocalDeCompra();
        document.getElementById("compra_fechar").addEventListener("click",function(){b.fecharElementoCompra()})
    }
    //  Adicionando evento no botao de tamanho na compra
    this.carregarEventoBotaoTamanhoCompra=function(quantidade){
        var b=new LocalDeCompra();
        for(var i=0; i<quantidade;i++){
            document.getElementsByClassName("compra_tamanho")[i].addEventListener("click",function(){b.selecionandoBotaoTamanho(this)});
        }
    }
    this.carregarEventoBotaoCompra=function(){
        var b=new LocalDeCompra();
        document.getElementById("compra_sacola").addEventListener("click",function(){b.finalizarCompra()})
    }
    this.carregarEventoBotaoSacola=function(){
        var b=new LocalSacola();
        document.getElementById("sacola").addEventListener("click",function(){b.abrirSacola()})
        document.getElementById("sacola_fechar").addEventListener("click",function(){b.fecharSacola()})
        document.getElementById("sacola_limpar").addEventListener("click", function(){b.removerTodosOsElementos()})
    }
    this.carregarEventoBotaoSacolaInstaveis=function(){
        var b=new LocalSacola();
        for(var i=0; i<15; i++){
            document.getElementsByClassName("sacola_remover")[i].addEventListener("click",function(){b.removerElementoSacola(this)})
        }
    }
}
document.addEventListener("load",carregarPagina());

//----------------------------------------------------------------------------
// Criando todos objetos
function carregarPagina(){
/*    for(var x=0; x<19; x++){
        localStorage.setItem("codigo"+x,x);
    }
*/
    var a=new CarregandoElementosInternos();
    a.verificandoSeConteudo();
    var a=new FotosDaPagina();
    a.carregarFotoLancamento();
    a.carregarFotoPromocao();
    var a=new CarregarDescricao();
    a.carregarDescricaoLancamento();
    a.carregarDescricaoPromocao();
    var a=new CarregarPreco();
    a.carregarPrecoLancamento();
    a.carregarPrecoPromocao();
    var a=new EventosDaPagina();
    a.carregarEventoFoto();
    a.carregarEventoBarraDeNavegacao();
    a.carregarEventoBotaoTamanhoCompra();
    a.carregandoEventoBotaoFecharCompra();
    a.carregarEventoBotaoCompra();
    a.carregarEventoBotaoSacola();
    a.carregarEventoBotaoSacolaInstaveis();
    if(innerWidth>innerHeight){
        dispositivo="desktop";
    }
    else{
        dispositivo="celular";
    }
    clienteCadastro()
    responsividadePrincipal();
    var a=new ResponsividadeDaPagina()
    a.responsividadeElementos(true,1);
}
function mudartrilha(trilha){
    let ntrilha = trilha;
    let corujadastrilhas = document.getElementById("corujadastrilhas");
    let h1dastrilhas = document.getElementById("h1dastrilhas");
    let frasebalaotrilhas = document.getElementById("frasebalaotrilhas");
    let pselect = document.getElementById("select");
    if(ntrilha>=1){
      pselect.innerText="";
    }
    console.log("Você está na trilha", ntrilha);
    if(ntrilha==1){
      corujadastrilhas.setAttribute("src","../source/coruja design.png");
      corujadastrilhas.style.marginTop="2.5vw";
      corujadastrilhas.style.marginLeft="0.5vw";
      h1dastrilhas.innerText="DESIGN DIGITAL INTERATIVO";
      h1dastrilhas.style.fontSize="2.88vw";
      h1dastrilhas.style.textAlign="left";
      h1dastrilhas.style.marginRight="2vw"
      h1dastrilhas.style.marginTop="-28vw";
      frasebalaotrilhas.innerText="A trilha de design digital engloba conhecimentos teóricos e práticos do Design e do desenvolvimento de tecnologias digitais interativas adquiridos ao longo do curso de forma a estimular a visão crítica do aluno. Ainda, abrange/compreende questões de experiência do usuário e interatividade no design digital.";
      frasebalaotrilhas.style.fontSize="1.38vw";
      frasebalaotrilhas.style.marginTop="-2.5vw";
    }
    if(ntrilha==2){
      corujadastrilhas.setAttribute("src","../source/coruja audiovisual.png");
      corujadastrilhas.style.marginTop="4vw";
      corujadastrilhas.style.marginLeft="1.5vw";
      h1dastrilhas.innerText="ANIMAÇÃO E AUDIOVISUAL";
      h1dastrilhas.style.fontSize="2.88vw";
      h1dastrilhas.style.textAlign="left";
      h1dastrilhas.style.marginRight="2vw"
      h1dastrilhas.style.marginTop="-28vw";
      frasebalaotrilhas.innerText="A trilha de animação e audiovisual busca aplicar nas áreas de produção artística, cultural e multimídia os conhecimentos desenvolvidos durante suas diferentes disciplinas. Fazendo, assim, com que as produções dos alunos adotem/utilizem de formas de expressão e ferramentas de linguagens que sejam capazes de se expandirem para/difundirem em diversos meios de comunicação.";
      frasebalaotrilhas.style.fontSize="1.38vw";

    }
    if(ntrilha==3){
      corujadastrilhas.setAttribute("src","../source/corujaprog.png");
      corujadastrilhas.style.marginTop="3vw";
      corujadastrilhas.style.marginLeft="0.5vw";
      h1dastrilhas.innerText="SISTEMAS MULTIMÍDIA";
      frasebalaotrilhas.innerText="A trilha de sistemas multimídia aborda as áreas mais voltadas para a programação e banco de dados"
    }
    if(ntrilha==4){
      corujadastrilhas.setAttribute("src","../source/coruja jogos.png");
      corujadastrilhas.style.marginTop="-3.8vw";
      corujadastrilhas.style.marginLeft="-7vw"
      h1dastrilhas.innerText="JOGOS DIGITAIS";
      frasebalaotrilhas.innerText="A trilha de jogos digitais visa promover o desenvolvimento de jogos e aplicações interativas contemplando noções de/referenciando computação, arte e cultura a partir dos aspectos teóricos e práticos explorados em seus componentes curriculares.";
    }
}
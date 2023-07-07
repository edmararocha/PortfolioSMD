function mudartrilha(trilha){
    let ntrilha = trilha;
    let corujadastrilhas = document.getElementById("corujadastrilhas");
    let h1dastrilhas = document.getElementById("h1dastrilhas");
    let frasebalaotrilhas = document.getElementById("frasebalaotrilhas");
    let selectedimg= document.getElementById("selectedimg");

    console.log("Você está na trilha", ntrilha);
    if(ntrilha>0){
      let trilhaisselected = document.getElementById("trilhaisselected");
      trilhaisselected.style.display = 'block';
    }

    if(ntrilha==1){
      
      corujadastrilhas.setAttribute("src","../images/trails/coruja_design.png");
      
      h1dastrilhas.innerText="DESIGN DIGITAL INTERATIVO";
      h1dastrilhas.style.fontSize="2.88vw";
      h1dastrilhas.style.textAlign="left";
      h1dastrilhas.style.marginRight="2vw"
      
      frasebalaotrilhas.innerText="A trilha de design digital engloba conhecimentos teóricos e práticos do Design e do desenvolvimento de tecnologias digitais interativas adquiridos ao longo do curso de forma a estimular a visão crítica do aluno. Ainda, abrange/compreende questões de experiência do usuário e interatividade no design digital.";
      selectedimg.setAttribute("src","../source/selecteddesign.png");
    }

    if(ntrilha==2){
      // corujadastrilhas.style.width="20vw";
      corujadastrilhas.setAttribute("src","../images/trails/coruja_audio.png");
      
      h1dastrilhas.innerText="ANIMAÇÃO E AUDIOVISUAL";
      h1dastrilhas.style.fontSize="2.88vw";
      h1dastrilhas.style.textAlign="left";
      h1dastrilhas.style.marginRight="2vw"
      
      frasebalaotrilhas.innerText="A trilha de animação e audiovisual busca aplicar nas áreas de produção artística, cultural e multimídia os conhecimentos desenvolvidos durante suas diferentes disciplinas. Fazendo, assim, com que as produções dos alunos adotem/utilizem de formas de expressão e ferramentas de linguagens que sejam capazes de se expandirem para/difundirem em diversos meios de comunicação.";
      frasebalaotrilhas.style.fontSize="1.38vw";
      selectedimg.setAttribute("src","../source/selectedaudiovisual.png");
    }

    if(ntrilha==3){
      corujadastrilhas.setAttribute("src","../images/trails/coruja_sistemas.png");
      h1dastrilhas.innerText="SISTEMAS MULTIMÍDIA";
      frasebalaotrilhas.innerText="Essa trilha engloba conhecimentos teóricos e práticos do design e do desenvolvimento de tecnologias digitais interativas adquiridos ao longo do curso de forma a estimular a visão crítica do aluno. Além disso, abrange questões de experiência do usuário e interatividade no design digital! Além disso, abrange questões de experiência do usuário e interatividade no design digital!"
      selectedimg.setAttribute("src","../source/selectedsistemas.png");
    }

    if(ntrilha==4){
      corujadastrilhas.setAttribute("src","../images/trails/coruja_jogos.png");
      h1dastrilhas.innerText="JOGOS DIGITAIS";
      frasebalaotrilhas.innerText="A trilha de jogos digitais visa promover o desenvolvimento de jogos e aplicações interativas contemplando noções de/referenciando computação, arte e cultura a partir dos aspectos teóricos e práticos explorados em seus componentes curriculares. ";
      selectedimg.setAttribute("src","../source/selectedjogos.png");
    } 
}
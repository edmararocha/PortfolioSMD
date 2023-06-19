function mudartrilha(trilha){
    let ntrilha = trilha;
    let corujadastrilhas = document.getElementById("corujadastrilhas");
    let h1dastrilhas = document.getElementById("h1dastrilhas");
    let frasebalaotrilhas = document.getElementById("frasebalaotrilhas");
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
    }
    if(ntrilha==3){
      corujadastrilhas.setAttribute("src","../source/corujaprog.png");
      corujadastrilhas.style.marginTop="3vw";
      corujadastrilhas.style.marginLeft="0.5vw";
    }
    if(ntrilha==4){
      corujadastrilhas.setAttribute("src","../source/coruja jogos.png");
      corujadastrilhas.style.marginTop="-3.8vw";
      corujadastrilhas.style.marginLeft="-7vw"
    }
}
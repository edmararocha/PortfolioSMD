import {projects} from './data.js';

var urlParams = new URLSearchParams(window.location.search);
var projectId = urlParams.get("id");

// Encontrar o projeto correspondente pelo ID
var project = projects.find(function (project) {
    console.log(projectId);
    return project.id == projectId;
});

if (project) {
    document.getElementById("title").textContent = project['name'];

    var iframeElement = document.getElementById("iframe");
    var iframeContent = document.getElementById("player");
    var description = document.getElementById("description");
    var heldIn = document.getElementById("held-in");
    var participants = document.getElementById("participants");
    var acess = document.getElementById("acess");

    iframeElement.src = project['videoUrl'];
    acess.textContent = project['videoUrl'];
    acess.href = project['videoUrl'];
    description.textContent = project['description'];
    heldIn.textContent = project['heldIn'];
    participants.textContent = project['partcipants'];
} else {
    projetoDetailsDiv.textContent = "Projeto não encontrado.";
}
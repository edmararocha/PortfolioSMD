import { projects } from './data.js';

var urlParams = new URLSearchParams(window.location.search);
var projectId = urlParams.get("id");

// Encontrar o projeto correspondente pelo ID
var project = projects.find(function (project) {
    console.log(projectId);
    return project.id == projectId;
});

function checkUrl(string) {
    try {
        let url = new URL(string)

        return true;
    } catch (err) {
        return false;
    }
}

if (project) {
    document.getElementById("title").textContent = project['name'];

    var demoElement;
    if (checkUrl(project['demoUrl'])) {
        demoElement = document.createElement("iframe");
        demoElement.frameBorder = "0";
    } else {
        demoElement = document.createElement("img");
    }

    var demoDiv = document.getElementById('demo');
    var description = document.getElementById("description");
    var heldIn = document.getElementById("held-in");
    var participants = document.getElementById("participants");
    var acess = document.getElementById("acess");

    demoElement.src = project['demoUrl'];
    demoDiv.appendChild(demoElement);
    acess.href = project['acess'];
    acess.textContent = project['name'];
    description.textContent = project['description'];
    heldIn.textContent = project['heldIn'];
    participants.textContent = project['partcipants'];
} else {
    projetoDetailsDiv.textContent = "Projeto não encontrado.";
}
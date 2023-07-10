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

function isPDFUrl(url) {
    var extension = url.substr(url.lastIndexOf('.') + 1).toLowerCase();
    return extension === 'pdf';
}


if (project) {
    document.getElementById("title").textContent = project['name'];

    var demoElement;
    if (checkUrl(project['demoUrl'])) {
        demoElement = document.createElement("iframe");
        demoElement.frameBorder = "0";
    } else if (isPDFUrl(project['demoUrl'])) {
        demoElement = document.createElement("div");
        demoElement.id = "pdf-viewer";

        PDFJS.getDocument(project['demoUrl']).promise.then(function (pdf) {
            var pageNumber = 1;

            pdf.getPage(pageNumber).then(function (page) {
                var viewport = page.getViewport({ scale: 1.0 });
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                container.appendChild(canvas);

                page.render({
                    canvasContext: context,
                    viewport: viewport
                });
            });
        });
        Ce
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
const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app,
    {
        loop: true,
        delay: 75
    });

typewriter
    .typeString('La ciudad mas segura de Santa Tecla')
    .pauseFor(200)
    .start();
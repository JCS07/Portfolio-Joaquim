particlesJS("background", {

    particles: {
        number: {
            value: 15,                      //Contador de particulas na tela
            density: {
                enable: true,
                value_area: 300,            //Área onde as particulas vão ficar distribuidas
            },
        },

        color: {
            value: "#ffffff",               //Cor das particulas
        },
        shape: {
            type: "circle",                // Tipo do corpo das particulas
        },
        opacity: {
            value: 0.8,                     //Base da opacidade das particulas
            ramdom: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,                       //Tamanho base das particulas
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        //Linhas de conexão entre as particulas
        line_linked: {
            enable: true,
            distance: 150,                  //Espaçamento máximo entre particulas
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        //Movimento das particulas
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            ramdom: false,
            straight: false,
            out_mode: "bounce",             //Para quando as particulas sairem das bordas
            bounce: false,
        },
    },
    // Partes interativas
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,               //Habilitar hover interativo
                mode: "repulse",
            },
            onclick: {
                enable: true,               //Habilitar no click do mouse
                mode: "push",
            },
            resize: true,                   //Restart no tamanho das particulas quando a janela dimniuir ou aumentar
        },
    },

    //Detectar o retina displays
    retina_detect: true,
})
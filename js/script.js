// Variável que guarda qual foto está aparecendo no momento (começa no 0, que é a primeira)
let slideAtual = 0;
let tempoCarrossel;

// Chama as funções para ligar o carrossel assim que a página carregar
mostrarSlide(slideAtual);
iniciarCarrosselAutomatico();

// Função ativada quando o usuário clica nas setinhas (+1 para ir pra frente, -1 para voltar)
function mudarSlide(direcao) {
    slideAtual += direcao;
    mostrarSlide(slideAtual);
    resetarTempo(); // Se o usuário clicou, a gente zera o tempo para não pular muito rápido
}

// Função principal que decide qual imagem aparece e qual some
function mostrarSlide(numeroDoSlide) {
    const slides = document.querySelectorAll(".banner-slide"); // Pega todas as imagens do HTML
    
    // Se passar da última foto, volta para a primeira
    if (numeroDoSlide >= slides.length) { 
        slideAtual = 0; 
    }
    // Se voltar antes da primeira foto, vai para a última
    if (numeroDoSlide < 0) { 
        slideAtual = slides.length - 1; 
    }

    // Passa por todas as imagens tirando a classe 'ativo' (esconde todas)
    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    // Coloca a classe 'ativo' apenas na imagem certa
    slides[slideAtual].classList.add("ativo");
}

// Faz o carrossel passar sozinho
function iniciarCarrosselAutomatico() {
    tempoCarrossel = setInterval(() => {
        mudarSlide(1); // Manda avançar 1 slide
    }, 4000); // 4000 milissegundos = 4 segundos tempo para cada slide
}

// Função para zerar o relógio interno se o usuário clicar com o mouse
function resetarTempo() {
    clearInterval(tempoCarrossel);
    iniciarCarrosselAutomatico();
}
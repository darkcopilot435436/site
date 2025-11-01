// Criar corações flutuantes
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartCount = 30;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posição aleatória
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        
        heart.style.left = `${left}vw`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        
        heartsContainer.appendChild(heart);
    }
}

// Revelar pergunta
document.getElementById('reveal-btn').addEventListener('click', function() {
    document.getElementById('question').classList.remove('hidden');
    this.style.display = 'none';
    
    // Criar efeito de confete
    createHearts();
});

// Respostas
document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('modal-title').textContent = 'Que maravilha!';
    document.getElementById('modal-message').textContent = 'Fico muito feliz! Vou te procurar na escola para combinarmos tudo!';
    document.getElementById('response-modal').style.display = 'flex';
});

document.getElementById('no-btn').addEventListener('click', function() {
    document.getElementById('modal-title').textContent = 'Entendo...';
    document.getElementById('modal-message').textContent = 'Obrigado por ser sincera. Espero que possamos continuar nos dando bem na escola.';
    document.getElementById('response-modal').style.display = 'flex';
});

// Fechar modal
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('response-modal').style.display = 'none';
});

document.getElementById('modal-close-btn').addEventListener('click', function() {
    document.getElementById('response-modal').style.display = 'none';
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar corações quando a página carregar
window.addEventListener('load', createHearts);
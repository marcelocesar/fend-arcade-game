// Inimigos que nosso jogador deve evitar
class Enemy {
	constructor({ sprite = 'images/enemy-bug.png', x = 0, y = 0, speed = 1 } = {}) {
		this.sprite = sprite;
		this.x = x;
        this.y = y;
        this.speed = speed;
	}

	// Atualize a posição do inimigo, método exigido pelo jogo
	// Parâmetro: dt, um delta de tempo entre ticks
	update(dt) {
        
        
		// Você deve multiplicar qualquer movimento pelo parâmetro
		// dt, o que garantirá que o jogo rode na mesma velocidade
        // em qualquer computador.
        this.x += 101 * this.speed * dt;
        
        if (this.x > ctx.canvas.width) {
            this.x -= ctx.canvas.width;
        }
	}

	// Desenhe o inimigo na tela, método exigido pelo jogo
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

// Agora, escreva sua própria classe de jogador
class Player {

	constructor({ sprite = 'images/char-boy.png', x = 200, y = 380 } = {}) {
		this.sprite = sprite;
		this.x = x;
		this.y = y;
	}

	positionInitial() {
		this.x = 200;
		this.y = 380;
	}

	update() {
		if (this.y < 0) {
            this.positionInitial();
		}
	}

	// Desenhe o inimigo na tela, método exigido pelo jogo
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

	handleInput(key) {
		let posX = 101;
		let posY = 83;
		switch (key) {
			case 'up': {
				if (this.y >= 0) {
					this.y -= posY;
				}
				break;
			}
			case 'down': {
				if (this.y < 380) {
					this.y += posY;
				}
				break;
			}
			case 'left': {
				if (this.x >= 0) {
					this.x -= posX;
				}
				break;
			}
			case 'right': {
				if (this.x <= 400) {
					this.x += posX;
				}
				break;
			}
		}
	}
}
// Esta classe exige um método update(),
// um render() e um handleInput().

// Represente seus objetos como instâncias.
const player = new Player();
const enemy1 = new Enemy({ y: 60, x: -202, speed: 1.2 });
const enemy2 = new Enemy({ y: 140, x: -808 });
const enemy3 = new Enemy({ y: 220, x: -404 });
const enemy4 = new Enemy({ y: 60, x: -1600, speed: 1.4});
const enemy5 = new Enemy({ y: 140, x: -101 });
const enemy6 = new Enemy({ y: 220, x: -606, speed: 1.1});

const allEnemies = [ enemy1, enemy2, enemy3, enemy4, enemy5, enemy6 ];
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.

// Isto reconhece cliques em teclas e envia as chaves para seu
// jogador. método handleInput(). Não é preciso mudar nada.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});

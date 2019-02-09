class Enemy {
    /**
    * @description Represents an Enemy
    * @constructor
    * @param {object} enemy - The object receiver default params { sprite = 'images/enemy-bug.png', x = 0, y = 0, speed = 1}
    */
	constructor({ sprite = 'images/enemy-bug.png', x = 0, y = 0, speed = 1 } = {}) {
		this.sprite = sprite;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

    /**
    * @description update enemy position
    * @param {number} dt - Animation frames
    */
	update(dt) {
		this.x += 101 * this.speed * dt;

		if (this.x > ctx.canvas.width) {
			this.x -= 800;
		}
	}

    /**
    * @description Verify the collision between enemy and player
    * @param {object} player - Player game
    */
	checkCollisions(player) {
		if (this.x > player.x && this.x < player.x + 101 && this.y > player.y && this.y < player.y + 83) {
			player.positionInitial();
		}
	}

    /**
    * @description Create object enemy in game
    */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

class Player {
     /**
    * @description Represents a Player
    * @constructor
    * @param {object} enemy - The object receiver default params { sprite = 'images/char-boy.png', x = 200, y = 380 }
    */
	constructor({ sprite = 'images/char-boy.png', x = 200, y = 380 } = {}) {
		this.sprite = sprite;
		this.x = x;
		this.y = y;
	}

    /**
    * @description reset position default player
    * @param {number} dt - Animation frames
    */
	positionInitial() {
		this.x = 200;
		this.y = 380;
	}

    /**
    * @description update player position
    */
	update() {
		if (this.y < 0) {
			this.positionInitial();
		}
	}

    /**
    * @description Create object player in game
    */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

    /**
    * @description move playe in game
    * @param {string} key - move playe "up", "down", "left" and "right"
    */
	handleInput(key) {
		switch (key) {
			case 'up': {
				if (this.y >= 0) {
					this.y -= 83;
				}
				break;
			}
			case 'down': {
				if (this.y < 380) {
					this.y += 83;
				}
				break;
			}
			case 'left': {
				if (this.x >= 0) {
					this.x -= 101;
				}
				break;
			}
			case 'right': {
				if (this.x <= 400) {
					this.x += 101;
				}
				break;
			}
		}
	}
}

const player = new Player();
const enemy1 = new Enemy({ y: 60, x: -202, speed: 1.2 });
const enemy2 = new Enemy({ y: 140, x: -808 });
const enemy3 = new Enemy({ y: 220, x: -404 });
const enemy4 = new Enemy({ y: 60, x: -1600, speed: 1.4 });
const enemy5 = new Enemy({ y: 140, x: -101 });
const enemy6 = new Enemy({ y: 220, x: -606, speed: 1.1 });
const allEnemies = [ enemy1, enemy2, enemy3, enemy4, enemy5, enemy6 ];

document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});

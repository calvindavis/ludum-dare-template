import { GameLoop } from "kontra";
import { sprite } from "./sprite";

export const gameLoop = GameLoop({
	update: function () {
		sprite.update();

		if (sprite.x > this.context.canvas.width) {
			sprite.x = 0;
		}
	},
	render: function () {
		sprite.render();
	},
});

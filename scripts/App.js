'use strict';

import GraphicsEngine from './GraphicsEngine.js';
import MainLoop from './MainLoop.js';
import WorldHandler from './classes/world/WorldHandler.js';

export default class App {
	constructor(canvas, gl, program, image) {
		this.canvas = canvas;
		this.gl = gl;
		this.program = program;
		this.image = image;
		this.resize = this.resize.bind(this);
		this.update = this.update.bind(this);
		this.draw = this.draw.bind(this);
		this.overflow = this.overflow.bind(this);
	}
	debounce(func, delay) {
		let inDebounce
		return function(...args) {
			const context = this;
			(inDebounce !== undefined) && clearTimeout(inDebounce);
			inDebounce = setTimeout(() => func.apply(context, args), delay);
		}
	}
	attachEvents() {
		window.addEventListener("resize", this.debounce(this.resize, 300));
	}
	update() {
		if (this.graphics.scene.children[6]) {
			this.graphics.scene.children[6].rotation.y += 0.01;
		}
	}
	draw() {
		this.graphics.draw();
	}
	overflow() {
		// Called when 333ms has been elapsed since last update
		console.log("overflow");
	}
	loadGraphics() {
		this.graphics = new GraphicsEngine(this.canvas, this.gl, this.program);
		document.querySelector(".wrapper").appendChild(this.canvas);
		this.canvas.style.position = "absolute";
		this.graphics.load();
		this.resize();
		this.attachEvents();
	}
	loadWorld() {
		this.world = new WorldHandler(this.graphics);
		this.world.load();
	}
	loadLoop() {
		this.loop = new MainLoop({
			fps: 60,
			draw: this.draw,
			update: this.update,
			overflow: this.overflow
		});
		this.loop.start();
	}
	resize() {
		this.width = this.canvas.width = window.innerWidth - 10;
		this.height = this.canvas.height = window.innerHeight - 9;
		this.graphics && this.graphics.resize(this.width, this.height);
	}
}
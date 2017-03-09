var controls, selection;

function Player(scene, camera, self) {
	if (self) {
		/* Controls */
		this.controls = new MinecraftControls(this, scene, camera);
		camera.parent.position.add(options.camera.adjustment);
		Object.defineProperty(this, "position", { get: function () { return this.controls.yaw.position; } });
		let ctrls = this.controls;
		this.rotation = {
			get pitch () { return ctrls.pitch.rotation.x; },
			set pitch (value) { return ctrls.pitch.rotation.x = value; },
			get yaw () { return ctrls.yaw.rotation.y; },
			set yaw (value) { return ctrls.yaw.rotation.y = value; }
		}
		this.controls.onPause = () => this.parent.showPaused();
		this.controls.onEnter = () => this.onGrabMouse();
		this.controls.onExit = () => this.onReleaseMouse();
		this.raycaster = new THREE.Raycaster(undefined, undefined, 0, 10);
		/* Selection */
		this.selection = new MinecraftSelection(scene);
		this.selection.position.set(0,0,0);
		this.selection.show();
		/* Spacial Selection */
		this.spacialSelection = new SpacialSelection(scene);
		/* Definition of global variables */
		controls = this.controls;
		selection = this.selection;
	} else {
		let geometry = new THREE.CubeGeometry(1,2,1);
		let material = new THREE.BasicMaterial({color:0x000000});
		this.representation = new THREE.Mesh(geometry, material);
		scene.add(this.representation);
	}
}

Player.prototype = {
	constructor: Player,
	requestMouse: function() {
		this.controls.requestMouse();
	},
	releaseMouse: function() {
		this.controls.releaseMouse();
	},
	onGrabMouse: function() {
		if (this.parent.gamePaused)
			this.parent.showCrosshair();
	},
	onReleaseMouse: function() {
		if (this.parent.stats && ((performance || Date).now() - this.parent.stats.getLastUpdate() > 160))
			this.parent.showPaused();
		else if (!this.parent.gamePaused) 
			this.parent.showInventory();
	},
	onMouseDown: function(e) {
		
	},
	onMouseUp: function(e) {
		
	},
	lightUpdate: function() {
		if (this.selection.visible) {
			this.selection.visible = false;
			this.controls.update();
			this.selection.visible = true;
		} else 
			this.controls.update();
	},
	update: function() {
		this.selection.hide();
		this.raycaster.setFromCamera(new THREE.Vector2(0,0), camera);
		var intersections = this.raycaster.intersectObjects(scene.children);
		if (intersections[0] && intersections[0].object instanceof THREE.Mesh) {
			let obj = intersections[0].object;
			if (obj.blockInfo) {
				//this.selection.position.copy(intersections[0].object.blockInfo);
				//this.selection.show();
			}
			//console.log(intersections[0].object.rotation);
		}
		this.selection.show();
		this.controls.update();
	}
}

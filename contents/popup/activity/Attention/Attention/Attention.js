(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.lightobj = function() {
	this.initialize(img.lightobj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,829);


(lib.light_line = function() {
	this.initialize(img.light_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,180);


(lib.light_outline = function() {
	this.initialize(img.light_outline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,400);


(lib.star_bitmap = function() {
	this.initialize(img.star_bitmap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,156);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.twinkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.902)").s().p("AgDAAIgtgpIAwAmIAqgtIglAwIAsAqIgxglIgpAsg");
	this.shape.setTransform(13.8,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,10.5).s().p("AgNABIhChFIBPA3IBFhCIg3BPIBCBFIhPg3IhFBCg");
	this.shape_1.setTransform(13.8,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,18.1).s().p("AgXACIhxh3ICHBeIB4hxIhfCHIBxB4IiHhfIh3Bxg");
	this.shape_2.setTransform(13.7,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twinkle, new cjs.Rectangle(0,0,27.5,27.5), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 11
	this.instance = new lib.star_bitmap();
	this.instance.parent = this;
	this.instance.setTransform(-29,-35,0.76,0.76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-29,-35,123.1,118.6), null);


(lib.light_outline_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.light_outline();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_outline_1, new cjs.Rectangle(0,0,294,400), null);


(lib.light_obj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.lightobj();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_obj, new cjs.Rectangle(0,0,300,497.4), null);


(lib.light_line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.light_line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_line_1, new cjs.Rectangle(0,0,181,180), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,233,85,0.843)","rgba(255,244,134,0)"],[0,1],0,0,0,0,0,184.8).s().p("A0QUQQoZoYAAr4QAAr3IZoZQIaoZL2AAQL3AAIaIZQIZIZAAL3QAAL4oZIYQoaIar3AAQr2AAoaoag");
	this.shape.setTransform(312.1,312.1,1.702,1.702);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,624.2,624.2), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("ACMClQgLAAgHgHIh6h7Ih5B7QgIAHgKAAQgKAAgHgIQgIgHAAgKQAAgLAIgHIB6h6Ih6h5QgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIIB5B6IB6h6QAHgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHIh6B5IB6B6QAHAHAAALQAAAKgHAIQgIAHgKAAIAAAAg");
	this.shape.setTransform(30,30.1,0.833,0.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.149)").s().p("Aj9D/QhqhqAAiVQAAiUBqhqQBphpCUAAQCVAABpBpQBqBqAACUQAACVhqBqQhpBpiVAAQiUAAhphpg");
	this.shape_1.setTransform(30,30,0.833,0.833);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.247)").s().p("Aj9D/QhqhqAAiVQAAiUBqhqQBphpCUAAQCVAABpBpQBqBqAACUQAACVhqBqQhpBpiVAAQiUAAhphpg");
	this.shape_2.setTransform(30,30,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.dark_obj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.847)","rgba(0,0,0,0.6)","rgba(0,0,0,0.4)","rgba(0,0,0,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.345,0.749,1,1,1],0,0,0,0,0,357.1).s().p("EgnGAnHQwNwNAA26QAA25QNwOQQMwMW6AAQW7AAQMQMQQNQOAAW5QAAW6wNQNQwMQN27AAQ26AAwMwNg");
	this.shape.setTransform(400,400,1.13,1.13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dark_obj, new cjs.Rectangle(0,0,800,800), null);


(lib.click_area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0GcSQoVruAAwkQAAwjIVruQIVruLxAAQLyAAIVLuQIVLuAAQjQAAQkoVLuQoVLuryAAQrxAAoVrug");
	this.shape.setTransform(182,256);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.click_area, new cjs.Rectangle(0,0,364,512), null);


(lib.star_twinkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.twinkle();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,13.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.44,scaleY:1.44,x:0.1,y:0.1},9).to({scaleX:1,scaleY:1,x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-13.7,27.5,27.5);


(lib.star_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(62.1,67.6,1.293,1.293,0,0,0,33.4,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47.6},19).to({y:67.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-19.3,159.2,153.3);


(lib.motion_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(1));

	// 레이어 1
	this.instance = new lib.dark_obj();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,400,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.539},4).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(19));

	// 레이어 7
	this.instance_1 = new lib.star_twinkle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.2,-36.4,2.054,2.054,60,0,0,0.1,0);
	this.instance_1.alpha = 0.898;

	this.instance_2 = new lib.star_twinkle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.1,31,2.749,2.749,30);
	this.instance_2.alpha = 0.898;

	this.instance_3 = new lib.star_twinkle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-53.4,-64.2,2.383,2.383,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},26).wait(8));

	// 레이어 6
	this.instance_4 = new lib.light_outline_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,7,1,1,0,0,0,147,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({alpha:1},8).wait(20));

	// 레이어 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("AjxB7QgNgEgEgNQgKgCgJgFQiIhHBbhxQATgXAegIQBfgXBfgDQDZgnC+BMQAeALAEAkQAOB1iMAUQgcAEgaARQhOAyhiAFIgkABQhuAAhhghg");
	var mask_graphics_11 = new cjs.Graphics().p("AjSCjQgKgDgGgGIgQgFIgRgHQgNgGgHgMQgLgFgIgGQgsgjADgrQgbgVgLgXQgVgZAagvIAAgBQARgdAegOQAdgOAkgHQBKgOBLgHQBagPBXgDQCAgIB3AnQAYAIAUALQAfASgBApQAAAMgCAMQgGAlgbAUQgPAMgUAJIAAAFQgBALgOAQQgLAOgSAKQgWAQgeASQgYAPgdAJQgVAHgVAJQgzAXg6AGQgRACgRAAIgUAAQhbAAhSgYg");
	var mask_graphics_12 = new cjs.Graphics().p("AjaC/QgLgDgGgKQgJgCgIgEIgRgIQgPgIgKgMQgLgIgIgJQgogrAbg5QglgMgcgPQgvgSAXg6IAAAAQAOgkAfgVQAdgUAqgJQBUgRBUgLQBlgQBjgHQCRgSCGAsQAdAJATAOQAhAYgGAvQgCANgEAOQgLApgnAPQgVAKgXAGIAFAEQAOALgEAaQgEAWgMARQgRAcgiAVQgaAPglAIQgZAFgXANQg4AfhBAJQgTACgUABIgbABQhlAAhagdg");
	var mask_graphics_13 = new cjs.Graphics().p("AjhDbQgMgEgFgNQgKgCgIgFQiDhEBPhsQgugEgugHQhJgJAUhGQAYhWBggVQDMgsDNgTQCigcCXAxQBsAjgqBpQgSAsgyALIg1AMIALAEQAdAKAFAkQANB2iMAUQgcAEgZARQhPAyhiAFIgkABQhtAAhighg");
	var mask_graphics_14 = new cjs.Graphics().p("AhGEmQg5gDg1gMQgOgDgKgHIgXgGQgcgKgYgNQgKgFgFgKQgIgEgHgFQhFg1AlhJQgHgMgBgOIg3gHIgbgFQg8gOASg+IAAgBQAPg1ArgbIgDgHQgEgFAAgMQAAgKADgIQAHgyBrgbQCVgiCXgSQBHgLBHgDQBugKBlAYQBeAXAhBBQAHAMgIASQgYAwgyAVQgaALgdAIIgBABIAKADQAkAPAJAhQAKAkgQAoQgQAmgrAPQgWAIgYAFIABADQAAADgCAEQgBAIgGAPIgLAUQggBChhAPQgZADgYAJQhFAYhJAAIgTAAg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj3E2QgNgEgEgNQgKgCgJgEQiChFBOhsQgtgEgugGQhJgLAThGQARg6A0gcIgVgDQgVgDgRgRQhnhrCmguQDyhED6gTQDqgrC0BoQASALgLAVQgsBPhfAeIgCAAQBpAkgqBmQgRAsgzAMIg1ALIALAEQAeAMAEAjQAOB3iMAUQgcAEgaAQQhOAzhhAFIglABQhtAAhigig");
	var mask_graphics_16 = new cjs.Graphics().p("AhgFyIgLgDIgHgFIgRgDQhugigChAQgcgEgbgGQgNgDgKgGIgBgCQgMgCgKgFQglgRgCgmQgKgvAeglIgIgJQgIgJgDgQIgCgNQgtgfgDgVIgKgBQgxgHgcgWQgPgLAFgaIAAgBQAMg9AygjIAMgHIABgJIAEgXQAGhHBwggIAxgMQCUgdCVgPQCGgICGACQBlgDBgALQAWADAGAPQAkA/geAfQgFAHgEALIADABQAPAIAGAMQADAEAAAFQAAAJgGALQgqBFhUAdIgBAAIADAHIAAABQBKAfgRBIQgGAggaAXIgKAIQgTANgWAIIABAFQAEAGgDAKIgGAOQgHANgKAMIAEAIQAJAZgRAcQgNAYgaAQIglAdQgtAkhFALIgsAJIgTAFQg9AQg+AAQgiAAgkgFg");
	var mask_graphics_17 = new cjs.Graphics().p("AkPGPQgNgEgEgNQgKgCgJgFQiChEBOhsQgtgEgugHQhJgKAThGQARg7A0gdIgVgDQgVgDgRgQQg/hBAmgrQg2gIg2gLQgcgGAEgdQAJhFA6gqQCEheCngYQDEgdDDgJQEKAFEBAnQAaAEgEAdQgRByiLAZQgdAFgcAKQATAJASALQASALgLAVQgsBPhfAdIgCABQBpAjgqBnQgRAsgzALIg1AMIALAEQAeALAEAkQAOB2iMAUQgcAEgaARQhOAyhhAFIglABQhtAAhighg");
	var mask_graphics_18 = new cjs.Graphics().p("AguHhQg6gCg3gNQgMgDgHgHQgJgBgIgDQhAgXgdgiQgHgKgBgOQgDgHgCgIQgDgMABgMQgpgOgegSQgugZAZg8QAEgLAGgLQgIgWACgNIgTgDIgDAAQgSgDgOgLQgsgjANgtQADgKAGgJQgSgagHgQIgBgDQgMgEgHgHQgDgEgCgEQgGgMgDgPIgCgNQg6gjgPgfQgqgLgqgOQgQgFgLgIQgWgNAKgfIAAgBQAXhIA6guQBYhIB6gaQA9gNA/gIQBugNBvgHIBagFQA+gGA+gCQEXgBEJA/IAeAIQAbAKABAZQACAegWAgQgUAdgfAUQACAHgHAOQgUAggkAUQgZAPgfAMQAAAJgDAIQgCADgEAEQgFAGgLAJIgTANIAIAXQAEALgLAPQghApgzAXIgCAAQABALgHAMIAAAAQBHAkgaBQQgDALgGAKQgSAjgrALIgEABIgwAKIABACIADABIAIAEQAVALAHAZIADAUQAEBfhnAZQgYAGgaALIgKAEQgdALgdAOQgsAUgwAJQgqAHgqAAIgYgBg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai8H1QgNgEgEgNQgKgCgJgFQiChEBOhsQgugEgtgHQhJgKAThGQARg8AzgcIgUgDQgVgDgRgRQg/hBAlgqQg1gIg2gLQgcgGAEgdQAEgcAMgYQhygVhpgxQgzgYAZg0QBfjEDnggQC+gaC/gHIBjgDQF8gkFfBuQBrAhhABUQgZAggiAUQANAIgDAVQgRByiLAZQgdAFgcAKQASAJATALQASALgLAVQgsBOhfAdIgCABQBpAjgqBoQgRAsgzALIg1ALIALAFQAeALAEAkQAOB2iMAUQgcAEgaARQhOAyhiAFIglABQhtAAhhghg");
	var mask_graphics_20 = new cjs.Graphics().p("AiGIiQgMgDgHgHIgTgGQgTgIgQgJQgMgGgHgLQgJgGgHgGQgvgqARg2QgdgUgMgZQgFgHgBgJQgngLgLgeIgGgKQgSgbAVghIgKgKIgFgIQgFgJgDgLQgPguAagdQgEgGgCgFIABgCQgVgDgUgKQgbgPgUgNQgUgOAFgYQACgNAIgNIgHgMQgtgIgtgMQgbgGgKgUQgMgTgIgSIgSgFQgtgRgHgfQgIgXgFgWQgggIghgKQgbgIgRgNQgRgMAJgbQAlh2B8gmQBdggBqgYIAigIQAzgNA1gGQCDgRCEgIIBpgFQBYgHBXgCQExgVEZBbIAOAGQAVALAGATQAYA1gyA2IgMAKQAGAYgUAcQAEALgIATIgCAEQgPAigaAYQACAJgGAQQgaA4hEAYQgbAKgeAJIgDAHIgCAIQgBAGgLAMIACAFIAHATQAEANgLAPQglAyg/AaIgBABQAAAIgEAIIABAAQBLAkgbBTQgDALgGAKQgRAhgnAMIgMADIgsAJIgBACIAGACIAFACQAbAMAEAhIAAACQANBwh+AXIgbAGQgNAEgNAGIgdAQQg+AjhJAIQgbADgcABIgEAAQhZAAhTgXg");
	var mask_graphics_21 = new cjs.Graphics().p("AihI8QgNgEgEgNQgKgCgJgFQiChEBOhsQgtgEgugHQhJgKAThGQARg8A0gcIgVgDQgVgDgRgRQg/hBAmgrQg2gIg2gLQgcgGAEgdQAEgbAMgYQhygVhpgxQgzgYAZg0QARgkAWgeQg/gJg/gNQgcgFAFgeQAXiBCcgTQCAgQB6gsQA0gTA4gIQEfgoEfgGQFGgnElBjQAjAMgEAnQgIBShAAoQAxAjgwA/QgZAggiAVQANAHgDAVQgRByiLAZQgdAFgcAKQATAJASALQASAKgLAVQgsBPhfAdIgCABQBpAjgqBoQgRAsgzALIg1AMIALAEQAeALAEAkQAOB2iMAUQgcAEgaARQhOAyhiAFIglABQhsAAhighg");
	var mask_graphics_22 = new cjs.Graphics().p("Ah/JzIgBAAQgKgEgFgLIgEgDQgHgBgGgDIgGgEQhzg+A4heQgIgKgEgKIgrgFQgggFgUgMQgTgMgCgXQgHgfAVgjQAIgNALgKIgGgKQgGgJgBgOQgCgNADgKIgQgMQgPgOgEgTIAAgLQgvgbgVgXQgFgGABgJQgIgFgEgIQgKgQgFgOIgsgJQgbgGgLgTQgNgTgJgQQgdgIgcgLQgtgQgGggQgGgYgEgVIghgKQgtgOgQgZQgEgEgBgGQgDgJADgNIgRgXIg1gEQgvgDghgSQgWgNAAgeIAAgBQADhSBLgiQA1gZBBgMIBLgOQBPg0BjgiQAhgLAlgHIAxgJQE1gvE1gTQBUgJBTgEQEOgZDpBeQAjAOAPAdIAJARQAHANgHATQgTAygrAfQACAYgcAaIAEAHQAGAJgBANQgBAMgGAPQgKAYgQATQADAMgHARQgKAXgRASQAPAnguAsQgZAXgjAOQAAAEgFAGIgFAIQgOAQgRAPQAEAPABAMQACANgQAQQgZAZgjAQIgwAWIADARQACAIgMANIgBAAQAYA4g7A5IgBABQAFAHADAIQAUAkgcAiQgLANgOAOIgLAJIACAHQADAQgNASIgFAGQgJAMgMALIAFAGQAMAUgGAbQgMA4g/AXIg6AWIgOAFQgZAIgYANQg7AghGAHIglADIgVAAQhsAAhhghg");
	var mask_graphics_23 = new cjs.Graphics().p("AhgKrQgNgEgEgNQgKgCgJgEQiChFBOhsQgugEgtgGQhJgLAThGQARg7AzgcIgUgDQgVgDgRgRQg/hCAlgqQg1gJg2gLQgcgFAEgeQAEgcAMgXQhygWhpgwQgzgYAZgzQARgkAWgfQg/gJg/gMQgbgFADgbIh6ABQhfAAgHhRQgIhaBdgeQBlgiBqgVQBYhyCkgbQHAhMHBghQFgg4EWCrQARALgJAXQgiBdhlAjIALAEQAjAMgEAmQgIBShAApQAxAigwBAQgZAggiAUQANAIgDAVQgRBxiLAYQgdAFgcALQATAJASAKQASALgLAVQgsBPhfAeIgCAAQBpAkgqBnQgRAsgzAMIg1ALIALAEQAeAMAEAjQAOB3iMAUQgcAEgaAQQhOAzhiAFIglABQhuAAhggig");
	var mask_graphics_24 = new cjs.Graphics().p("AAxMBIgEAAQgNgCgKgHQgLgBgKgCQhigbgig1QgEgHAAgMQgDgFgCgHIgBgIQgzgTgdgXQgjgaAUgzQgHgGgFgHQgMgRgHgNQgMgOAHgTQgIgGgFgIQgGgGgDgLIgEgQQgJgpAUgbIgKgKQgFgHgCgJIgLgGQgzgggPgYQgCgEAAgFQgQgGgHgNQgOgQgJgPIgJgCQgYgEgIgSQgJgQgGgPQhFgRhDgbQgmgQgPgbQgFgIgBgJQgGgYASggIAJgQIgKgcIhRgOQgVgEgLgNIgDgEQgRgDgHgLIhiAAIgRAAQhWgDgIhMIAAgCQgIhVBUgfIAUgIQBKgYBNgRQgGgIAGgOQgDglAjgxQATgaAegRQA9giBFgYQFfh7F5goQBrgLBqgKIApgEQDagHDLAiQBUANBBAvQAZAUAAAWIACAIQACANgLATQgmA4hCAdQgYALgbALIAAADIAMADQAkAKAQAZQAkA3AFApQAPAJAKALQALANgGAUQgGAWgQAXQgZAiglAWQAAAIgKAOIgLALIAFAHQANAVgLAeQgXA/hHAcIAAADQgCAOgUAWQAGAMAAAOIABADQACAOgOASQgJAKgKAJQACAKgGAPQgaA+hEAcIgCABQACAOgLANQgHAMgMASQAKAMAHAPQAHAMgHAQIgCAFQgVAqgsATQgZAMgcAIIgBAFIAAADIAAABQAZAMALAWQAaAzghA2QgVAjgxALIgZAFIgbAGIABAEQABAFAAAIQgCAKgFAOQgcBFhdARIgfADQgbACgZAIQg4APg7AAQgbAAgbgDg");
	var mask_graphics_25 = new cjs.Graphics().p("AhgMrQgNgEgEgNQgKgCgJgEQiChFBOhrQgugFgtgGQhJgLAThGQARg7AzgcIgUgDQgVgDgRgRQg/hBAlgrQg1gJg2gLQgcgFAEgeQAEgcAMgXQhygWhpgxQgzgYAZgzQARgkAWgeQg/gJg/gMQgbgFADgbIh6ABQhfAAgHhRQgIhaBdgeQBZgeBcgTQh2gYAvhvQAOggAggUQGXj/Hig3QCJgQCGgNQDjAODfALQBfAEA9A7QAbAbgXAeQg8BRhoAdQgbAIgeALQCVAeCEBRQARALgJAXQgiBdhlAjIALAEQAjAMgEAmQgIBShAApQAxAigwBAQgZAfgiAUQANAIgDAVQgRByiLAYQgdAGgcAKQATAJASAKQASALgLAVQgsBPhfAeIgCAAQBpAkgqBnQgRAsgzAMIg1ALIALAEQAeAMAEAjQAOB3iMAUQgcAEgaAQQhOAzhiAFIglABQhuAAhggig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:6.8,y:161.7}).wait(1).to({graphics:mask_graphics_11,x:6.8,y:158.6}).wait(1).to({graphics:mask_graphics_12,x:6,y:155.4}).wait(1).to({graphics:mask_graphics_13,x:5.2,y:152.1}).wait(1).to({graphics:mask_graphics_14,x:6.8,y:147.5}).wait(1).to({graphics:mask_graphics_15,x:7.4,y:143}).wait(1).to({graphics:mask_graphics_16,x:5,y:138.6}).wait(1).to({graphics:mask_graphics_17,x:9.8,y:134.1}).wait(1).to({graphics:mask_graphics_18,x:5.7,y:128.9}).wait(1).to({graphics:mask_graphics_19,x:1.5,y:123.9}).wait(1).to({graphics:mask_graphics_20,x:-0.1,y:120.4}).wait(1).to({graphics:mask_graphics_21,x:-1.2,y:116.8}).wait(1).to({graphics:mask_graphics_22,x:-4.6,y:111.3}).wait(1).to({graphics:mask_graphics_23,x:-7.7,y:105.7}).wait(1).to({graphics:mask_graphics_24,x:-9.9,y:98.8}).wait(1).to({graphics:mask_graphics_25,x:-7.7,y:92.9}).wait(9));

	// 레이어 9
	this.instance_5 = new lib.light_line_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.5,175,1,1,0,0,0,90.5,180);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(24));

	// 레이어 8
	this.instance_6 = new lib.star();
	this.instance_6.parent = this;
	this.instance_6.setTransform(4,131.7,0.931,0.931,0,0,0,33.4,32.1);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.instance_7 = new lib.star_move();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,-9.8,1,1,0,0,0,58.2,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({x:-16,y:71.7,alpha:0.5},2).to({regX:33.3,regY:32.2,scaleX:1.05,scaleY:1.05,x:33.9,y:48.5,alpha:0.602},2).to({regY:32.1,scaleX:1.23,scaleY:1.23,x:-11.1,y:25.1,alpha:0.801},4).to({regX:33.4,regY:32.2,scaleX:1.29,scaleY:1.29,x:3.9,y:1.8,alpha:1},4).to({_off:true},1).wait(8));

	// 레이어 2
	this.instance_8 = new lib.light_obj();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,59.7,1,1,0,0,0,150,248.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34));

	// 레이어 3
	this.instance_9 = new lib.light();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.1,-24.8,1,1,0,0,0,312.1,312.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).to({alpha:0.801},8).to({alpha:0.602},8).to({alpha:1},8).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-399.9,800,800);


// stage content:
(lib.Attention = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver();
		
		var _mc = this.motion_mc;
		 
		this.area.addEventListener("mouseover", mouseOverEvent.bind(this)); 
		this.area.addEventListener("mouseout", mouseOutEvent.bind(this)); 
		
		this.exit_btn.addEventListener("click", exitEvent.bind(this)); 
		
		var overEFF = createjs.Sound.createInstance("eff");
		
		function mouseOverEvent() 
		{ 
			overEFF.play();
			_mc.gotoAndPlay(2);
		} 
		 
		function mouseOutEvent() 
		{ 
			createjs.Sound.stop();
			_mc.gotoAndStop(0);
		}
		
		function exitEvent()
		{
			window.close();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// exit_btn
	this.exit_btn = new lib.exit();
	this.exit_btn.parent = this;
	this.exit_btn.setTransform(1238,54.1,1,1,0,0,0,36,36);
	new cjs.ButtonHelper(this.exit_btn, 0, 1, 2, false, new lib.exit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exit_btn).wait(1));

	// motion_mc
	this.motion_mc = new lib.motion_mc();
	this.motion_mc.parent = this;
	this.motion_mc.setTransform(724.5,504,1,1,0,0,0,84.5,104);

	this.timeline.addTween(cjs.Tween.get(this.motion_mc).wait(1));

	// area
	this.area = new lib.click_area();
	this.area.parent = this;
	this.area.setTransform(639,459,1,1,0,0,0,182,256);

	this.timeline.addTween(cjs.Tween.get(this.area).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhlTA/rMAAAh/VMDKoAAAMAAAB/Vg");
	this.shape.setTransform(640,400,0.987,0.982);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,400,1280,800);
// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/lightobj.png?1489034676585", id:"lightobj"},
		{src:"images/light_line.png?1489034676585", id:"light_line"},
		{src:"images/light_outline.png?1489034676585", id:"light_outline"},
		{src:"images/star_bitmap.png?1489034676585", id:"star_bitmap"},
		{src:"sounds/eff.mp3?1489034676585", id:"eff"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
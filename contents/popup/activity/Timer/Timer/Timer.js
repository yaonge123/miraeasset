//this.shape.setTransform(41.3,41.3,0.902,0.902);
//this.shape.setTransform(X, Y, Width, Height)
//createJS

(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,329);


(lib.planet_light1 = function() {
	this.initialize(img.planet_light1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,128);


(lib.planet_light2 = function() {
	this.initialize(img.planet_light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,128);// helper functions:

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


(lib.불꽃 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFECB1","#FF9D09"],[0,1],-57.3,0.6,57.3,0.6).s().p("AjVCDQjNgUiHhbIgThxQCpgpC1gBQBKAABgAHIA3AGQBcAIBLALQEdAnB2BKQhwBBj0AiQhQALhlAKQhJAGhAAAQg8AAg0gFg");
	this.shape.setTransform(0.2,-23.9,0.7,0.7,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE695","#FF2409","#FFE8B1"],[0,0.137,1],-94,4.5,168.5,4.5).s().p("AppD7QiegPiMhLIAAk8QBVhAB8gXQBTgPCEgBQBBAABAACQFwAIFABJQFBBJENBcQk+B/i5AnQlPBIk0AXQhtAIhhAAQhhAAhUgIg");
	this.shape_1.setTransform(0,0,0.7,0.7,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-64.1,36.3,128.2);


(lib.고양이다리측면아래dnl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAB6F").s().p("AhBBDIAAhsIABgHQACgSAOgNQAQgRAXAAQAWAAAQARQAQAPAAAWIAABYQApAwgpACIhaAAIgBABQgTAAAAgeg");
	this.shape.setTransform(6.6,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.6,13.2,19.3);


(lib.고양이다리측면위dnl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAB6F").s().p("AgmBOQgOgOgCgSIgBgHIAAiEIBuAAIAACFQAAAWgPAQQgRAPgXABQgWgBgQgPg");
	this.shape.setTransform(5.6,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,18.7);


(lib.고양이머리측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AjpBOQgiAAgYgYQgYgYAAghQAAgiAYgYQALgKAMgGQgOATAAAZQAAAfAVAUQAWAWAfAAIGkAAQAeAAAWgWQAVgUABgfQAAgYgOgTQALAGAJAJQAYAYAAAiQAAAhgYAYQgYAYgiAAg");
	this.shape.setTransform(122,206.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAB6F").s().p("AjpBSQgiAAgYgYQgYgYAAgiQAAghAYgYQALgLANgGQAPgHATAAIHTAAQAVAAARAJQALAGAJAJQAYAYAAAhQAAAigYAYQgYAYgiAAg");
	this.shape_1.setTransform(122,205.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.6)").s().p("AtPLrQlgk1AAm2QAAm1Fgk1QFfk1HwAAQHxAAFfE1QFgE1AAG1QAAG2lgE1QlfE1nxAAQnwAAlfk1gAslrFQlOEnAAGeQAAGgFOEmQFOEmHXAAQHYAAFOkmQFOkmAAmgQAAmelOknQlOklnYAAQnXAAlOElg");
	this.shape_2.setTransform(114.1,105.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,1],160.7,16.7,147.3,53.4).s().p("AsakuQD3iSE9AAQGoAAEsEIQErEGACFzg");
	this.shape_3.setTransform(137.1,57.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B889A").s().p("AhxCMIAWitIAVhoQAIgpAYg6QAODWCKEDQjqgrAHg2g");
	this.shape_4.setTransform(76.5,82.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D76E62").s().p("AgdA7Ig8hvQgOgdgLgaIAEgIQARgSAagIQAogMA3AJQAlAHAyATIgfBvQgSA7gaA4QgLAXgLASg");
	this.shape_5.setTransform(99.6,89.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC8377").s().p("AgPBoIg8hvQgOgdgLgaQgPgigKgfQgNgoAQgSQAQgPApAOQBtAlBYBCIgDAKIgfBuQgSA8gZA4QgLAXgMASg");
	this.shape_6.setTransform(98.1,85.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B748E").s().p("AjQghQBSg5BfgYQBXgUBvAGQBHADB9ATQh/BLjiA8Ii5AwQhsAdhPAZQBPhxBLgzg");
	this.shape_7.setTransform(128.1,144.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0E0B0B").s().p("AgwAaQgSgeAEgnIADgPQAEAdAPAOQALANATADQARAEAQgGQAQgFAKgQQAJgPACgRQAHAcgIAdQgNAvglAIIgKABQgcAAgTghg");
	this.shape_8.setTransform(164.5,121.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIATQgIgBgEgGQgDgGADgHQAEgIAIgFQAIgEAJAAQAIABAEAGQADAGgDAHQgEAIgJAEQgHAFgHAAIgCAAg");
	this.shape_9.setTransform(162.2,113,1,1,-15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E1A1A").s().p("AgwAsQgPgbgBgcIAAgPQADgdAQgRQANgPAUAAQASAAASAPQAQANAKASIAGAPQAPAkgKAiQgMArgkABQgkgBgZgrg");
	this.shape_10.setTransform(164.5,118.8,1,1.001,0,-14.8,167.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E1A1A").s().p("AAMBDQgagSgogtQgLgOgBgIQgDgQAWgYQAKgIAIgEQAIgEAYgBQAZgCAUARQAWARgCAmQAAALgFARIgIAdQgGASgHAEQgFACgFAAQgJAAgLgJg");
	this.shape_11.setTransform(202.4,125.9,1,1,-10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3E5E4").s().p("AgmBdQgXgIgPgVQgOgUgBgZQAAgXAMgXQALgWATgQQAkgdA2gCIAvAjQAEAXAAAUQAAAZgIAUQgOAkgXAQQgXAPgWADIgMAAQgPAAgNgEg");
	this.shape_12.setTransform(195.4,138,1.357,1.267,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8AA2B1").s().p("Ag0DsQjehXARgzIA2ilIAohjQARgnAhg0QApgkB5BGQB6BHBYBWIgaA3IgFAKQgfA+gUAnQgdA4gkAyQgPAVgPAPQgVAUgUAIQgygSgrgQg");
	this.shape_13.setTransform(88.7,82.4,1,1,-10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B748E").s().p("AoBhAQA+g3BigzQBrg4ByggIALgDQF5g+ENFDQiKhtipgvQiugwinAfQisAfiLBwQiPBxg6CgQgKAagIAbQgDiuCPi6gAChknQAfACAgAEIADAAQByAVBcAtQCFBbBYB/QjqjvkDgzg");
	this.shape_14.setTransform(115.2,85.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#425970").s().p("AowJbIgDgGQiGjXgHiWQgHiWApioQAnipCridQA+g4BigzQBrg3ByghIALgDQF5g9ENFDQiKhtipgvQiugwinAeQisAgiLBvQiPBzg6CfQgKAbgIAbQgsCMgBChQgCC/B7DMQgTgUgRgWgADWqEQAfACAgAEIADAAQByAVBcAtQCFBbBYCAQjqjwkDgzg");
	this.shape_15.setTransform(109.9,120.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B889A").s().p("Ai2JpQisgJhwg0QhfgthChHQgTgUgRgWIgDgGQiGjXgHiWQgHiVApipQAnipCridQiPC7ADCuQAAAtALAsQAyDWBLCGIADAHIAHAKQBRCICABGQBzBACWAIQCBAHB4gMQB4gODHg1QBkgaBPg5QBRg5BBhcQgHASgeAxQgkA6g9A/Qg+A/iMBEQiMBCiyAiQiOAbiDAAQghAAgggBg");
	this.shape_16.setTransform(120.2,141.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AA2B1").s().p("AjRLdQirgJhwg0QhggthChHQgTgUgQgWIgEgGQiFjXgIiWQgHiVApipQAoipCridQA9g4BigzQBrg3ByghIALgDIAkgJIAigIQAkgIAmgEIAdgDQA1gFA5ADQAeACAhAEIADAAQByAVBcAtQCWBJBeCKIAMATQA9BlBJDrQBjgPgLChQgJCFgrBoQgHASgeAxQgkA6g8A/Qg/A/iLBEQiMBCizAiQiNAciEAAQghAAgggCg");
	this.shape_17.setTransform(122.9,129.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ED8953").s().p("AjpBOQgiAAgYgYQgYgYAAghQAAgiAYgYQALgKANgGQgPATgBAZQAAAfAWAUQAWAWAeAAIGkAAQAfAAAWgWQAVgUAAgfQAAgYgNgTQALAGAJAJQAYAYAAAiQAAAhgYAYQgYAYgiAAg");
	this.shape_18.setTransform(122,206.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFAB6F").s().p("AjSA/QgeAAgWgWQgWgVAAgeQABgZAPgUQAPgHATAAIHTAAQAVAAARAJQANATAAAYQAAAegVAVQgWAWgfAAg");
	this.shape_19.setTransform(122.1,203.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANAKQgNgHgPgDQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAQAEAOAGQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAIgCAAIgCAAg");
	this.shape_20.setTransform(160.8,114.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1E1A1A").s().p("AhAA/QgGgDgCgGQgBgGACgFQADgGAGgCQAzgQAnAAQgkgmg5gPQgGgCgDgFQgDgFACgGQABgGAGgDQAFgEAGACQBVAYAuBEQAEAFgCAGQgBAGgFAEQgFADgHgBQgtgKhCAWIgEABQgEAAgDgCg");
	this.shape_21.setTransform(165.2,119.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_12},{t:this.shape_11},{t:this.shape_21},{t:this.shape_20},{t:this.shape_3},{t:this.shape_2},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,0,240,213.9);


(lib.고양이팔측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AgCAbIgYgnQAUAHAJgZIAXAoQgDAVgOAAQgFAAgGgEg");
	this.shape.setTransform(17.7,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2C9BD").s().p("AhEAwQgVgjAEgaQAqB0BqhQQgUgmgYhDIABAAIBDBzQg8AygoAAQgiAAgVgjg");
	this.shape_1.setTransform(8.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFAB6F").s().p("AATBEIhDh2QAGgdAXAMIBEB2QgEAUgNAAQgGAAgHgDg");
	this.shape_2.setTransform(15.5,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0E9E0").s().p("AhTA8QgVgkAEgZQAHg0BigSIAAAAIgBgCQAFgdAYAMIBFB1QgGAdgYgMQg7AzgpAAQgiAAgVgjg");
	this.shape_3.setTransform(10.2,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D2C9BD").s().p("AimA9QB+gcDPh8QiaB2iiBBg");
	this.shape_4.setTransform(24.8,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0E9E0").s().p("Ai9AmQCphFCThyQBCAZgDBTIAAABQibB1iiBBg");
	this.shape_5.setTransform(22.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.6,31.6);


(lib.고양이정면입 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#201D1D").s().p("AgOAwQgMgEgVgOQgUgOgNgMQgMgMAEgNQADgNALgEQALgEARgCIAfgFQAOgCAbABQAcAAAQAHQAPAGADAIQAFAOgJAPQgIALgOAKQgPALgOAJQgPAJgLABIgEAAQgIAAgJgDg");
	this.shape.setTransform(0,-6.2,1,1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3E5E4").s().p("AgtBLQgigMgMgeQgLgeATgeQATgfAngOQAlgOAiALQAjAMALAeQALAegTAeQgTAggmAOQgVAIgTAAQgQAAgQgGg");
	this.shape_1.setTransform(-9.3,2.8,1.065,1.065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E5E4").s().p("AgTBLQgogLgVgdQgWgdAJgeQAIgfAhgPQAigOAmAKQAnALAWAdQAWAegIAeQgJAfghAOQgUAIgVAAQgPAAgQgEg");
	this.shape_2.setTransform(9.2,1.4,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-11.3,39.1,22.7);


(lib.고양이정면귀2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D76E62").s().p("AhLBqIgLgxQgNg7AQgjQAXgvBEgPQATgFAmgFIAcgEQhXBshPB3IgCgIg");
	this.shape.setTransform(8.4,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8377").s().p("AiBh/QCEgPB/AfIgCADQhXBshPB3IgKAOQg3h8gaiIg");
	this.shape_1.setTransform(4.9,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AA2B1").s().p("AjjjsQBygTBzAJQB0AJBuAlIgxA7IgCADQhYBrhPB3IgKAPQguBHgtBMQhVjggzkGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-25,45.6,50);


(lib.고양이정면귀 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D76E62").s().p("AhchxIAcAEQAmAFATAFQBEAPAXAvQAQAjgNA7IgLAxIgCAIQhPh3hXhsg");
	this.shape.setTransform(-8.4,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8377").s().p("AAnB3QhPh3hXhsIgCgDQB/gfCEAPQgaCIg3B8IgKgOg");
	this.shape_1.setTransform(-4.9,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AA2B1").s().p("AAABnIgJgPQhQh3hXhrIgCgDIgxg7QBuglB0gJQBzgJByATQg0EGhUDgQgthMgvhHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-25,45.6,50);


(lib.고양이정면눈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0B0B").s().p("AgvAXQgQgagBgdQAGARAOAMQANALARADQAQACARgIQAQgHAIgPQAKgSgEgdIAHAOQAPAlgJAhQgKAsglABIgBAAQgjAAgagqg");
	this.shape.setTransform(26.8,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIATQgIgBgEgGQgDgGADgHQAEgIAIgFQAIgEAJAAQAIABAEAGQADAGgDAHQgEAIgJAEQgHAFgHAAIgCAAg");
	this.shape_1.setTransform(23.8,-6.6,1,1,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1A1A").s().p("AgvAtQgQgagBgcIAAgQQACgcAPgSQANgPAUAAQASAAATAOQAPAMALASIAHAOQAPAkgJAjQgKArglABIgBAAQgjAAgagqg");
	this.shape_2.setTransform(26.8,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E0B0B").s().p("Ag7AVQgLggAOgmIAGgOQgDAdALARQAIAPASAGQAQAHAQgDQARgDANgMQANgNAGgRQgBAdgOAbQgYAsgkABIgBAAQgjAAgNgrg");
	this.shape_3.setTransform(-26.8,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIATQgIgBgEgGQgDgGADgHQAEgIAIgFQAIgEAJAAQAIABAEAGQADAGgDAHQgEAIgJAEQgHAFgHAAIgCAAg");
	this.shape_4.setTransform(-27.9,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1A1A").s().p("Ag7AtQgLghAOglIAGgOQAJgUAQgNQASgPASAAQATAAAOAOQAQAQAEAdIABAPQgBAcgOAcQgYAsgkABIgBAAQgjAAgNgrg");
	this.shape_5.setTransform(-26.8,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1A1A").s().p("Ag/AQIAAAAQgIgNgFgNQgCgGADgFQADgGAGgCQAGgCAFADQAGADACAGQAEAKAGAKIgBAAQAWAiAcAAQAZgBAHgfIAAgBQAHgXgHgZQgCgGADgFQADgFAGgCQAGgCAGADQAFAEACAFQAJAigJAeIAAgBQgNA4gvAAIgEABQgqAAgegyg");
	this.shape_6.setTransform(26.8,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1A1A").s().p("AhIALIAAAAQgKgdAIgiQACgGAFgDQAFgEAGACQAGABADAGQAEAFgCAGQgGAZAHAWIAAABQAKAfAZAAQAcgBATgjIAAABQAHgPAEgQQABgGAGgDQAFgDAGABQAGACADAFQAEAFgCAGQgEATgKARIAAAAQgcA1gsAAIgEABQgsAAgQg2g");
	this.shape_7.setTransform(-27.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-9.5,66.6,19);


(lib.고양이정면대기몸통 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AgVB9QiogGhXheQgyg1gLhhQAQAhAaAcQAnAqA0AZQBdAuB/AAQCBgCBSguQAygcAhgrQARgYALgZQgOBshPA+QhcBLiZAAIgVgBg");
	this.shape.setTransform(6.4,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#809AB6").s().p("AASAqQgFgFABgIIAAgPQAAAFAEAFQAFAFAJAAQAHAAAFgFQAFgFABgFIAAAPQAAAIgGAFQgFAGgHAAQgJAAgFgGgAgsAqQgEgFAAgIIAAhHIAAgFIAAA6QAAAIAEAFQAGAFAIAAQAIAAAEgFQAGgFAAgEIAAAOQAAAIgGAFQgFAGgHAAQgIAAgGgGg");
	this.shape_1.setTransform(5.1,-11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED8953").s().p("AiZBXQgTgFACgTIASiEQACgOAOgDQgDADAAAFIgSCDQgCATATAFIExAAIAGgBQgFAKgOABg");
	this.shape_2.setTransform(9.8,-12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2B1C2").s().p("AASAxQgFgFABgIIAAhIQgBgHAFgGQAFgEAJAAQAHAAAFAEQAGAGAAAHIAABIQAAAIgGAFQgFAFgHABQgJgBgFgFgAgsAxQgEgFAAgIIAAhHIAAgFQABgFADgEQAGgEAIAAQAHAAAFAEQAGAGAAAHIAABIQAAAIgGAFQgFAFgHABQgIgBgGgFg");
	this.shape_3.setTransform(5.1,-12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E79B85").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgKAMABQANgBAJAKQAJAKAAALQAAANgJAJQgJAKgNAAQgMAAgJgKg");
	this.shape_4.setTransform(19.5,-14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E75A32").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAQQgQAPgVAAQgVAAgPgPg");
	this.shape_5.setTransform(18.8,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFAB6F").s().p("AiaBXQgUgFADgSIARiEQACgPAOgCIAHgBIEJAAQATABADASIAQCCQAAAIgDAFQgFAKgOABg");
	this.shape_6.setTransform(9.9,-12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE1A2").s().p("Ag3A4QgXgYAAggQAAgPAGgOQAEgKAGgIIAHgIQAJgJAKgFQARgJATAAQAhAAAXAXQAXAYAAAfQAAAJgCAJIgDAKIgEAKQgFAKgJAIQgXAXghAAQgfAAgYgXg");
	this.shape_7.setTransform(13.7,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBC33").s().p("AhFBGQgdgdAAgpQAAgPAFgOQADgKAFgIQAGgMAKgKQALgLANgHQAVgLAYAAQApAAAdAdQAdAdAAAoQAAAMgDALQgCAJgDAIQgFAKgHAKIgJAKQgdAdgpAAQgoAAgdgdg");
	this.shape_8.setTransform(14.5,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCA5F").s().p("AhUBKQgjgkgBgxQAAgcALgYIATAVQADgJAFgJQAHgLAJgKQALgMANgGQAWgLAXAAQApAAAdAdQAdAdAAApQAAALgCAKQgCAKgEAIIAagBQgJAbgVAUQgkAlgzAAQgyAAglglg");
	this.shape_9.setTransform(14.2,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE1A2").s().p("AhXBXQgjgkgBgzQAAgaALgYQAJgTAQgSQAOgOARgIQAagOAeAAQAzABAkAjQAlAlAAAyQAAAOgEAOIgDAMQgJAagVAVQgkAlgzAAQgyAAglglg");
	this.shape_10.setTransform(14.5,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F5F5F").s().p("AlVA3QgagRADgqQADgsAegSIAPABQgMAQgCAZQgDAmAYAQQE1AVEwgVQAagSgDgnQgDgYgMgOIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_11.setTransform(6.5,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#878787").s().p("AlVA3QgagRADgqQADgsAegSIAPABQFAAUE0gUIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_12.setTransform(6.5,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFAB6F").s().p("AgVC1QipgGhWheQgyg2gLhgQgGgyAFg+QE/ApFkgpQADAhABAdQAAAegDAaQgPBrhOA/QhcBLiZAAIgVgBg");
	this.shape_13.setTransform(6.4,27);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2C9BD").s().p("AEFgWQgfhIgshBIA8AAQBBC9ASCCQgchegohYgAkIifIBRAAQhVBzg8CDQAThtAtiJg");
	this.shape_14.setTransform(6.8,-9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0E9E0").s().p("AgVFiQipgHhWhdQgyg2gLhhQgGgyAFg9QAEguAJg1QAUhtAtiJIH+AAQBBC+ASCBIAEAaQADAgABAdQAAAdgDAbQgPBrhOBAQhcBKiZAAIgVAAg");
	this.shape_15.setTransform(6.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-25.7,73.2,70.9);


(lib.고양이정면대기다리2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AhBBpIAAjvIBuAAIAADaQApAwgpACIhaAAIgBABQgTAAAAgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-13.4,13.2,26.9);


(lib.고양이정면대기다리1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAB6F").s().p("AhBBpIAAjvIBuAAIAADaQApAwgpACIhaAAIgBABQgTAAAAgeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-13.4,13.2,26.9);


(lib.고양이정면대기로켓부스트 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83AAE0").s().p("Ak3FdQg9o7EWh4QArgGAvABQBaACBHAgQBKAiAXA3QAwBxAPCjQAQCvgjB6g");
	this.shape.setTransform(7.6,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AECEFA").s().p("Aj9FdIhwAAQgKg6gDg4QgEhrAYhjQAeiFBRh4QAqg/BWghQAngPArgHQAqgGAvABQBbACBHAgQBLAiAXA3QAwBxAPCjQAQCvgjB6g");
	this.shape_1.setTransform(1.9,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#545454").s().p("Ah1AtQgTAAgOgOQgMgMAAgTQAAgRAMgOQAOgNATAAIDsAAQASAAANANQAOAOAAARQAAATgOAMQgNAOgSAAg");
	this.shape_2.setTransform(20,34.3,0.9,0.9,0,0.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E75A32").s().p("AjrFdIhwAAQgJg6gDg4QgSgBgLgeQgLgeACgrQACgrAPgeQAPgeASAAIAHABQAfiFBQh4QArg/BWghQAmgPAsgHQAqgGAvABQBbACBHAgQBKAiAXA3QAwBxAPCjQAQCvgjB6g");
	this.shape_3.setTransform(0,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#545454").s().p("Ah1AtQgTAAgOgOQgMgMAAgTQAAgRAMgOQAOgNATAAIDrAAQATAAANANQANAOAAARQAAATgNAMQgNAOgTAAg");
	this.shape_4.setTransform(-18.1,34.3,0.9,0.9,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-38.2,79.7,76.6);


(lib.고양이정면대기팔2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAB6F").s().p("AATBEIhDh2QAGgdAYAMIBDB2QgEAUgNAAQgGAAgHgDg");
	this.shape.setTransform(-5.3,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E9E0").s().p("AhTA8Qg9hnCVgcIgBgCQAFgdAYAMIBFB1QgGAdgYgMQg7AzgpAAQgiAAgVgjg");
	this.shape_1.setTransform(-10.6,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0E9E0").s().p("Ai9AmQCphFCThyQBCAZgDBTQibB2iiBBg");
	this.shape_2.setTransform(1.8,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-15.8,41.6,31.6);


(lib.고양이정면대기팔 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAB6F").s().p("AgwAzIBDh2QAYgMAGAdIhDB2QgHADgGAAQgNAAgEgUg");
	this.shape.setTransform(5.4,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E9E0").s().p("AhHAsQgYAMgGgdIBFh1QAYgMAFAdIgBACQCVAcg9BnQgVAjgiAAQgpAAg7gzg");
	this.shape_1.setTransform(10.6,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0E9E0").s().p("Ai9AmQCphFCThyQBCAZgDBTQibB2iiBBg");
	this.shape_2.setTransform(-1.8,-1.2,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-15.8,41.6,31.6);


(lib.부스터 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFECB1","#FF9D09"],[0,1],-57.3,0.6,57.3,0.6).s().p("AjVCDQjNgUiHhbIgThxQCpgpC1gBQBKAABgAHIA3AGQBcAIBLALQEdAnB2BKQhwBBj0AiQhQALhlAKQhJAGhAAAQg8AAg0gFg");
	this.shape.setTransform(18.3,40.2,0.7,0.7,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE695","#FF2409","#FFE8B1"],[0,0.137,1],-94,4.5,168.5,4.5).s().p("AppD7QiegPiMhLIAAk8QBVhAB8gXQBTgPCEgBQBBAABAACQFwAIFABJQFBBJENBcQk+B/i5AnQlPBIk0AXQhtAIhhAAQhhAAhUgIg");
	this.shape_1.setTransform(18.1,64.1,0.7,0.7,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:0.7,scaleY:0.7,y:64.1}},{t:this.shape,p:{scaleX:0.7,scaleY:0.7,x:18.3,y:40.2}}]}).to({state:[{t:this.shape_1,p:{scaleX:0.659,scaleY:0.659,y:60.4}},{t:this.shape,p:{scaleX:0.659,scaleY:0.659,x:18.1,y:37.9}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,128.2);


(lib.twinkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AAAD0").s().p("AhGAAQA9gFAJhSQAKBQA9AHQg9AagKA+QgPg+g3gag");
	this.shape.setTransform(7,8.7,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.twinkle, new cjs.Rectangle(0,0,14,17.5), null);


(lib.time_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.second = new cjs.Text("00", "normal 400 120px 'Noto Sans'", "#FFFFFF");
	this.second.name = "second";
	this.second.textAlign = "center";
	this.second.lineHeight = 173;
	this.second.parent = this;
	this.second.setTransform(231.3,-0.2,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.second);
	}

	this.minute = new cjs.Text("00", "normal 400 120px 'Noto Sans'", "#FFFFFF");
	this.minute.name = "minute";
	this.minute.textAlign = "center";
	this.minute.lineHeight = 173;
	this.minute.parent = this;
	this.minute.setTransform(86.8,-0.2,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.minute);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.minute},{t:this.second}]}).wait(1));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2D/QgVgVgBglQABgjAVgXQAWgWAggCQAhACAVAWQAWAXABAjQgBAlgWAVQgVAWghAAQggAAgWgWgAg2iKQgVgWgBgiQABglAVgWQAWgXAgAAQAhAAAVAXQAWAWABAlQgBAigWAWQgVAXghABQgggBgWgXg");
	this.shape.setTransform(158.9,77.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("A4tIGIAAvnQAAi+C+AAMAsDAAAQBrAAAvA9QgvgkhSAAMgsDAAAQi+AAAAC+IAAPnQAABSAkAvQg9gvAAhrg");
	this.shape_1.setTransform(158.2,72.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2CE5F9").s().p("A2BKyQi+AAAAi+IAAvyIABAAQAFizC4AAMAsDAAAQC4AAAFCzIABAAIAAPyQAAC+i+AAgA3vn4IAAPsQAABuBuAAMAsDAAAQBuAAAAhuIAAvsQgDhphrAAMgsDAAAQhrAAgDBpg");
	this.shape_2.setTransform(160,74);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252323").s().p("AoCJiIAAgbId3AAQBkAAAAhkIAAvDQAAhlhkAAI93AAIAAgcIeEAAQBuAAAABuIAAPnQAABuhuAAgA2BJiQhuAAAAhuIAAvnQAAhuBuAAIN/AAIAAAcItoAAQhkAAAABlIAAPDQAABkBkAAINoAAIAAAbg");
	this.shape_3.setTransform(160,74);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().rr(-155,-65,310,130,15);
	this.shape_4.setTransform(159,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.time_mc, new cjs.Rectangle(0,-2,320,159.3), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCD5D").s().p("AAMCcQgEgCgEgFIgzhTIhigDQgFgBgEgDQgFgEgCgEQgCgFAAgFQAAgFAEgEIBDhDIgYhQQgCgIACgHQACgHAEgDQAFgEAGgBQAGAAAHADIBKAjIBEgtQAHgEAFAAQAFgBAGADQAHAEACAFQACAFAAAHIgEBTIBDAvQAGADADAGQACAGgBAFQgBAFgFAGQgFAEgHAEIhSASIgZBcQgCAFgEADQgEADgFAAIgCAAQgFAAgEgBg");
	this.shape.setTransform(16.2,15.5,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(0,0,32.4,31.1), null);


(lib.sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACDDaIioh2IhjAAQgEAAgCgDQgDgDgBgEIAAizQABgEADgDQACgDAEAAIBjAAICoh2QADgCAEAAQADABADADQADADAAAEIAAGhQAAAEgDADQgDADgDAAIgCABQgDAAgCgCg");
	this.shape.setTransform(14.7,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgECTQgHgCgFgHQgEgHACgIQADgIAHgEQAzggABhRQABhQg0gbQgHgDgDgIQgDgIADgHQAEgIAIgDQAHgDAHAEQBMAigBBuQgBBqhIAoQgFADgFAAIgFgBgAhCBmQgIgBgFgHQgFgGABgIQABgJAHgEQAigaABgsIAAAAQABgrgfgSQgIgEgCgIQgCgIAEgHQAEgHAHgDQAIgCAIAEQAzAbAABFIAAABQgCBAgxAlQgGAEgGAAIgDgBg");
	this.shape_1.setTransform(42.1,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2C2C2").s().p("AAYDaIioh2IhjAAQgEAAgDgDQgDgDAAgEIAAizQAAgEADgDQADgDAEAAIBjAAICoh2QADgCAEAAQADABADADQACACAAAEIAAGiQAAAEgCADQgDADgDAAIgCABQgDAAgCgCgADbBNIgwgwIgwAwQgGAFgIAAQgJAAgFgFQgGgGAAgJQAAgIAGgGIAwgwIgxgvQgFgGAAgJQAAgIAFgGQAGgGAJAAQAIAAAGAGIAwAxIAxgxQAFgGAJAAQAIAAAGAGQAGAGAAAIQAAAJgGAGIgwAvIAwAwQAGAGAAAIQAAAJgGAGQgGAFgIAAQgJAAgGgFg");
	this.shape_2.setTransform(25.4,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.5,43.9);


(lib.sComa_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJA/IBJh9IBJB9g");
	this.shape.setTransform(7.4,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A950BF").s().p("AhJA/IBJh9IBJB9g");
	this.shape_1.setTransform(7.4,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,12.7);


(lib.purple_btn_base_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgSAIQgGgKAJgLQAEgEAGgCQAJgDAIAFQAJAFABAKQAAAFgDAHQgGALgNAAQgNgBgFgMg");
	this.shape.setTransform(13.6,5,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AgfA3QgSgGAAgQQAAgRAFgMQAFgMAJgPQAKgQAcgMQAegMAIAWQAFAGgCAHQgCAJgOAIQgeARgHAcQgHAWgOAAIgGgBg");
	this.shape_1.setTransform(7.3,8.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.498)","rgba(169,80,191,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,1,1,1],-46.5,-15.5,0,-46.5,-15.5,39.8).s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_2.setTransform(56.3,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 레이어 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A2CA1").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_3.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 레이어 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1C1C").s().p("AnBDhQh9AAAAh9IAAjHQAAh9B9AAIODAAQB9AAAAB9IAADHQAAB9h9AAgAoMhjIAADHQAABLBLAAIODAAQBLAAAAhLIAAjHQAAhLhLAAIuDAAQhLAAAABLg");
	this.shape_4.setTransform(55,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF5DC4").s().p("AnBCvQhLAAAAhLIAAjHQAAhLBLAAIODAAQBLAAAABLIAADHQAABLhLAAg");
	this.shape_5.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.purple_btn_base_over, new cjs.Rectangle(-2.5,-2.5,115,45), null);


(lib.purple_btn_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgSAIQgGgKAJgLQAEgEAGgCQAJgDAIAFQAJAFABAKQAAAFgDAHQgGALgNAAQgNgBgFgMg");
	this.shape.setTransform(13.6,5,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AgfA3QgSgGAAgQQAAgRAFgMQAFgMAJgPQAKgQAcgMQAegMAIAWQAFAGgCAHQgCAJgOAIQgeARgHAcQgHAWgOAAIgGgBg");
	this.shape_1.setTransform(7.3,8.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.498)","rgba(169,80,191,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,1,1,1],-46.5,-15.5,0,-46.5,-15.5,39.8).s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_2.setTransform(56.3,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 레이어 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A950BF").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_3.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 레이어 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1C1C").s().p("AnBDhQh9AAAAh9IAAjHQAAh9B9AAIODAAQB9AAAAB9IAADHQAAB9h9AAgAoMhjIAADHQAABLBLAAIODAAQBLAAAAhLIAAjHQAAhLhLAAIuDAAQhLAAAABLg");
	this.shape_4.setTransform(55,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF5DC4").s().p("AnBCvQhLAAAAhLIAAjHQAAhLBLAAIODAAQBLAAAABLIAADHQAABLhLAAg");
	this.shape_5.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.purple_btn_base, new cjs.Rectangle(-2.5,-2.5,115,45), null);


(lib.planet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AlWDlQg3g3gghBIBXAOQCLATCHgjQCHglBjhnQBnhsAziLQAPgoAHgoQBYB1AACYQAAC7iFCFQiECEi6AAQi8AAiFiEg");
	this.shape.setTransform(47.5,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71180").s().p("AlLFUQgjgjgagnIAGgFQA7g6BZgoQBFghBkgbQCRgoEqhBIBBgSQABAUAAAUQAAAtgIAqQifANh8AwQicA9h5B7QgnAnggAqQhIghg8g8gAlLksQCEiEC8AAQCoAAB8BsIgUAMQg9AkhVATQg6AOhiAMQiPARgOACQhaAOg/AYQgtASgrAZQAghdBMhMg");
	this.shape_1.setTransform(46.5,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FC2082").s().p("Ai6FoQAggrAngmQB4h7Cdg9QB8gwCfgNQgYCEhkBlQiFCEi7AAQhlAAhWgngAnDg1QAAhRAZhHQArgZAtgRQA/gYBagOQAOgCCPgRQBigMA6gOQBVgUA9gjIAUgNIAbAZQB2B2ANCiIhBASQkqBCiRAnQhkAbhFAgQhZApg7A5IgGAGQhIhtAAiJg");
	this.shape_2.setTransform(45.2,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.planet3, new cjs.Rectangle(0,0,90.5,90.5), null);


(lib.planet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AlWDlQg3g3gghBIBXAOQCLATCHgjQCHglBjhnQBnhsAziLQAPgoAHgoQBYB1AACYQAAC7iFCFQiECEi6AAQi8AAiFiEg");
	this.shape.setTransform(47.5,54.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B051").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAKQgJAKgOgBQgMABgKgKg");
	this.shape_1.setTransform(75.7,18.6,0.6,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B051").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAKQgJAKgOgBQgMABgKgKg");
	this.shape_2.setTransform(36.5,82.4,0.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B051").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAKQgJAKgOgBQgMABgKgKg");
	this.shape_3.setTransform(70.7,66.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B051").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAKQgJAKgOgBQgMABgKgKg");
	this.shape_4.setTransform(9.7,53.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B051").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAKQgJAKgOgBQgMABgKgKg");
	this.shape_5.setTransform(25.5,14.4,0.6,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B051").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQAOAAAJAJQAJAKAAAMQAAANgJAKQgJAKgOgBQgMABgKgKg");
	this.shape_6.setTransform(43.4,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B051").s().p("AghAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAARASIAAAAQgJA0gWAwIgLABQgYAAgSgSg");
	this.shape_7.setTransform(84.6,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B051").s().p("AhkBlQgpgqAAg7QAAg6ApgqQAqgpA6AAQA7AAAqApQAqAqAAA6QAAA7gqAqQgqApg7AAQg6AAgqgpg");
	this.shape_8.setTransform(34.7,35.2,0.42,0.42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B051").s().p("AhkBlQgpgqAAg7QAAg6ApgqQAqgpA6AAQA7AAAqApQAqAqAAA6QAAA7gqAqQgqApg7AAQg6AAgqgpg");
	this.shape_9.setTransform(42,60.2,0.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B051").s().p("AhkBlQgpgqAAg7QAAg6ApgqQAqgpA6AAQA7AAAqApQAqAqAAA6QAAA7gqAqQgqApg7AAQg6AAgqgpg");
	this.shape_10.setTransform(65,36.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD27A").s().p("AjZDaQhahbAAh/QAAh/BahaQBahZB/gBQCAABBZBZQBaBaAAB/QAAB/haBbQhZBZiAABQh/gBhahZg");
	this.shape_11.setTransform(45.2,45.3,1.472,1.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.planet2, new cjs.Rectangle(0,0,90.5,90.5), null);

//재생 및 일시정지 버튼
(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 5
	//좌측 상단 작은 점
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiAmQgFgEAAgGQAAgHAMgLIARgMQAIgGAMgFQBBgcBHAAQAKAAAFADQAHAFAAAGQAAAIgGAFQgFADgOAAQhAABg3AXQgQAHgIAGIgLALQgHAFgGAAQgGAAgEgEg");
	this.shape.setTransform(30.4,10.1);

	//좌측 상단 곡선
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJASQgHgFgBgNQAAgHADgEQACgEAEgBQAIgEAGACQAGABAEAHQADAFgBAHQAAAGgDAFQgFAGgKABIgBAAQgEAAgEgCg");
	this.shape_1.setTransform(17.4,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 레이어 4 //흰색 태두리
	this.shape_2 = new cjs.Shape();
	// this.shape_2.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,48.4).s().p("AlWFWQiMiOAAjIQAAjHCMiNQCPiODHAAQDHAACNCOQCPCNAADHQAADIiPCOQiNCNjHAAQjHAAiPiNg");
    // this.shape_2.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,48.4).s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
    this.shape_2.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,41.2).s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	// this.shape_2.setTransform(48.3,48.3);
    // this.shape_2.setTransform(41.3,41.1);
    this.shape_2.setTransform(40.9,41.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// 레이어 2
	// 재생 삼각형 버튼
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AijDFQgGgCgDgGQgDgFAAgIIAAlgQAAgGADgGQADgFAGgDQAFgDAIABQAGAAAGAEIEnCnQATAJAAASQAAALgEAGQgFAHgKAFIknCmQgGADgGABIgDAAQgFAAgFgCg");
	// this.shape_3.setTransform(52.9,48.6,1.102,1.102);
    this.shape_3.setTransform(45.9,41.6,1.102,1.102);

	//일시정지 오른쪽 막대기
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	// this.shape_4.setTransform(57.8,48.4,1.047,1.047);
    this.shape_4.setTransform(50.8,41.4,1.047,1.047);

	//일시정지 왼쪽 막대기
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	// this.shape_5.setTransform(39,48.4,1.047,1.047);
    this.shape_5.setTransform(32,41.4,1.047,1.047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// 레이어 3	//하위 파란색원 내용
	// 원내부 재생버튼 회색 태두리
	this.shape_6 = new cjs.Shape();
	// this.shape_6.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AivivQAAgHADgGQADgFAGgDQAFgCAHAAQAHABAGADIEnCnQATAKAAARQAAALgEAGQgFAHgKAFIknCmQgGAEgHAAQgHABgFgDQgGgCgDgGQgDgFAAgHg");
    // this.shape_6.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,41.2).s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
    this.shape_6.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	// this.shape_6.setTransform(52.9,48.6,1.102,1.102);
    this.shape_6.setTransform(40.9,41.6);

	//원내부 재생 버튼
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AijDFQgGgCgDgGQgDgFAAgIIAAlgQAAgGADgGQADgFAGgDQAFgDAIABQAGAAAGAEIEnCnQATAJAAASQAAALgEAGQgFAHgKAFIknCmQgGADgGABIgDAAQgFAAgFgCg");
	// this.shape_7.setTransform(52.9,48.6,1.102,1.102);
    this.shape_7.setTransform(45.9,41.6,1.102,1.102);

    //일시 정지버튼 오른쪽 막대기 외부 회색 태두리
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AgUjMIApAAQAeAAAAAeIAAFdQAAAegeAAIgpAAQgeAAAAgeIAAldQAAgeAeAAg");
	// this.shape_8.setTransform(57.8,48.4,1.047,1.047);
    this.shape_8.setTransform(50.8,41.4,1.047,1.047);

    //일시 정비버튼 오른족 막대기
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	// this.shape_9.setTransform(57.8,48.4,1.047,1.047);
    this.shape_9.setTransform(50.8,41.4,1.047,1.047);

    //일시 정지버튼 왼쪽 막대기 외부 회색 태두리
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AgUjMIApAAQAeAAAAAeIAAFdQAAAegeAAIgpAAQgeAAAAgeIAAldQAAgeAeAAg");
	// this.shape_10.setTransform(39,48.4,1.047,1.047);
    this.shape_10.setTransform(32,41.4,1.047,1.047);

    //일시 정지버튼 왼쪽 막대기
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	// this.shape_11.setTransform(39,48.4,1.047,1.047);
    this.shape_11.setTransform(32,41.4,1.047,1.047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// 레이어 1
	//배경 원형 판
	this.shape_12 = new cjs.Shape();
	// this.shape_12.graphics.f("#164673").s().p("Al5F6QididAAjdQAAjcCdidQCcidDdAAQDeAACcCdQCdCdAADcQAADdidCdQicCdjeAAQjdAAicidg");
    this.shape_12.graphics.f("#164673").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
    // this.shape_12.setTransform(48.3,48.3,0.902,0.902);
	this.shape_12.setTransform(41.3,41.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2));

	// 레이어 6
	//원형 판 그림자
	this.shape_13 = new cjs.Shape();
	// this.shape_13.graphics.f("#191919").s().p("Al5F6QididAAjdQAAjcCdidQCcidDdAAQDeAACcCdQCdCdAADcQAADdidCdQicCdjeAAQjdAAicidg");
    this.shape_13.graphics.f("#191919").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
    // this.shape_13.setTransform(48.3,48.4,0.975,0.975);
	this.shape_13.setTransform(41.3,41.4,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.8,104.3,104.3);


(lib.mirine3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAXQgKgEgFgGQgGgHABgJQABgLAIgGQANgLAQAIQAIADAGAIQAFAHAAAIQAAAJgGAHQgGAIgJAAIgCAAQgGAAgIgEg");
	this.shape.setTransform(51.1,158,1.132,1.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgYAOQgEgGAAgFIABgHIACgHQABgDAEgEQALgMAJAEIAAgCQARABAIAQQAIAOgKAOQgHALgMABIgDAAQgOAAgLgPg");
	this.shape_1.setTransform(140.9,1.4,0.472,0.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgVAlQgIgFgEgHQgDgFgCgMQgCgXALgNQAKgOAQABQAFAAgBgDQAPACAMANQALAMAAAQQABAJgFALQgIAWgTADIgHABQgKAAgMgIg");
	this.shape_2.setTransform(551.4,34.4,0.472,0.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.098)").s().p("AgCAYQgIgCgHgFIgDgEIAAgHIgCgGQgBgFADgFQADgGAGgDQAHgEAFACIAAgDQAPAFAEAHQAEAGgBAIQgCAOgIAFQgFAEgFAAIgFgBg");
	this.shape_3.setTransform(1.1,298.7,0.472,0.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAbQgJgDgDgFIgCgFQgEgRAEgKQADgHAGgEQAHgEAGACIAAgDQAVgBAIAPQAEAGAAAJQgBAQgGAHQgGAGgLABQgIAAgJgDg");
	this.shape_4.setTransform(500.1,299.3,0.472,0.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_5.setTransform(669,100.5,0.472,0.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.298)").s().p("AgkAoQgOgPADgUQABgHAFgMQAIgTAIgIQANgNAPACIACAAIAAgBQAPAAAMAKQALAKAEAPQAEAOgEAOQgEAOgLALQgPASgUABIgDAAQgSAAgMgOg");
	this.shape_6.setTransform(287.4,265.6,0.472,0.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AgGAtQgPgCgLgKQgGgGgDgIQgFgNAGgPQAGgNALgJQALgJANgCQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQAOACALAKQALALACAOQADANgHANQgGAOgNAHQgJAFgLAAIgGAAg");
	this.shape_7.setTransform(439.3,299.3,0.472,0.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_8.setTransform(661.7,134.5,0.472,0.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_9.setTransform(351.2,170.3,0.472,0.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.298)").s().p("AgYAOQgEgGAAgFIABgHIACgHQABgDAEgEQALgMAJAEIAAgCQARABAIAQQAIAOgKAOQgHALgMABIgDAAQgOAAgLgPg");
	this.shape_10.setTransform(247.4,105.8,0.472,0.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.098)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_11.setTransform(63.8,262.5,0.472,0.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAjQgLgBgKgGQgKgHgDgKQgDgJACgGQAAgIAFgHQAHgKAMgBIAFgBQAGAAgBgDQAUgCANAPQAHAHABALQABAJgEAIQgEAKgLAGQgKAFgKAAIgCAAg");
	this.shape_12.setTransform(98.3,370.1,0.472,0.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_13.setTransform(404.8,377.3,0.472,0.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAjQgMgBgJgGQgKgHgDgLQgCgHABgJQACgKAEgFQAGgGAOgDIAEgCQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAUgCANAPQAHAIABAKQABAJgEAJQgEAKgMAFQgJAFgKAAIgCAAg");
	this.shape_14.setTransform(531.5,249.2,0.472,0.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AAAAjQgWAAgLgIQgJgFgEgLQgDgKACgJQADgKAIgGQAIgHAJAAQAGAAAAgDQATgBAIABQAQADAJAJQALALgBAMQgBAPgLAJQgMAKgWAAIgDAAg");
	this.shape_15.setTransform(75.3,319.9,0.472,0.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AghAkQgMgHgFgOQgFgOAEgNQAEgNAMgJQAMgJAOAAQAQgDAOAEQATAGAIAPQAGALgBANQgBAMgIALQgGAJgKAFQgKAFgOAAIgEAAQgUAAgNgJg");
	this.shape_16.setTransform(416.2,156,0.472,0.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAmQgKgHgFgKQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgCQAPABAMAKQALAJAEAOQADAOgHAOQgHAOgNAHQgJAEgLAAQgLAAgKgGg");
	this.shape_17.setTransform(160.2,120.2,0.472,0.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.298)").s().p("AgPAVQgFgBgDgEQgCgDgBgFQgCgIABgGQACgHAHgFQAHgFAIABIAAgCQAJAAAJADQAJAGADAJQACAGgDAIQgBAIgFAEQgEADgHABIgIABQgIAAgIgEg");
	this.shape_18.setTransform(305.1,313.7,0.472,0.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAbQgJgDgDgFIgCgFQgEgRAEgKQADgHAGgEQAHgEAGACIAAgDQAVgBAIAPQAEAGAAAJQgBAQgGAHQgGAGgLABQgIAAgJgDg");
	this.shape_19.setTransform(362.7,285,0.472,0.472);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.298)").s().p("AgiATQgNgNAGgPQADgHAHgFQAGgFAIgBQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAXAAQAOABAIAGQAOAKgDAPQgBARgQAHQgIADgNAAIgEAAQgZAAgKgLg");
	this.shape_20.setTransform(615.6,391.5,0.472,0.472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.298)").s().p("AgIAlQgJgEgFgIQgKgOAEgVQADgLAGgIQAIgIAKAAIABAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAKACAIAHQAIAIADAKQACAIgCAJQgDAagRAHQgEACgEAAQgEAAgFgDg");
	this.shape_21.setTransform(660.8,292.2,0.472,0.472);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_22.setTransform(543.1,184.7,0.472,0.472);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_23.setTransform(427.8,141.6,0.472,0.472);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.298)").s().p("AgFA2QgSgDgLgPQgKgNAAgXQAAgVAKgOQANgSATABIACAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAbAGAJANQAGAJACANQAGAogXASQgMAKgOAAIgGgBg");
	this.shape_24.setTransform(316.6,305.6,0.472,0.472);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.298)").s().p("AgDAxQgRgBgLgMQgLgMgBgVQgCgYAPgOQAKgKAQAAQAFAAgBgDQARACAMAKQAGAGAFALQAGAPgDAQQgEARgMAKQgMAKgPAAIgDAAg");
	this.shape_25.setTransform(212.8,334.2,0.472,0.472);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHA2QgQgCgKgJQgPgOAAgdQABgWAIgNQANgSATACQABAAABgBQABAAAAAAQABAAAAgBQAAAAAAgBQARADAOAMQAOANAFARQAFARgHASQgHASgQAHQgJAEgLAAIgJgBg");
	this.shape_26.setTransform(520.1,298.4,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mirine3, new cjs.Rectangle(0,0,670.8,393), null);


(lib.mirine2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AgKAYQgHgDgDgGQgCgEgBgGQgCgQAKgJQAEgEAFgCQANgDAKAKQAKALgDAMQgBAJgGAHQgHAGgIABIgCAAQgFAAgFgDg");
	this.shape.setTransform(471.6,212.8,1.132,1.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgFAjQgNgCgIgIQgJgIgDgMQgCgMAGgKQAGgIALgFQAMgGALACQANACAJAHQAJAJACAMQACAMgHAKQgFAJgMAFQgIADgJAAIgFAAg");
	this.shape_1.setTransform(191.7,4,1.132,1.132);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgGAtQgPgCgLgKQgGgGgDgIQgFgNAGgPQAGgNALgJQALgJANgCQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQAOACALAKQALALACAOQADANgHANQgGAOgNAHQgJAFgLAAIgGAAg");
	this.shape_2.setTransform(619.9,280.5,0.472,0.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_3.setTransform(348.4,147.6,0.472,0.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_4.setTransform(135.7,214.3,0.472,0.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AgWAmQgKgHgFgKQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgDQAPACAMAKQALAJAEAOQADAOgHAOQgHAOgNAHQgJAEgLAAQgLAAgKgGg");
	this.shape_5.setTransform(636.9,180.7,0.472,0.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAmQgMgDgFgFQgNgLAAgSQgBgOAKgMQALgNAPABQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQALgBALAFQALAFAHAKQAGAKAAALQAAANgHAJQgIALgOAEQgHACgHAAQgGAAgGgCg");
	this.shape_6.setTransform(572.1,225,0.472,0.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_7.setTransform(396.7,190.1,0.472,0.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_8.setTransform(373.5,46.7,0.472,0.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_9.setTransform(595.9,332.4,0.472,0.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_10.setTransform(629.8,217.8,0.472,0.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_11.setTransform(170.2,211.5,0.472,0.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAlQgIgFgEgHQgDgFgCgMQgCgXALgNQAKgOAQABQAFAAgBgDQAPACAMANQALAMAAAQQABAJgFALQgIAWgTADIgHABQgKAAgMgIg");
	this.shape_12.setTransform(285.4,61.1,0.472,0.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAkQgHgCgEgEQgNgLACgXQACgNAFgIQAJgMAOAAQABAAABAAQABAAAAAAQAAAAAAgBQABAAAAgBQANADAKAIQAHAIACALQADAKgDALQgDAKgHAHQgHAIgJACIgFABQgGAAgHgEg");
	this.shape_13.setTransform(32.6,239.3,0.472,0.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.298)").s().p("AghAkQgMgHgFgOQgFgOAEgNQAEgNAMgJQAMgJAOAAQAQgDAOAEQATAGAIAPQAGALgBANQgBAMgIALQgGAJgKAFQgKAFgOAAIgEAAQgUAAgNgJg");
	this.shape_14.setTransform(595.1,147,0.472,0.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AgNANIgBgDQgFgKABgEQACgGAFgEQAEgDAHAAQAGAAAEADIAGAHQAGAKgIAIQgCADgIADIgEABg");
	this.shape_15.setTransform(51.6,225.9,0.472,0.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AgNAWQgFgCgDgFQgDgEABgGQAAgFAHgIQAIgMAKgCQALAAAHAKQAHAJgEALQgDAKgIADQgEACgLAAQgFAAgFgBg");
	this.shape_16.setTransform(239.3,75.4,0.472,0.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.298)").s().p("AgSAaQgNgGgEgLQgDgHABgIIAEgIQAIgOARABIAAgCQAXgBAKAHQAOAJgBAPQgBAQgOAJQgIAEgKAAIgFAAQgJAAgJgEg");
	this.shape_17.setTransform(584.4,275.1,0.472,0.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_18.setTransform(492.2,218.7,0.472,0.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.298)").s().p("AgLAOQgEgCgCgDQgCgDAAgEIABgGQADgFAMgEIAKgDQAIABADAFQADAFgBAFQgBAFgEAFQgGAEgHACIgDABQgFAAgFgDg");
	this.shape_19.setTransform(385.3,232.4,1.132,1.132);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.298)").s().p("AgWAlQgKgGgFgKQgLgVALgVQAFgJAJgGQAKgGAKABQAEAAAAgCQAPAAAMAKQALAKAEAPQADANgHAOQgHAOgNAGQgJAGgLAAQgLgBgKgHg");
	this.shape_20.setTransform(2,254.6,0.472,0.472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.298)").s().p("AgWAmQgKgHgFgKQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgDQAPACAMAKQALAJAEAOQADAOgHAOQgHAOgNAHQgJAEgLAAQgLAAgKgGg");
	this.shape_21.setTransform(350.5,139.8,0.472,0.472);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgCAxQgSgBgLgMQgLgMgBgVQgCgYAPgOQAMgLAOABQAGAAgBgDQARACALAKQAHAHAEAKQAHAPgEAQQgDARgNAKQgLAKgQAAIgCAAg");
	this.shape_22.setTransform(549,175.6,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mirine2, new cjs.Rectangle(0,0,639,334.1), null);


(lib.mirine1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AAAAiQgMAAgJgIQgNgKABgQQAAgMAIgKQAJgJALgCQALgCAKAGQALAGAFALQAEAKgDALQgDAMgKAHQgIAGgLAAIgBAAg");
	this.shape.setTransform(430.8,272.2,1.132,1.132);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AghAkQgMgHgFgOQgFgOAEgNQAEgNAMgJQAMgJAOAAQAQgDAOAEQATAGAIAPQAGALgBANQgBAMgIALQgGAJgKAFQgKAFgOAAIgEAAQgUAAgNgJg");
	this.shape_1.setTransform(539.5,67.1,0.472,0.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgNAWQgFgCgDgFQgDgEABgGQAAgFAHgIQAIgMAKgCQALAAAHAKQAHAJgEALQgDAKgIADQgEACgLAAQgFAAgFgBg");
	this.shape_2.setTransform(319.4,1.1,0.472,0.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAZQgFgCgCgDIgCgFQgCgLAAgHQABgLAGgHQAIgIAIADIAAgDQAJABAHAHQAGAGACAIIAAAHQAAAJgDAHQgGANgLAAIgCABQgEAAgKgFg");
	this.shape_3.setTransform(77,100.2,0.472,0.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AgPAVQgFgBgDgEQgCgDgBgFQgCgIABgGQACgHAHgFQAHgFAIABIAAgCQAJAAAJADQAJAGADAJQACAGgDAIQgBAIgFAEQgEADgHABIgIABQgIAAgIgEg");
	this.shape_4.setTransform(260.7,299.1,0.472,0.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAmQgMgDgFgFQgNgLAAgSQgBgOAKgMQALgNAPABQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQALgBALAFQALAFAHAKQAGAKAAALQAAANgHAJQgIALgOAEQgHACgHAAQgGAAgGgCg");
	this.shape_5.setTransform(250.1,296.5,0.472,0.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAcQgLgDgJgMQgDgFAAgFIABgHIABgHQABgDAEgEQALgMAKAEIAAgCQAJABAIAGQAIAHACAJQADAOgKALQgIAJgLAAIgGgBg");
	this.shape_6.setTransform(1.3,154.1,0.472,0.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AgeAbQgKgIgDgNQgBgMAGgKQAIgOARgBQAGAAgBgDQAZgCAOALQAMAJABAPQABAOgMALQgMALgVAAQgTAAgLgIg");
	this.shape_7.setTransform(384.4,289.4,0.472,0.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_8.setTransform(296.2,332.3,0.472,0.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_9.setTransform(476.6,82.5,0.472,0.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAVQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgCQAPAAAMALQALAJAEAPQADANgHAOQgHAOgNAGQgJAFgLABQgYgCgMgWg");
	this.shape_10.setTransform(50.7,168.5,0.472,0.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAoQgMgCgJgHQgKgGgDgKQgCgFAAgKQABgQAHgJQAJgOAOACQAGAAgCgCQANACANAMQANAMACAMQADAKgGALQgFALgLAFQgJAEgJAAIgDAAg");
	this.shape_11.setTransform(215.5,282.2,0.472,0.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.298)").s().p("AgeAbQgKgIgDgNQgBgMAGgKQAIgOARgBQAGAAgBgDQAZgCAOALQAMAJABAPQABAOgMALQgMALgVAAQgTAAgLgIg");
	this.shape_12.setTransform(157.8,189,0.472,0.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAlQgLgIgFgOQgGgNAEgNQAEgNALgJQALgJAOgBIADAAQAPgDAOAJQAPAJAFAQQAFAOgHAQQgHAPgPAHQgJAFgNAAQgQAAgMgIg");
	this.shape_13.setTransform(503,25.2,0.472,0.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBArQgPgBgLgIQgKgJgDgKQgEgNACgJQACgPANgKQAMgKAOAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQANAAAMAJQAMAJAEANQAEANgGAOQgFANgLAIQgKAIgOAAIgBgBg");
	this.shape_14.setTransform(108.4,146.9,0.472,0.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AAAATQgNgBgGgHQgDgDAAgDQgBgEACgDQADgKADgCQAFgDAHABIAAgDIAOADQAIAEADAFQAFAKgJALQgEAEgFABIgFABIgEgBg");
	this.shape_15.setTransform(55.7,111.1,0.472,0.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAZQgFgCgCgDIgCgFQgCgLAAgHQABgLAGgHQAIgIAIADIAAgDQAJABAHAHQAGAGACAIIAAAHQAAAJgDAHQgGANgLAAIgCABQgEAAgKgFg");
	this.shape_16.setTransform(180.9,96.9,0.472,0.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAYQgIgCgHgFIgDgEIAAgHIgCgGQgBgFADgFQADgGAGgDQAHgEAFACIAAgDQAPAFAEAHQAEAGgBAIQgCAOgIAFQgFAEgFAAIgFgBg");
	this.shape_17.setTransform(146.4,190,0.472,0.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAZQgFgCgCgDIgCgFQgCgLAAgHQABgLAGgHQAIgIAIADIAAgDQAJABAHAHQAGAGACAIIAAAHQAAAJgDAHQgGANgLAAIgCABQgEAAgKgFg");
	this.shape_18.setTransform(526,275.1,0.472,0.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.298)").s().p("AAFAnIgHgEIgHgFIgMgFQgJgEgFgLQgEgKABgKQABgKAHgHQAHgIAKgBQAGAAgBgDQAQAFATAWQALAMABAIQACAQgRALQgHAFgHAAIgFgBg");
	this.shape_19.setTransform(430.4,246.4,0.472,0.472);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.298)").s().p("AgkAoQgOgPADgUQABgHAFgMQAIgTAIgIQANgNAPACIACAAIAAgBQAPAAAMAKQALAKAEAPQAEAOgEAOQgEAOgLALQgPASgUABIgDAAQgSAAgMgOg");
	this.shape_20.setTransform(204,139.7,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mirine1, new cjs.Rectangle(0,0,542.1,334), null);


(lib.mComa_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJA/IBJh9IBJB9g");
	this.shape.setTransform(7.4,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#048766").s().p("AhJA/IBJh9IBJB9g");
	this.shape_1.setTransform(7.4,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,12.7);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.light();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1, new cjs.Rectangle(0,0,533,329), null);


(lib.green_btn_base_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgSAIQgGgKAJgLQAEgEAGgCQAJgDAIAFQAJAFABAKQAAAFgDAHQgGALgNAAQgNgBgFgMg");
	this.shape.setTransform(13.6,5,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AgfA3QgSgGAAgQQAAgRAFgMQAFgMAJgPQAKgQAcgMQAegMAIAWQAFAGgCAHQgCAJgOAIQgeARgHAcQgHAWgOAAIgGgBg");
	this.shape_1.setTransform(7.3,8.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.498)","rgba(4,135,102,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,1,1,1],-46.5,-15.5,0,-46.5,-15.5,39.8).s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_2.setTransform(56.3,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 레이어 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#065F49").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_3.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 레이어 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1C1C").s().p("AnBDhQh9AAAAh9IAAjHQAAh9B9AAIODAAQB9AAAAB9IAADHQAAB9h9AAgAoMhjIAADHQAABLBLAAIODAAQBLAAAAhLIAAjHQAAhLhLAAIuDAAQhLAAAABLg");
	this.shape_4.setTransform(55,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF5DC4").s().p("AnBCvQhLAAAAhLIAAjHQAAhLBLAAIODAAQBLAAAABLIAADHQAABLhLAAg");
	this.shape_5.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.green_btn_base_over, new cjs.Rectangle(-2.5,-2.5,115,45), null);


(lib.green_btn_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgSAIQgGgKAJgLQAEgEAGgCQAJgDAIAFQAJAFABAKQAAAFgDAHQgGALgNAAQgNgBgFgMg");
	this.shape.setTransform(13.6,5,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AgfA3QgSgGAAgQQAAgRAFgMQAFgMAJgPQAKgQAcgMQAegMAIAWQAFAGgCAHQgCAJgOAIQgeARgHAcQgHAWgOAAIgGgBg");
	this.shape_1.setTransform(7.3,8.6,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.498)","rgba(4,135,102,0)","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,1,1,1],-46.5,-15.5,0,-46.5,-15.5,39.8).s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_2.setTransform(56.3,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 레이어 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#048766").s().p("AnBDIQhkAAAAhkIAAjHQAAhkBkAAIODAAQBkAAAABkIAADHQAABkhkAAg");
	this.shape_3.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 레이어 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1C1C").s().p("AnBDhQh9AAAAh9IAAjHQAAh9B9AAIODAAQB9AAAAB9IAADHQAAB9h9AAgAoMhjIAADHQAABLBLAAIODAAQBLAAAAhLIAAjHQAAhLhLAAIuDAAQhLAAAABLg");
	this.shape_4.setTransform(55,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF5DC4").s().p("AnBCvQhLAAAAhLIAAjHQAAhLBLAAIODAAQBLAAAABLIAADHQAABLhLAAg");
	this.shape_5.setTransform(55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.green_btn_base, new cjs.Rectangle(-2.5,-2.5,115,45), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("ACMClQgLAAgHgHIh6h7Ih5B7QgIAHgKAAQgKAAgHgIQgIgHAAgKQAAgLAIgHIB6h6Ih6h5QgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIIB5B6IB6h6QAHgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHIh6B5IB6B6QAHAHAAALQAAAKgHAIQgIAHgKAAIAAAAg");
	this.shape.setTransform(30,30.1,0.833,0.833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("Aj9D/QhqhqAAiVQAAiUBqhqQBphpCUAAQCVAABpBpQBqBqAACUQAACVhqBqQhpBpiVAAQiUAAhphpg");
	this.shape_1.setTransform(30,30,0.833,0.833);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACMClQgLAAgHgHIh6h7Ih5B7QgIAHgKAAQgKAAgHgIQgIgHAAgKQAAgLAIgHIB6h6Ih6h5QgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIIB5B6IB6h6QAHgIALAAQAKAAAIAIQAHAHAAAKQAAALgHAHIh6B5IB6B6QAHAHAAALQAAAKgHAIQgIAHgKAAIAAAAg");
	this.shape_2.setTransform(30,30.1,0.833,0.833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.8)").s().p("Aj9D/QhqhqAAiVQAAiUBqhqQBphpCUAAQCVAABpBpQBqBqAACUQAACVhqBqQhpBpiVAAQiUAAhphpg");
	this.shape_3.setTransform(30,30,0.833,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.btn_bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0,1],-3.8,-4.9,-3.8,14.1).s().p("AhNB0IigAAQhJgBgzgzQg0gzAAhJIAAAAQAAhJA0g0QAzgzBJAAIHbAAQBJAAAzAzQA0A0AABJIAAAAQAABJg0AzQgzAzhJABIigAAIhOB5g");
	this.shape.setTransform(41.4,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 레이어 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNB0IigAAQhJgBgzgzQg0gzAAhJIAAAAQAAhJA0g0QAzgzBJAAIHbAAQBJAAAzAzQA0A0AABJIAAAAQAABJg0AzQgzAzhJABIigAAIhOB5g");
	this.shape_1.setTransform(41.4,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 레이어 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AhNB0IigAAQhJgBgzgzQg0gzAAhJIAAAAQAAhJA0g0QAzgzBJAAIHbAAQBJAAAzAzQA0A0AABJIAAAAQAABJg0AzQgzAzhJABIigAAIhOB5g");
	this.shape_2.setTransform(43.9,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_bubble, new cjs.Rectangle(0,0,85.3,48.7), null);


(lib.고양이몸측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AgVB9QiogGhXheQgyg1gLhhQAQAhAbAcQAlAqA1AZQBcAuCAAAQCAgCBUguQAxgcAhgrQASgYAKgZQgPBshOA+QhcBLiZAAIgVgBg");
	this.shape.setTransform(36.5,72.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED8953").s().p("AgcBXQgTgFACgTIASiEQACgOAOgDQgDAEAAAEIgSCDQgCATATAFIA9AAQgFAJgNABg");
	this.shape_1.setTransform(63.4,27.2,0.97,1.044,0,-14.4,-5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFAB6F").s().p("AgXBSQgTgFACgSIARiDQABgFACgDIAGgBIARAAQATABADASIAQCCQAAAIgDAFIAAABg");
	this.shape_2.setTransform(64.1,26.5,0.97,1.044,0,-14.4,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#809AB6").s().p("AAGArQgGgEgCgIIgchHIgBgFIAWA6QADAHAGAEQAHAFAHgCQAHgBACgGQAEgGgCgFIAGAPQADAIgEAGQgCAHgHABIgEAAQgFAAgGgDg");
	this.shape_3.setTransform(66.7,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2B1C2").s().p("AACAqQgEgEgDgHIgXg6QgBgFACgEQAEgGAHgCQAHgBAGAEQAHAEACAHIAWA4IABABQABAEgDAGQgCAHgHABIgEAAQgGAAgGgDg");
	this.shape_4.setTransform(66.4,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E79B85").s().p("AAAATQgGgFgFgJQgFgIAAgIQAAgJAFgCQAFgCAGAGQAHAFAFAJQAFAIAAAIQAAAJgFACIgDAAQgEAAgFgEg");
	this.shape_5.setTransform(68,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E75A32").s().p("AgZAoQgTgOgFgWQgGgUALgSQALgQAVgCQATgCATAOQATAOAGAWQAFAVgLARQgLARgUACIgFAAQgRAAgRgNg");
	this.shape_6.setTransform(65,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCA5F").s().p("AgPAyIAAhjIAgAJIAABag");
	this.shape_7.setTransform(72.4,57.2,1.032,1,-5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE1A2").s().p("AgPBDIAAiPIAgAAIAACZg");
	this.shape_8.setTransform(71.3,45.5,1.032,1,-5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AlVA3QgagRADgqQADgsAegSIAPABQgMAQgCAZQgDAmAYAQQE1AVEwgVQAagSgDgnQgDgYgMgOIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_9.setTransform(36.6,48.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#878787").s().p("AkzArQgYgQADgmQACgZAMgQQFAAUE0gUQAMAOADAYQADAngaASQiYAKiaAAQiYAAibgKg");
	this.shape_10.setTransform(36.4,47.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFAB6F").s().p("AgVC1QipgGhWheQgyg2gLhgQgGgyAFg+QE/ApFkgpQADAhABAdQAAAegDAaQgPBrhOA/QhcBLiZAAIgVgBg");
	this.shape_11.setTransform(36.5,67);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2C9BD").s().p("AEFAaQgghHg2iNIAvgWQBZEgATCBQgehegnhZgAkIhtIBXgPQhaCBg+CDQAUhtAtiIg");
	this.shape_12.setTransform(36.9,25.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0E9E0").s().p("AlRDJQAEguAJg1QA9iCBbiCIFgg+QA2CNAgBIQAnBYAdBeIAEAaQizAUioAAQipAAifgUg");
	this.shape_13.setTransform(36.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.4,74.6,80.8);


(lib.고양이다리측면아래2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AhBBDIAAhsIABgHQACgSAOgNQAQgRAXAAQAWAAAQARQAQAPAAAWIAABYQApAwgpACIhaAAIgBABQgTAAAAgeg");
	this.shape.setTransform(6.6,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.6,13.2,19.3);


(lib.고양이다리측면위2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AgmBOQgOgOgCgSIgBgHIAAiEIBuAAIAACFQAAAWgPAQQgRAPgXABQgWgBgQgPg");
	this.shape.setTransform(5.6,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,18.7);


(lib.부스트로켓측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA38A").s().p("AgJBcQgMgMAAgQIAAiAQAAgQAMgLQAFgFAEgDQAGADAFAFQALALAAAQIAACAQAAAQgLAMQgFAFgGADQgEgDgFgFg");
	this.shape.setTransform(6.1,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83AAE0").s().p("AhWFdQgspYC5hgIAEAAIAkAAIgHK4g");
	this.shape_1.setTransform(37,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA38A").s().p("AgJBcQgMgLAAgRIAAiAQAAgQAMgLQAEgFAFgDQAGADAEAFQAMALAAAQIAACAQAAARgMALQgEAFgGADQgFgDgEgFg");
	this.shape_2.setTransform(6.1,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E75A32").s().p("AgbBkQAGgDAEgFQAMgLAAgRIAAiAQAAgQgMgLQgEgFgGgDQAIgDAJAAQAPAAAMALQALALAAAQIAACAQAAARgLALQgMAMgPAAQgJAAgIgEg");
	this.shape_3.setTransform(8.9,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AECEFA").s().p("AAgFdIh4AAIhwAAQgJg6gDg4QgEhrAXhjQAfiFBQh4QArg/BVghQAmgPAsgHQAWgDAXgCIAFAAIAkAAIgIK4g");
	this.shape_4.setTransform(25.2,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545454").s().p("Ah1AtQgTAAgOgOQgMgMAAgTQAAgRAMgOQAOgNATAAIDrAAQATAAANANQANAOAAARQAAATgNAMQgNAOgTAAg");
	this.shape_5.setTransform(26.4,72.5,0.9,0.9,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,0,43.8,207.7);


(lib.고양이정면대기머리_End = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 헬멧
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AjpBOQgiAAgYgYQgYgYAAghQAAgiAYgYQALgKANgGQgPATgBAZQABAfAVAUQAWAWAeAAIGkAAQAfAAAWgWQAVgUAAgfQAAgYgNgTQAKAGAKAJQAYAYAAAiQAAAhgYAYQgYAYgiAAg");
	this.shape.setTransform(2,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAB6F").s().p("AjpBSQgiAAgYgYQgYgYAAgiQAAghAYgYQALgKANgHQAPgHATAAIHTAAQAVAAARAJQAKAGAKAJQAYAYAAAhQAAAigYAYQgYAYgiAAg");
	this.shape_1.setTransform(2,98.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,1],160.7,16.7,147.3,53.4).s().p("AsaktQD3iTE9AAQGoAAEsEIQErEGACFzg");
	this.shape_2.setTransform(23,-49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AtPLrQlgk1AAm2QAAm1Fgk1QFfk1HwAAQHxAAFfE1QFgE1AAG1QAAG2lgE1QlfE1nxAAQnwAAlfk1gAslrFQlOEnAAGeQAAGgFOEmQFOEmHXAAQHYAAFOkmQFOkmAAmgQAAmelOknQlOklnYAAQnXAAlOElg");
	this.shape_3.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[]},19).wait(27));

	// 고양이 정면 귀2
	this.instance = new lib.고양이정면귀2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-41.9,-13.4,1,1,0,0,0,11.4,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(3).to({startPosition:0},0).to({rotation:6.2},3).to({rotation:0},3).to({_off:true},10).wait(27));

	// 고양이 정면 귀
	this.instance_1 = new lib.고양이정면귀("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.1,-15.1,1,1,0,0,0,-12.4,3.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(3).to({startPosition:0},0).to({regY:3.1,rotation:-7},3).to({regY:3.2,rotation:0},3).to({_off:true},10).wait(27));

	// 고양이 정면 눈
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAKQgNgHgPgDQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAQAEAOAGQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAIgCAAIgCAAg");
	this.shape_4.setTransform(44,17.9,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1A1A").s().p("AhAA/QgGgDgCgGQgBgGACgFQADgGAGgCQAzgQAnAAQgkgmg5gPQgGgCgDgFQgDgFACgGQABgGAGgDQAFgEAGACQBVAYAuBEQAEAFgCAGQgBAGgFAEQgFADgHgBQgtgKhCAWIgEABQgEAAgDgCg");
	this.shape_5.setTransform(39.5,22.5,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAKQgNgHgPgDQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAQAEAOAGQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAIgCAAIgCAAg");
	this.shape_6.setTransform(-22.1,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1A1A").s().p("AhAA/QgGgDgCgGQgBgGACgFQADgGAGgCQAzgQAnAAQgkgmg5gPQgGgCgDgFQgDgFACgGQABgGAGgDQAFgEAGACQBVAYAuBEQAEAFgCAGQgBAGgFAEQgFADgHgBQgtgKhCAWIgEABQgEAAgDgCg");
	this.shape_7.setTransform(-17.6,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).to({state:[]},19).wait(27));

	// 고양이 정면 입
	this.instance_2 = new lib.고양이정면입("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.6,41.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true},19).wait(27));

	// Layer 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B748E").s().p("AAageQgahNgthAIAYgBIAjgCIAaAAQAaBNAKBRQALBggNBfQgNhsgjhhgACXhaQgSgrgaglIAKABQAaADAaAEQAPAoAGAwQAHAxgCBaIAAAHQgOhXgehLgAjCiYQAkgGAjgFQAfBmgLBrQgahshBhag");
	this.shape_8.setTransform(2.9,-29.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#425970").s().p("AsMB4QgZhcgBhkIAAgGIAIgEQAUgLAigMQAvgPAxgMIABAIQAGAlAIAkIACAKIgpAoQg8A9grBKIgFgOgAMWg7IAIgoIADgiIAEAqQACAYAAAYIgRgQg");
	this.shape_9.setTransform(1.1,43.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B748E").s().p("AsMCTQgZhdgBhkIAAgFIAIgFQAUgKAigMQAvgPAxgMIATgEQBWgRBbgDQhYAnhKA+IgRAOIgpAmQg8A+grBKIgFgNgAMWggIgcgaQhLg+hXgnQAyABAxAGQAnAGAmAHIAVAFIAEAcIAEApQACAYAAAYIgRgPg");
	this.shape_10.setTransform(1.1,40.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B889A").s().p("AAPKWQizgBiegnQimgphkhIQhyhSg2h4IAAAAIgBgDQgLgbgIgbIAAgBIgEgNQgahdAAhkIAAgGQAAhUAShbQAVhsAghmQBajJC4hwQiiD1gZDsQgJBUAJBQIABAIQAFAkAJAkIACAKQAGAYAIAYIACAGIAFANQA2CVBwBcQBlBVCSAkQB+AgCYgGQCfgGCEgrQCVgxBoheQBrhfAsiHIAFgQIAJgjIAIgoIADghIAEApQACAXAAAZQAAAngDAnQgGA0gNAxIgKAjQgvCFh3BcQheBIikApQiYAmizAAIgFAAg");
	this.shape_11.setTransform(1.1,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8AA2B1").s().p("AAPLUQizgBiegnQimgphkhIQhyhSg2h4IAAAAIgBgDQgLgbgIgbIAAgBIgEgNQgahdAAhkIAAgGQAAhVAShaQAVhsAghmQBajJC4hwQBHgrBVgeQBCgSA/gLQAkgGAjgFIA3gGIAXgCIAYgCIAjgBIAaAAIAwACIATACIAKABQAaACAaAFQA7ALA8ATIACABQEcBuBqD3IAIAUQApBvAdBzIAOA4IAHAlIAEAcIAEAqQACAXAAAZQAAAngDAnQgGA0gNAxIgKAjQgvCFh3BcQheBIikApQiYAmizAAIgFAAg");
	this.shape_12.setTransform(1.1,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},4).to({state:[]},19).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-106.9,240,213.9);


(lib.고양이정면대기머리 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 헬멧
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED8953").s().p("AjpBOQgiAAgYgYQgYgYAAghQAAgiAYgYQALgKANgGQgPATgBAZQABAfAVAUQAWAWAeAAIGkAAQAfAAAWgWQAVgUAAgfQAAgYgNgTQAKAGAKAJQAYAYAAAiQAAAhgYAYQgYAYgiAAg");
	this.shape.setTransform(2,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAB6F").s().p("AjpBSQgiAAgYgYQgYgYAAgiQAAghAYgYQALgKANgHQAPgHATAAIHTAAQAVAAARAJQAKAGAKAJQAYAYAAAhQAAAigYAYQgYAYgiAAg");
	this.shape_1.setTransform(2,98.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,1],160.7,16.7,147.3,53.4).s().p("AsaktQD3iTE9AAQGoAAEsEIQErEGACFzg");
	this.shape_2.setTransform(23,-49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AtPLrQlgk1AAm2QAAm1Fgk1QFfk1HwAAQHxAAFfE1QFgE1AAG1QAAG2lgE1QlfE1nxAAQnwAAlfk1gAslrFQlOEnAAGeQAAGgFOEmQFOEmHXAAQHYAAFOkmQFOkmAAmgQAAmelOknQlOklnYAAQnXAAlOElg");
	this.shape_3.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},59).wait(6));

	// 고양이 정면 귀2
	this.instance = new lib.고양이정면귀2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-41.9,-13.4,1,1,0,0,0,11.4,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({startPosition:0},0).to({regX:11.5,rotation:3.7,x:-40.7},2).to({regX:11.4,rotation:-1,x:-41.8,y:-13.2},2).to({rotation:0,x:-41.9,y:-13.4},2).to({_off:true},26).wait(6));

	// 고양이 정면 귀
	this.instance_1 = new lib.고양이정면귀("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.1,-15.1,1,1,0,0,0,-12.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({startPosition:0},0).to({rotation:-3},2).to({regY:3.3,rotation:2.5,y:-15},2).to({regY:3.2,rotation:0,y:-15.1},2).to({_off:true},26).wait(6));

	// 고양이 정면 눈
	this.instance_2 = new lib.고양이정면눈("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(10.3,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(26).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:0},0).to({_off:true},4).wait(6));

	// 고양이 정면 입
	this.instance_3 = new lib.고양이정면입("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.6,41.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({startPosition:0},0).to({scaleX:1.02,scaleY:0.93,y:40.9},3).to({scaleX:1,scaleY:1,y:41.7},3).to({_off:true},19).wait(6));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B748E").s().p("AAageQgahNgthAIAYgBIAjgCIAaAAQAaBNAKBRQALBggNBfQgNhsgjhhgACXhaQgSgrgaglIAKABQAaADAaAEQAPAoAGAwQAHAxgCBaIAAAHQgOhXgehLgAjCiYQAkgGAjgFQAfBmgLBrQgahshBhag");
	this.shape_4.setTransform(2.9,-29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#425970").s().p("AsMB4QgZhcgBhkIAAgGIAIgEQAUgLAigMQAvgPAxgMIABAIQAGAlAIAkIACAKIgpAoQg8A9grBKIgFgOgAMWg7IAIgoIADgiIAEAqQACAYAAAYIgRgQg");
	this.shape_5.setTransform(1.1,43.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B748E").s().p("AsMCTQgZhdgBhkIAAgFIAIgFQAUgKAigMQAvgPAxgMIATgEQBWgRBbgDQhYAnhKA+IgRAOIgpAmQg8A+grBKIgFgNgAMWggIgcgaQhLg+hXgnQAyABAxAGQAnAGAmAHIAVAFIAEAcIAEApQACAYAAAYIgRgPg");
	this.shape_6.setTransform(1.1,40.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B889A").s().p("AAPKWQizgBiegnQimgphkhIQhyhSg2h4IAAAAIgBgDQgLgbgIgbIAAgBIgEgNQgahdAAhkIAAgGQAAhUAShbQAVhsAghmQBajJC4hwQiiD1gZDsQgJBUAJBQIABAIQAFAkAJAkIACAKQAGAYAIAYIACAGIAFANQA2CVBwBcQBlBVCSAkQB+AgCYgGQCfgGCEgrQCVgxBoheQBrhfAsiHIAFgQIAJgjIAIgoIADghIAEApQACAXAAAZQAAAngDAnQgGA0gNAxIgKAjQgvCFh3BcQheBIikApQiYAmizAAIgFAAg");
	this.shape_7.setTransform(1.1,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8AA2B1").s().p("AAPLUQizgBiegnQimgphkhIQhyhSg2h4IAAAAIgBgDQgLgbgIgbIAAgBIgEgNQgahdAAhkIAAgGQAAhVAShaQAVhsAghmQBajJC4hwQBHgrBVgeQBCgSA/gLQAkgGAjgFIA3gGIAXgCIAYgCIAjgBIAaAAIAwACIATACIAKABQAaACAaAFQA7ALA8ATIACABQEcBuBqD3IAIAUQApBvAdBzIAOA4IAHAlIAEAcIAEAqQACAXAAAZQAAAngDAnQgGA0gNAxIgKAjQgvCFh3BcQheBIikApQiYAmizAAIgFAAg");
	this.shape_8.setTransform(1.1,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},59).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-106.9,240,213.9);


(lib.고양이정면대기 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 고양이 정면 대기 다리1
	this.instance = new lib.고양이정면대기다리1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-8.8,121.5,0.999,0.999,-20.6,0,0,-0.1,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-12.7,scaleX:1,scaleY:1,rotation:-25.7,y:126.9},15).to({regY:-12.8,rotation:-20.7,y:121.5},15).to({rotation:-18.4,y:127.9},14).to({scaleX:1,scaleY:1,rotation:-20.6,y:121.5},15).wait(1));

	// 고양이 정면 대기 머리
	this.instance_1 = new lib.고양이정면대기머리("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,62.7,1,1,0,0,0,3.8,103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:68.4,startPosition:15},15).to({y:62.7,startPosition:30},15).to({y:69.2,startPosition:44},14).to({y:62.7,startPosition:58},15).wait(1));

	// 고양이 정면 대기 팔2
	this.instance_2 = new lib.고양이정면대기팔2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,63.8,1,1,0,0,0,14.7,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:14.8,rotation:5,x:-19.6,y:69.9},15,cjs.Ease.get(0.3)).to({regX:14.7,regY:-14.6,rotation:-4.5,x:-21,y:63.9},15).to({regY:-14.7,rotation:0,y:69.8},14,cjs.Ease.get(0.3)).to({y:63.8},15).wait(1));

	// 고양이 정면 대기 몸통
	this.instance_3 = new lib.고양이정면대기몸통("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,93.1,1,1,0,0,0,8.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.99,y:98.7},15).to({scaleY:1,y:93.1},15).to({scaleY:1.01,y:99.1},14).to({scaleY:1,y:93.1},15).wait(1));

	// 고양이 정면 대기 팔
	this.instance_4 = new lib.고양이정면대기팔("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(24,63.8,1,1,0,0,0,-14.9,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-15,rotation:-7.2,x:23.9,y:69.8},15,cjs.Ease.get(0.3)).to({regX:-14.9,regY:-14.6,rotation:3.5,x:24.1,y:63.9},15).to({regY:-14.7,rotation:0,x:24,y:69.8},14,cjs.Ease.get(0.3)).to({y:63.8},15).wait(1));

	// 고양이 정면 대기 로켓부스트
	this.instance_5 = new lib.고양이정면대기로켓부스트("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.9,83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:89.4},15).to({y:83.7},15).to({y:89.7},14).to({y:83.7},15).wait(1));

	// 고양이 정면 대기 다리2
	this.instance_6 = new lib.고양이정면대기다리2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.3,118.4,1,1,-22.2,0,0,-0.7,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.6,rotation:-26.7,y:124.4},15).to({regX:-0.8,rotation:-21.9,x:12.2,y:118.5},15).to({regX:-0.6,regY:-12.9,rotation:-22.2,x:11,y:126.1},14).to({regX:-0.7,regY:-12.8,x:12.3,y:118.4},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-148.1,240,295.8);


(lib.twinkle_mt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.twinkle();
	this.instance.parent = this;
	this.instance.setTransform(7,8.8,1,1,0,0,0,7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,17.5);


(lib.Tween442 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.고양이다리측면아래dnl("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-0.5,1,1,86.4,0,0,6,13.5);

	this.instance_1 = new lib.고양이다리측면위dnl("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,-1.6,1,1,86.4,0,0,5.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-7.4,27.5,14.8);


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.고양이다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-0.5,1,1,86.4,0,0,6,13.5);

	this.instance_1 = new lib.고양이다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,-1.6,1,1,86.4,0,0,5.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-7.4,27.5,14.8);


(lib.Tween422 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.고양이다리측면아래dnl("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-0.5,1,1,86.4,0,0,6,13.5);

	this.instance_1 = new lib.고양이다리측면위dnl("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,-1.6,1,1,86.4,0,0,5.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-7.4,27.5,14.8);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.고양이다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-0.5,1,1,86.4,0,0,6,13.5);

	this.instance_1 = new lib.고양이다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,-1.6,1,1,86.4,0,0,5.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-7.4,27.5,14.8);


(lib.stop_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A5185").s().p("AA7BkIAAjHIAWAAIAADHgAhQAmIASgRIAPgQIAJgJQADgFACgFIACgJIABgLIAAgcIgrAAIAAgTIBpAAIAAATIgoAAIAAAcIAAALQABAFACAFIAFAIIAIAKIAOAPIARAPIgOAPIgSgSIgNgOIgIgJIgFgIIgEAIIgJAKIgPAPIgTATg");
	this.shape.setTransform(49.8,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A5185").s().p("AgEBkQgMgDgHgFQgIgGgFgGQgDgIAAgHIAAgJQAAgIADgHQAFgHAIgFQAHgFAMgDQAKgDAPAAQAOAAALADQALADAJAFQAHAFAEAHQAEAHAAAIIAAAJQAAAHgEAIQgEAGgHAGQgJAFgLADQgLACgOAAQgPAAgKgCgAAEAmIgMAEQgFAEgDADQgCAFgBADIAAAGQABAEACAEQADAEAFADIAMAFQAHACAKAAQAIAAAIgCQAIgCAFgDQAFgDADgEQADgEgBgEIAAgGQABgDgDgFQgDgDgFgEQgFgDgIgBQgIgCgIAAQgKAAgHACgAA7APIAAgxIgkAAIAAgSIAkAAIAAgyIAWAAIAAB1gAhRAAIAUgPIAPgMIAHgIIAEgIIADgIIAAgLIAAgJIgqAAIAAgSIBmAAIAAASIgnAAIAAAJIABAJIABAHIAEAGIAFAHIAQANIASANIgMAPIgQgLIgOgMIgIgHIgEgFIgBAAIgFAHIgJAJIgPAMIgSANg");
	this.shape_1.setTransform(30.1,-31.7);

	this.instance = new lib.btn_bubble();
	this.instance.parent = this;
	this.instance.setTransform(40.5,-27.5,0.9,0.9,0,0,0,41.4,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 레이어 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiAmQgFgEAAgGQAAgHAMgLIARgMQAIgGAMgFQBBgcBHAAQAKAAAFADQAHAFAAAGQAAAIgGAFQgFADgOAAQhAABg3AXQgQAHgIAGIgLALQgHAFgGAAQgGAAgEgEg");
	this.shape_2.setTransform(32.4,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJASQgHgFgBgNQAAgHADgEQACgEAEgBQAIgEAGACQAGABAEAHQADAFgBAHQAAAGgDAFQgFAGgKABIgBAAQgEAAgEgCg");
	this.shape_3.setTransform(19.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// 레이어 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah8CvQgyAAAAgyIAAj5QAAgyAyAAID5AAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_4.setTransform(41.5,42.5,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// 레이어 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(5,1,1).p("Ah8iuID5AAQAyAAAAAyIAAD5QAAAygyAAIj5AAQgyAAAAgyIAAj5QAAgyAyAAg");
	this.shape_5.setTransform(41.5,42.5,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("Ah8CvQgyAAAAgyIAAj5QAAgyAyAAID5AAQAyAAAAAyIAAD5QAAAygyAAg");
	this.shape_6.setTransform(41.5,42.5,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(2));

	// 레이어 9
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,41.2).s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_7.setTransform(41.1,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2));

	// 레이어 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#164673").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_8.setTransform(41.1,41.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F15E8E").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_9.setTransform(41.1,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// 레이어 10
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191919").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_10.setTransform(41,41,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3.3,88.6,88.6);


(lib.star_mt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(16.2,15.6,1,1,0,0,0,16.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:16.1,regY:15.5,scaleX:1.09,scaleY:1.09,y:15.7},15).to({regX:16.2,regY:15.6,scaleX:1,scaleY:1,y:15.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,31.1);


(lib.sComa_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.btn_2 = new lib.sComa_btn();
	this.btn_2.parent = this;
	this.btn_2.setTransform(7.3,36.9,1,1,180,0,0,7.4,6.3);

	this.btn_1 = new lib.sComa_btn();
	this.btn_1.parent = this;
	this.btn_1.setTransform(7.4,6.3,1,1,0,0,0,7.4,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sComa_mc, new cjs.Rectangle(0,0,14.7,43.2), null);


(lib.s30_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXBVIAAgXIBKAAIAAgmIAbAAIAAAmIBKAAIAAAXgAAcASQgTgKgJgOQgIAOgSAKQgTAKgaADIgKgVQAWgDAPgHQAPgHAHgKQAHgKACgLIg6AAIAAgVIA6AAIAAgZIAbAAIAAAZIA7AAIAAAVIg6AAQAAALAIAKQAIAKAOAHQAPAHAWADIgKAVQgagDgSgKg");
	this.shape.setTransform(79.2,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBSQgNgLgIgUQgHgVAAgeQAAgfAHgUQAIgUANgKQAOgKARAAQASAAAOAKQANAKAHAUQAIAVAAAeQAAAegIAVQgHAUgNALQgOAKgSAAQgRAAgOgKgAAOA7QAGgGADgPQAEgOAAgYQAAgZgEgOQgDgOgGgFQgGgGgIAAQgHAAgGAGQgGAFgDAOQgEAOAAAZQAAAYAEAOQADAPAGAGQAGAGAHgBQAIABAGgGg");
	this.shape_1.setTransform(56.2,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBVQgPgHgJgLIARgWQAHAIAKAFQAKAFAMAAQANAAAIgGQAIgGAAgMQABgJgFgHQgEgGgLgDQgJgEgUAAIAAgYQARAAAIgEQAKgDAEgGQAEgGAAgIQgBgLgGgGQgGgFgKgBQgKABgIAEQgIAEgIAHIgSgVQAMgLANgFQANgGAQAAQAQAAANAFQANAGAHAKQAHALAAAPQAAAOgIALQgHAKgPAGIAAABQALACAIAFQAIAGAEAJQAFAJAAALQAAARgJALQgIAMgOAGQgOAGgQAAQgVAAgPgHg");
	this.shape_2.setTransform(41.7,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBAIAAgzIgxAAIAAgYIAxAAIAAg0IAZAAIAAA0IAxAAIAAAYIgxAAIAAAzg");
	this.shape_3.setTransform(27.9,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// purple_btn_base
	this.instance = new lib.purple_btn_base();
	this.instance.parent = this;
	this.instance.setTransform(55,20,1,1,0,0,0,55,20);

	this.instance_1 = new lib.purple_btn_base_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,20,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115,45);


(lib.s10_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXBVIAAgXIBKAAIAAgmIAbAAIAAAmIBKAAIAAAXgAAcASQgTgKgJgOQgIAOgSAKQgTAKgaADIgKgVQAWgDAPgHQAPgHAHgKQAHgKACgLIg6AAIAAgVIA6AAIAAgZIAbAAIAAAZIA7AAIAAAVIg6AAQAAALAIAKQAIAKAOAHQAPAHAWADIgKAVQgagDgSgKg");
	this.shape.setTransform(79.2,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBSQgNgLgIgUQgHgVAAgeQAAgfAHgUQAIgUANgKQAOgKARAAQASAAAOAKQANAKAHAUQAIAVAAAeQAAAegIAVQgHAUgNALQgOAKgSAAQgRAAgOgKgAAOA7QAGgGADgPQAEgOAAgYQAAgZgEgOQgDgOgGgFQgGgGgIAAQgHAAgGAGQgGAFgDAOQgEAOAAAZQAAAYAEAOQADAPAGAGQAGAGAHgBQAIABAGgGg");
	this.shape_1.setTransform(56.2,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BZIAAgdIAnAAIAAhvIggAAIAAgWQANgCAKgEQAJgEAJgFIAZAAIAACUIAiAAIAAAdg");
	this.shape_2.setTransform(42.3,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBAIAAgzIgxAAIAAgYIAxAAIAAg0IAZAAIAAA0IAxAAIAAAYIgxAAIAAAzg");
	this.shape_3.setTransform(27.9,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// purple_btn_base
	this.instance = new lib.purple_btn_base();
	this.instance.parent = this;
	this.instance.setTransform(55,20,1,1,0,0,0,55,20);

	this.instance_1 = new lib.purple_btn_base_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,20,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115,45);


(lib.s1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXBVIAAgXIBKAAIAAgmIAbAAIAAAmIBKAAIAAAXgAAcASQgTgKgJgOQgIAOgSAKQgTAKgaADIgKgVQAWgDAPgHQAPgHAHgKQAHgKACgLIg6AAIAAgVIA6AAIAAgZIAbAAIAAAZIA7AAIAAAVIg6AAQAAALAIAKQAIAKAOAHQAPAHAWADIgKAVQgagDgSgKg");
	this.shape.setTransform(79.2,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BZIAAgdIAnAAIAAhvIggAAIAAgWQANgCAKgEQAJgEAJgFIAZAAIAACUIAiAAIAAAdg");
	this.shape_1.setTransform(56.2,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAIAAgzIgxAAIAAgYIAxAAIAAg0IAZAAIAAA0IAxAAIAAAYIgxAAIAAAzg");
	this.shape_2.setTransform(41.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// purple_btn_base
	this.instance = new lib.purple_btn_base();
	this.instance.parent = this;
	this.instance.setTransform(55,20,1,1,0,0,0,55,20);

	this.instance_1 = new lib.purple_btn_base_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,20,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115,45);


(lib.roll_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_mt
	this.instance = new lib.star_mt();
	this.instance.parent = this;
	this.instance.setTransform(105,10.4,0.658,0.658,0,0,180,16.3,15.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:803.6},16).to({_off:true},1).wait(27).to({_off:false,x:-328.3},0).to({x:105},17).to({x:793.5},25).to({_off:true},1).wait(23));

	// star_mt
	this.instance_1 = new lib.star_mt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(455,214.1,0.577,0.577,0,0,0,16.2,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:805},16).to({_off:true},1).wait(27).to({_off:false,x:-326.9},0).to({x:455},14).to({x:794.9},13).to({_off:true},1).wait(48));

	// star_mt
	this.instance_2 = new lib.star_mt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.5,232.9,1,1,0,0,180,16.2,15.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:798.1},16).to({_off:true},1).wait(27).to({_off:false,x:-333.8},0).to({x:-47.5},17).to({x:788.1},32).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(445.6,205.1,18.7,17.9);


(lib.reset_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A5185").s().p("AA3BYIgSgKIgOgJQgGgEgCgDQgBADgGAEQgEAFgLAGIgRAJIgYALIgJgRIAagMIASgKQAJgFAEgHQAEgGABgJIAAgPIAUAAIAAAPQABAJAEAHQAEAGAKAFIASAKIAbAMIgJARIgZgMgAA/AcIAAh/IAVAAIAAB/gAhYAAIASgQIAOgOIAFgIIAEgHIAAgIIABgJIAAgbIAVAAIAAAaIAAAJQAAAEACAEQABAEADAEIAGAIIALANIAPAMIgNANIgNgLIgLgKIgHgHIgEgGIgDAGIgHAHIgMANIgRAPgAAZAIIAAgvIgbAAIAAgSIAbAAIAAgoIAVAAIAABpg");
	this.shape.setTransform(49.8,-32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A5185").s().p("AA2BkIAAjHIAVAAIAADHgAgmAzIgkAAIAAhNIBEAAIAAgnIhEAAIAAgSIBYAAIAABLIhDAAIAAApIAVAAIATAAIAQgBIAQgBIAQgCIACASIgPABIgRACIgSABIgZAAg");
	this.shape_1.setTransform(30.4,-32);

	this.instance = new lib.btn_bubble();
	this.instance.parent = this;
	this.instance.setTransform(40.5,-27.5,0.9,0.9,0,0,0,41.4,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 레이어 8
	//좌측 상단 작은점
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiAmQgFgEAAgGQAAgHAMgLIARgMQAIgGAMgFQBBgcBHAAQAKAAAFADQAHAFAAAGQAAAIgGAFQgFADgOAAQhAABg3AXQgQAHgIAGIgLALQgHAFgGAAQgGAAgEgEg");
	this.shape_2.setTransform(32.4,8.1);

	//좌측 상단 곡선
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJASQgHgFgBgNQAAgHADgEQACgEAEgBQAIgEAGACQAGABAEAHQADAFgBAHQAAAGgDAFQgFAGgKABIgBAAQgEAAgEgCg");
	this.shape_3.setTransform(19.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// 레이어 4
	//리셋 화살표 아이콘
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkDlQhHgogihGQgGgLAFgMQADgMAMgFQALgFAMAEQALAEAGALQAaA1A3AfQBIArBTgWQBRgWArhKQAqhJgVhQQgWhThKgrQhKgqhRAWQhSAWgqBJQgLASgGATIAqggQAKgHANACQAMABAHAKQAIAKgCANQgCAMgKAHIhiBJIgBABIgCABQgFAEgGABQgEABgFAAIgCAAIgDgBQgHgCgGgFIgCgCIgFgHIg+hiQgGgLADgMQACgMALgHQALgGAMADQAMADAGAKIAVAiQAJgaAOgZQA2hfBrgcQBogdBgA3QBfA4AdBqQAcBpg3BeQg3BghqAcQgkAKgiAAQhDAAg/glg");
	this.shape_4.setTransform(38.5,41.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// 레이어 5
    //리셋 화살표 아이콘 그림자
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AjFiEQgOAZgJAaIgVgiQgGgKgMgDQgMgDgLAGQgLAHgCAMQgDAMAGALIA+BiQACAEADADIACACQAGAFAHACQACAAABABQABAAABAAQAFAAAEgBQAGgBAFgEQABgBABAAQAAgBABAAIBihJQAKgHACgMQACgNgIgKQgHgKgMgBQgNgCgKAHIgqAgQAGgTALgSQAqhJBSgWQBRgWBKAqQBKArAWBTQAVBQgqBJQgrBKhRAWQhTAWhIgrQg3gfgag1QgGgLgLgEQgMgEgLAFQgMAFgDAMQgFAMAGALQAiBGBHAoQBfA4BpgdQBqgcA3hgQA3hegchpQgdhqhfg4Qhfg3hpAdQhrAcg2Bfg");
	this.shape_5.setTransform(38.5,41.4,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AhkDlQhHgogihGQgGgLAFgMQADgMAMgFQALgFAMAEQALAEAGALQAaA1A3AfQBIArBTgWQBRgWArhKQAqhJgVhQQgWhThKgrQhKgqhRAWQhSAWgqBJQgLASgGATIAqggQAKgHANACQAMABAHAKQAIAKgCANQgCAMgKAHIhiBJIgBABIgCABQgFAEgGABQgEABgFAAIgCAAIgDgBQgHgCgGgFIgCgCIgFgHIg+hiQgGgLADgMQACgMALgHQALgGAMADQAMADAGAKIAVAiQAJgaAOgZQA2hfBrgcQBogdBgA3QBfA4AdBqQAcBpg3BeQg3BghqAcQgkAKgiAAQhDAAg/glg");
	this.shape_6.setTransform(38.5,41.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(2));

	// 레이어 9
	// 원판 회색 태두리
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,41.2).s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_7.setTransform(41.1,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(2));

	// 레이어 6
	//원판 파란색 배경
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#164673").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_8.setTransform(41.1,41.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F15E8E").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_9.setTransform(41.1,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).wait(1));

	// 레이어 10
	//원판 뒷 그림자
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191919").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_10.setTransform(41,41,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3.3,88.6,88.6);


(lib.pl_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.planet_light2();
	this.instance.parent = this;
	this.instance.setTransform(128,0,1,1,0,0,180);

	this.instance_1 = new lib.planet3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.5,63,0.95,0.95,0,0,0,45.3,45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pl_2, new cjs.Rectangle(-163,0,291,128), null);


(lib.pl_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.planet_light1();
	this.instance.parent = this;
	this.instance.setTransform(122,0,1,1,0,0,180);

	this.instance_1 = new lib.planet2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.9,62.9,0.95,0.95,0,0,0,45.3,45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pl_1, new cjs.Rectangle(-170,0,292,128), null);


(lib.normal_sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.twinkle_mt();
	this.instance.parent = this;
	this.instance.setTransform(527.3,312.9,0.96,0.96,0,0,0,7.1,8.8);

	this.instance_1 = new lib.twinkle_mt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70,310,0.96,0.96,0,0,0,7.1,8.8);

	this.instance_2 = new lib.twinkle_mt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(440.1,52.6,0.912,0.912,0,0,0,7.2,8.8);

	this.instance_3 = new lib.twinkle_mt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(138.5,118.6,1.2,1.2,0,0,0,7,8.8);

	this.instance_4 = new lib.star_mt();
	this.instance_4.parent = this;
	this.instance_4.setTransform(554.3,124.5,0.658,0.658,0,0,0,16.3,15.7);

	this.instance_5 = new lib.star_mt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(204.3,328.3,0.577,0.577,0,0,180,16.2,15.7);

	this.instance_6 = new lib.star_mt();
	this.instance_6.parent = this;
	this.instance_6.setTransform(706.8,347.1,1,1,0,0,0,16.2,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(93));

	// mirine3
	this.instance_7 = new lib.mirine3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(387.8,227.2,1.156,1.156,0,0,0,335.4,196.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({alpha:1},37).to({alpha:0},36).wait(12));

	// mirine2
	this.instance_8 = new lib.mirine2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(485.4,253.2,1.156,1.156,0,0,0,319.5,167.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(23).to({alpha:0},37).to({alpha:1},32).wait(1));

	// mirine1
	this.instance_9 = new lib.mirine1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(403.6,269.7,1.156,1.156,0,0,0,271.1,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({alpha:0},35).to({alpha:1},38).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854.7,462.8);


(lib.move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.고양이정면대기();
	this.instance.parent = this;
	this.instance.setTransform(108,133.3,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:118},84).to({x:108},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,266.7);


(lib.mirine_mt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhgKAzzMAAAhnlMDAVAAAMAAABnlg");
	mask.setTransform(454.2,311.2);

	// mirine3
	this.instance = new lib.mirine3();
	this.instance.parent = this;
	this.instance.setTransform(-533,227.2,1.156,1.156,0,0,180,335.4,196.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:467},44).wait(1));

	// mirine2
	this.instance_1 = new lib.mirine2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-700.6,253.2,1.156,1.156,0,0,180,319.5,167.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:299.4},44).wait(1));

	// mirine1
	this.instance_2 = new lib.mirine1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-618.9,269.7,1.156,1.156,0,0,180,271.1,167);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:381.1},44).wait(1));

	// mirine3
	this.instance_3 = new lib.mirine3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(467,227.2,1.156,1.156,0,0,180,335.4,196.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1467},44).wait(1));

	// mirine2
	this.instance_4 = new lib.mirine2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(299.4,253.2,1.156,1.156,0,0,180,319.5,167.1);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:1299.4},44).wait(1));

	// mirine1
	this.instance_5 = new lib.mirine1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(381.1,269.7,1.156,1.156,0,0,180,271.1,167);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1381.1},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.2,0,1016,462.8);


(lib.mComa_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.btn_2 = new lib.mComa_btn();
	this.btn_2.parent = this;
	this.btn_2.setTransform(7.3,36.9,1,1,180,0,0,7.4,6.3);

	this.btn_1 = new lib.mComa_btn();
	this.btn_1.parent = this;
	this.btn_1.setTransform(7.4,6.3,1,1,0,0,0,7.4,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mComa_mc, new cjs.Rectangle(0,0,14.7,43.2), null);


(lib.m10_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBcIAAg1IAdAAIAAAfIBrAAIAAAWgAgKA2IAAgfIhNAAIAAgWICvAAIAAAWIhHAAIAAAfgAhAgLIAAhQIAcAAIAAAUIBJAAIAAgUIAcAAIAABQgAgkghIBJAAIAAgRIhJAAg");
	this.shape.setTransform(79.2,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBSQgNgLgIgUQgHgVAAgeQAAgfAHgUQAIgUANgKQAOgKARAAQASAAAOAKQANAKAHAUQAIAVAAAeQAAAegIAVQgHAUgNALQgOAKgSAAQgRAAgOgKgAAOA7QAGgGADgPQAEgOAAgYQAAgZgEgOQgDgOgGgFQgGgGgIAAQgHAAgGAGQgGAFgDAOQgEAOAAAZQAAAYAEAOQADAPAGAGQAGAGAHgBQAIABAGgGg");
	this.shape_1.setTransform(56.2,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BZIAAgdIAnAAIAAhvIggAAIAAgWQANgCAKgEQAJgEAJgFIAZAAIAACUIAiAAIAAAdg");
	this.shape_2.setTransform(42.3,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBAIAAgzIgxAAIAAgYIAxAAIAAg0IAZAAIAAA0IAxAAIAAAYIgxAAIAAAzg");
	this.shape_3.setTransform(27.9,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// purple_btn_base
	this.instance = new lib.green_btn_base();
	this.instance.parent = this;
	this.instance.setTransform(55,20,1,1,0,0,0,55,20);

	this.instance_1 = new lib.green_btn_base_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,20,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115,45);


(lib.m5_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBcIAAg1IAdAAIAAAfIBrAAIAAAWgAgKA2IAAgfIhNAAIAAgWICvAAIAAAWIhHAAIAAAfgAhAgLIAAhQIAcAAIAAAUIBJAAIAAgUIAcAAIAABQgAgkghIBJAAIAAgRIhJAAg");
	this.shape.setTransform(79.2,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkBTQgPgHgJgKIAQgWQAIAHAJAFQAKAFAMABQANAAAJgJQAJgIAAgQQAAgQgJgIQgIgHgMAAQgIAAgGACQgFABgIAFIgQgKIAFhVIBeAAIAAAdIhAAAIgDAlIAKgDQAEgBAGAAQAPAAANAFQAMAHAIAMQAHAMAAATQgBAUgIAOQgIAOgPAHQgOAIgPAAQgVgBgPgHg");
	this.shape_1.setTransform(55.9,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAIAAgzIgxAAIAAgYIAxAAIAAg0IAZAAIAAA0IAxAAIAAAYIgxAAIAAAzg");
	this.shape_2.setTransform(42,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// purple_btn_base
	this.instance = new lib.green_btn_base();
	this.instance.parent = this;
	this.instance.setTransform(55,20,1,1,0,0,0,55,20);

	this.instance_1 = new lib.green_btn_base_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,20,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115,45);


(lib.m1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBcIAAg1IAdAAIAAAfIBrAAIAAAWgAgKA2IAAgfIhNAAIAAgWICvAAIAAAWIhHAAIAAAfgAhAgLIAAhQIAcAAIAAAUIBJAAIAAgUIAcAAIAABQgAgkghIBJAAIAAgRIhJAAg");
	this.shape.setTransform(79.2,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BZIAAgdIAnAAIAAhvIggAAIAAgWQANgCAKgEQAJgEAJgFIAZAAIAACUIAiAAIAAAdg");
	this.shape_1.setTransform(56.2,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBAIAAgzIgxAAIAAgYIAxAAIAAg0IAZAAIAAA0IAxAAIAAAYIgxAAIAAAzg");
	this.shape_2.setTransform(41.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// purple_btn_base
	this.instance = new lib.green_btn_base();
	this.instance.parent = this;
	this.instance.setTransform(55,20,1,1,0,0,0,55,20);

	this.instance_1 = new lib.green_btn_base_over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,20,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,115,45);


(lib.light_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.light_1();
	this.instance.parent = this;
	this.instance.setTransform(266.5,164.5,1,1,0,0,0,266.5,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:42.5,regY:77.5,rotation:-1.5,x:42.6,y:77.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,533,329);


(lib.부스트불꽃 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.불꽃();
	this.instance.parent = this;
	this.instance.setTransform(18.1,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,128.2);


(lib.고양이측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 코기 팔
	this.instance = new lib.고양이팔측면("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(132.4,242.3,1,1,0,-32.1,147.9,37.2,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},3).wait(41));

	// 코기 다리 up
	this.instance_1 = new lib.Tween422("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.4,240.9);

	this.instance_2 = new lib.Tween442("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.4,240.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},3).wait(1).to({startPosition:0},0).wait(9).to({startPosition:0},0).to({rotation:-15,x:56.7,y:242.4},5).to({rotation:8.4,x:56.4,y:238.1},5).to({rotation:-15,x:56.7,y:242.4},5).to({rotation:6.5,x:56.4,y:237.8},7).to({rotation:0,y:239.9},4).wait(5));

	// 코기 머리
	this.instance_3 = new lib.고양이머리측면("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(124.4,223.8,1,1,49.6,0,0,120,213.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:120.1,scaleX:1,scaleY:1,x:124.5},1).to({regX:120,scaleX:1,scaleY:1,x:124.4},2).wait(5).to({startPosition:0},0).wait(36));

	// 코기 몸
	this.instance_4 = new lib.고양이몸측면("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.9,236.3,1,1,66.4,0,0,36.8,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},3).wait(41));

	// 코기 다리down
	this.instance_5 = new lib.Tween42("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(56.4,240.9);

	this.instance_6 = new lib.Tween44("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(56.4,240.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},3).wait(10).to({rotation:-15,x:56.7,y:242.4},0).to({rotation:0,x:56.4,y:240.9},5).to({rotation:-15,x:56.7,y:242.4},5).to({startPosition:0},5).to({rotation:6.5,x:56.4,y:240.3},7).to({rotation:0,y:239.9},4).wait(5));

	// 로켓 부스트
	this.instance_7 = new lib.부스트로켓측면("synched",3);
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.1,201.6,1,1,77.1,0,0,29.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},3).wait(41));

	// Layer 2
	this.instance_8 = new lib.부스트불꽃("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(39.2,206,1,1.578,86.7,0,0,18.4,0.3);
	this.instance_8.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.58,x:39.2,alpha:0.699},3).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.58,x:39.2,alpha:0.699},3).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.58,x:39.2,alpha:0.699},3).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.58,x:39.2,alpha:0.699},3).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.58,x:39.2,alpha:0.699},3).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.58,x:39.2,alpha:0.699},3).to({scaleY:1.78,x:39.1,alpha:1},3).to({scaleY:1.62,x:39.2,y:205.9,alpha:0.762},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.2,35,477.1,243.7);


(lib.고양이정면End = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 고양이 정면 대기 다리1
	this.instance = new lib.고양이정면대기다리1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-8.8,121.5,0.999,0.999,-20.6,0,0,-0.1,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-35.6,x:-7.5,y:131.4},11,cjs.Ease.get(-1)).to({rotation:-20.6,x:-8.8,y:121.5},12).wait(1));

	// 고양이 정면 대기 머리
	this.instance_1 = new lib.고양이정면대기머리_End("synched",4,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.8,62.7,1,1,0,0,0,3.8,103.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:68.8,startPosition:11},11,cjs.Ease.get(-1)).to({y:62.7,startPosition:18},12).wait(1));

	// 고양이 정면 대기 팔2
	this.instance_2 = new lib.고양이정면대기팔2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21,63.8,1,1,0,0,0,14.7,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-14.6,rotation:30,y:70},11,cjs.Ease.get(-1)).to({regY:-14.7,rotation:0,y:63.8},12).wait(1));

	// 고양이 정면 대기 몸통
	this.instance_3 = new lib.고양이정면대기몸통("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,93.1,1,1,0,0,0,8.4,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:99.2},11,cjs.Ease.get(-1)).to({y:93.1},12).wait(1));

	// 고양이 정면 대기 팔
	this.instance_4 = new lib.고양이정면대기팔("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(24,63.8,1,1,0,0,0,-14.9,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:-14.6,rotation:-30,y:70},11,cjs.Ease.get(-1)).to({regY:-14.7,rotation:0,y:63.8},12).wait(1));

	// 고양이 정면 대기 로켓부스트
	this.instance_5 = new lib.고양이정면대기로켓부스트("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.9,83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:89.8},11,cjs.Ease.get(-1)).to({y:83.7},12).wait(1));

	// 고양이 정면 대기 다리2
	this.instance_6 = new lib.고양이정면대기다리2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.3,118.4,1,1,-22.2,0,0,-0.7,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-12.7,rotation:-37.2,x:12.2,y:123.1},11,cjs.Ease.get(-1)).to({regY:-12.8,rotation:-22.2,x:12.3,y:118.4},12).wait(1));

	// 레이어 11
	this.instance_7 = new lib.부스터();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.1,122.7,0.81,0.81,0,0,0,18.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:128.8},11,cjs.Ease.get(-1)).to({y:122.7},12).wait(1));

	// 레이어 10
	this.instance_8 = new lib.부스터();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-28.3,122.7,0.81,0.81,0,0,0,18.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:128.8},11,cjs.Ease.get(-1)).to({y:122.7},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-148.1,240,374.5);


(lib.sBtn_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.sBtn_3 = new lib.s30_btn();
	this.sBtn_3.parent = this;
	this.sBtn_3.setTransform(337.2,22.5,1,1,0,0,0,55,20);

	this.sBtn_2 = new lib.s10_btn();
	this.sBtn_2.parent = this;
	this.sBtn_2.setTransform(197.4,22.5,1,1,0,0,0,55,20);

	this.sBtn_1 = new lib.s1_btn();
	this.sBtn_1.parent = this;
	this.sBtn_1.setTransform(57.5,22.5,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sBtn_1},{t:this.sBtn_2},{t:this.sBtn_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sBtn_mc, new cjs.Rectangle(0,0,394.7,45), null);


(lib.pla_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pl_2
	this.instance = new lib.pl_2();
	this.instance.parent = this;
	this.instance.setTransform(106.5,64,1,1,0,0,0,145.5,64);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({x:1508.4},21).to({_off:true},1).wait(54));

	// pl_1
	this.instance_1 = new lib.pl_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,341,1,1,0,0,0,146,64);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:1540.9},21).to({_off:true},1).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,277,292,128);


(lib.mBtn_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.mBtn_2 = new lib.m5_btn();
	this.mBtn_2.parent = this;
	this.mBtn_2.setTransform(197.4,22.5,1,1,0,0,0,55,20);

	this.mBtn_3 = new lib.m10_btn();
	this.mBtn_3.parent = this;
	this.mBtn_3.setTransform(337.2,22.5,1,1,0,0,0,55,20);

	this.mBtn_1 = new lib.m1_btn();
	this.mBtn_1.parent = this;
	this.mBtn_1.setTransform(57.5,22.5,1,1,0,0,0,55,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mBtn_1},{t:this.mBtn_3},{t:this.mBtn_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mBtn_mc, new cjs.Rectangle(0,0,394.7,45), null);


(lib.roll_planet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pla_motion
	this.instance = new lib.pla_motion();
	this.instance.parent = this;
	this.instance.setTransform(-117,261.5,1,1,0,0,0,177,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// star
	this.instance_1 = new lib.roll_star();
	this.instance_1.parent = this;
	this.instance_1.setTransform(458.6,238,1,1,0,0,0,264,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mirine3
	this.instance_2 = new lib.mirine_mt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(427.1,231,1,1,0,0,0,427.4,231.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.roll_planet, new cjs.Rectangle(-1070.3,-20.6,2139.6,663), null);


(lib.motion2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// light.png
	this.instance = new lib.light_motion();
	this.instance.parent = this;
	this.instance.setTransform(185.6,181.7,1,1,-8.7,0,0,44.5,84.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 고양이 측면 
	this.instance_1 = new lib.고양이측면();
	this.instance_1.parent = this;
	this.instance_1.setTransform(451.8,85.6,0.9,0.9,0,0,180,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 레이어 4
	this.instance_2 = new lib.roll_planet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(440,232,1,1,0,0,0,440,232);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.motion2, new cjs.Rectangle(-1070.3,-20.6,2139.6,663), null);


(lib.motion_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 레이어 1
	this.instance = new lib.move();
	this.instance.parent = this;
	this.instance.setTransform(331.8,239.6,1,1,0,0,0,108,133.3);

	this.instance_1 = new lib.motion2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(440,232,1,1,0,0,0,440,232);

	this.instance_2 = new lib.고양이정면End();
	this.instance_2.parent = this;
	this.instance_2.setTransform(331.8,239.6,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// 레이어 2
	this.instance_3 = new lib.normal_sky();
	this.instance_3.parent = this;
	this.instance_3.setTransform(427.4,231.3,1,1,0,0,0,427.4,231.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,854.7,462.8);


// stage content:
(lib.Timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _stage = this;
		var timeBool = false;
		var timeNum = 0;
		var timerId = 0;
		var btnTotal = 3;
		var playBool = false;
		
		stage.enableMouseOver();
		
		mouseEvent(this.exit_btn);
		mouseEvent(this.reset_btn);
		mouseEvent(this.stop_btn);
		
		this.start_btn.cursor = "pointer";
		this.start_btn.mouseChildren = false;
			
		this.exit_btn.addEventListener("click", exitEvent.bind(this)); 
		this.start_btn.addEventListener("click", startEvent.bind(this)); 
		this.stop_btn.addEventListener("click", stopEvent.bind(this));
		this.reset_btn.addEventListener("click", resetEvent.bind(this));
		
		_stage.text_mc.minute.text = "00";
		_stage.text_mc.second.text = "00";
		
		var tiktok = createjs.Sound.createInstance("eff");
		var success = createjs.Sound.createInstance("end");
		var effcon = new createjs.PlayPropsConfig().set({interrupt:createjs.Sound.INTERRUPT_ANY, loop:-1});
		
		this.sound_btn.cursor = "pointer";
		this.sound_btn.addEventListener("click", soundVolumeEvent.bind(this));
		tiktok.volume = 1;
		
		function mouseEvent(btn)
		{
			btn.cursor = "pointer";
			btn.mouseChildren = false;
			btn.addEventListener("mouseover", mouseOverEvent.bind(this));
			btn.addEventListener("mouseout", mouseOutEvent.bind(this));
		}
		
		function exitEvent()
		{
			clearInterval(timerId);
			window.close();
		}
		
		function mouseOverEvent(evt)
		{
			var btn = evt.currentTarget;
			btn.gotoAndStop(1);
		}
		
		function mouseOutEvent(evt)
		{
			var btn = evt.currentTarget;
			btn.gotoAndStop(0);
		}
		
		/////////////////////////////////////////////////////////////////////////////////
		function setSecondBtnEvent()
		{
			for(var i=1; i<=btnTotal; i++)
			{
				var index = i;
				switch(index)
				{
					case 1: index = 1; break;
					case 2: index = 10; break;
					case 3: index = 30; break;
				}
				mouseEvent(_stage.sBtn_mc["sBtn_"+i]);		
				_stage.sBtn_mc["sBtn_"+i].addEventListener("click", setTimeNumEvent.bind(this, index));
			}
		}
		
		function setMiniteBtnEvent()
		{
			for(var i=1; i<=btnTotal; i++)
			{
				var index = i;
				switch(index)
				{
					case 1: index = 60; break;
					case 2: index = 300; break;
					case 3: index = 600; break;
				}
				mouseEvent(_stage.mBtn_mc["mBtn_"+i]);		
				_stage.mBtn_mc["mBtn_"+i].addEventListener("click", setTimeNumEvent.bind(this, index));
			}
		}
		
		function setSecondCommaEvent()
		{
			for(var i=1; i<=2; i++)
			{
				var index = i;
				switch(index)
				{
					case 1: index = 1; break;
					case 2: index = -1; break;
				}
				mouseEvent(_stage.sComa_mc["btn_"+i]);		
				_stage.sComa_mc["btn_"+i].addEventListener("click", setTimeNumEvent.bind(this, index));
			}
		}
		
		function setMiniteCommaEvent()
		{
			for(var i=1; i<=2; i++)
			{
				var index = i;
				switch(index)
				{
					case 1: index = 60; break;
					case 2: index = -60; break;
				}
				mouseEvent(_stage.mComa_mc["btn_"+i]);		
				_stage.mComa_mc["btn_"+i].addEventListener("click", setTimeNumEvent.bind(this, index));
			}
		}
		
		function setTimeNumEvent(num)
		{
			var caluNum = timeNum;
			
			if(!playBool)
			{
				_stage.motion_mc.gotoAndStop(0);		
				
				caluNum += num;
				
				if(caluNum <= 0) 
				{
					timeBool = false;
					timeNum = 0;
				}
				else
				{
					timeBool = true;
					if(caluNum >= 3599) alert("설정할 수 있는 시간을 초과하였습니다.");
					else timeNum = caluNum;
				}
				
				timeDisplayEvent(timeNum);
				
				console.log(timeNum);
			}
		}
		
		function timeDisplayEvent(element)
		{
			var mins = Math.floor(element / 60);
			var secs = Math.floor(element % 60);
			
			if(mins < 10)
			{
				mins = "0"+mins;
			}
			if(secs < 10)
			{
				secs = "0"+secs;
			}
			
			_stage.text_mc.minute.text = mins;
			_stage.text_mc.second.text = secs;
		}
		
		function startEvent()
		{
			if(_stage.start_btn.currentFrame == 0)
			{
				if(timeBool)
				{
					playBool = true;
					_stage.motion_mc.gotoAndStop(1);
					_stage.start_btn.gotoAndStop(1);
					startTimerEvent();
					
					tiktok.play(effcon);
				}
			}
			else
			{
				_stage.motion_mc.gotoAndStop(0);
				_stage.start_btn.gotoAndStop(0);
				clearInterval(timerId);
				playBool = false;
				tiktok.paused = true;
			}
		}
		
		function startTimerEvent()
		{
			timerId = setInterval(function(){
				timeNum--;
				
				if(timeNum == 0)
				{
					defaultStopEvent();			
					timeBool = false;
					_stage.motion_mc.gotoAndStop(2);
					success.play();
				}
				
				timeDisplayEvent(timeNum);
				console.log(timeNum);
			},1000);
		}
		
		function stopEvent()
		{
			if(playBool)
			{
				playBool = false;
				timeBool = false;
						
				defaultStopEvent();
		
				_stage.text_mc.minute.text = "00";
				_stage.text_mc.second.text = "00";
			}
		}
		
		function resetEvent()
		{
			if(!playBool)
			{
				timeBool = false;
				timeNum = 0;
				timeDisplayEvent(timeNum);
			}
		}
		
		function defaultStopEvent()
		{
			playBool = false;
				
			clearInterval(timerId);
		
			_stage.start_btn.gotoAndStop(0);
			_stage.motion_mc.gotoAndStop(0);
				
			timeDisplayEvent(timeNum);
				
			timeNum = 0;
			
			tiktok.stop();
		}
		
		function soundVolumeEvent(evt)
		{
			var mc = evt.currentTarget;
			
			if(mc.currentFrame == 0)
			{
				tiktok.volume = 0;
				mc.gotoAndStop(1);
			}
			else
			{
				tiktok.volume = 1;
				mc.gotoAndStop(0);
			}
		}
		
		setSecondBtnEvent();
		setSecondCommaEvent();
		setMiniteBtnEvent();
		setMiniteCommaEvent();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// exit
	this.exit_btn = new lib.exit();
	this.exit_btn.parent = this;
	this.exit_btn.setTransform(1234,58.1,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get(this.exit_btn).wait(1));

	// btn
	this.text_mc = new lib.time_mc();
	this.text_mc.parent = this;
	this.text_mc.setTransform(934,262.8,1,1,0,0,0,160,79.7);

	this.sound_btn = new lib.sound();
	this.sound_btn.parent = this;
	// this.sound_btn.setTransform(826.7,698.7,0.95,0.95,0,0,0,25.3,21.9);
    this.sound_btn.setTransform(769.7,698.7,0.95,0.95,0,0,0,25.3,21.9);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.parent = this;
	// this.reset_btn.setTransform(741.1,696.4,0.95,0.95,0,0,0,41.1,41.1);
    this.reset_btn.setTransform(628.1,696.4,0.95,0.95,0,0,0,41.1,41.1);

	this.start_btn = new lib.pause_btn();
	this.start_btn.parent = this;
	// this.start_btn.setTransform(640.2,696.4,0.95,0.95,0,0,0,48.4,48.4);
    this.start_btn.setTransform(483.2,696.4,0.95,0.95,0,0,0,41.1,41.1);

    this.stop_btn = new lib.stop_btn();
    this.stop_btn.parent = this;
    this.stop_btn.setTransform(539.1,696.4,0.95,0.95,0,0,0,41.1,41.1);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start_btn},{t:this.reset_btn},{t:this.sound_btn},{t:this.text_mc}]}).wait(1));

    //stop button remove displaywkf
    // this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stop_btn},{t:this.start_btn},{t:this.reset_btn},{t:this.sound_btn},{t:this.text_mc}]}).wait(1));


	// smBtn
	this.mBtn_mc = new lib.mBtn_mc();
	this.mBtn_mc.parent = this;
	this.mBtn_mc.setTransform(624.7,594.4,1,1,0,0,0,197.3,22.5);

	this.sBtn_mc = new lib.sBtn_mc();
	this.sBtn_mc.parent = this;
	this.sBtn_mc.setTransform(624.7,520.4,1,1,0,0,0,197.3,22.5);

	this.mComa_mc = new lib.mComa_mc();
	this.mComa_mc.parent = this;
	this.mComa_mc.setTransform(898.1,594.4,1,1,0,0,0,7.4,21.6);

	this.sComa_mc = new lib.sComa_mc();
	this.sComa_mc.parent = this;
	this.sComa_mc.setTransform(898.1,520.4,1,1,0,0,0,7.4,21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBeIAAg2IAXAAIAAAkIByAAIAAASgAgIA5IAAgkIhRAAIAAgSICzAAIAAASIhNAAIAAAkgAhBgNIAAhQIAVAAIAAAXIBYAAIAAgXIAWAAIAABQgAgsgfIBYAAIAAgWIhYAAg");
	this.shape.setTransform(862.6,594.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2A2A").s().p("Egn1AEsQhkAAAAhkIAAmPQAAhkBkAAMBPrAAAQBkAAAABkIAAGPQAABkhkAAg");
	this.shape_1.setTransform(675.5,594.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhZBWIAAgTIBPAAIAAgqIAVAAIAAAqIBPAAIAAATgAAdARQgTgMgKgPQgJAPgTAMQgTALgaAEIgIgSQAVgEAQgIQAPgGAJgMQAJgLAAgOIg+AAIAAgSIA/AAIAAgZIAVAAIAAAZIA/AAIAAASIg/AAQABAOAJALQAJAMAPAGQAQAIAVAEIgJASQgZgEgTgLg");
	this.shape_2.setTransform(862.6,519.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBYIAAiYIg0AAIAAgXICDAAIAAAXIg0AAIAACYg");
	this.shape_3.setTransform(377.9,558.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BYIAAivIBoAAIAAAXIhMAAIAAAxIBAAAIAAAXIhAAAIAAA5IBPAAIAAAXg");
	this.shape_4.setTransform(363.8,558.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBVQgQgHgNgMIARgTQAKAJALAGQANAFALAAQAQABAJgIQAJgGAAgMQAAgHgDgFQgFgFgGgEIgOgHIgYgLQgIgDgJgFQgIgGgFgJQgFgJgBgMQABgPAHgLQAHgLANgGQANgHARAAQAPABAOAFQANAHALAKIgPASQgIgIgJgEQgKgEgLAAQgNAAgJAGQgHAGgBALQABAHAEAFQAEAEAHAEIAMAGIAYALQARAGAJAKQAKALAAATQAAAPgHALQgIALgNAIQgPAHgTAAQgRgBgQgGg");
	this.shape_5.setTransform(348.9,558.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2A2A").s().p("Egn1AEsQhkAAAAhkIAAmPQAAhkBkAAMBPrAAAQBkAAAABkIAAGPQAABkhkAAg");
	this.shape_6.setTransform(675.5,520.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.sComa_mc},{t:this.mComa_mc},{t:this.sBtn_mc},{t:this.mBtn_mc}]}).wait(1));

	// obj
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.698)").s().p("Eg6FAUqMAAAgonQAAjwDwAAMBtXAAAQCJAAA7BPQg7gshmAAMhtXAAAQjwAAAADwMAAAAonQAABmAsA7QhPg7AAiJg");
	this.shape_7.setTransform(637.8,610.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2CE5F9").s().p("A3uYEIAAhQMBOaAAAQCgAAAAigMAAAgonQAAigigAAMhOaAAAIAAhQMBOaAAAQDwAAAADwMAAAAonQAADwjwAAgEg2rAYEQjwAAAAjwMAAAgonQAAjwDwAAIe8AAIAABQI+8AAQigAAAACgMAAAAonQAACgCgAAIe8AAIAABQg");
	this.shape_8.setTransform(640,613);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#252323").s().p("Eg2rAW0QigAAAAigMAAAgonQAAigCgAAMBtXAAAQCgAAAACgMAAAAonQAACgigAAgEg4gATsQAACWCWAAMBsWAAAQCWAAAAiWMAAAgniQgGiLiQAAMhsWAAAQiRAAgECLIgBAAg");
	this.shape_9.setTransform(640,613);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Eg2rAXcQjIAAAAjIMAAAgonQAAjIDIAAMBtXAAAQDIAAAADIMAAAAonQAADIjIAAg");
	this.shape_10.setTransform(640,613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// animation cover
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(37,36,49,0)","#252431"],[0,0.733],0,0,0,0,0,754.7).s().p("Ehj/A+gMAAAh8/MA4vAAAIgeAeQzPTOABbMQgBbKTPTOQTOTObKAAQbLAATOzOQTOzOAA7KQAA7MzOzOIgegeMAzbAAAMAAAB8/g");
	this.shape_11.setTransform(640,400);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// star
	this.motion_mc = new lib.motion_mc();
	this.motion_mc.parent = this;
	this.motion_mc.setTransform(612.1,268,1,1,0,0,0,431.4,231.3);

	this.timeline.addTween(cjs.Tween.get(this.motion_mc).wait(1));

	// BG
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252431").s().p("Ehj/A+gMAAAh8/MDH/AAAMAAAB8/g");
	this.shape_12.setTransform(640,400);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,400,1280,800);
// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/light.png?1489998445588", id:"light"},
		{src:"images/planet_light1.png?1489998445588", id:"planet_light1"},
		{src:"images/planet_light2.png?1489998445588", id:"planet_light2"},
		{src:"sounds/end.mp3?1489998445588", id:"end"},
		{src:"sounds/eff.mp3?1489998445588", id:"eff"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
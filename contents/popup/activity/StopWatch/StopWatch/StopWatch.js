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



(lib.bit1 = function() {
	this.initialize(img.bit1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,101);


(lib.bit2 = function() {
	this.initialize(img.bit2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,115);


(lib.kogi_shadow = function() {
	this.initialize(img.kogi_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,50);// helper functions:

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


(lib.별똥별 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.bit2();
	this.instance.parent = this;
	this.instance.setTransform(-26,-83);

	this.instance_1 = new lib.bit1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26,-68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-83,252,115);


(lib.부스트로켓측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83AAE0").s().p("AhWFdQgspYC5hgIAEAAIAkAAIgHK4g");
	this.shape.setTransform(37,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA38A").s().p("AgJBcQgMgMAAgQIAAiAQAAgQAMgLQAFgFAEgDQAGADAFAFQALALAAAQIAACAQAAAQgLAMQgFAFgGADQgEgDgFgFg");
	this.shape_1.setTransform(6.1,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E75A32").s().p("AgQBkQgFgDgFgFQgMgLAAgRIAAiAQAAgQAMgLQAFgFAFgDQAHgDAJAAQAQAAAMALQALALAAAQIAACAQAAARgLALQgMAMgQAAQgJgBgHgDg");
	this.shape_2.setTransform(7.8,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AECEFA").s().p("AAgFdIh4AAIhwAAQgJg6gDg4QgEhrAXhjQAfiFBQh4QArg/BVghQAmgPAsgHQAWgDAXgCIAFAAIAkAAIgIK4g");
	this.shape_3.setTransform(25.2,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#545454").s().p("Ah1AtQgTAAgOgOQgMgMAAgTQAAgRAMgOQAOgNATAAIDrAAQATAAANANQANAOAAARQAAATgNAMQgNAOgTAAg");
	this.shape_4.setTransform(26.4,72.5,0.9,0.9,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,0,43.8,207.7);


(lib.부스트로켓 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83AAE0").s().p("Ak3FdQg9o7EWh4QArgGAvABQBaACBHAgQBKAiAXA3QAwBxAPCjQAQCvgjB6g");
	this.shape.setTransform(47.5,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AECEFA").s().p("Aj9FdIhwAAQgKg6gDg4QgEhrAYhjQAeiFBRh4QAqg/BWghQAngPArgHQAqgGAvABQBbACBHAgQBLAiAXA3QAwBxAPCjQAQCvgjB6g");
	this.shape_1.setTransform(41.7,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E75A32").s().p("AgYBJQgLgeACgrQACgqAPgfQAPgdARAAIAHABQAeBngxBmQgRgBgLgeg");
	this.shape_2.setTransform(3.5,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#545454").s().p("Ah1AtQgTAAgOgOQgMgMAAgTQAAgRAMgOQAOgNATAAIDsAAQASAAANANQAOAOAAARQAAATgOAMQgNAOgSAAg");
	this.shape_3.setTransform(59.8,72.5,0.9,0.9,0,0.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#545454").s().p("Ah1AtQgTAAgOgOQgMgMAAgTQAAgRAMgOQAOgNATAAIDrAAQATAAANANQANAOAAARQAAATgNAMQgNAOgTAAg");
	this.shape_4.setTransform(21.8,72.5,0.9,0.9,0,0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.7,207.7);


(lib.코기몸측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25398C").s().p("AgVB9QiogGhXheQgyg1gLhhQAQAhAbAcQAlAqA1AZQBcAuCAAAQCAgCBUguQAxgcAhgrQASgYAKgZQgPBshOA+QhcBLiZAAIgVgBg");
	this.shape.setTransform(36.5,72.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25398C").s().p("AgkBDIgSiHQgBgPAMgFQgBAEAAAFIASCHQACASAUAEIA7gGQgDAJgMADIg2AFQgUgDgCgTg");
	this.shape_1.setTransform(64.4,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F52A1").s().p("AglBEIgRiHQgCgPANgEIAFgCIASgBQASAAAHASIAyCCQACAIgCAGIAAABQgEAJgMACIg1AFQgUgDgDgTg");
	this.shape_2.setTransform(64.4,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#809AB6").s().p("AAGArQgGgEgCgIIgchHIgBgFIAWA6QADAHAGAEQAHAFAHgCQAHgBACgGQAEgGgCgFIAGAPQADAIgEAGQgCAHgHABIgEAAQgFAAgGgDg");
	this.shape_3.setTransform(66.7,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2B1C2").s().p("AAGAzQgGgEgCgIIgchHIgBgFQgBgFACgEQAEgGAHgBQAHgBAGAEQAHAEACAHIAWA4IAAAAIAGAPQADAIgDAGQgCAHgIABIgEAAQgFAAgGgDg");
	this.shape_4.setTransform(66.7,26.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E79B85").s().p("AAAATQgGgFgFgJQgFgIAAgIQAAgJAFgCQAFgCAGAGQAHAFAFAJQAFAIAAAIQAAAJgFACIgDAAQgEAAgFgEg");
	this.shape_5.setTransform(68,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E75A32").s().p("AgZAoQgTgOgFgWQgGgUALgSQALgQAVgCQATgCATAOQATAOAGAWQAFAVgLARQgLARgUACIgFAAQgRAAgRgNg");
	this.shape_6.setTransform(65,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCA5F").s().p("AgVgxIAiAHIAJBZIghADg");
	this.shape_7.setTransform(72.4,57.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE1A2").s().p("Agch3IAigDIAWDyIggADg");
	this.shape_8.setTransform(71.7,50);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F5F5F").s().p("AlVA3QgagRADgqQADgsAegSIAPABQgMAQgCAZQgDAmAYAQQE1AVEwgVQAagSgDgnQgDgYgMgOIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_9.setTransform(36.6,48.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#878787").s().p("AlVA3QgagRADgqQADgsAegSIAPABQFAAUE0gUIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_10.setTransform(36.6,48.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2C9BD").s().p("AEFgWQgghIgrhBIA8AAQBBC9ATCCQgehegnhYgAkIifIBSAAQhWBzg9CDQAUhtAtiJg");
	this.shape_11.setTransform(36.9,30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F52A1").s().p("AgVC1QipgGhWheQgyg2gLhgQgGgyAFg+QE/ApFkgpQADAhABAdQAAAegDAaQgPBrhOA/QhcBLiZAAIgVgBg");
	this.shape_12.setTransform(36.5,67);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0E9E0").s().p("AgVFiQipgHhWhdQgyg2gLhhQgGgyAFg9QAEguAJg1QAUhtAtiJIH+AAQBBC+ASCBIAEAaQADAgABAdQAAAdgDAbQgPBrhOBAQhcBKiZAAIgVAAg");
	this.shape_13.setTransform(36.5,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14.4,74.6,70.9);


(lib.코기다리측면아래2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25398C").s().p("AhBBDIAAhsIABgHQACgSAOgNQAQgRAXAAQAWAAAQARQAQAPAAAWIAABYQApAwgpACIhaAAIgBABQgTAAAAgeg");
	this.shape.setTransform(6.6,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.6,13.2,19.3);


(lib.코기다리측면아래 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F52A1").s().p("AhBBDIAAhsIABgHQACgSAOgNQAQgRAXAAQAWAAAQARQAQAPAAAWIAABYQApAwgpACIhaAAIgBABQgTAAAAgeg");
	this.shape.setTransform(6.6,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.6,13.2,19.3);


(lib.코기다리측면위2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25398C").s().p("AgmBOQgOgOgCgSIgBgHIAAiEIBuAAIAACFQAAAWgPAQQgRAPgXABQgWgBgQgPg");
	this.shape.setTransform(5.6,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,18.7);


(lib.코기다리측면위 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F52A1").s().p("AgmBOQgOgOgCgSIgBgHIAAiEIBuAAIAACFQAAAWgPAQQgRAPgXABQgWgBgQgPg");
	this.shape.setTransform(5.6,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,18.7);


(lib.코기측면헬멧 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25398C").s().p("AjpBOQgiAAgYgYQgYgYAAghQAAgiAYgYQALgKANgGQgPATgBAZQABAfAVAUQAWAWAeAAIGkAAQAfAAAWgWQAVgUAAgfQAAgYgNgTQAKAGAKAJQAYAYAAAiQAAAhgYAYQgYAYgiAAg");
	this.shape.setTransform(2,99.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F52A1").s().p("AjpBSQgiAAgYgYQgYgYAAgiQAAghAYgYQALgKANgHQAPgHATAAIHTAAQAVAAARAJQAKAGAKAJQAYAYAAAhQAAAigYAYQgYAYgiAAg");
	this.shape_1.setTransform(2,98.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,1],160.7,16.7,147.3,53.4).s().p("AsaktQD3iTE9AAQGoAAEsEIQErEGACFzg");
	this.shape_2.setTransform(23,-49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AtPLrQlgk1AAm2QAAm1Fgk1QFfk1HwAAQHxAAFfE1QFgE1AAG1QAAG2lgE1QlfE1nxAAQnwAAlfk1gAslrFQlOEnAAGeQAAGgFOEmQFOEmHXAAQHYAAFOkmQFOkmAAmgQAAmelOknQlOklnYAAQnXAAlOElg");
	this.shape_3.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-106.9,240,213.9);


(lib.코기측면입 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A9A9").s().p("AgcBSQgPgGAAgaQgDgmALgjQAKgjAKgZIAJAEQAQAJAMAQQARAWAGAgIgTApQgMAagJAIQgIAHgJACIgGAAQgFAAgFgCg");
	this.shape.setTransform(-6.2,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#201D1D").s().p("AgEAsQgDgBgGgHQgLgLgPgKQgPgLgEgGQgEgJAIgMQAIgKAOgHQAHgDAWgDQAUAAAQAFQAWAHAFATQACAPgJARQgIAQgLAHQgJAFgLABIgGABQgHAAgFgDg");
	this.shape_1.setTransform(8.6,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#201D1D").s().p("Ah/gZQgCgEACgEQABgEAEgBQAEgCAEABQADACACADQA0BtCLgYQAcgzgBhAQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQABBIghA5IgDADIgEABQgfAGgbAAQhxAAguhkg");
	this.shape_2.setTransform(-1.7,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB6D6D").s().p("Ag6BjQgPgGAAgaQgDgmALgjQAKgjAKgZIAAgCIANggQAyAZA4gHIgLANQgMAOgOAZQgNAYgIASIgBAEIgSAqQgMAagJAIQgJAHgJACIgGAAQgFAAgFgCg");
	this.shape_3.setTransform(-3.2,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-19.6,29.2,39.3);


(lib.코기측면얼굴판 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB8F55").s().p("AAfEnQiSiGgigcQhghShfAJIC0hLIiVhDQBIg0BEhmQAog7BKh5QAcgqAegoQgaB2AXCEQAgCrBrCLQA8BNBOA/QgSBwBSC6QiwhUiGh5g");
	this.shape.setTransform(-66.7,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0CDB9").s().p("Ai1HYIgjgQQiwhTiGh6QiTiGghgcQhhhSheAJIC0hLIiVhDQBHg0BFhmQAng7BLh5QAcgqAfgoQgcB2AZCEQAfCrBsCLQA7BNBOA/QA3AtA/AmQCOBVCtAtQDOA4DFgQQC/gQCXhRIhAA1QjJCdk1ARQg0ACgxAAQjwAAikhHg");
	this.shape_1.setTransform(-10.9,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9A471").s().p("AnpHjQiTiGgigcQhghRhfAJIC0hMIiVhEQBIgzBEhmQAog6BKh6QAcgpAfgpQBGhbBYhVQB+h6CygiQGmhTCyBHQCDA1BhBkIAHAlQAWCKADA8QADA8ApBiQAaBUgcA5QghBChqAfQhpAfibgEQiygLh0AHQh0AHi4BgQhSAqgPBdQgSBwBSC5QiwhTiGh6g");
	this.shape_2.setTransform(-14.6,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7E3CF").s().p("AkjKUIgigQQiwhTiGh6QiTiGgigcQhghRhfAJIC0hMIiVhEQBIgzBEhmQAog6BKh6QAcgpAfgpQBGhbBYhVQB+h6CygiQGmhTCyBHQCDA1BhBkQAcAcAZAhQBmCHAvC3QAbBoAHBxIAXABQAkAEAdAQQAgARATAmQATAmgwB1QgoBgiQB8IhBA1QjJCdk1ARQg0ADgwAAQjxAAikhIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.7,-73.2,201.5,146.4);


(lib.코기측면귀 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB8F55").s().p("AhGAeQATg8AXg1QAuhtA9hOQAjgqAdgZQhhCcgsC2QgkCXAECYIhwAiQAfiyApiCg");
	this.shape.setTransform(-15.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D76E62").s().p("AhNiSQAUADAXAZQArAyApBHQATAgAaA1Ii+A7QAHi8ALhpg");
	this.shape_1.setTransform(11.9,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC8377").s().p("ABVDYQgag1gTggQgphIgsgyQgWgYgUgDQAUipAlgiQBdDSAYDiIABAHIgDgGg");
	this.shape_2.setTransform(13,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D76E62").s().p("AhNiSQAUADAXAZQArAyApBHQATAgAaA1Ii+A7QAHi8ALhpg");
	this.shape_3.setTransform(11.9,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC8377").s().p("AhOgsQAUipAlgiQBdDRAYDjIABAHIgDgGIi+A6QAGi9AMhng");
	this.shape_4.setTransform(12.1,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9A471").s().p("AjkAwQAUg8AXg2QAuhsA+hOQAigrAegZQAygrAnAKQAHABAIAEQATAIATAUQAQATAWAjQA5BiAiBxQAiBuAJB1IhUAZIABAHIgEgGIoCCeQAgiyAoiCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-35.6,60.1,71.2);


(lib.코기측면눈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0B0B").s().p("Ag4AVQgNggALgmIAGgOQgCAdAMARQAKAPARAGQAQAHARgDQARgDAMgMQAMgNAFgRQABAdgMAbQgWAsgkABIgBAAQgjAAgPgrg");
	this.shape.setTransform(0,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIATQgIgBgEgGQgDgGADgHQAEgIAIgFQAIgEAJAAQAIABAEAGQADAGgDAHQgEAIgJAEQgHAFgHAAIgCAAg");
	this.shape_1.setTransform(-1.5,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1A1A").s().p("Ag4AtQgNghALglIAGgOQAIgUAOgNQASgPASAAQATAAAPAOQARAQAFAdIACAPQABAcgMAcQgWAsgkABIgBAAQgjAAgPgrg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E0B0B").s().p("Ag4AIQgKgbAFgeQAsCNBRh9QgCAUgJASQgVAsgkABIgCAAQgjAAgPgqg");
	this.shape_3.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-8.7,12.8,17.6);


(lib.코기팔측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2C9BD").s().p("AhEAwQgVgjAEgaQAqB0BqhQQgUgmgYhDIABAAIBDBzQg8AygoAAQgiAAgVgjg");
	this.shape.setTransform(8.7,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25398C").s().p("AgCAbIgYgnQAUAHAJgZIAXAoQgDAVgOAAQgFAAgGgEg");
	this.shape_1.setTransform(17.7,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F52A1").s().p("AATBEIhDh2QAGgdAXAMIBEB2QgEAUgNAAQgGAAgHgDg");
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


(lib.코기몸 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#809AB6").s().p("AASAqQgEgFgBgIIAAgQQABAGAEAFQAGAFAHAAQAIAAAFgFQAFgFAAgGIAAAQQAAAIgFAFQgFAGgIAAQgHAAgGgGgAgrAqQgGgFAAgIIAAhHIABgFIAAA6QAAAIAFAFQAFAFAIAAQAHAAAGgFQAFgFAAgGIAAAQQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape.setTransform(35.2,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2B1C2").s().p("AASAxQgEgFgBgIIAAhIQABgHAEgGQAGgEAHAAQAIAAAFAEQAFAGAAAHIAABIQAAAIgFAFQgFAFgIABQgHgBgGgFgAgrAxQgGgFAAgIIAAhHIABgFQABgFAEgEQAFgEAHAAQAIAAAGAEQAFAGAAAHIAABIQAAAIgFAFQgGAFgIABQgHgBgFgFg");
	this.shape_1.setTransform(35.2,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E79B85").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgKAMABQANgBAJAKQAJAKAAALQAAANgJAJQgJAKgNAAQgMAAgJgKg");
	this.shape_2.setTransform(49.6,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E75A32").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAQAPQAPAPAAAVQAAAVgPAQQgQAPgVAAQgVAAgPgPg");
	this.shape_3.setTransform(48.9,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25398C").s().p("AiZBXQgTgFACgTIASiEQACgOAOgDQgDADAAAFIgSCDQgCATATAFIExAAIAGgBQgFAKgOABg");
	this.shape_4.setTransform(39.9,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F52A1").s().p("AiaBXQgUgFADgSIARiEQACgPAOgCIAHgBIEJAAQATABADASIAQCCQAAAIgDAFQgFAKgOABg");
	this.shape_5.setTransform(40,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE1A2").s().p("Ag3A4QgXgYAAggQAAgPAGgOQAEgKAHgIIAGgIQAJgJALgFQAQgJAUAAQAgAAAXAXQAXAYAAAfQAAAJgCAJIgDAKIgFAKQgEAKgJAIQgXAXggAAQghAAgXgXg");
	this.shape_6.setTransform(43.8,51.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBC33").s().p("AhFBGQgdgdAAgpQAAgPAFgOQADgKAFgIQAGgMAKgKQALgLANgHQAVgLAYAAQApAAAdAdQAdAdAAAoQAAAMgDALQgCAJgDAIQgFAKgHAKIgJAKQgdAdgpAAQgoAAgdgdg");
	this.shape_7.setTransform(44.6,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCA5F").s().p("AhTAzQglgkABgyQAAgcAKgXIATAVIC4BFIAbAAQgKAagVAVQgkAkgzAAQgyAAgkgkg");
	this.shape_8.setTransform(44.3,53.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE1A2").s().p("AhWBXQglgkABgzQAAgaAKgYQAJgTARgSQANgOARgIQAagOAeAAQAzABAkAjQAkAlAAAyQAAAOgCAOIgDAMQgKAagVAVQgkAlgzAAQgyAAgkglg");
	this.shape_9.setTransform(44.6,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F5F5F").s().p("AlVA3QgagRADgqQADgsAegSIAPABQgMAQgCAZQgDAmAYAQQE1AVEwgVQAagSgDgnQgDgYgMgOIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_10.setTransform(36.6,48.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#878787").s().p("AlVA3QgagRADgqQADgsAegSIAPABQFAAUE0gUIANgBQAkANAEAtQAEArgdAUQipAMiqAAQiqAAisgMg");
	this.shape_11.setTransform(36.6,48.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2C9BD").s().p("AEFgWQgghIgrhBIA8AAQBBC9ATCCQgehegnhYgAkIifIBSAAQhWBzg9CDQAUhtAtiJg");
	this.shape_12.setTransform(36.9,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#25398C").s().p("AgVB9QiogGhXheQgyg1gLhhQAQAhAbAcQAlAqA1AZQBcAuCAAAQCAgCBUguQAxgcAhgrQASgYAKgZQgPBshOA+QhcBLiZAAIgVgBg");
	this.shape_13.setTransform(36.5,72.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F52A1").s().p("AgVC1QipgGhWheQgyg2gLhgQgGgyAFg+QE/ApFkgpQADAhABAdQAAAegDAaQgPBrhOA/QhcBLiZAAIgVgBg");
	this.shape_14.setTransform(36.5,67);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0E9E0").s().p("AgVFiQipgHhWhdQgyg2gLhhQgGgyAFg9QAEguAJg1QAUhtAtiJIH+AAQBBC+ASCBIAEAaQADAgABAdQAAAdgDAbQgPBrhOBAQhcBKiZAAIgVAAg");
	this.shape_15.setTransform(36.5,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14.4,73.2,70.9);


(lib.twinkle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AAAD0").s().p("AhGAAQA9gFAJhSQAKBQA9AHQg9AagKA+QgPg+g3gag");
	this.shape.setTransform(7,8.7,0.99,0.99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.twinkle, new cjs.Rectangle(0,0,14,17.5), null);


(lib.코기다리2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25398C").s().p("AhBBpIAAjvIBuAAIAADaQApAwgpACIhaAAIgBABQgTAAAAgeg");
	this.shape.setTransform(6.6,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.2,26.9);


(lib.timer_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.second = new cjs.Text("00", "normal 400 90px 'Noto Sans'", "#FFFFFF");
	this.second.name = "second";
	this.second.textAlign = "center";
	this.second.lineHeight = 130;
	this.second.parent = this;
	this.second.setTransform(157,6.8,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.second);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAgQgMgMgBgTQABgTAMgMQALgMARgBQASABAMAMQALAMAAATQAAATgLAMQgMALgSABQgRgBgLgLg");
	this.shape.setTransform(207.1,86.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoDDQgRgRgBgbQABgcARgRQAQgRAYgBQAaABAQARQAQARABAcQgBAbgQARQgQARgaAAQgYAAgQgRgAgohpQgRgRgBgbQABgbARgSQAQgRAYAAQAaAAAQARQAQASABAbQgBAbgQARQgQARgaAAQgYAAgQgRg");
	this.shape_1.setTransform(100.4,65);

	this.minute = new cjs.Text("00", "normal 400 90px 'Noto Sans'", "#FFFFFF");
	this.minute.name = "minute";
	this.minute.textAlign = "center";
	this.minute.lineHeight = 130;
	this.minute.parent = this;
	this.minute.setTransform(44.5,6.8,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.minute);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.minute},{t:this.shape_1},{t:this.shape},{t:this.second}]}).wait(1));

	// count
	this.milli = new cjs.Text("00", "normal 400 60px 'Noto Sans'", "#FFFFFF");
	this.milli.name = "milli";
	this.milli.lineHeight = 86;
	this.milli.parent = this;
	this.milli.setTransform(215.2,35.4,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.milli);
	}

	this.timeline.addTween(cjs.Tween.get(this.milli).wait(1));

}).prototype = getMCSymbolPrototype(lib.timer_text, new cjs.Rectangle(-2,5,278.6,122.1), null);


(lib.코기다리 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F52A1").s().p("AhBBpIAAjvIBuAAIAADaQApAwgpACIhaAAIgBABQgTAAAAgeg");
	this.shape.setTransform(6.6,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.2,26.9);


(lib.코기정면입 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A9A9").s().p("AgqA6QgagUgLgYQgMgXgIgfQARgTAZgKQAfgLAgAGQAfAGAaAVQAWASAPAaQgOAogSARQgXAWggABIgCAAQgcAAgZgTg");
	this.shape.setTransform(-0.4,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#201D1D").s().p("AgOArQgMgEgVgOQgUgNgNgMQgMgNAEgNQADgNALgEQALgDASACIAiAEQAPACAagFQAbgEAOACQAOADADAIQAFAOgJAQQgIAKgOAKQgPALgOAJQgPAKgLAAIgEABQgIAAgJgEg");
	this.shape_1.setTransform(2.1,-15.2,1,1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#201D1D").s().p("AgVBjIAAAAQgkgCgmgKQgogKgWgUQgWgUgUgtQgBgEABgEQACgEADgCQAEgBAEABQAEACACAEQARAoAUASQATARAiAIQAkAKAiACIAaABQAFggAAgkIAAAAQABgjgEhBQAAgEACgEQADgDAEAAQAFAAADADQADADAAAEQAEBCgBAjIAAAAQAAAkgEAfIAUgCQAhgEAUgGIAAAAQATgGAQgKQAQgKAOgSIABAAQANgSACgSQAAgEADgDQADgDAEABQAFAAACADQADADgBAFQgCAYgRAWIAAAAQgQAVgTAMQgTALgVAHIAAAAQgVAGgjAFIgiADIgBAAIgMAAIgYgBg");
	this.shape_2.setTransform(0,-7.4,1,1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BB6D6D").s().p("Ag5BZQgagVgLgYQgMgYgIgeIgBgBIgPg7IgIgbQASANAeAGQAkAIAjABIAagBIAUgBIAVgDQAhgGATgHIAAAAQASgGAQgLIAFgDQgLAQgJASQgQAggKApIgIAaQgOApgSARQgYAWgfACIgBAAQgeAAgYgTg");
	this.shape_3.setTransform(1.2,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BB6D6D").s().p("AAsAWQgZgWgegHQgggIggALQgZAIgSARIAAgBIgNg6IgHgcQASAOAdAHQAkAJAiADIAaABIAVgBIAUgCQAhgEAUgGIAAAAQATgGAQgKIAFgDQgMAPgKASQgRAfgMAoIgJAbQgNgagWgTg");
	this.shape_4.setTransform(1.4,3.5,1.054,0.708,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1A9A9").s().p("AAJBOQgegBgYgVQgZgVgLgZQgKgXgHgfQASgSAagJQAfgKAgAHQAeAIAZAWQAWATANAZQgQApgSAQQgYAVggAAIAAAAg");
	this.shape_5.setTransform(-0.5,8.3,1.054,0.708,-2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BB6D6D").s().p("AA2AOQgbgIgfgCQgigCgiAGQgaAFgTAIIAAAAIgPgYQgDgFgIgWQAmAVAeACQAfACAWAAIAigCIAWgBIAVgBQAjgEAVgDIAAAAQAQgDARgLQgHAPgLALIgUAUIgOAPQgPgKgXgHg");
	this.shape_6.setTransform(0.6,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1A9A9").s().p("AgvAaQgagIgLgKQgMgJgIgNQATgIAagFQAigGAhACQAgACAbAIQAXAHAPAKQgQARgTAIQgZAKgiABIgIAAQgaAAgYgGg");
	this.shape_7.setTransform(-0.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-19.9,40.1,39.8);


(lib.코기정면귀 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D76E62").s().p("AhhhXQAdhOAhgpQAjgoAaAEQAZgDAcAfQAsAyAqBIQATAiAdA5IABALImrDqQBXj9AdhOg");
	this.shape.setTransform(1.7,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC8377").s().p("ABNklQBvCxAZDMIABAMImrDqQCis+CADLg");
	this.shape_1.setTransform(1.7,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9A471").s().p("AjXgeQATg9AXg1QAvhtA9hOQBch0A9APQAIACAHADQATAJATAUQARASAVAkQA6BiAiBwQAhBvAJB0IhNArIgGgKIABAMIofEpQAokZA5i4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-43.4,62.6,87);


(lib.코기정면눈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0B0B").s().p("Ag7AVQgLggAOgmIAGgOQgDAdALARQAIAPASAGQAQAHAQgDQARgDANgMQANgNAGgRQgBAdgOAbQgYAsgkABIgBAAQgjAAgNgrg");
	this.shape.setTransform(-26.8,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0B0B").s().p("AgvAXQgQgagBgdQAGARAOAMQANALARADQAQACARgIQAQgHAIgPQAKgSgEgdIAHAOQAPAlgJAhQgKAsglABIgBAAQgjAAgagqg");
	this.shape_1.setTransform(26.8,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIATQgIgBgEgGQgDgGADgHQAEgIAIgFQAIgEAJAAQAIABAEAGQADAGgDAHQgEAIgJAEQgHAFgHAAIgCAAg");
	this.shape_2.setTransform(23.3,-5.9,1,1,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIATQgIgBgEgGQgDgGADgHQAEgIAIgFQAIgEAJAAQAIABAEAGQADAGgDAHQgEAIgJAEQgHAFgHAAIgCAAg");
	this.shape_3.setTransform(-27.7,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E1A1A").s().p("Ag7AtQgLghAOglIAGgOQAJgUAQgNQASgPASAAQATAAAOAOQAQAQAEAdIABAPQgBAcgOAcQgYAsgkABIgBAAQgjAAgNgrg");
	this.shape_4.setTransform(-26.8,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1A1A").s().p("AgvAtQgQgagBgcIAAgQQACgcAPgSQANgPAUAAQASAAATAOQAPAMALASIAHAOQAPAkgJAjQgKArglABIgBAAQgjAAgagqg");
	this.shape_5.setTransform(26.8,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E1A1A").s().p("Ag/AQIAAAAQgIgNgFgNQgCgGADgFQADgGAGgCQAGgCAFADQAGADACAGQAEAKAGAKIgBAAQAWAiAcAAQAZgBAHgfIAAgBQAHgXgHgZQgCgGADgFQADgFAGgCQAGgCAGADQAFAEACAFQAJAigJAeIAAgBQgNA4gvAAIgEABQgqAAgegyg");
	this.shape_6.setTransform(27.2,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1A1A").s().p("AhIALIAAAAQgKgdAIgiQACgGAFgDQAFgEAGACQAGABADAGQAEAFgCAGQgGAZAHAWIAAABQAKAfAZAAQAcgBATgjIAAABQAHgPAEgQQABgGAGgDQAFgDAGABQAGACADAFQAEAFgCAGQgEATgKARIAAAAQgcA1gsAAIgEABQgsAAgQg2g");
	this.shape_7.setTransform(-26.9,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-9.4,66.6,18.9);


(lib.코기팔 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F52A1").s().p("AATBEIhDh2QAGgdAXAMIBEB2QgEAUgNAAQgGAAgHgDg");
	this.shape.setTransform(15.5,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E9E0").s().p("AhEAwQg9hnCVgbIBDBzQg8AygoAAQgiAAgVgjg");
	this.shape_1.setTransform(8.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0E9E0").s().p("Ai9AmQCphFCThyQBCAZgDBTQibB2iiBBg");
	this.shape_2.setTransform(22.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.6,31.6);


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


(lib.scrollBar_pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgwFBQgYgYAAgjIAAn4QAAgiAYgYQAYgYAiAAQAiAAAYAYIAFAFQgXgTgeAAQgiAAgYAYQgYAYAAAiIAAH4QAAAfATAWIgFgEg");
	this.shape.setTransform(-0.9,30.6,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0DEDF").s().rr(-8.25,-33.5,16.5,67,8.25);
	this.shape_1.setTransform(0,31.5,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("AhEFCQgcgdgBgpIAAn3QABgpAcgdQAcgcAoAAQApAAAcAcQAcAdABApIAAH3QgBApgcAdQgcAcgpAAQgoAAgcgcg");
	this.shape_2.setTransform(0,31.5,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.scrollBar_pointer, new cjs.Rectangle(-8.7,0,17.6,63), null);


(lib.scrollBar_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282828").s().p("AgbPeQgMgMAAgQIAA+DQAAgQAMgMQALgMAQAAQARAAALAMQAMAMAAAQIAAeDQAAAQgMAMQgLAMgRAAQgQAAgLgMg");
	this.shape.setTransform(4,100,1,0.998);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scrollBar_base, new cjs.Rectangle(0,0,8,200), null);


(lib.planet_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(194,77,51,0.149)").s().p("At9MiIglgkQitishbjPQMLBSIPlnQK0nViEsDQBSA8BMBMQCrCsBbDMQBPCzASDNQAGA7AAA+QAAFeiqEZQhPCEh0B0QltFtoDAAQnqAAlhlJg");
	this.shape.setTransform(120,113.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.planet_shadow, new cjs.Rectangle(0.5,0.3,239,226.2), null);


(lib.planet_long = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9178").s().p("EiBcAn2QEijwGGkVQPEquN0npIL6l9QHVjNG5h6QMbjbOTgJQD4gBDxAFIA+ABIAmABQKVAeJQEQQCmBbCSBrQH0FsFCBqQFCBpHQALQHQAMGfjBQGejAF4ikQHVjNG5h6QMbjbOTgJQJWgBIwAYQNTAlL7BfIADAAQG4gEG8hiIAANgIt3iBQssiPsigKQzAgPysEiQsBDppVDWQwQF1oIE7QszHxm/pEQjnktiZjEIgkgtIgdgkQnppJpJhyQihgSjLgFQrEgVzvENQsBDppWDWQ39MPpuHogEiR4gnDQAAgyAyAAMEL7AAAQjoI+kMELQjLDKlDDXQh5BRiLBTQn6EvqDEjQqFEiruiAQpDhjmLAUQh2AGhmARQm4BHoEDHQoLDJpZkTQpakUlDjaQlEjZmvgUQmwgUk5BPQk5BPqFEjQqDEirwiAQpChjmVA4Qu+CHkEBAQo8CMqBEVQqCEVzrR+g");
	this.shape.setTransform(128.6,255);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE8B9").s().p("EiR4An2MAAAhO5QAAgyAyAAMEUYAAAQApAAAIAjQAGgjAqAAINFAAMAAABPrg");
	this.shape_1.setTransform(128.6,255);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.planet_long, new cjs.Rectangle(-805.1,0,1867.3,510), null);


(lib.pause_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiAmQgFgEAAgGQAAgHAMgLIARgMQAIgGAMgFQBBgcBHAAQAKAAAFADQAHAFAAAGQAAAIgGAFQgFADgOAAQhAABg3AXQgQAHgIAGIgLALQgHAFgGAAQgGAAgEgEg");
	this.shape.setTransform(34.8,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJASQgHgFgBgNQAAgHADgEQACgEAEgBQAIgEAGACQAGABAEAHQADAFgBAHQAAAGgDAFQgFAGgKABIgBAAQgEAAgEgCg");
	this.shape_1.setTransform(21.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 레이어 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.894,1],0,0,0,0,0,48.4).s().p("AlWFWQiMiOAAjIQAAjHCMiNQCPiODHAAQDHAACNCOQCPCNAADHQAADIiPCOQiNCNjHAAQjHAAiPiNg");
	this.shape_2.setTransform(48.3,48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

	// 레이어 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AijDFQgGgCgDgGQgDgFAAgIIAAlgQAAgGADgGQADgFAGgDQAFgDAIABQAGAAAGAEIEnCnQATAJAAASQAAALgEAGQgFAHgKAFIknCmQgGADgGABIgDAAQgFAAgFgCg");
	this.shape_3.setTransform(52.9,48.6,1.102,1.102);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	this.shape_4.setTransform(57.8,48.4,1.047,1.047);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	this.shape_5.setTransform(39,48.4,1.047,1.047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// 레이어 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AivivQAAgHADgGQADgFAGgDQAFgCAHAAQAHABAGADIEnCnQATAKAAARQAAALgEAGQgFAHgKAFIknCmQgGAEgHAAQgHABgFgDQgGgCgDgGQgDgFAAgHg");
	this.shape_6.setTransform(52.9,48.6,1.102,1.102);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AijDFQgGgCgDgGQgDgFAAgIIAAlgQAAgGADgGQADgFAGgDQAFgDAIABQAGAAAGAEIEnCnQATAJAAASQAAALgEAGQgFAHgKAFIknCmQgGADgGABIgDAAQgFAAgFgCg");
	this.shape_7.setTransform(52.9,48.6,1.102,1.102);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AgUjMIApAAQAeAAAAAeIAAFdQAAAegeAAIgpAAQgeAAAAgeIAAldQAAgeAeAAg");
	this.shape_8.setTransform(57.8,48.4,1.047,1.047);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	this.shape_9.setTransform(57.8,48.4,1.047,1.047);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AgUjMIApAAQAeAAAAAeIAAFdQAAAegeAAIgpAAQgeAAAAgeIAAldQAAgeAeAAg");
	this.shape_10.setTransform(39,48.4,1.047,1.047);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUDNQgeAAAAgeIAAldQAAgeAeAAIApAAQAeAAAAAeIAAFdQAAAegeAAg");
	this.shape_11.setTransform(39,48.4,1.047,1.047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// 레이어 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#164673").s().p("Al5F6QididAAjdQAAjcCdidQCcidDdAAQDeAACcCdQCdCdAADcQAADdidCdQicCdjeAAQjdAAicidg");
	this.shape_12.setTransform(48.3,48.3,0.902,0.902);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2));

	// 레이어 6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#191919").s().p("Al5F6QididAAjdQAAjcCdidQCcidDdAAQDeAACcCdQCdCdAADcQAADdidCdQicCdjeAAQjdAAicidg");
	this.shape_13.setTransform(48.3,48.4,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.8,104.3,104.3);


(lib.obj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAOQgFgFgBgJQABgIAFgFQAFgGAHAAQAIAAAFAGQAFAFABAIQgBAJgFAFQgFAGgIAAQgHAAgFgGg");
	this.shape.setTransform(46.6,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBQQgHgHAAgLQAAgLAHgHQAGgHAKgBQAKABAHAHQAHAHAAALQAAALgHAHQgHAHgKAAQgKAAgGgHgAgQgrQgHgHAAgLQAAgLAHgHQAGgHAKAAQAKAAAHAHQAHAHAAALQAAALgHAHQgHAHgKABQgKgBgGgHg");
	this.shape_1.setTransform(2.4,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.obj, new cjs.Rectangle(0,0,48.5,20.4), null);


(lib.mirine_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AAAAiQgMAAgJgIQgNgKABgQQAAgMAIgKQAJgJALgCQALgCAKAGQALAGAFALQAEAKgDALQgDAMgKAHQgIAGgLAAIgBAAg");
	this.shape.setTransform(416.8,357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgGAtQgPgCgLgKQgGgGgDgIQgFgNAGgPQAGgNALgJQALgJANgCQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQAOACALAKQALALACAOQADANgHANQgGAOgNAHQgJAFgLAAIgGAAg");
	this.shape_1.setTransform(590.5,351.7,0.417,0.417);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgYAOQgEgGAAgFIABgHIACgHQABgDAEgEQALgMAJAEIAAgCQARABAIAQQAIAOgKAOQgHALgMABIgDAAQgOAAgLgPg");
	this.shape_2.setTransform(91.7,1.2,0.417,0.417);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AgVAlQgIgFgEgHQgDgFgCgMQgCgXALgNQAKgOAQABQAFAAgBgDQAPACAMANQALAMAAAQQABAJgFALQgIAWgTADIgHABQgKAAgMgIg");
	this.shape_3.setTransform(454.5,30.4,0.417,0.417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AgeAbQgKgIgDgNQgBgMAGgKQAIgOARgBQAGAAgBgDQAZgCAOALQAMAJABAPQABAOgMALQgMALgVAAQgTAAgLgIg");
	this.shape_4.setTransform(46.3,410,0.417,0.417);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AghAkQgMgHgFgOQgFgOAEgNQAEgNAMgJQAMgJAOAAQAQgDAOAEQATAGAIAPQAGALgBANQgBAMgIALQgGAJgKAFQgKAFgOAAIgEAAQgUAAgNgJg");
	this.shape_5.setTransform(499.8,118,0.417,0.417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAZQgFgCgCgDIgCgFQgCgLAAgHQABgLAGgHQAIgIAIADIAAgDQAJABAHAHQAGAGACAIIAAAHQAAAJgDAHQgGANgLAAIgCABQgEAAgKgFg");
	this.shape_6.setTransform(137,147.2,0.417,0.417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.098)").s().p("AgCAYQgIgCgHgFIgDgEIAAgHIgCgGQgBgFADgFQADgGAGgDQAHgEAFACIAAgDQAPAFAEAHQAEAGgBAIQgCAOgIAFQgFAEgFAAIgFgBg");
	this.shape_7.setTransform(1,264,0.417,0.417);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.298)").s().p("AgPAVQgFgBgDgEQgCgDgBgFQgCgIABgGQACgHAHgFQAHgFAIABIAAgCQAJAAAJADQAJAGADAJQACAGgDAIQgBAIgFAEQgEADgHABIgIABQgIAAgIgEg");
	this.shape_8.setTransform(273.1,380.8,0.417,0.417);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_9.setTransform(545.2,88.8,0.417,0.417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.298)").s().p("AgWAmQgKgHgFgKQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgDQAPACAMAKQALAJAEAOQADAOgHAOQgHAOgNAHQgJAEgLAAQgLAAgKgGg");
	this.shape_10.setTransform(585.9,205.6,0.417,0.417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAmQgMgDgFgFQgNgLAAgSQgBgOAKgMQALgNAPABQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQALgBALAFQALAFAHAKQAGAKAAALQAAANgHAJQgIALgOAEQgHACgHAAQgGAAgGgCg");
	this.shape_11.setTransform(528.6,302.6,0.417,0.417);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAmQgMgDgFgFQgNgLAAgSQgBgOAKgMQALgNAPABQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQALgBALAFQALAFAHAKQAGAKAAALQAAANgHAJQgIALgOAEQgHACgHAAQgGAAgGgCg");
	this.shape_12.setTransform(263.7,378.5,0.417,0.417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_13.setTransform(538.8,118.9,0.417,0.417);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAjQgLgBgKgGQgKgHgDgKQgDgJACgGQAAgIAFgHQAHgKAMgBIAFgBQAGAAgBgDQAUgCANAPQAHAHABALQABAJgEAIQgEAKgLAGQgKAFgKAAIgCAAg");
	this.shape_14.setTransform(80.3,384.9,0.417,0.417);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AgeAbQgKgIgDgNQgBgMAGgKQAIgOARgBQAGAAgBgDQAZgCAOALQAMAJABAPQABAOgMALQgMALgVAAQgTAAgLgIg");
	this.shape_15.setTransform(375.8,372.3,0.417,0.417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_16.setTransform(324.9,391.3,0.417,0.417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_17.setTransform(304.5,410.2,0.417,0.417);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_18.setTransform(569.4,397.6,0.417,0.417);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_19.setTransform(579.6,296.3,0.417,0.417);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAoQgMgCgJgHQgKgGgDgKQgCgFAAgKQABgQAHgJQAJgOAOACQAGAAgCgCQANACANAMQANAMACAMQADAKgGALQgFALgLAFQgJAEgJAAIgDAAg");
	this.shape_20.setTransform(233.2,365.9,0.417,0.417);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.298)").s().p("AghAkQgMgHgFgOQgFgOAEgNQAEgNAMgJQAMgJAOAAQAQgDAOAEQATAGAIAPQAGALgBANQgBAMgIALQgGAJgKAFQgKAFgOAAIgEAAQgUAAgNgJg");
	this.shape_21.setTransform(549,175.9,0.417,0.417);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAlQgLgIgFgOQgGgNAEgNQAEgNALgJQALgJAOgBIADAAQAPgDAOAJQAPAJAFAQQAFAOgHAQQgHAPgPAHQgJAFgNAAQgQAAgMgIg");
	this.shape_22.setTransform(467.5,80.9,0.417,0.417);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAmQgKgHgFgKQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgCQAPABAMAKQALAJAEAOQADAOgHAOQgHAOgNAHQgJAEgLAAQgLAAgKgGg");
	this.shape_23.setTransform(141.5,106.2,0.417,0.417);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBArQgPgBgLgIQgKgJgDgKQgEgNACgJQACgPANgKQAMgKAOAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQANAAAMAJQAMAJAEANQAEANgGAOQgFANgLAIQgKAIgOAAIgBgBg");
	this.shape_24.setTransform(151.6,188.5,0.417,0.417);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.298)").s().p("AgNANIgBgDQgFgKABgEQACgGAFgEQAEgDAHAAQAGAAAEADIAGAHQAGAKgIAIQgCADgIADIgEABg");
	this.shape_25.setTransform(121.1,245.6,0.417,0.417);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.298)").s().p("AAAATQgNgBgGgHQgDgDAAgDQgBgEACgDQADgKADgCQAFgDAHABIAAgDIAOADQAIAEADAFQAFAKgJALQgEAEgFABIgFABIgEgBg");
	this.shape_26.setTransform(131.2,156.9,0.417,0.417);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.298)").s().p("AgNAWQgFgCgDgFQgDgEABgGQAAgFAHgIQAIgMAKgCQALAAAHAKQAHAJgEALQgDAKgIADQgEACgLAAQgFAAgFgBg");
	this.shape_27.setTransform(273.9,112.5,0.417,0.417);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAZQgFgCgCgDIgCgFQgCgLAAgHQABgLAGgHQAIgIAIADIAAgDQAJABAHAHQAGAGACAIIAAAHQAAAJgDAHQgGANgLAAIgCABQgEAAgKgFg");
	this.shape_28.setTransform(202.6,144.2,0.417,0.417);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAbQgJgDgDgFIgCgFQgEgRAEgKQADgHAGgEQAHgEAGACIAAgDQAVgBAIAPQAEAGAAAJQgBAQgGAHQgGAGgLABQgIAAgJgDg");
	this.shape_29.setTransform(294.3,251.9,0.417,0.417);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.298)").s().p("AgiATQgNgNAGgPQADgHAHgFQAGgFAIgBQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAXAAQAOABAIAGQAOAKgDAPQgBARgQAHQgIADgNAAIgEAAQgZAAgKgLg");
	this.shape_30.setTransform(498,403.9,0.417,0.417);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_31.setTransform(477.6,239.2,0.417,0.417);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("AgFA2QgSgDgLgPQgKgNAAgXQAAgVAKgOQANgSATABIACAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAbAGAJANQAGAJACANQAGAogXASQgMAKgOAAIgGgBg");
	this.shape_32.setTransform(253.5,327.9,0.417,0.417);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.298)").s().p("AgkAoQgOgPADgUQABgHAFgMQAIgTAIgIQANgNAPACIACAAIAAgBQAPAAAMAKQALAKAEAPQAEAOgEAOQgEAOgLALQgPASgUABIgDAAQgSAAgMgOg");
	this.shape_33.setTransform(223,182.2,0.417,0.417);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.298)").s().p("AgDAxQgRgBgLgMQgLgMgBgVQgCgYAPgOQAKgKAQAAQAFAAgBgDQARACAMAKQAGAGAFALQAGAPgDAQQgEARgMAKQgMAKgPAAIgDAAg");
	this.shape_34.setTransform(161.8,353.2,0.417,0.417);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.298)").s().p("AgWAlQgKgGgFgKQgLgVALgVQAFgJAJgGQAKgGAKABQAEAAAAgCQAPAAAMAKQALAKAEAPQADANgHAOQgHAOgNAGQgJAGgLAAQgLgBgKgHg");
	this.shape_35.setTransform(90.5,270.9,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mirine_3, new cjs.Rectangle(0,0,592.4,411.7), null);


(lib.mirine_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAXQgKgEgFgGQgGgHABgJQABgLAIgGQANgLAQAIQAIADAGAIQAFAHAAAIQAAAJgGAHQgGAIgJAAIgCAAQgGAAgIgEg");
	this.shape.setTransform(2.9,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_1.setTransform(308.5,90.8,0.417,0.417);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAbQgJgDgDgFIgCgFQgEgRAEgKQADgHAGgEQAHgEAGACIAAgDQAVgBAIAPQAEAGAAAJQgBAQgGAHQgGAGgLABQgIAAgJgDg");
	this.shape_2.setTransform(353.8,236.8,0.417,0.417);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AgGAtQgPgCgLgKQgGgGgDgIQgFgNAGgPQAGgNALgJQALgJANgCQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQAOACALAKQALALACAOQADANgHANQgGAOgNAHQgJAFgLAAIgGAAg");
	this.shape_3.setTransform(300.1,178.9,0.417,0.417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_4.setTransform(351.1,128.3,0.417,0.417);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_5.setTransform(330.7,1.6,0.417,0.417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_6.setTransform(228.8,64.9,0.417,0.417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAcQgLgDgJgMQgDgFAAgFIABgHIABgHQABgDAEgEQALgMAKAEIAAgCQAJABAIAGQAIAHACAJQADAOgKALQgIAJgLAAIgGgBg");
	this.shape_7.setTransform(14.8,109.2,0.417,0.417);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAjQgMgBgJgGQgKgHgDgLQgCgHABgJQACgKAEgFQAGgGAOgDIAEgCQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAUgCANAPQAHAIABAKQABAJgEAJQgEAKgMAFQgJAFgKAAIgCAAg");
	this.shape_8.setTransform(381.6,134.6,0.417,0.417);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_9.setTransform(402,45.9,0.417,0.417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAVQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgCQAPAAAMALQALAJAEAPQADANgHAOQgHAOgNAGQgJAFgLABQgYgCgMgWg");
	this.shape_10.setTransform(45.3,121.9,0.417,0.417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.298)").s().p("AghAkQgMgHgFgOQgFgOAEgNQAEgNAMgJQAMgJAOAAQAQgDAOAEQATAGAIAPQAGALgBANQgBAMgIALQgGAJgKAFQgKAFgOAAIgEAAQgUAAgNgJg");
	this.shape_11.setTransform(279.7,52.2,0.417,0.417);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.298)").s().p("AAFAnIgHgEIgHgFIgMgFQgJgEgFgLQgEgKABgKQABgKAHgHQAHgIAKgBQAGAAgBgDQAQAFATAWQALAMABAIQACAQgRALQgHAFgHAAIgFgBg");
	this.shape_12.setTransform(361.2,248.6,0.417,0.417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.298)").s().p("AgLAOQgEgCgCgDQgCgDAAgEIABgGQADgFAMgEIAKgDQAIABADAFQADAFgBAFQgBAFgEAFQgGAEgHACIgDABQgFAAgFgDg");
	this.shape_13.setTransform(341,223.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_14.setTransform(391.8,77.6,0.417,0.417);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AgBAnQgNgBgJgHQgHgGgDgGQgHgMADgOQACgLAKgJQAKgIAMAAQAEAAAAgDQAMABAKAIQAKAIAEALQAEALgFAMQgFAMgKAHQgJAHgMAAIgBAAg");
	this.shape_15.setTransform(290,39.5,0.417,0.417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AgWAmQgKgHgFgKQgLgUALgWQAFgJAJgGQAKgGAKABQAEAAAAgDQAPACAMAKQALAJAEAOQADAOgHAOQgHAOgNAHQgJAEgLAAQgLAAgKgGg");
	this.shape_16.setTransform(310.3,83.9,0.417,0.417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHA2QgQgCgKgJQgPgOAAgdQABgWAIgNQANgSATACQABAAABgBQABAAAAAAQABAAAAgBQAAAAAAgBQARADAOAMQAOANAFARQAFARgHASQgHASgQAHQgJAEgLAAIgJgBg");
	this.shape_17.setTransform(371.5,235.9,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mirine_2, new cjs.Rectangle(0,0,403.4,250.3), null);


(lib.mirine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AgKAYQgHgDgDgGQgCgEgBgGQgCgQAKgJQAEgEAFgCQANgDAKAKQAKALgDAMQgBAJgGAHQgHAGgIABIgCAAQgFAAgFgDg");
	this.shape.setTransform(411,245.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgFAjQgNgCgIgIQgJgIgDgMQgCgMAGgKQAGgIALgFQAMgGALACQANACAJAHQAJAJACAMQACAMgHAKQgFAJgMAFQgIADgJAAIgFAAg");
	this.shape_1.setTransform(176.9,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_2.setTransform(134,247.3,0.417,0.417);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AgNAWQgFgCgDgFQgDgEABgGQAAgFAHgIQAIgMAKgCQALAAAHAKQAHAJgEALQgDAKgIADQgEACgLAAQgFAAgFgBg");
	this.shape_3.setTransform(270,13.7,0.417,0.417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AgkAoQgOgPADgUQABgHAFgMQAIgTAIgIQANgNAPACIACAAIAAgBQAPAAAMAKQALAKAEAPQAEAOgEAOQgEAOgLALQgPASgUABIgDAAQgSAAgMgOg");
	this.shape_4.setTransform(179.3,188.8,0.417,0.417);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AgYAOQgEgGAAgFIABgHIACgHQABgDAEgEQALgMAJAEIAAgCQARABAIAQQAIAOgKAOQgHALgMABIgDAAQgOAAgLgPg");
	this.shape_5.setTransform(144,47.6,0.417,0.417);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.098)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_6.setTransform(1.4,243.9,0.417,0.417);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AgEAiQgLgCgIgHQgEgFgDgGQgEgKACgIQABgJAGgIQAJgKAQAAIAAgCQAOACAIAIQAIAHADALQACAKgFAKQgEAKgKAFQgIAEgIAAIgEAAg");
	this.shape_7.setTransform(164.4,187,0.417,0.417);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAlQgIgFgEgHQgDgFgCgMQgCgXALgNQAKgOAQABQAFAAgBgDQAPACAMANQALAMAAAQQABAJgFALQgIAWgTADIgHABQgKAAgMgIg");
	this.shape_8.setTransform(266.3,53.9,0.417,0.417);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgeAbQgKgIgDgNQgBgMAGgKQAIgOARgBQAGAAgBgDQAZgCAOALQAMAJABAPQABAOgMALQgMALgVAAQgTAAgLgIg");
	this.shape_9.setTransform(133.9,237.6,0.417,0.417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.298)").s().p("AAAAjQgWAAgLgIQgJgFgEgLQgDgKACgJQADgKAIgGQAIgHAJAAQAGAAAAgDQATgBAIABQAQADAJAJQALALgBAMQgBAPgLAJQgMAKgWAAIgDAAg");
	this.shape_10.setTransform(11.6,294.6,0.417,0.417);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAkQgHgCgEgEQgNgLACgXQACgNAFgIQAJgMAOAAQABAAABAAQABAAAAAAQAAAAAAgBQABAAAAgBQANADAKAIQAHAIACALQADAKgDALQgDAKgHAHQgHAIgJACIgFABQgGAAgHgEg");
	this.shape_11.setTransform(62.5,269.3,0.417,0.417);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.298)").s().p("AgCAYQgIgCgHgFIgDgEIAAgHIgCgGQgBgFADgFQADgGAGgDQAHgEAFACIAAgDQAPAFAEAHQAEAGgBAIQgCAOgIAFQgFAEgFAAIgFgBg");
	this.shape_12.setTransform(123.7,180.6,0.417,0.417);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.298)").s().p("AgPAVQgFgBgDgEQgCgDgBgFQgCgIABgGQACgHAHgFQAHgFAIABIAAgCQAJAAAJADQAJAGADAJQACAGgDAIQgBAIgFAEQgEADgHABIgIABQgIAAgIgEg");
	this.shape_13.setTransform(194.9,231.3,0.417,0.417);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.298)").s().p("AgMAZQgFgCgCgDIgCgFQgCgLAAgHQABgLAGgHQAIgIAIADIAAgDQAJABAHAHQAGAGACAIIAAAHQAAAJgDAHQgGANgLAAIgCABQgEAAgKgFg");
	this.shape_14.setTransform(439.5,313.6,0.417,0.417);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AgSAaQgNgGgEgLQgDgHABgIIAEgIQAIgOARABIAAgCQAXgBAKAHQAOAJgBAPQgBAQgOAJQgIAEgKAAIgFAAQgJAAgJgEg");
	this.shape_15.setTransform(510.8,300.9,0.417,0.417);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AgIAlQgJgEgFgIQgKgOAEgVQADgLAGgIQAIgIAKAAIABAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAKACAIAHQAIAIADAKQACAIgCAJQgDAagRAHQgEACgEAAQgEAAgFgDg");
	this.shape_16.setTransform(470,212.3,0.417,0.417);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAxQgSgBgLgMQgLgMgBgVQgCgYAPgOQAMgLAOABQAGAAgBgDQARACALAKQAHAHAEAKQAHAPgEAQQgDARgNAKQgLAKgQAAIgCAAg");
	this.shape_17.setTransform(459.8,155.2,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mirine_1, new cjs.Rectangle(0,0,512.4,314.9), null);


(lib.item_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.sec = new cjs.Text("00", "normal 400 37px 'Noto Sans'", "#FFFFFF");
	this.sec.name = "sec";
	this.sec.textAlign = "center";
	this.sec.lineHeight = 53;
	this.sec.parent = this;
	this.sec.setTransform(119.9,3.3,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.sec);
	}

	this.num = new cjs.Text("00", "normal 400 39px 'Noto Sans'", "#03A9B6");
	this.num.name = "num";
	this.num.lineHeight = 56;
	this.num.lineWidth = 47;
	this.num.parent = this;
	this.num.setTransform(1.8,0.8,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.num);
	}

	this.milli = new cjs.Text("00", "normal 400 30px 'Noto Sans'", "#FFFFFF");
	this.milli.name = "milli";
	this.milli.lineHeight = 43;
	this.milli.parent = this;
	this.milli.setTransform(145.1,10.5,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.milli);
	}

	this.min = new cjs.Text("00", "normal 400 37px 'Noto Sans'", "#FFFFFF");
	this.min.name = "min";
	this.min.textAlign = "center";
	this.min.lineHeight = 53;
	this.min.parent = this;
	this.min.setTransform(74.7,3.3,0.9,0.9);
	if(!lib.properties.webfonts['Noto Sans']) {
		lib.webFontTxtInst['Noto Sans'] = lib.webFontTxtInst['Noto Sans'] || [];
		lib.webFontTxtInst['Noto Sans'].push(this.min);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.min},{t:this.milli},{t:this.num},{t:this.sec}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item_text, new cjs.Rectangle(0,-1,176.8,56.7), null);


(lib.exit_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFEFEF").ss(3,1,1).p("ACZiYIkxEx");
	this.shape.setTransform(12.2,12.2,0.8,0.8,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFEFEF").ss(3,1,1).p("ACZiYIkxEx");
	this.shape_1.setTransform(12.2,12.2,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 레이어 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#282828").s().p("AjCDFIAAmJIGEAAIAAGJg");
	this.shape_2.setTransform(11.9,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.exit_btn, new cjs.Rectangle(-7.5,-7.3,38.9,39.5), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
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


(lib.별동별_모션 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.instance = new lib.별똥별();
	this.instance.parent = this;
	this.instance.setTransform(291.2,-168);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({rotation:-1.5,guide:{path:[291.2,-167.9,268.4,-158.4,245.9,-148.3], orient:'auto'},alpha:1},7).to({scaleX:1,scaleY:1,rotation:-21.1,guide:{path:[246,-148.3,-48.1,-16.2,-300.5,220.9], orient:'auto'}},94).to({scaleX:1,scaleY:1,rotation:-22.2,guide:{path:[-300.5,220.9,-315.8,235.3,-331,250.1], orient:'auto'},alpha:0},6).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.4,-0.1,1,1,38.4,0,0,5.8,13.5);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,-12.6,1,1,22.7,0,0,5.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-14.8,22.2,29.2);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,0.3,1,1,52.8,0,0,5.8,13.5);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,-12.6,1,1,-15,0,0,5.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-14.2,19.1,27.9);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.7,-0.4,1,1,28,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6.7,-11.3,1,1,-38.5,0,0,5.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-14.8,18.3,29.2);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.8,0,1,1,-22.7,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-12.4,1,1,-22.7,0,0,5.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-14.5,22.1,28.6);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.6,0.5,1,1,1.5,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-11.7,1,1,-24.5,0,0,5.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-14,17.9,28.1);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.4,-0.1,1,1,38.4,0,0,5.8,13.5);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,-12.6,1,1,22.7,0,0,5.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-14.8,22.2,29.2);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0,1,1,17.2,0,0,6,13.6);

	this.instance_1 = new lib.코기다리측면위2("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,-13,1,1,16.7,0,0,5.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-14.7,18,29.1);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.8,0,1,1,-22.7,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-12.4,1,1,-22.7,0,0,5.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-14.5,22.1,28.6);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.7,-0.4,1,1,28,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6.7,-11.3,1,1,-38.5,0,0,5.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-14.8,18.3,29.2);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(2.5,0.3,1,1,52.8,0,0,5.8,13.5);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.1,-12.6,1,1,-15,0,0,5.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-14.2,19.1,27.9);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.4,-0.1,1,1,38.4,0,0,5.8,13.5);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,-12.6,1,1,22.7,0,0,5.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-14.8,22.2,29.2);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0,1,1,17.2,0,0,6,13.6);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,-13,1,1,16.7,0,0,5.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-14.7,18,29.1);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.6,0.5,1,1,1.5,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-11.7,1,1,-24.5,0,0,5.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-14,17.9,28.1);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기다리측면아래("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.8,0,1,1,-22.7,0,0,5.7,13.5);

	this.instance_1 = new lib.코기다리측면위("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-12.4,1,1,-22.7,0,0,5.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-14.5,22.1,28.6);


(lib.코기측면머리 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 코기 측면 헬멧
	this.instance = new lib.코기측면헬멧("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,98,1,1,0,0,0,0,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 코기 측면 입
	this.instance_1 = new lib.코기측면입("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.1,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// 코기 측면 눈
	this.instance_2 = new lib.코기측면눈("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(59.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({scaleY:0.92,y:23.3},0).wait(2).to({scaleY:1,y:22.6,startPosition:1},0).wait(2).to({startPosition:0},0).wait(11));

	// 코기 측면 귀
	this.instance_3 = new lib.코기측면귀("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.4,-30.8,1,1,2.2,0,0,5.5,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({startPosition:0},0).to({regX:5.6,scaleY:0.98,rotation:0,skewX:8.4,skewY:4.7,x:-2.3},3).to({regX:5.5,scaleY:1,skewX:-0.5,skewY:0.2,x:-2.5},2).to({rotation:2.2,skewX:0,skewY:0,x:-2.4},3).wait(8));

	// 코기 측면 얼굴판
	this.instance_4 = new lib.코기측면얼굴판("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.1,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-106.9,240,213.9);


(lib.코기머리측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.코기측면머리("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(125.6,208.6,1,1,0,0,0,5.6,101.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,213.9);


(lib.코기측면 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 코기 다리
	this.instance = new lib.Tween15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(132.5,282.4);

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.8,283.4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween17("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.2,277);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween18("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(110.6,282.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.9,282.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(127.6,278.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween21("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(132.5,282.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:122.8,y:283.4},3).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},3).to({_off:true,x:117.2,y:277},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},3).to({_off:true,x:110.6,y:282.2},3).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},3).to({_off:true,x:118.9,y:282.5},3).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},3).to({_off:true,x:127.6,y:278.1},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},3).to({_off:true,x:132.5,y:282.4},3).wait(1));

	// 코기 머리
	this.instance_7 = new lib.코기머리측면("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(120,213.9,1,1,0,0,0,120,213.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:214,scaleY:0.99,y:222.8},3).to({regY:213.9,scaleY:1.01,y:204.7},3).to({scaleY:1,y:213.9},3).to({regY:214,scaleY:0.99,y:222.8},3).to({regY:213.9,scaleY:1.01,y:209.9},3).to({scaleY:1,y:213.9},3).wait(1));

	// 코기 팔
	this.instance_8 = new lib.코기팔측면("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(119.6,218.5,1,1,0,85.4,-94.6,37.4,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:70.4,skewY:-109.6,x:120.9,y:223.7},3).to({regY:6.9,skewX:36.5,skewY:-143.5,x:119.3,y:216.7},3).to({regY:6.8,skewX:17.2,skewY:-162.8,x:123.7,y:220.1},3).to({regY:6.9,skewX:36.5,skewY:-143.5,x:119.3,y:225.3},3).to({regY:6.8,skewX:70.4,skewY:-109.6,x:120.9,y:220.9},3).to({skewX:85.4,skewY:-94.6,x:119.6,y:218.5},3).wait(1));

	// 코기 몸
	this.instance_9 = new lib.코기몸측면("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(123.1,240.2,1,1,0,0,0,36.6,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.03,scaleY:0.98,y:247.1},3).to({scaleX:0.99,scaleY:1.01,y:231.6},3).to({scaleX:1,scaleY:1,y:240.2},3).to({scaleX:1.03,scaleY:0.98,y:247.1},3).to({scaleX:0.99,scaleY:1.01,y:236.8},3).to({scaleX:1,scaleY:1,y:240.2},3).wait(1));

	// 코기 다리2
	this.instance_10 = new lib.Tween34("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(110.6,282.2);

	this.instance_11 = new lib.Tween33("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(118.9,282.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween32("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(127.6,272.8);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween31("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(132.5,282.4);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween30("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(122.8,283.4);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween28("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(117.2,282.3);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween29("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(110.6,282.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:118.9,y:282.5},3).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},3).to({_off:true,x:127.6,y:272.8},3).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},3).to({_off:true,x:132.5,y:282.4},3).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},3).to({_off:true,x:122.8,y:283.4},3).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},3).to({_off:true,x:117.2,y:282.3},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},3).to({_off:true,x:110.6,y:282.2},3).wait(1));

	// 로켓 부스트
	this.instance_17 = new lib.부스트로켓측면("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(96.3,297.7,1,1,0,0,0,39.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:305.7},3).to({y:288.4},3).to({y:297.7},3).to({y:305.7},3).to({y:293.7},3).to({y:297.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,296.5);


(lib.twinkle_mt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.twinkle();
	this.instance.parent = this;
	this.instance.setTransform(7,8.8,1,1,0,0,0,7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,17.5);


(lib.코기머리 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 코기 정면 입
	this.instance = new lib.코기정면입("single",0);
	this.instance.parent = this;
	this.instance.setTransform(131.1,158.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).to({_off:true},26).wait(5));

	// 코기 정면 눈
	this.instance_1 = new lib.코기정면눈("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(131,130.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(23).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:1},0).wait(3).to({startPosition:0},0).to({_off:true},5).wait(5));

	// 코기 정면 헬멧
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25398C").s().p("AjpBOQgiAAgYgYQgYgYAAghQAAgiAYgYQALgKAMgGQgOATAAAZQAAAfAVAUQAWAWAfAAIGkAAQAeAAAWgWQAVgUABgfQAAgYgOgTQALAGAJAJQAYAYAAAiQAAAhgYAYQgYAYgiAAg");
	this.shape.setTransform(122,206.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F52A1").s().p("AjpBSQgiAAgYgYQgYgYAAgiQAAghAYgYQALgLAMgFQAQgIATAAIHTAAQAUAAASAJQALAFAJAKQAYAYAAAhQAAAigYAYQgYAYgiAAg");
	this.shape_1.setTransform(122,205.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.298)","rgba(255,255,255,0)"],[0,1],160.7,16.7,147.3,53.4).s().p("AsakuQD3iSE9AAQGoAAEsEIQErEGACFzg");
	this.shape_2.setTransform(143,57.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("AtPLrQlgk1AAm2QAAm1Fgk1QFfk1HwAAQHxAAFfE1QFgE1AAG1QAAG2lgE1QlfE1nxAAQnwAAlfk1gAslrFQlOEnAAGeQAAGgFOEmQFOEmHXAAQHYAAFOkmQFOkmAAmgQAAmelOknQlOklnYAAQnXAAlOElg");
	this.shape_3.setTransform(120,105.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},50).wait(5));

	// 코기 정면 얼굴
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CB8F55").s().p("AMYG3QANgxAGg0QgKgYgSgTIAFgQQAehmgOhcQBFBwBdAkQgRASg3AXQA/AWAGAQQhuA0hHBuIAKgjgAupF0QADgiA0gbQhAgegTgOQCAhJA4iRQAVhqAghnQBajJC4hwQiiD1gZDrQgRCdAwCSQgWAIgTALQhSArgvBUQhAhEhdgQg");
	this.shape_4.setTransform(121.1,119.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CB8F55").s().p("AMYG3QANgxAGg0QgKgYgSgTIAFgQQAehmgOhcQBFBwBdAkQgRASg3AXQA/AWAGAQQhuA0hHBuIAKgjgAupF0QADgiA0gbQhAgegTgOQCAhJA4iRQAVhqAghnQBajJC4hwQiiD1gZDrQgRCdAwCSQgWAIgTALQhSArgvBUQhAhEhdgQg");
	this.shape_5.setTransform(121.1,119.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0CDB9").s().p("AAWKWQizgBiegnQimgphkhIQhzhTg2h6IgBgBQgOgTgPgQQhAhEhdgQQADgjA0gaQhAgegTgOQCAhJA4iQQAVhsAghmQBajJC4hwQiiD1gZDsQgRCdAwCRIACAHIAFALQA2CVBwBdQBlBVCSAkQB+AgCYgGQCfgGCEgrQCVgxBoheQBrhfAsiHIAFgQQAehmgOhcQBFBwBdAkQgRASg3AXQA/AVAGARQhuA0hHBuQgvCFh3BcQheBIikApQiYAmizAAIgFAAg");
	this.shape_6.setTransform(121.1,138.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9A471").s().p("AMYH0QANgxAGg0QgKgYgSgTQg0gqhmgUQhngTg9gTQhJgWg4goQg+gtggg8QgZgxgLhIIgOiBQgVjEg6ixIAdADQBVAJBWAcIACABQEcBuBqD3IAIAUQApBvAdByIAVAkQBFBxBdAkQgRARg3AYQA/AVAGARQhuA0hHBuIAKgjgAupGxQADgjA0gaQhAgegTgOQCAhJA4iRQAVhsAghlQBajJC4hwQBHgrBVgeQCIgkB3gKQARBjAHA9QAOCEgNBqQgQB9g5BmQg+BwhjA6Qg5AhhUAWQgXAGiAAaQgjAIgfAMQgWAIgTAKQhSAsgvBUQhAhEhdgQg");
	this.shape_7.setTransform(121.1,113.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7E3CF").s().p("AAWLUQizAAiegnQimgqhkhIQhzhTg2h5IgBgBQgOgUgPgQQhAhDhdgRQADgiA0gbQhAgdgTgOQCAhKA4iQQAVhrAghnQBajJC4hwQBHgrBVgeQCIgjB3gLIAugDIAkgCQAlAAAlADIAdACQBVAJBWAdIACAAQEcBvBqD2IAIAVQApBuAdB0IAVAkQBFBvBdAlQgRARg3AXQA/AWAGARQhuA0hHBtQgvCGh3BbQheBIikApQiYAmizAAIgFAAg");
	this.shape_8.setTransform(121.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},50).wait(5));

	// 코기 정면 귀
	this.instance_2 = new lib.코기정면귀("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(154.8,84.4,1,1,0,0,180,3,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({startPosition:0},0).to({regX:3.1,regY:24.9,skewX:5.2,skewY:185.2,x:154.7},3).to({regX:3,regY:24.8,skewX:-2,skewY:178,x:154.8},3).to({skewX:0,skewY:180},3).to({_off:true},21).wait(5));

	// 코기 정면 귀
	this.instance_3 = new lib.코기정면귀("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(87.5,87.1,1,1,0,0,0,3,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({regY:24.9,rotation:3,y:87.2},0).to({rotation:-7.3,x:87.6},3).to({regY:24.8,rotation:1.7,x:87.5,y:87.1},3).to({rotation:0},3).to({_off:true},21).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,213.9);


(lib.코기 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 코기 다리
	this.instance = new lib.코기다리("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(111.3,269.5,1,1,0,0,0,6.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

	// 코기 머리
	this.instance_1 = new lib.코기머리("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,213.9,1,1,0,0,0,120,213.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:214,scaleY:0.99,y:214.6,startPosition:4},5).to({regY:213.9,scaleY:1,y:213.9,startPosition:9},5).to({scaleY:0.99,y:214.5,startPosition:14},5).to({scaleY:1,y:213.9,startPosition:19},5).to({scaleY:0.99,y:214.5,startPosition:24},5).to({scaleY:1,y:213.9,startPosition:29},5).to({scaleY:0.99,y:214.5,startPosition:34},5).to({scaleY:1,y:213.9,startPosition:39},5).to({scaleY:0.99,y:214.5,startPosition:44},5).to({scaleY:1,y:214.1,startPosition:49},5).wait(1));

	// 코기 팔
	this.instance_2 = new lib.코기팔("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.6,214,1,1,0,0,0,35.1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:35,regY:3.3,rotation:-9.9,x:98.5,y:214.1},5).to({regX:35.1,regY:3.2,rotation:0,x:98.6,y:214},5).to({rotation:-2.9},5).to({rotation:0},5).to({rotation:-2.9},5).to({rotation:0},5).to({rotation:-2.9},5).to({rotation:0},5).to({rotation:-2.9},5).to({rotation:0},5).wait(1));

	// 코기 몸
	this.instance_3 = new lib.코기몸("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(123.1,240.2,1,1,0,0,0,36.6,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:0.99,y:240.7},5).to({scaleX:1,scaleY:1,y:240.2},5).to({scaleX:1,scaleY:0.99,y:240.7},5).to({scaleX:1,scaleY:1,y:240.2},5).to({scaleX:1,scaleY:0.99,y:240.7},5).to({scaleX:1,scaleY:1,y:240.2},5).to({scaleX:1,scaleY:0.99,y:240.7},5).to({scaleX:1,scaleY:1,y:240.2},5).to({scaleX:1,scaleY:0.99,y:240.7},5).to({scaleX:1,scaleY:1,y:240.2},5).wait(1));

	// 코기 다리2
	this.instance_4 = new lib.코기다리2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(131.7,268.8,1,1,0,0,0,6.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51));

	// 코기 팔
	this.instance_5 = new lib.코기팔("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(144.6,214,1,1,0,0,180,35.1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:3.3,skewX:9.7,skewY:189.7,x:144.7,y:214.1},5).to({regY:3.2,skewX:0,skewY:180,x:144.6,y:214},5).to({skewX:1.5,skewY:181.5},5).to({skewX:0,skewY:180},5).to({skewX:1.5,skewY:181.5},5).to({skewX:0,skewY:180},5).to({skewX:1.5,skewY:181.5},5).to({skewX:0,skewY:180},5).to({skewX:1.5,skewY:181.5},5).to({skewX:0,skewY:180},5).wait(1));

	// Layer 9
	this.instance_6 = new lib.부스트로켓("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(113.4,296.5,1,1,0,0,0,39.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,296.3);


(lib.star_mt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(16.2,15.6,1,1,0,0,0,16.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:16.1,scaleX:1.16,scaleY:1.16},15).to({regX:16.2,scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,31.1);


(lib.star_mt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(16.2,15.6,1,1,0,0,0,16.2,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:16.1,regY:15.5,scaleX:1.09,scaleY:1.09,y:15.7},15).to({regX:16.2,regY:15.6,scaleX:1,scaleY:1,y:15.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,31.1);


(lib.scrollbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointer
	this.pointer = new lib.scrollBar_pointer();
	this.pointer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.pointer).wait(1));

	// base
	this.base = new lib.scrollBar_base();
	this.base.parent = this;
	this.base.setTransform(0,109,1,1,0,0,0,4,109);

	this.timeline.addTween(cjs.Tween.get(this.base).wait(1));

}).prototype = getMCSymbolPrototype(lib.scrollbar, new cjs.Rectangle(-8.8,0,17.6,200), null);


(lib.save_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A5185").s().p("AAtBhIAAgsIhwAAIAAgSICFAAIAAA+gAhaAUIAAgSIBQAAIAAgPIg2AAIAAgyIBrAAIAAgQIhsAAIAAgRICBAAIAAAyIhrAAIAAAPIBvAAIAAASIg5AAIAAAPIBQAAIAAASg");
	this.shape.setTransform(50.3,-31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A5185").s().p("AA5BkIAAjHIAVAAIAADHgAhNAnIAdgSIAUgOIAMgMIAHgLQACgGABgGIAAgOIAAgUIhEAAIAAgSIBZAAIAAAmIgBASQAAAHgDAIQgDAGgFAGQgEAHgJAIQgJAIgOAJIghAVg");
	this.shape_1.setTransform(30.2,-32);

	this.instance = new lib.btn_bubble();
	this.instance.parent = this;
	this.instance.setTransform(40.5,-27.5,0.9,0.9,0,0,0,41.4,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 레이어 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiAmQgFgEAAgGQAAgHAMgLIARgMQAIgGAMgFQBBgcBHAAQAKAAAFADQAHAFAAAGQAAAIgGAFQgFADgOAAQhAABg3AXQgQAHgIAGIgLALQgHAFgGAAQgGAAgEgEg");
	this.shape_2.setTransform(32.4,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJASQgHgFgBgNQAAgHADgEQACgEAEgBQAIgEAGACQAGABAEAHQADAFgBAHQAAAGgDAFQgFAGgKABIgBAAQgEAAgEgCg");
	this.shape_3.setTransform(19.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// 레이어 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkCiQgPABgLgLIiwipQgLgLAAgQQAAgPAKgLQALgLAQAAQAQgBALALICVCPIDejeIgBAAQALgLAQgBQAPAAALAMIAAgBQAMALAAAQQAAAPgLALIAAABIj4D5IgBAAQgLALgOgBIgBAAg");
	this.shape_4.setTransform(40.9,45.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// 레이어 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AjtgRICvCpQALALAPgBQAPABALgLQAAAAABAAID4j5QAAAAABgBQAKgLAAgPQAAgQgMgLIABABQgMgMgPAAQgQABgKALIAAAAIjeDeIiViPQgLgLgQAAQgQABgKALQgLALAAAPQAAAQAMALg");
	this.shape_5.setTransform(40.9,45.4,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkCiQgPABgLgLIiwipQgLgLAAgQQAAgPAKgLQALgLAQAAQAQgBALALICVCPIDejeIgBAAQALgLAQgBQAPAAALAMIAAgBQAMALAAAQQAAAPgLALIAAABIj4D5IgBAAQgLALgOgBIgBAAg");
	this.shape_6.setTransform(40.9,45.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(2));

	// 레이어 5
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

	// 레이어 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191919").s().p("AkiEjQh4h5AAiqQAAipB4h4QB5h5CpAAQCqAAB4B5QB5B4gBCpQABCqh5B5Qh4B4iqgBQipABh5h4g");
	this.shape_10.setTransform(41,41,1.08,1.08);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-3.3,88.6,88.6);


(lib.reset_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 2
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiAmQgFgEAAgGQAAgHAMgLIARgMQAIgGAMgFQBBgcBHAAQAKAAAFADQAHAFAAAGQAAAIgGAFQgFADgOAAQhAABg3AXQgQAHgIAGIgLALQgHAFgGAAQgGAAgEgEg");
	this.shape_2.setTransform(32.4,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJASQgHgFgBgNQAAgHADgEQACgEAEgBQAIgEAGACQAGABAEAHQADAFgBAHQAAAGgDAFQgFAGgKABIgBAAQgEAAgEgCg");
	this.shape_3.setTransform(19.4,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

	// 레이어 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkDlQhHgogihGQgGgLAFgMQADgMAMgFQALgFAMAEQALAEAGALQAaA1A3AfQBIArBTgWQBRgWArhKQAqhJgVhQQgWhThKgrQhKgqhRAWQhSAWgqBJQgLASgGATIAqggQAKgHANACQAMABAHAKQAIAKgCANQgCAMgKAHIhiBJIgBABIgCABQgFAEgGABQgEABgFAAIgCAAIgDgBQgHgCgGgFIgCgCIgFgHIg+hiQgGgLADgMQACgMALgHQALgGAMADQAMADAGAKIAVAiQAJgaAOgZQA2hfBrgcQBogdBgA3QBfA4AdBqQAcBpg3BeQg3BghqAcQgkAKgiAAQhDAAg/glg");
	this.shape_4.setTransform(38.5,41.4,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2));

	// 레이어 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AjFiEQgOAZgJAaIgVgiQgGgKgMgDQgMgDgLAGQgLAHgCAMQgDAMAGALIA+BiQACAEADADIACACQAGAFAHACQACAAABABQABAAABAAQAFAAAEgBQAGgBAFgEQABgBABAAQAAgBABAAIBihJQAKgHACgMQACgNgIgKQgHgKgMgBQgNgCgKAHIgqAgQAGgTALgSQAqhJBSgWQBRgWBKAqQBKArAWBTQAVBQgqBJQgrBKhRAWQhTAWhIgrQg3gfgag1QgGgLgLgEQgMgEgLAFQgMAFgDAMQgFAMAGALQAiBGBHAoQBfA4BpgdQBqgcA3hgQA3hegchpQgdhqhfg4Qhfg3hpAdQhrAcg2Bfg");
	this.shape_5.setTransform(38.5,41.4,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.2)").s().p("AhkDlQhHgogihGQgGgLAFgMQADgMAMgFQALgFAMAEQALAEAGALQAaA1A3AfQBIArBTgWQBRgWArhKQAqhJgVhQQgWhThKgrQhKgqhRAWQhSAWgqBJQgLASgGATIAqggQAKgHANACQAMABAHAKQAIAKgCANQgCAMgKAHIhiBJIgBABIgCABQgFAEgGABQgEABgFAAIgCAAIgDgBQgHgCgGgFIgCgCIgFgHIg+hiQgGgLADgMQACgMALgHQALgGAMADQAMADAGAKIAVAiQAJgaAOgZQA2hfBrgcQBogdBgA3QBfA4AdBqQAcBpg3BeQg3BghqAcQgkAKgiAAQhDAAg/glg");
	this.shape_6.setTransform(38.5,41.4,0.95,0.95);

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


(lib.planet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2
	this.instance = new lib.planet_shadow();
	this.instance.parent = this;
	this.instance.setTransform(129.7,136,1,1,0,0,0,119.5,113.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147));

	// 레이어 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnhSBQhUgkhOgwQgngYgkgaQhAgug8g4IglgkQjBjBhbjqQgPgngMgpQgJgcgIgdQgahogIhvQgDgygBg0QAAjvBQjPIALgeQAOggAPgfQA4h0BThoQAwg+A7g6QFtltICAAQIDAAFtFtQApAoAkAqQBDBPAzBVQAbAsAWAuIATAoQA2B5AZCFIAKA6IAEAgIAEAnQAFA8ABA8QAAB6gVByQgQBZgdBVQgUA7gbA5QgZA3ggA0QhPCEh1B0QltFsoDAAQkDAAjehcg");
	mask.setTransform(124.6,124.5);

	// 레이어 4
	this.instance_1 = new lib.planet_long();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.6,113.3,1,1,0,0,0,487.2,255);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:802.1},146).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249.6,249.4);


(lib.miirne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mirine_1
	this.instance = new lib.mirine_1();
	this.instance.parent = this;
	this.instance.setTransform(256.1,124.3,1,1,0,0,0,256.1,157.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({alpha:0},32).to({alpha:1},29).wait(17));

	// mirine_2
	this.instance_1 = new lib.mirine_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.6,131.7,1,1,0,0,0,201.7,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({alpha:0},31).to({alpha:1},29).wait(1));

	// mirine_3
	this.instance_2 = new lib.mirine_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.8,126.8,1,1,0,0,0,296.2,205.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-79,592.4,411.7);


(lib.item_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.text_box = new lib.item_text();
	this.text_box.parent = this;
	this.text_box.setTransform(96.2,28.8,1,1,0,0,0,87.4,25.1);

	this.obj = new lib.obj();
	this.obj.parent = this;
	this.obj.setTransform(127.9,32.2,1,1,0,0,0,24.3,10.2);

	this.exit_btn = new lib.exit_btn();
	this.exit_btn.parent = this;
	this.exit_btn.setTransform(293.2,31.4,0.9,0.9,0,0,0,12.3,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282828").s().rr(-177.5,-33,355,66,10);
	this.shape.setTransform(159.7,29.7,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.exit_btn},{t:this.obj},{t:this.text_box}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item_mc, new cjs.Rectangle(0,0,319.5,59.4), null);


(lib.item_list_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.item_9 = new lib.item_mc();
	this.item_9.parent = this;
	this.item_9.setTransform(159.8,645.3,1,1,0,0,0,159.8,29.7);

	this.item_8 = new lib.item_mc();
	this.item_8.parent = this;
	this.item_8.setTransform(159.8,576.9,1,1,0,0,0,159.8,29.7);

	this.item_7 = new lib.item_mc();
	this.item_7.parent = this;
	this.item_7.setTransform(159.8,508.5,1,1,0,0,0,159.8,29.7);

	this.item_6 = new lib.item_mc();
	this.item_6.parent = this;
	this.item_6.setTransform(159.8,440.1,1,1,0,0,0,159.8,29.7);

	this.item_5 = new lib.item_mc();
	this.item_5.parent = this;
	this.item_5.setTransform(159.8,371.7,1,1,0,0,0,159.8,29.7);

	this.item_4 = new lib.item_mc();
	this.item_4.parent = this;
	this.item_4.setTransform(159.8,303.3,1,1,0,0,0,159.8,29.7);

	this.item_3 = new lib.item_mc();
	this.item_3.parent = this;
	this.item_3.setTransform(159.8,234.9,1,1,0,0,0,159.8,29.7);

	this.item_2 = new lib.item_mc();
	this.item_2.parent = this;
	this.item_2.setTransform(159.8,166.5,1,1,0,0,0,159.8,29.7);

	this.item_1 = new lib.item_mc();
	this.item_1.parent = this;
	this.item_1.setTransform(159.8,98.1,1,1,0,0,0,159.8,29.7);

	this.item_0 = new lib.item_mc();
	this.item_0.parent = this;
	this.item_0.setTransform(159.8,29.7,1,1,0,0,0,159.8,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item_0},{t:this.item_1},{t:this.item_2},{t:this.item_3},{t:this.item_4},{t:this.item_5},{t:this.item_6},{t:this.item_7},{t:this.item_8},{t:this.item_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.item_list_mc, new cjs.Rectangle(0,0,319.5,675), null);


(lib.motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 레이어 1
	this.instance = new lib.코기();
	this.instance.parent = this;
	this.instance.setTransform(207.7,158.6,1,1,0,0,180,120,200.1);

	this.instance_1 = new lib.kogi_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(173,242,0.499,0.499);

	this.instance_2 = new lib.코기측면();
	this.instance_2.parent = this;
	this.instance_2.setTransform(208,159.2,1,1,0,0,180,120,200.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	// planet
	this.instance_3 = new lib.planet1("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(201.7,369.2,1,1,0,0,0,124.6,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({mode:"independent"},0).wait(1));

	// star
	this.instance_4 = new lib.별동별_모션();
	this.instance_4.parent = this;
	this.instance_4.setTransform(189,45.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1));

	// BG
	this.instance_5 = new lib.twinkle_mt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-15.4,60.2,1.2,1.2,0,0,0,7,8.8);

	this.instance_6 = new lib.twinkle_mt();
	this.instance_6.parent = this;
	this.instance_6.setTransform(356.4,13,1,1,0,0,0,7,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AAAD0").s().p("AhGAAQA9gFAJhSQAKBQA9AHQg9AagKA+QgPg+g3gag");
	this.shape.setTransform(171.3,-89.9,0.99,0.99);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9CC0EC").s().p("AhGAAQA9gFAJhSQAKBQA9AHQg9AagKA+QgPg+g3gag");
	this.shape_1.setTransform(322.1,237.1,0.792,0.792);

	this.instance_7 = new lib.star_mt2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7.2,184.2,0.6,0.6,0,0,180,16.1,15.6);

	this.instance_8 = new lib.star_mt();
	this.instance_8.parent = this;
	this.instance_8.setTransform(353.3,136.5,1,1,0,0,0,16.2,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD783").s().p("AAHBdQgDgBgCgDIgegxIg6gCQgEgBgCgCQgDgCgBgDQgCgCABgDQgBgEADgCIAogoIgPgvQAAgGABgDQABgFACgBQADgDAEgBIAHACIAtAVIAogbIAHgCQAEgBADACQAEADABADQACADAAAEIgDAyIApAcQAEABABADIABAHIgEAGQgDADgFACIgwALIgQA4QgBADgCABQgCACgEAAIgBAAIgFgBg");
	this.shape_2.setTransform(88.8,-25,0.99,0.99);

	this.instance_9 = new lib.miirne();
	this.instance_9.parent = this;
	this.instance_9.setTransform(197.1,110.2,1.1,1.1,0,0,0,266.2,166.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.shape_2},{t:this.instance_8},{t:this.instance_7},{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-159.7,651.6,653.7);


// stage content:
(lib.StopWatch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _stage = this;
		var totalItem = 10;
		
		var time = 0;
		var running = 0;
		var mCount = 0;
		
		var timerId = 0;
		var arrId = 0;
		
		var timeArr = new Array(9);
		
		var listY = this.list_mc.y;
		var itemH = 68;
		
		var scrollMaxY = 137;
		var pointer = _stage.scrollBar_mc.pointer;
		
		var tiktok = createjs.Sound.createInstance("eff");
		var effcon = new createjs.PlayPropsConfig().set({interrupt:createjs.Sound.INTERRUPT_ANY, loop:-1});
		
		stage.enableMouseOver();
		
		mouseEvent(this.exit_btn);
		mouseEvent(this.reset_btn);
		mouseEvent(this.save_btn);
		
		this.exit_btn.addEventListener("click", exitEvent.bind(this)); 
		
		this.start_btn.cursor = "pointer";
		this.start_btn.mouseChildren = false;
		this.start_btn.addEventListener("click", startEvent.bind(this));
		
		this.reset_btn.addEventListener("click", resetTimerEvent.bind(this));
		
		this.save_btn.addEventListener("click", saveTimeEvent.bind(this));
		
		this.sound_btn.cursor = "pointer";
		this.sound_btn.addEventListener("click", soundVolumeEvent.bind(this));
		tiktok.volume = 1;
		
		function timeArrEvent()
		{
			for(var i=0; i<totalItem; i++)
			{
				timeArr[i] = new Array(3);
			}
		}
		
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
		
		function startEvent()
		{	
			if(_stage.start_btn.currentFrame == 0)
			{
				_stage.motion_mc.gotoAndStop(1);
				_stage.start_btn.gotoAndStop(1);
			
				if(running == 0)
				{
					running = 1;
					increment();
					
					tiktok.play(effcon);
				}
				else running = 0;
			}
			else
			{
				_stage.motion_mc.gotoAndStop(0);
				_stage.start_btn.gotoAndStop(0);
				clearInterval(timerId);		 
				running = 0;
				tiktok.paused = true;
			}
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
		
		function resetTimerEvent()
		{
			_stage.motion_mc.gotoAndStop(0);
			_stage.start_btn.gotoAndStop(0);
			
			running = 0;
			time = 0;
			mCount = 0;
			arrId = 0;
			
			clearInterval(timerId);
			
			resetTextEvent();
			_stage.list_mc.y = listY;
			
			tiktok.stop();
		}
		
		function resetTextEvent()
		{
			_stage.text_mc.minute.text = "00";
			_stage.text_mc.second.text = "00";
			_stage.text_mc.milli.text = "00";
			
			timeArr = new Array(9);
			timeArrEvent();
			//console.log(timeArr[0][0]);
			
			listResetEvent();
			scrollDefaultEvent();
		}
		
		function listResetEvent()
		{
			for(var i=0; i<totalItem; i++)
			{
				_stage.list_mc["item_"+i].name = "item_"+i;
				_stage.list_mc["item_"+i].text_box.visible = false;
				_stage.list_mc["item_"+i].obj.visible = false;
				_stage.list_mc["item_"+i].exit_btn.visible = false;
			}
		}
		
		function increment()
		{
			if(running == 1)
			{
				timerId = setInterval(function(){
					time++;
					mCount++;
					var mins = Math.floor(time / 10 / 60);
					var secs = Math.floor(time / 10 % 60);
					var millis = mCount * 9;
					
					if(mins < 10)
					{
						mins = "0"+mins;
					}
					if(secs < 10)
					{
						secs = "0"+secs;
					}
					if(millis < 10)
					{
						millis = "0"+millis;
					}
					_stage.text_mc.minute.text = mins;
					_stage.text_mc.second.text = secs;
					_stage.text_mc.milli.text = millis;
					
					if(mCount >= 9) mCount = 0;
					
					//console.log(time);
				},100);
			}
		}
		
		function saveTimeEvent()
		{
			if(arrId != 10)
			{
				var index = 0;
			
				if(arrId < 9) index = "0"+(arrId + 1);
				else index = ""+(arrId + 1);
					
				timeArr[arrId][0] = index;
				timeArr[arrId][1] = _stage.text_mc.minute.text;
				timeArr[arrId][2] = _stage.text_mc.second.text;
				timeArr[arrId][3] = _stage.text_mc.milli.text;
				
				listDiaplayEvent(arrId);
				
				arrId++;
			}
			else
			{
				alert("저장할 수 있는 데이터를 초과하였습니다.");
			}
		}
		
		function listDiaplayEvent(element)
		{
			//console.log(element, timeArr[element][0], timeArr[element][1], timeArr[element][2], timeArr[element][3]);
			
			_stage.list_mc["item_"+element].text_box.visible = true;
			
			_stage.list_mc["item_"+element].text_box.num.text = timeArr[element][0]; 
			_stage.list_mc["item_"+element].text_box.min.text = timeArr[element][1];
			_stage.list_mc["item_"+element].text_box.sec.text = timeArr[element][2];
			_stage.list_mc["item_"+element].text_box.milli.text = timeArr[element][3];
			
			_stage.list_mc["item_"+element].obj.visible = true;
			_stage.list_mc["item_"+element].exit_btn.visible = true;
			
			_stage.list_mc["item_"+element].exit_btn.cursor = "pointer";
			_stage.list_mc["item_"+element].exit_btn.addEventListener("click", removeArrData);
			//console.log(element);
			
			if(element >= 3)
			{
				_stage.list_mc.y = listY - (itemH * (element - 2));
				scrollEvent();
			}
		}
		
		function scrollEvent()
		{
			pointer.y = scrollMaxY;
			pointer.mouseEnabled = true;
			pointer.cursor = "pointer";
			pointer.addEventListener("pressmove", scrollPointerEvent.bind(this));
		}
		
		function scrollPointerEvent(evt)
		{
			var mc = evt.currentTarget;
			var mouseObj = mc.parent.globalToLocal(evt.stageX, evt.stageY);
			
			var limitH = (arrId - 3) * itemH;
			
			//console.log(limitH);
			
			if((mouseObj.y >= 0) && (mouseObj.y <= scrollMaxY))
			{
				mc.y = mouseObj.y;
				_stage.list_mc.y = listY - ((limitH * mc.y) / scrollMaxY);
			}
		}
		
		function scrollDefaultEvent()
		{
			_stage.list_mc.y = listY;
			pointer.y = 0;
			pointer.mouseEnabled = false;
		}
		
		function removeArrData(evt)
		{
			var mc = evt.currentTarget;
			var pItem = mc.parent;
			var index = pItem.name.split("_");
			var element = Number(index[1]);
			
			//console.log("removeArrData ="+index+"arrId="+arrId);
			
			
			for(var i = element; i<arrId; i++)
			{
				if(i == (totalItem - 1))
				{
					//console.log("done");
				}
				else
				{
					timeArr[i][1] = timeArr[i+1][1];
					timeArr[i][2] = timeArr[i+1][2];
					timeArr[i][3] = timeArr[i+1][3];
					
					
					_stage.list_mc["item_"+i].text_box.min.text = timeArr[i][1];
					_stage.list_mc["item_"+i].text_box.sec.text = timeArr[i][2];
					_stage.list_mc["item_"+i].text_box.milli.text = timeArr[i][3];
				}
			}
		
			arrId -= 1;
			
			if(arrId == 3) scrollDefaultEvent();
			if(pointer.y == scrollMaxY) _stage.list_mc.y += itemH;
			
			timeArr[arrId][0] = "";
			timeArr[arrId][1] = "";
			timeArr[arrId][2] = "";
			timeArr[arrId][3] = "";
			
			_stage.list_mc["item_"+arrId].text_box.visible = false;
			_stage.list_mc["item_"+arrId].obj.visible = false;
			_stage.list_mc["item_"+arrId].exit_btn.visible = false;
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
		
		timeArrEvent();
		//resetTextEvent();
		listResetEvent();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// scroll
	this.scrollBar_mc = new lib.scrollbar();
	this.scrollBar_mc.parent = this;
	this.scrollBar_mc.setTransform(1061.2,467.4,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.scrollBar_mc).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAeIA0JIAA/QMAzkAAAIAAfQg");
	mask.setTransform(522.8,333.7);

	// list
	this.list_mc = new lib.item_list_mc();
	this.list_mc.parent = this;
	this.list_mc.setTransform(875.5,804.9,1,1,0,0,0,159.8,337.5);

	var maskedShapeInstanceList = [this.list_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.list_mc).wait(1));

	// obj
	this.text_mc = new lib.timer_text();
	this.text_mc.parent = this;
	this.text_mc.setTransform(893,224.8,1,1,0,0,0,139.3,58.4);

	this.motion_mc = new lib.motion();
	this.motion_mc.parent = this;
	this.motion_mc.setTransform(384.4,549.9,0.9,0.9,0,0,0,201.6,338.2);

	this.sound_btn = new lib.sound();
	this.sound_btn.parent = this;
	this.sound_btn.setTransform(1040.4,396.8,0.9,0.9,0,0,0,25.3,22);

	this.save_btn = new lib.save_btn();
	this.save_btn.parent = this;
	this.save_btn.setTransform(958,394.4,0.9,0.9,0,0,0,41,41);

	this.start_btn = new lib.pause_btn();
	this.start_btn.parent = this;
	this.start_btn.setTransform(862.5,394.5,0.9,0.9,0,0,0,48.4,48.4);

	this.reset_btn = new lib.reset_btn();
	this.reset_btn.parent = this;
	this.reset_btn.setTransform(766.7,394.5,0.9,0.9,0,0,0,41.1,41.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("EghTAdMMAAAg5zQAAi+C+AAMA9PAAAQBrAAAvA9QgvgkhSAAMg9PAAAQi+AAAAC+MAAAA5zQAABSAkAvQg9gvAAhrg");
	this.shape.setTransform(891.4,501.8,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CE5F9").s().p("A+nf4Qi+AAAAi+MAAAg5zQAAi+C+AAMA9PAAAQC+AAAAC+MAAAA5zQAAC+i+AAgEggVgc5MAAAA5zQAABuBuAAMA9PAAAQBuAAAAhuMAAAg5zQAAhuhuAAMg9PAAAQhuAAAABug");
	this.shape_1.setTransform(893,503.4,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("EghTAIGIAAvnQAAi+C+AAMA9PAAAQBrAAAvA9QgvgkhSAAMg9PAAAQi+AAAAC+IAAPnQAABSAkAvQg9gvAAhrg");
	this.shape_2.setTransform(891.4,226.4,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2CE5F9").s().p("A+nKyQi+AAAAi+IAAvnQAAi+C+AAMA9PAAAQC+AAAAC+IAAPnQAAC+i+AAgEggVgHzIAAPnQAABuBuAAMA9PAAAQBuAAAAhuIAAvnQAAhuhuAAMg9PAAAQhuAAAABug");
	this.shape_3.setTransform(893,228,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252323").s().p("A+nJiQhuAAAAhuIAAvnQAAhuBuAAMA9PAAAQBuAAAABuIAAPnQAABuhuAAgA/0ngIAAPDQAABkBkAAMA8rAAAQBkAAAAhkIAAvDQAAhlhkAAMg8rAAAQhkAAAABlg");
	this.shape_4.setTransform(893,228,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("A+nKKQiWAAAAiWIAAvnQAAiWCWAAMA9PAAAQCWAAAACWIAAPnQAACWiWAAg");
	this.shape_5.setTransform(893,228,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252323").s().p("A+neoQhuAAAAhuMAAAg5zQAAhuBuAAMA9PAAAQBuAAAABuMAAAA5zQAABuhuAAgA/+8iMAAAA5FQAABlBkgBMA81AAAQBkABAAhlMAAAg5FQAAhkhkAAMg81AAAQhkAAAABkg");
	this.shape_6.setTransform(893,503.4,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("A+nfQQiWAAAAiWMAAAg5zQAAiWCWAAMA9PAAAQCWAAAACWMAAAA5zQAACWiWAAg");
	this.shape_7.setTransform(893,503.4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.reset_btn},{t:this.start_btn},{t:this.save_btn},{t:this.sound_btn},{t:this.motion_mc},{t:this.text_mc}]}).wait(1));

	// exit
	this.exit_btn = new lib.exit();
	this.exit_btn.parent = this;
	this.exit_btn.setTransform(1238,54.1,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get(this.exit_btn).wait(1));

	// BG
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#252431").s().p("Ehj/A+gMAAAh8/MDH/AAAMAAAB8/g");
	this.shape_8.setTransform(640,400);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.5,400,2169.5,800);
// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 24,
	color: "#252431",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bit1.png?1489034626676", id:"bit1"},
		{src:"images/bit2.png?1489034626676", id:"bit2"},
		{src:"images/kogi_shadow.png?1489034626676", id:"kogi_shadow"},
		{src:"sounds/eff.mp3?1489034626676", id:"eff"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
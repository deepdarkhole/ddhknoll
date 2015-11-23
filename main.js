var stage;
var items;
var myButtons;
var gridSize;
var images = [
	"black notepaper.png",
	"kraft notepaper.png",
	"old book.png",
	"sketch book.png",
	"spatula.png",
	"clamp-1.png",
	"clamp.png",
	"eraser.png",
	"glass.png",
	"old clamp.png",
	"old clock.png",
	"old lighter.png",
	"old small mirror.png",
	"ring.png",
	"sharpener.png",
	"wood cubes.png",
	"wood pen.png",
	"brush.png",
	"color pen-1.png",
	"color pen.png",
	"compasses.png",
	"old ruler.png",
	"pen-1.png",
	"pen-2.png",
	"pen-3.png",
	"pen-4.png",
	"pen-5.png",
	"pen.png",
	"ruler-1.png",
	"ruler.png",
	"soft pastel.png",
	"watercolor.png",
	"brush box.png",
	"brush-1.png",
	"brush-2.png",
	"brush-3.png",
	"brush-4.png",
	"brush-5.png",
	"brush-6.png",
	"color tube box.png",
	"green bottle-1.png",
	"green bottle.png",
	"green color bottle.png",
	"orange bottle.png",
	"small pairs.png",
	"yellow bottle .png",
	"business card box.png",
	"circle pail.png",
	"circle pair.png",
	"Old Box-1.png",
	"old box-2.png",
	"old box.png",
	"tablet pen box.png",
	"tablet.png",
	"box.png",
	"coffee cup.png",
	"earphones.png",
	"flower.png",
	"keyboard.png",
	"laptop.png",
	"lens.png",
	"mouse.png",
	"old camera.png",
	"tablet pen.png",
	"colours.png",
	"flash.png",
	"needle.png",
	"pen box.png",
	"pen holder.png"];

window.addEventListener( 'resize', resize, false );

function init() {

    stage = new createjs.Stage( "demoCanvas" );
    stage.enableMouseOver();
    stage.mouseMoveOutside = true;

    resize();

    createjs.Touch.enable(stage);

	items = new createjs.Container();
	items.x = items.y = 0;

    myButtons = new Array();
    for( var i = 0; i < images.length; i++ )
    {
        var color = randomColor();
        var button = new Button( i, color, images[i] );
        myButtons.push( button );
        button.rotation = Math.random() * 360;
        items.addChild( button );
    }
    
    stage.addChild(items);
    stage.update();
    // Center
    center();
    
    // Update
    createjs.Ticker.addEventListener( "tick", tick );
    createjs.Ticker.setFPS( 60 );
}

function tick( event ) {
    var deltaTime = event.delta/1000;
    stage.update();
    center();
}

function center()
{
	var bounds = items.getBounds();
	items.x = window.innerWidth * 0.5;
	items.y = window.innerHeight * 0.5;
}

function resize() {
    stage.clear();
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;

    var units = 30;
    var xGridSize = stage.canvas.height / units;
    var yGridSize = stage.canvas.width / units;

    gridSize = ( xGridSize < yGridSize ) ? xGridSize : yGridSize;

    /*
    if ( myButtons == null || myButtons.length <= 0 ) return;
    for( var i = 0; i < myButtons.length; i++ )
    {
        myButtons[i].resize();
    }
    */
}



// setting up canvas and constants
const rows = 100;
const columns = 100;
const cell_size = 10; // 20x20 grid

const c = document.querySelector('canvas');
const c_i = document.querySelector('#cell-index');
const ctx = c.getContext('2d');

var mouse = {x: undefined, y: undefined, isClicked: false};
var grid, swatch;

const def_color_array = ["#FFFFFF","#E4E4E4","#888888","#222222","#FFA7D1","#E50000","#E59500","#A06A42","#E5D900","#94E044","#02BE01","#00D3DD","#0083C7","#0000EA","#CF6EE4","#820080"];

/// MOUSE INPUT SECTION
c.addEventListener("mousemove",(e)=> {
	// mouse_coordinate - element_position_offset - border_width
    mouse.x = e.clientX-c.offsetLeft-20;
   	mouse.y = e.clientY-c.offsetTop-20;
});
c.addEventListener("mousedown",(e)=> mouse.isClicked = true);
c.addEventListener("mouseup",(e)=> mouse.isClicked = false);
/// MOUSE INPUT SECTION

// Initialization
function init() {
	grid = new Grid(rows, columns, cell_size);
	swatch = new Swatch(def_color_array);
	swatch.setSwatchView();

	// setup code here
    animate();
}

// animation loop
function animate() {
    requestAnimationFrame(animate);
	ctx.clearRect(0, 0, rows*cell_size, columns*cell_size);
	grid.update(mouse, ctx)
}
init();


function displayCellIndex(x, y) {
	c_i.innerHTML = x + ", " + y;
}

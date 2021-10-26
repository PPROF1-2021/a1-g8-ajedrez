
let ultimotiempo = 0;
let intervaloTiempo = 1000;
let contador = 0;

const canvas = document.getElementById("tetris");
const canvasNext = document.getElementById("proxPieza");
const context = canvas.getContext("2d");
const ctxNext = canvasNext.getContext("2d");
const grid = crearMatriz(10,20);
const colores = [
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];
const jugador ={
    pos:{x:0, y:0},
    Matriz:null,
    next:null,
    score:0,
    level:0,
    linea:0,
};

//10 filas y 20 columnas entonces divido 200 que es el ancho /20 = 10 columnas
// 400 que es el alto /20 = 20 filas
context.scale(20,20);
ctxNext.scale(18,18);

function createPiece(type){
    switch(type){
        case "I":
            return [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
            ];
            break;
        case "L":
            return [
                [0, 2, 0],
                [0, 2, 0],
                [0, 2, 2],
            ];
            break;
            case "J":
                return [
                    [0, 3, 0],
                    [0, 3, 0],
                    [3, 3, 0],
                ];
            break;
            case "O":
                return [
                    [4, 4],
                    [4, 4],
                ];
            break;
            case "Z":
                return [
                    [5, 5, 0],
                    [0, 5, 5],
                    [0, 0, 0],
                ];    
            break;
            case "S":
                return [
                    [0, 6, 6],
                    [6, 6, 0],
                    [0, 0, 0],
                ];
            break;
            case "T":
                return [
                    [0, 7, 0],
                    [7, 7, 7],
                    [0, 0, 0],
                ];
            break;        
    };
    
}

function crearMatriz(width,height){
    const Matriz=[];

    while(height--){
        Matriz.push(new Array(width ).fill(0));
        
    }
    return Matriz;
}

function collide(grid, jugador) {
    const m = jugador.Matriz;
    const o = jugador.pos;
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
               (grid[y + o.y] &&
                grid[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

function merge(grid, jugador) {
    jugador.Matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                grid[y + jugador.pos.y][x + jugador.pos.x] = value;
            }
        });
    });
}


// llamo las piezas cada ves que una llega al fondo del grid 
//uso math.random para que sean al azar


//recorre la matriz por la posicion "Y" y luego la recorro por la posicion "x"
function dibujarMatriz(Matriz, offset){

    Matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!==0){
                context.fillStyle = colores[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1 );
            }
        });
    });

}
function dibujarMatrizNext(Matriz, offset){
    ctxNext.fillStyle = "#000";
    ctxNext.fillRect(0,0, canvasNext.width, canvasNext.height);

    Matriz.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value!==0){
                ctxNext.fillStyle = colores[value];
                ctxNext.fillRect(x + offset.x, y + offset.y, 1, 1 );
            }
        });
    });

}
// dibujar el canvas para no saturar a la funcion actualizar
function dibujar(){
    context.fillStyle = "#000";
    context.fillRect(0,0, canvas.width, canvas.height);
    dibujarMatriz(grid, {x:0, y:0});
    dibujarMatriz(jugador.Matriz, jugador.pos);
    dibujarMatrizNext(jugador.next, {x:1, y:1 });
}

function actualizar(time = 0) {
const deltaTime = time - ultimotiempo;
 ultimotiempo = time;
 contador += deltaTime;
 if(contador>intervaloTiempo){
    playerDrop();
 }
 dibujar();   
requestAnimationFrame(actualizar);
}

function pausa(pau) {
    pausa = pau; 
}

function playerDrop() {
    jugador.pos.y++;
    if (collide(grid, jugador)) {
        jugador.pos.y--;
        merge(grid,jugador);
        playerReset();
        eliminar();
        updateScore();
        
    }
    contador = 0;
}

function eliminar() {
    var rowCount = 1;
    outer: for (let y = grid.length -1; y > 0; --y) {
        for (let x = 0; x < grid[y].length; ++x) {
            if (grid[y][x] === 0) {
                continue outer;                               
            }
        }
//borrar la fila uso unshifth con grid splice elegi cual borrar
        const row = grid.splice(y, 1)[0].fill(0);
        grid.unshift(row);
        ++y;//acumula los puntos
//por cada linea que borra a 1 * 10 en el puntaje
        jugador.score += rowCount * 10;
        
        jugador.linea++;
        rowCount *= 2;
        if(jugador.linea%3===0)jugador.level++;
    }
    
}

function playerMove(offset) {
    jugador.pos.x += offset;
    if (collide(grid, jugador)) {
        jugador.pos.x -= offset;
    }
}
function playerRotate(dir){
    const pos = jugador.pos.x;
    let offset = 1;
    rotate(jugador.Matriz, dir);
    while (collide(grid, jugador)) {
        jugador.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > jugador.Matriz[0].length) {
            rotate(jugador.Matriz, -dir);
            jugador.pos.x = pos;
            return;
        }
    }
}

function rotate(Matriz, dir) {
    for (let y = 0; y < Matriz.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                Matriz[x][y],
                Matriz[y][x],
            ] = [
                Matriz[y][x],
                Matriz[x][y],
            ];
        }
    }

    if (dir > 0) {
        Matriz.forEach(row => row.reverse());
    } else {
        Matriz.reverse();
    }
}

function playerReset() {
    const pieces = 'TJLOSZI';
    intervaloTiempo = 1000 - (jugador.level*100);
    if(jugador.next===null){
        jugador.Matriz = createPiece(pieces[pieces.length * Math.random() | 0]);
    } else {
        jugador.Matriz = jugador.next;
    }
    jugador.next =  createPiece(pieces[pieces.length * Math.random() | 0]);
    
    //acomodar las piezas para que salgan del medio dividi la mitad del grid 
    jugador.pos.x = (grid[0].length / 2 | 0) -
                   (jugador.Matriz[0].length / 2 | 0);
    jugador.pos.y = 0;
    // termina el juego cuando coliciona con el canvas
    if(collide(grid, jugador)) {
        grid.forEach(row => row.fill(0));
        jugador.score=0;
        jugador.level=0;
        jugador.linea=0;
        updateScore();
    }
    
}
function updateScore() {
    document.getElementById('score').innerText = jugador.score;
    document.getElementById('linea').innerText = jugador.linea;
    document.getElementById('level').innerText = jugador.level;
}

//mover Piezzas con las flechas del teclado abajo derecha izquierda barra espaciadora rota
 document.addEventListener("keydown", event => {
     switch(event.keyCode){
         case 40:
             playerDrop();
             break;
             case 37:
                playerMove(-1);
             break;
             case 39:
                playerMove(1);
             break;
             case 32:
                playerRotate();
             break;
             
     };
    
 });

 
 playerReset();
 updateScore();
 actualizar();
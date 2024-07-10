let box = document.querySelector(".box")
let container = document.querySelector(`.container`)
let pivot = document.querySelector(`.pivot`)
let isMouseDown = false
let initialX = 0
let initialY = 0

let RotatorButtons = document.querySelectorAll(".rotateButton")
pivot.addEventListener('mousedown', function (e) {
    isMouseDown = true
    initialX = e.clientX
    initialY = e.clientY
    document.documentElement.style.setProperty('--cursorRotator', 'move');
})
document.documentElement.addEventListener('mouseup', function (e) {
    isMouseDown = false
    document.documentElement.style.setProperty('--cursorRotator', 'grab');
})
container.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        let diffX = e.clientX - initialX
        let diffY = e.clientY - initialY
        rotateCube(diffX, diffY)
        initialX = e.clientX
        initialY = e.clientY
    }
})

function rotateCube(diffX, diffY) {
    let rotationX = parseFloat(box.style.getPropertyValue("--rotationX") || 0)
    let rotationY = parseFloat(box.style.getPropertyValue("--rotationY") || 0)
    box.style.setProperty("--rotationX", rotationX + diffY * 0.3 + "deg")
    box.style.setProperty("--rotationY", rotationY + diffX * 0.3 + "deg")
}

let piecesNode
let pieces
let frontPieces
let centerPieces
let backPieces
let upNode
let upPieces
let rightNode
let rightPieces
let leftNode
let leftPieces
let medNode
let medPieces
let midNode
let midPieces
let bottomNode
let bottomPieces

function atualizarPeças() {
    piecesNode = document.querySelectorAll('.block')
    pieces = Array.prototype.slice.call(piecesNode);

    frontPieces = document.querySelectorAll('.front')
    centerPieces = document.querySelectorAll('.center')
    backPieces = document.querySelectorAll('.back')

    upNode = document.querySelectorAll('.b1,.b2,.b3')
    upPieces = Array.prototype.slice.call(upNode);

    rightNode = document.querySelectorAll('.b1,.b4,.b7')
    rightPieces = Array.prototype.slice.call(rightNode);

    leftNode = document.querySelectorAll('.b3,.b6,.b9')
    leftPieces = Array.prototype.slice.call(leftNode);

    midNode = document.querySelectorAll('.b2,.b5,.b8')
    midPieces = Array.prototype.slice.call(midNode);

    medNode = document.querySelectorAll('.b4,.b5,.b6')
    medPieces = Array.prototype.slice.call(medNode);

    bottomNode = document.querySelectorAll('.b7,.b8,.b9')
    bottomPieces = Array.prototype.slice.call(bottomNode);
}
atualizarPeças()

let UPleftDirection = [{ position: 'front', block: 'b1' }, { position: 'front', block: 'b2' }, { position: 'front', block: 'b3' }, { position: 'center', block: 'b3' }, { position: 'back', block: 'b3' }, { position: 'back', block: 'b2' }, { position: 'back', block: 'b1' }, { position: 'center', block: 'b1' }]
let UPrightDirection = UPleftDirection.slice().reverse();

let MEDleftDirection = [{ position: 'front', block: 'b4' }, { position: 'front', block: 'b5' }, { position: 'front', block: 'b6' }, { position: 'center', block: 'b6' }, { position: 'back', block: 'b6' }, { position: 'back', block: 'b5' }, { position: 'back', block: 'b4' }, { position: 'center', block: 'b4' }]
let MEDrightDirection = MEDleftDirection.slice().reverse();

let BOTTOMleftDirection = [{ position: 'front', block: 'b7' }, { position: 'front', block: 'b8' }, { position: 'front', block: 'b9' }, { position: 'center', block: 'b9' }, { position: 'back', block: 'b9' }, { position: 'back', block: 'b8' }, { position: 'back', block: 'b7' }, { position: 'center', block: 'b7' }]
let BOTTOMrightDirection = BOTTOMleftDirection.slice().reverse();

let RIGHTupDirection = [{ position: 'front', block: 'b1' }, { position: 'center', block: 'b1' }, { position: 'back', block: 'b1' }, { position: 'back', block: 'b4' }, { position: 'back', block: 'b7' }, { position: 'center', block: 'b7' }, { position: 'front', block: 'b7' }, { position: 'front', block: 'b4' }]
let RIGHTbottomDirection = RIGHTupDirection.slice().reverse();

let FRONTclockwiseDirection = [{ position: 'front', block: 'b1' }, { position: 'front', block: 'b2' }, { position: 'front', block: 'b3' }, { position: 'front', block: 'b6' }, { position: 'front', block: 'b9' }, { position: 'front', block: 'b8' }, { position: 'front', block: 'b7' }, { position: 'front', block: 'b4' }];
let FRONTanticlockwiseDirection = FRONTclockwiseDirection.slice().reverse()

let LEFTupDirection = [{ position: 'front', block: 'b3' }, { position: 'center', block: 'b3' }, { position: 'back', block: 'b3' }, { position: 'back', block: 'b6' }, { position: 'back', block: 'b9' }, { position: 'center', block: 'b9' }, { position: 'front', block: 'b9' }, { position: 'front', block: 'b6' }];
let LEFTdownDirection = LEFTupDirection.slice().reverse();

let BACKclockwiseDirection = [{ position: 'back', block: 'b1' }, { position: 'back', block: 'b2' }, { position: 'back', block: 'b3' }, { position: 'back', block: 'b6' }, { position: 'back', block: 'b9' }, { position: 'back', block: 'b8' }, { position: 'back', block: 'b7' }, { position: 'back', block: 'b4' }];
let BACKanticlockwiseDirection = BACKclockwiseDirection.slice().reverse();

let CENTERclockwiseDirection = [{ position: 'center', block: 'b1' }, { position: 'center', block: 'b2' }, { position: 'center', block: 'b3' }, { position: 'center', block: 'b6' }, { position: 'center', block: 'b9' }, { position: 'center', block: 'b8' }, { position: 'center', block: 'b7' }, { position: 'center', block: 'b4' }];
let CENTERanticlockwiseDirection = CENTERclockwiseDirection.slice().reverse();

let MIDupDirection = [{ position: 'front', block: 'b2' }, { position: 'center', block: 'b2' }, { position: 'back', block: 'b2' }, { position: 'back', block: 'b5' }, { position: 'back', block: 'b8' }, { position: 'center', block: 'b8' }, { position: 'front', block: 'b8' }, { position: 'front', block: 'b5' }];
let MIDdownDirection = MIDupDirection.slice().reverse()

let pieceTopDirection = ["front", "top", "back", "bottom", "front", "left", "left", "right", "right"]
let pieceBottomDirection = pieceTopDirection.slice().reverse();

let pieceClowiseDirection = ["top", "right", "bottom", "left", "top", "front", "front", "back", "back"]
let pieceAntiClockwiseDirection = pieceClowiseDirection.slice().reverse();
let pieceRightDirection = ["front", "right", "back", "left", "front", "top", "top", "bottom", "bottom"]
let pieceLeftDirection = pieceRightDirection.slice().reverse();

let AxisTopDirection = ["Z+", "Y-", "Z-", "Y+", "Z+", "X+", "X+", "X-", "X-"]
let AxisBottomDirection = AxisTopDirection.slice().reverse();
let AxisLeftDirection = ["Z+", "X+", "Z-", "X-", "Z+", "Y+", "Y+", "Y-", "Y-"]
let AxisRightDirection = AxisLeftDirection.slice().reverse();
let AxisClockwiseDirection = ["Y-", "X+", "Y+", "X-", "Y-", "Z+", "Z+", "Z-", "Z-"]
let AxisAntiClockwiseDirection = AxisClockwiseDirection.slice().reverse();


pieces.forEach(piece => {
    piece.Yindex = 0
    piece.Xindex = 0
    piece.Zindex = 0
    piece.EixoY = "Y-"
    piece.EixoX = "X+"
    piece.EixoZ = "Z+"
    piece.rotation;
    piece.Zrotation = "Z0"
    let computedTransform = getComputedStyle(piece).getPropertyValue('transform');
    let matrix = new DOMMatrix(computedTransform);
    let translateX = matrix.m41;
    let translateY = matrix.m42;
    let translateZ = matrix.m43;
    let rotateX = Math.atan2(-matrix.m23, matrix.m33) * (180 / Math.PI);
    let rotateY = Math.asin(matrix.m13) * (180 / Math.PI);
    let rotateZ = Math.atan2(-matrix.m12, matrix.m11) * (180 / Math.PI);
    piece.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    eval(` ${piece.classList[1] + piece.classList[2]} = piece.style.transform`)
});

function atualizarEixos(eixoRotacionado, piece, nextTransform) {
    let Ycontainer
    let Zcontainer
    let Xcontainer
    let nextPointIndex;
    //    if((eixoRotacionado == "Y+"||eixoRotacionado =="Y-")&& !(piece.EixoY == "Y+"||piece.EixoY =="Y-")){
    //     eixoRotacionado = EixoContrario(eixoRotacionado)
    //    } 
    //    if((eixoRotacionado == "Z+"||eixoRotacionado =="Z-")&& (piece.EixoY == "Z+"||piece.EixoY =="Z-")){
    //     eixoRotacionado = EixoContrario(eixoRotacionado)
    //    }

    switch (eixoRotacionado) {
        case 'X+':
            nextPointIndex = AxisBottomDirection.findIndex(AXI => AXI == piece.EixoY) + 1
            piece.EixoY = AxisBottomDirection[nextPointIndex]
            nextPointIndex = AxisBottomDirection.findIndex(AXI => AXI == piece.EixoZ) + 1
            piece.EixoZ = AxisBottomDirection[nextPointIndex]
            nextPointIndex = AxisBottomDirection.findIndex(AXI => AXI == piece.EixoX) + 1
            piece.EixoX = AxisBottomDirection[nextPointIndex]
            findRotation(piece, piece.EixoX, piece.EixoY, piece.EixoZ, nextTransform)
            break;
        case 'X-':
            nextPointIndex = AxisTopDirection.findIndex(AXI => AXI == piece.EixoY) + 1
            piece.EixoY = AxisTopDirection[nextPointIndex]
            nextPointIndex = AxisTopDirection.findIndex(AXI => AXI == piece.EixoZ) + 1
            piece.EixoZ = AxisTopDirection[nextPointIndex]
            nextPointIndex = AxisTopDirection.findIndex(AXI => AXI == piece.EixoX) + 1
            piece.EixoX = AxisTopDirection[nextPointIndex]
            findRotation(piece, piece.EixoX, piece.EixoY, piece.EixoZ, nextTransform)
            break;
        case 'Y-':
            nextPointIndex = AxisLeftDirection.findIndex(AXI => AXI == piece.EixoX) + 1
            piece.EixoX = AxisLeftDirection[nextPointIndex]
            nextPointIndex = AxisLeftDirection.findIndex(AXI => AXI == piece.EixoZ) + 1
            piece.EixoZ = AxisLeftDirection[nextPointIndex]
            nextPointIndex = AxisLeftDirection.findIndex(AXI => AXI == piece.EixoY) + 1
            piece.EixoY = AxisLeftDirection[nextPointIndex]
            findRotation(piece, piece.EixoX, piece.EixoY, piece.EixoZ, nextTransform)
            break;
        case 'Y+':

            nextPointIndex = AxisRightDirection.findIndex(AXI => AXI == piece.EixoX) + 1
            piece.EixoX = AxisRightDirection[nextPointIndex]
            nextPointIndex = AxisRightDirection.findIndex(AXI => AXI == piece.EixoZ) + 1
            piece.EixoZ = AxisRightDirection[nextPointIndex]
            nextPointIndex = AxisRightDirection.findIndex(AXI => AXI == piece.EixoY) + 1
            piece.EixoY = AxisRightDirection[nextPointIndex]
            findRotation(piece, piece.EixoX, piece.EixoY, piece.EixoZ, nextTransform)
            break;
        case 'Z+':
            nextPointIndex = AxisAntiClockwiseDirection.findIndex(AXI => AXI == piece.EixoY) + 1
            piece.EixoY = AxisAntiClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisAntiClockwiseDirection.findIndex(AXI => AXI == piece.EixoX) + 1
            piece.EixoX = AxisAntiClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisAntiClockwiseDirection.findIndex(AXI => AXI == piece.EixoZ) + 1
            piece.EixoZ = AxisAntiClockwiseDirection[nextPointIndex]
            findRotation(piece, piece.EixoX, piece.EixoY, piece.EixoZ, nextTransform)

            break;
        case 'Z-':
            nextPointIndex = AxisClockwiseDirection.findIndex(AXI => AXI == piece.EixoY) + 1
            piece.EixoY = AxisClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisClockwiseDirection.findIndex(AXI => AXI == piece.EixoX) + 1
            piece.EixoX = AxisClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisClockwiseDirection.findIndex(AXI => AXI == piece.EixoZ) + 1
            piece.EixoZ = AxisClockwiseDirection[nextPointIndex]
            findRotation(piece, piece.EixoX, piece.EixoY, piece.EixoZ, nextTransform)
            break;
    }
}
function atualizarEixosPseudo(eixoRotacionado, piece, count) {
    let Ycontainer
    let Zcontainer
    let Xcontainer
    let nextPointIndex;
    //    if((eixoRotacionado == "Y+"||eixoRotacionado =="Y-")&& !(piece.EixoY == "Y+"||piece.EixoY =="Y-")){
    //     eixoRotacionado = EixoContrario(eixoRotacionado)
    //    } 
    //    if((eixoRotacionado == "Z+"||eixoRotacionado =="Z-")&& (piece.EixoY == "Z+"||piece.EixoY =="Z-")){
    //     eixoRotacionado = EixoContrario(eixoRotacionado)
    //    }

    switch (eixoRotacionado) {
        case 'X+':
            nextPointIndex = AxisBottomDirection.findIndex(AXI => AXI == piece.EixoYpseudo) + 1
            piece.EixoYpseudo = AxisBottomDirection[nextPointIndex]
            nextPointIndex = AxisBottomDirection.findIndex(AXI => AXI == piece.EixoZpseudo) + 1
            piece.EixoZpseudo = AxisBottomDirection[nextPointIndex]
            nextPointIndex = AxisBottomDirection.findIndex(AXI => AXI == piece.EixoXpseudo) + 1
            piece.EixoXpseudo = AxisBottomDirection[nextPointIndex]

            if (count) {
                piece.Xindex += 1

            }
            //     if (piece.Identifier == "aqui") {
            //         console.log(`Xindex: ${piece.Xindex} | Yindex: ${piece.Yindex} | Zindex: ${piece.Zindex}  
            // eixoX: ${piece.EixoX} | eixoY: ${piece.EixoY} | eixoZ: ${piece.EixoZ} 
            // direção-peça: ${piece.rotation}`);}
            break;
        case 'X-':
            nextPointIndex = AxisTopDirection.findIndex(AXI => AXI == piece.EixoYpseudo) + 1
            piece.EixoYpseudo = AxisTopDirection[nextPointIndex]
            nextPointIndex = AxisTopDirection.findIndex(AXI => AXI == piece.EixoZpseudo) + 1
            piece.EixoZpseudo = AxisTopDirection[nextPointIndex]
            nextPointIndex = AxisTopDirection.findIndex(AXI => AXI == piece.EixoXpseudo) + 1
            piece.EixoXpseudo = AxisTopDirection[nextPointIndex]
            if (count) {
                piece.Xindex -= 1
            }
            break;
        case 'Y-':
            nextPointIndex = AxisLeftDirection.findIndex(AXI => AXI == piece.EixoXpseudo) + 1
            piece.EixoXpseudo = AxisLeftDirection[nextPointIndex]
            nextPointIndex = AxisLeftDirection.findIndex(AXI => AXI == piece.EixoZpseudo) + 1
            piece.EixoZpseudo = AxisLeftDirection[nextPointIndex]
            nextPointIndex = AxisLeftDirection.findIndex(AXI => AXI == piece.EixoYpseudo) + 1
            piece.EixoYpseudo = AxisLeftDirection[nextPointIndex]
            if (count) {
                piece.Yindex -= 1
            }

            break;
        case 'Y+':

            nextPointIndex = AxisRightDirection.findIndex(AXI => AXI == piece.EixoXpseudo) + 1
            piece.EixoXpseudo = AxisRightDirection[nextPointIndex]
            nextPointIndex = AxisRightDirection.findIndex(AXI => AXI == piece.EixoZpseudo) + 1
            piece.EixoZpseudo = AxisRightDirection[nextPointIndex]
            nextPointIndex = AxisRightDirection.findIndex(AXI => AXI == piece.EixoYpseudo) + 1
            piece.EixoYpseudo = AxisRightDirection[nextPointIndex]
            if (count) {
                piece.Yindex += 1
            }

            break;
        case 'Z+':
            nextPointIndex = AxisAntiClockwiseDirection.findIndex(AXI => AXI == piece.EixoYpseudo) + 1
            piece.EixoYpseudo = AxisAntiClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisAntiClockwiseDirection.findIndex(AXI => AXI == piece.EixoXpseudo) + 1
            piece.EixoXpseudo = AxisAntiClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisAntiClockwiseDirection.findIndex(AXI => AXI == piece.EixoZpseudo) + 1
            piece.EixoZpseudo = AxisAntiClockwiseDirection[nextPointIndex]
            if (count) {
                piece.Zindex += 1
            }

            break;
        case 'Z-':
            nextPointIndex = AxisClockwiseDirection.findIndex(AXI => AXI == piece.EixoYpseudo) + 1
            piece.EixoYpseudo = AxisClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisClockwiseDirection.findIndex(AXI => AXI == piece.EixoXpseudo) + 1
            piece.EixoXpseudo = AxisClockwiseDirection[nextPointIndex]
            nextPointIndex = AxisClockwiseDirection.findIndex(AXI => AXI == piece.EixoZpseudo) + 1
            piece.EixoZpseudo = AxisClockwiseDirection[nextPointIndex]
            if (count) {
                piece.Zindex -= 1
            }
            break;
    }
}
function EixoContrario(eixo) {
    switch (eixo) {
        case "X+": return "X-";
        case "X-": return "X+";
        case "Y+": return "Y-";
        case "Y-": return "Y+";
        case "Z+": return "Z-";
        case "Z-": return "Z+";
        default: return null;
    }
}
function rotateBLOCK(blockArray, blockDirection, pieceRotate, pieceAxi, center) {
    blockArray.forEach((piece, i) => {
        piece.rotation = pieceRotate
        if (piece.className != center) {
            let nextPointIndex = blockDirection.findIndex(point => point.position === piece.classList[1] && point.block === piece.classList[2]);
            let nextPoint = blockDirection[(nextPointIndex + 2) % 8];
            let nextTransform = eval(`${nextPoint.position + nextPoint.block}`)

            piece.classList.remove(piece.classList[1], piece.classList[2]);
            piece.classList.add(nextPoint.position, nextPoint.block);
            atualizarEixos(eval(pieceAxi), piece, nextTransform)

        } else {
            let nextPoint = { position: piece.classList[1], block: piece.classList[2] };
            let nextTransform = eval(`${nextPoint.position + nextPoint.block}`)
            atualizarEixos(eval(pieceAxi), piece, nextTransform)


        }
    })
}
function leftRotation(position) {
    switch (position) {
        case "up": rotateBLOCK(upPieces, UPleftDirection, "left", "EixoContrario(piece.EixoY)", "block center b2"); atualizarPeças(); break;
        case "med": rotateBLOCK(medPieces, MEDleftDirection, "left", "EixoContrario(piece.EixoY)", "block center b5"); atualizarPeças(); break;
        case "bottom": rotateBLOCK(bottomPieces, BOTTOMleftDirection, "left", "EixoContrario(piece.EixoY)", "block center b8"); atualizarPeças(); break;
    }
}


function rightRotation(position) {
    switch (position) {
        case "up": rotateBLOCK(upPieces, UPrightDirection, "left", "piece.EixoY", "block center b2"); atualizarPeças(); break;
        case "med": rotateBLOCK(medPieces, MEDrightDirection, "left", "piece.EixoY", "block center b5"); atualizarPeças(); break;
        case "bottom": rotateBLOCK(bottomPieces, BOTTOMrightDirection, "left", "piece.EixoY", "block center b8"); atualizarPeças(); break;
    }
}


function topRotation(position) {
    switch (position) {
        case "right": rotateBLOCK(rightPieces, RIGHTupDirection, "top", "piece.EixoX", "block center b4"); atualizarPeças(); break;
        case "center": rotateBLOCK(midPieces, MIDupDirection, "top", "piece.EixoX", "block center b5"); atualizarPeças(); break;
        case "left": rotateBLOCK(leftPieces, LEFTupDirection, "top", "piece.EixoX", "block center b6"); atualizarPeças(); break;
    }
}
function downRotation(position) {
    switch (position) {
        case "right": rotateBLOCK(rightPieces, RIGHTbottomDirection, "top", "EixoContrario(piece.EixoX)", "block center b4"); atualizarPeças(); break;
        case "center": rotateBLOCK(midPieces, MIDdownDirection, "top", "EixoContrario(piece.EixoX)", "block center b5"); atualizarPeças(); break;
        case "left": rotateBLOCK(leftPieces, LEFTdownDirection, "top", "EixoContrario(piece.EixoX)", "block center b6"); atualizarPeças(); break;
    }
}
function ClockwiseRotation(position) {
    switch (position) {
        case "front": rotateBLOCK(frontPieces, FRONTclockwiseDirection, "clockwise", "piece.EixoZ", "block front b5"); atualizarPeças(); break;
        case "back": rotateBLOCK(backPieces, BACKclockwiseDirection, "clockwise", "piece.EixoZ", "block back b5"); atualizarPeças(); break;
        case "center": rotateBLOCK(centerPieces, CENTERclockwiseDirection, "clockwise", "piece.EixoZ", "block center b5"); atualizarPeças(); break;
    }
}
function AntiClockwiseRotation(position) {
    switch (position) {
        case "front": rotateBLOCK(frontPieces, FRONTanticlockwiseDirection, "clockwise", "EixoContrario(piece.EixoZ)", "block front b5"); atualizarPeças(); break;
        case "back": rotateBLOCK(backPieces, BACKanticlockwiseDirection, "clockwise", "EixoContrario(piece.EixoZ)", "block back b5"); atualizarPeças(); break;
        case "center": rotateBLOCK(centerPieces, CENTERanticlockwiseDirection, "clockwise", "EixoContrario(piece.EixoZ)", "block center b5"); atualizarPeças(); break;
    }
}
function finalTransform(piece, tx, ty, tz, rx, ry, rz) {
    const newTransform = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
    return newTransform;
}
function cortarRotation(transform) {
    // console.log(transform)
    if (transform !== undefined) {
        let transformArray = transform.split(" ");
        transformArray.pop(); // Remove o último elemento (rotateZ(0deg))
        transformArray.pop(); // Remove o penúltimo elemento (rotateY(0deg))
        transformArray.pop(); // Remove o antepenúltimo elemento (rotateX(0deg))
        let transformFormated = transformArray.join(" ");
        return transformFormated
    }
    return ""
}

document.documentElement.addEventListener("keypress", (e) => {
    if (e.code == "KeyO") {
        leftRotation("up")
    }
    if (e.code == "KeyI") {
        rightRotation("up")
    }
    if (e.code == "KeyQ") {
        topRotation("right")
    }
    if (e.code == "KeyK") {
        ClockwiseRotation("front")
    }
    if (e.code == "KeyM") {
        ClockwiseRotation("back")
    }
})
let piece1 = backPieces[0]
let piece2 = frontPieces[0]
piece2.Identifier = "aqui"

function findRotation(piece, x, y, z, nextTransform) {
    isXrotated = false
    piece.Yindex = 0
    piece.Xindex = 0
    piece.Zindex = 0
    piece.EixoXpseudo = "X+";
    piece.EixoYpseudo = "Y-";
    piece.EixoZpseudo = "Z+";
    let counter = 0
    let AxiXupdated;
    let AxiYupdated;
    let AxiZupdated;
    let positiveRandomX = 0;
    let positiveRandomY = 0;
    let positiveRandomZ = 0;
    let negativeRandomX = 0;
    let negativeRandomY = 0;
    let negativeRandomZ = 0;
    let RandomXmenor = 0;
    let RandomYmenor = 0;
    let RandomZmenor = 0;

    while (piece.EixoXpseudo !== x && piece.EixoYpseudo !== y && piece.EixoZpseudo !== z) {
        atualizarEixosPseudo(piece.EixoXpseudo, piece, false);
        positiveRandomX += 1;
    }
    piece.EixoXpseudo = "X+";
    piece.EixoYpseudo = "Y-";
    piece.EixoZpseudo = "Z+";
    while (piece.EixoXpseudo !== x && piece.EixoYpseudo !== y && piece.EixoZpseudo !== z) {
        atualizarEixosPseudo(EixoContrario(piece.EixoXpseudo), piece, false);
        negativeRandomX += 1;
    }
    if (negativeRandomX >= positiveRandomX) {
        RandomXmenor = positiveRandomX;
    } else {
        RandomXmenor = negativeRandomX;
    }

    piece.EixoXpseudo = "X+";
    piece.EixoYpseudo = "Y-";
    piece.EixoZpseudo = "Z+";
    for (var i = 0; i < RandomXmenor; i++) {
        RandomXmenor === negativeRandomX ? atualizarEixosPseudo(EixoContrario(piece.EixoXpseudo), piece, true) : atualizarEixosPseudo(piece.EixoXpseudo, piece, true); isXrotated = true;
    }


    AxiXupdated = piece.EixoXpseudo;
    AxiYupdated = piece.EixoYpseudo;
    AxiZupdated = piece.EixoZpseudo;

    if (piece.EixoXpseudo === x) {

        while ((piece.EixoYpseudo !== y || piece.EixoZpseudo !== z) && counter < 10) {
            atualizarEixosPseudo(piece.EixoXpseudo, piece, false);
            positiveRandomX += 1;
            counter++
        }
        counter = 0
        piece.EixoXpseudo = AxiXupdated;
        piece.EixoYpseudo = AxiYupdated;
        piece.EixoZpseudo = AxiZupdated;
        while ((piece.EixoYpseudo !== y || piece.EixoZpseudo !== z) && counter < 10) {
            atualizarEixosPseudo(EixoContrario(piece.EixoXpseudo), piece, false);
            negativeRandomX += 1;
            counter++
        }
        counter = 0
    }
    if (negativeRandomX >= positiveRandomX) {
        RandomXmenor = positiveRandomX;
    } else {
        RandomXmenor = negativeRandomX;
    }
    piece.EixoXpseudo = "X+";
    piece.EixoYpseudo = "Y-";
    piece.EixoZpseudo = "Z+";

    for (var i = 0; i < RandomXmenor; i++) {
        RandomXmenor === negativeRandomX ? atualizarEixosPseudo(EixoContrario(piece.EixoXpseudo), piece, !isXrotated) : atualizarEixosPseudo(piece.EixoXpseudo, piece, !isXrotated);
    }
    piece.EixoXpseudo = AxiXupdated;
    piece.EixoYpseudo = AxiYupdated;
    piece.EixoZpseudo = AxiZupdated;
    if (piece.EixoYpseudo == y) {
        while ((piece.EixoXpseudo !== x || piece.EixoZpseudo !== z) && counter < 10) {
            atualizarEixosPseudo(piece.EixoYpseudo, piece, false);
            positiveRandomY += 1;
            counter++
        }
        counter = 0
        piece.EixoXpseudo = AxiXupdated;
        piece.EixoYpseudo = AxiYupdated;
        piece.EixoZpseudo = AxiZupdated;
        while ((piece.EixoXpseudo !== x || piece.EixoZpseudo !== z) && counter < 10) {
            atualizarEixosPseudo(EixoContrario(piece.EixoYpseudo), piece, false);
            negativeRandomY += 1;
            counter++
        }
        counter = 0
    }
    if (negativeRandomY >= positiveRandomY) {
        RandomYmenor = positiveRandomY;
    } else {
        RandomYmenor = negativeRandomY;
    }
    piece.EixoXpseudo = AxiXupdated;
    piece.EixoYpseudo = AxiYupdated;
    piece.EixoZpseudo = AxiZupdated;
    for (var i = 0; i < RandomYmenor; i++) {
        RandomYmenor === negativeRandomY ? atualizarEixosPseudo(EixoContrario(piece.EixoYpseudo), piece, true) : atualizarEixosPseudo(piece.EixoYpseudo, piece, true);
    }
    piece.EixoXpseudo = AxiXupdated;
    piece.EixoYpseudo = AxiYupdated;
    piece.EixoZpseudo = AxiZupdated;

    if (piece.EixoZpseudo == z) {

        while ((piece.EixoXpseudo !== x || piece.EixoYpseudo !== y) && counter < 10) {
            atualizarEixosPseudo(piece.EixoZpseudo, piece, false);
            positiveRandomZ += 1;
            counter++
        }
        counter = 0
        piece.EixoXpseudo = AxiXupdated;
        piece.EixoYpseudo = AxiYupdated;
        piece.EixoZpseudo = AxiZupdated;

        while ((piece.EixoXpseudo !== x || piece.EixoYpseudo !== y) && counter < 10) {
            atualizarEixosPseudo(EixoContrario(piece.EixoZpseudo), piece, false);
            negativeRandomZ += 1;
            counter++
        }
        counter = 0
    }
    if (negativeRandomZ >= positiveRandomZ) {
        RandomZmenor = positiveRandomZ;
    } else {
        RandomZmenor = negativeRandomZ;
    }
    piece.EixoXpseudo = AxiXupdated;
    piece.EixoYpseudo = AxiYupdated;
    piece.EixoZpseudo = AxiZupdated;
    for (var i = 0; i < RandomZmenor; i++) {
        RandomZmenor === negativeRandomZ ? atualizarEixosPseudo(EixoContrario(piece.EixoZpseudo), piece, true) : atualizarEixosPseudo(piece.EixoZpseudo, piece, true);
    }


    piece.EixoX = x
    piece.EixoY = y
    piece.EixoZ = z

    //     if (piece.Identifier == "aqui") {
    //         console.log(`Xindex: ${piece.Xindex} | Yindex: ${piece.Yindex} | Zindex: ${piece.Zindex}  
    // eixoX: ${piece.EixoX} | eixoY: ${piece.EixoY} | eixoZ: ${piece.EixoZ} 
    // direção-peça: ${piece.rotation}`);
    //         console.log(`Eixo X+: ${positiveRandomX} | Eixo Y+: ${positiveRandomY} | Eixo Z+: ${positiveRandomZ}
    // Eixo X-: ${negativeRandomX} | Eixo Y-: ${negativeRandomY} | Eixo Z-: ${negativeRandomZ}`);
    //     }
    let preXindex;
    let preYindex;
    let preZindex;
    if (piece.rotation == "top") {
        switch (piece.EixoX) {
            case "X+": preXindex = piece.Xindex - 1; preYindex = piece.Yindex; preZindex = piece.Zindex; break;
            case "X-": preXindex = piece.Xindex + 1; preYindex = piece.Yindex; preZindex = piece.Zindex; break;
            case "Y+": preXindex = piece.Xindex; preYindex = piece.Yindex + 1; preZindex = piece.Zindex; break;
            case "Y-": preXindex = piece.Xindex; preYindex = piece.Yindex - 1; preZindex = piece.Zindex; break;
            case "Z+": preXindex = piece.Xindex; preYindex = piece.Yindex; preZindex = piece.Zindex - 1; break;
            case "Z-": preXindex = piece.Xindex; preYindex = piece.Yindex; preZindex = piece.Zindex + 1; break;
        }
    }
    if (piece.rotation == "left") {
        switch (piece.EixoY) {
            case "X+": preXindex = piece.Xindex - 1; preYindex = piece.Yindex; preZindex = piece.Zindex; break;
            case "X-": preXindex = piece.Xindex + 1; preYindex = piece.Yindex; preZindex = piece.Zindex; break;
            case "Y+": preXindex = piece.Xindex; preYindex = piece.Yindex + 1; preZindex = piece.Zindex; break;
            case "Y-": preXindex = piece.Xindex; preYindex = piece.Yindex - 1; preZindex = piece.Zindex; break;
            case "Z+": preXindex = piece.Xindex; preYindex = piece.Yindex; preZindex = piece.Zindex - 1; break;
            case "Z-": preXindex = piece.Xindex; preYindex = piece.Yindex; preZindex = piece.Zindex + 1; break;
        }
    }
    if (piece.rotation == "clockwise") {
        switch (piece.EixoZ) {
            case "X+": preXindex = piece.Xindex - 1; preYindex = piece.Yindex; preZindex = piece.Zindex; break;
            case "X-": preXindex = piece.Xindex + 1; preYindex = piece.Yindex; preZindex = piece.Zindex; break;
            case "Y+": preXindex = piece.Xindex; preYindex = piece.Yindex + 1; preZindex = piece.Zindex; break;
            case "Y-": preXindex = piece.Xindex; preYindex = piece.Yindex - 1; preZindex = piece.Zindex; break;
            case "Z+": preXindex = piece.Xindex; preYindex = piece.Yindex; preZindex = piece.Zindex - 1; break;
            case "Z-": preXindex = piece.Xindex; preYindex = piece.Yindex; preZindex = piece.Zindex + 1; break;
        }
    }
    piece.style.transition = '0s'
    piece.style.transform = finalTransform(piece, 0, 0, 0, preXindex * 90, preYindex * 90, preZindex * 90)
    piece.style.transition = 'transform 0.7s cubic-bezier(.61,-0.39,.28,1.31)'
    // console.log(cortarRotation(nextTransform) + " " + finalTransform(piece, 0, 0, 0, piece.Xindex * 90, 0, 0))
    setTimeout(() => { piece.style.transform = cortarRotation(nextTransform) + finalTransform(piece, 0, 0, 0, piece.Xindex * 90, piece.Yindex * 90, piece.Zindex * 90) }, 12)

}
let isMouseDown2 = false;
let canExec = true
RotatorButtons.forEach(button => {
    button.isPressed = false
    button.addEventListener('mousedown', () => {
        isMouseDown2 = true;
        document.documentElement.style.setProperty('--cursorRotator', 'grabbing')
        button.isPressed = true
    });
    document.documentElement.addEventListener('mouseup', () => {
        isMouseDown2 = false
        document.documentElement.style.setProperty('--cursorRotator', 'grab')
        button.isPressed = false
    })
})

let upButtons = document.querySelectorAll('.DirectionUP')
let downButtons = document.querySelectorAll('.DirectionDOWN')
let leftButtons = document.querySelectorAll(".DirectionLEFT")
let rightButtons = document.querySelectorAll(".DirectionRIGHT")


upButtons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        console.log("up")
        if (isMouseDown2 && canExec && e.target.parentElement.isPressed) {
            e.target.parentElement.up();
            canExec = false;
            isMouseDown2 = false
            setTimeout(() => { canExec = true; }, 300);
        }
    });
});

downButtons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        if (isMouseDown2 && canExec && e.target.parentElement.isPressed) {
            e.target.parentElement.down();
            canExec = false;
            isMouseDown2 = false
            setTimeout(() => { canExec = true; }, 300);
        }
    });
});

leftButtons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        if (isMouseDown2 && canExec && e.target.parentElement.isPressed) {
            e.target.parentElement.left();
            canExec = false;
            isMouseDown2 = false
            setTimeout(() => { canExec = true; }, 300);
        }
    });
});

rightButtons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
        if (isMouseDown2 && canExec && e.target.parentElement.isPressed) {
            e.target.parentElement.right();
            canExec = false;
            isMouseDown2 = false
            setTimeout(() => { canExec = true; }, 300);
        }
    });
});


let rightFaces = document.querySelectorAll(".rightFront,.rightTop,.rightBack,.rightDown")
let midFaces = document.querySelectorAll(".midFront,.midTop,.midBack,.midDown")
let leftFaces = document.querySelectorAll(".leftFront,.leftTop,.leftBack,.leftDown")

let upFaces = document.querySelectorAll(".upFront,.upBack,.upLeft,.upRight")
let medFaces = document.querySelectorAll(".medFront,.medBack,.medLeft,.medRight")
let bottomFaces = document.querySelectorAll(".bottomFront,.bottomBack,.bottomLeft,.bottomRight")

let rightFrontFaces = document.querySelectorAll(".rotateRight.leftRight")
let rightCenterFaces = document.querySelectorAll(".rotateRight.midRight")
let rightBackFaces = document.querySelectorAll(".rotateRight.rightRight")

let topFrontFaces = document.querySelectorAll(".bottomTop")
let topBackFaces = document.querySelectorAll(".upTop")
let topCenterFaces = document.querySelectorAll(".medTop")

let leftBackFaces = document.querySelectorAll(".leftLeft")
let leftCenterFaces = document.querySelectorAll(".midLeft")
let leftFrontFaces = document.querySelectorAll(".rightLeft")

let downBackFaces = document.querySelectorAll(".bottomDown")
let downFrontFaces = document.querySelectorAll(".upDown")
let downCenterFaces = document.querySelectorAll(".medDown")




rightFaces.forEach(button => button.up = () => { topRotation('right') })
rightFaces.forEach(button => button.down = () => { downRotation('right') })

midFaces.forEach(button => button.up = () => { topRotation('center') })
midFaces.forEach(button => button.down = () => { downRotation('center') })

leftFaces.forEach(button => button.up = () => { topRotation('left') })
leftFaces.forEach(button => button.down = () => { downRotation('left') })

upFaces.forEach(button => button.left = () => { leftRotation('up') })
upFaces.forEach(button => button.right = () => { rightRotation('up') })

medFaces.forEach(button => button.left = () => { leftRotation('med') })
medFaces.forEach(button => button.right = () => { rightRotation('med') })

bottomFaces.forEach(button => button.left = () => { leftRotation('bottom') })
bottomFaces.forEach(button => button.right = () => { rightRotation('bottom') })

rightFrontFaces.forEach(button => button.up = () => { ClockwiseRotation('front') })
rightFrontFaces.forEach(button => button.down = () => { AntiClockwiseRotation('front') })
rightCenterFaces.forEach(button => button.up = () => { ClockwiseRotation('center') })
rightCenterFaces.forEach(button => button.down = () => { AntiClockwiseRotation('center') })
rightBackFaces.forEach(button => button.up = () => { ClockwiseRotation('back') })
rightBackFaces.forEach(button => button.down = () => { AntiClockwiseRotation('back') })

topFrontFaces.forEach(button => button.left = () => { ClockwiseRotation('front') })
topFrontFaces.forEach(button => button.right = () => { AntiClockwiseRotation('front') })
topBackFaces.forEach(button => button.left = () => { ClockwiseRotation('back') })
topBackFaces.forEach(button => button.right = () => { AntiClockwiseRotation('back') })
topCenterFaces.forEach(button => button.left = () => { ClockwiseRotation('center') })
topCenterFaces.forEach(button => button.right = () => { AntiClockwiseRotation('center') })

leftFrontFaces.forEach(button => button.up = () => { ClockwiseRotation('front') })
leftFrontFaces.forEach(button => button.down = () => { AntiClockwiseRotation('front') })
leftCenterFaces.forEach(button => button.up = () => { ClockwiseRotation('center') })
leftCenterFaces.forEach(button => button.down = () => { AntiClockwiseRotation('center') })
leftBackFaces.forEach(button => button.up = () => { ClockwiseRotation('back') })
leftBackFaces.forEach(button => button.down = () => { AntiClockwiseRotation('back') })

downFrontFaces.forEach(button => button.right = () => { ClockwiseRotation('front') })
downFrontFaces.forEach(button => button.left = () => { AntiClockwiseRotation('front') })
downBackFaces.forEach(button => button.right = () => { ClockwiseRotation('back') })
downBackFaces.forEach(button => button.left = () => { AntiClockwiseRotation('back') })
downCenterFaces.forEach(button => button.right = () => { ClockwiseRotation('center') })
downCenterFaces.forEach(button => button.left = () => { AntiClockwiseRotation('center') }) 
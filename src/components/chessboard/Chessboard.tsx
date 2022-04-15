import './Chessboard.css';
import { generateTileIDs, axisX, axisY } from '../../assets/scripts/generateTiles';
const tiles = generateTileIDs();

function calculateFenPosition(FEN: Array<String>) {
    let x_counter = 0;
    let y_counter = 7;

    const positions = [];

    for (const fin in FEN) {
        if (FEN[fin] === "/") {
            positions.push("");
            y_counter--;
            x_counter = 0;
        } else {
            positions.push(`${axisX[x_counter]}${axisY[y_counter]}`);
            x_counter++;
        }
    }

    return positions;
}

function setPieces() {
    // Starting FEN value for a chess game.
    const FEN = "rnbqkbnr/pppppppp/////PPPPPPPP/RNBQKBNR".split('');

    interface piecesSign {
        [key: string]: string | undefined
    }

    const piecesDic: piecesSign = {
        p: "pawn",
        r: "rook",
        n: "knight",
        b: "bishop",
        q: "queen",
        k: "king"
    };

    const pieces = [];

    const positions = calculateFenPosition(FEN);

    for (const index in FEN) {
        if (positions[index] === "") continue;
        const color =
            (FEN[index] === FEN[index].toUpperCase()) ? "white" : "black";

        const place = FEN[index].toLowerCase();

        pieces.push(
            <img
                src={require(`./../../assets/images/pieces/${color}/${piecesDic[place]}.png`)}
                className={`tiles pieces ${positions[index]}`} />
        );
    }
    return pieces;
}

function setTiles() {

    const board = [];
    let color = "black";

    const revClr = () => {
        (color === "white") ? color = "black" : color = "white";
    }

    for (const tile in tiles) {
        revClr();
        const tileID = tiles[tile];
        board.push(
            <a className={`tiles ${color} ${tileID}`} />
        );
        if (tileID.endsWith('1')) {
            revClr();
        }
    }
    return board;
}

export default function Chessboard() {
    const board = setTiles();
    const pieces = setPieces();
    return (
        <div id="board">
            <div>{board}</div>
            <div>{pieces}</div>
        </div>
    );
}
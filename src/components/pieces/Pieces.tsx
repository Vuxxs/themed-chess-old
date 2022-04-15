import { calculateFenPosition } from "../../assets/scripts/generatePieces";
import { axisX, axisY } from "../../assets/scripts/generateTiles";
import { addHighlights, Highlights } from "../highlights/Highlights";
interface piecesSign {
    [key: string]: string
}

const piecesDic: piecesSign = {
    p: "pawn",
    r: "rook",
    n: "knight",
    b: "bishop",
    q: "queen",
    k: "king"
};

export function Pieces() {
    // Starting FEN value for a chess game.
    const FEN = "rnbqkbnr/pppppppp/////PPPPPPPP/RNBQKBNR".split('');


    const pieces = [];

    const positions = calculateFenPosition(FEN);

    for (const index in FEN) {
        if (positions[index] === "") continue;
        const color =
            (FEN[index] === FEN[index].toUpperCase()) ? "white" : "black";

        const place = FEN[index].toLowerCase();

        pieces.push(
            <img
                onClick={() => addHighlights(piecesDic[place], positions[index].split(''), color)}
                src={require(`./../../assets/images/pieces/${color}/${piecesDic[place]}.png`)}
                className={`tiles pieces ${positions[index]}`} />
        );
    }
    return <div>{pieces}</div>;
}
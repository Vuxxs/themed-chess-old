import React from "react";
import './Chessboard.css';
import { generateTileIDs } from "../../assets/scripts/generateTiles";

const axisY = Array.from({ length: 9 }, (_, key) => key++).splice(1).reverse();
const axisX = 'abcdefgh'.split('');

function setPieces() {
    // Starting FEN value for a chess game.
    const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR".split('');

    const piecesDictionary: { [key: string]: string } = {
        p: "pawn",
        r: "rook",
        n: "knight",
        b: "bishop",
        q: "queen",
        k: "king"
    };
    const pieces = [];

    let counterX = 0;
    let counterY = 8;
    for (const index in FEN) {

        const place = FEN[index];
        const pieceID = (axisX[counterX] + axisY[counterY]).toString()
        counterX++;

        if (place === "/") {
            counterY--;
            counterX = 8;
        } else {
            let pieceColor = "";
            if (place === place.toUpperCase()) {
                pieceColor = "white";
            } else {
                pieceColor = "black";
            }

            pieces.push(<a
                className={pieceID}
            >{piecesDictionary[place]}</a>
            );
        }
    }
    return pieces;
}

function setTiles() {

    const board = [];
    let leftSpacing = 0;
    let color;

    for (const x in axisX) {

        (parseInt(x) % 2) ? color = "black" : color = "white";
        let topSpacing = 0;
        for (const y in axisY) {
            const tileID = (axisX[x] + axisY[y]).toString();
            board.push(
                <a
                    style={{
                        left: `${leftSpacing}%`,
                        top: `${topSpacing}%`
                    }}
                    className={`tiles ${color} ${tileID}`} />
            );

            (color === "black") ? color = "white" : color = "black";

            // Same thing as below
            topSpacing += 12.5;
        }

        // 100(%) space / 8 tiles per space
        leftSpacing += 12.5;
    }
    return board;
}

export default function Chessboard() {
    const board = setTiles();
    const pieces = setPieces();
    return (
        <div id="board">
            <a>{board}</a>
            <a>{pieces}</a>
        </div>
    );
}
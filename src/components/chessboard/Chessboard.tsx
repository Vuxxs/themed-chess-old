import React from "react";
import './Chessboard.css';

function setTiles() {

    const axisY = Array.from({ length: 9 }, (_, key) => key++).splice(1);
    const axisX = 'abcdefgh'.split('');
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
                    className={`tiles ${color}`}
                    id={tileID} />
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
    return (
        <div id="board">
            <a>{board}</a>
        </div>
    );
}
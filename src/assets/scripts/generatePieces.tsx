import { axisX, axisY } from "./generateTiles";

export function calculateFenPosition(FEN: Array<String>) {
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
import { generateTileIDs } from "../../assets/scripts/generateTiles";

const tiles = generateTileIDs();

export function Board() {

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
    return <div>{board}</div>;
}
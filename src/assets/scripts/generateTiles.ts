const axisY = Array.from({ length: 9 }, (_, key) => key++).splice(1).reverse();
const axisX = 'abcdefgh'.split('');

/**
 * a8 -> a1 | b8 -> b1 | ...
 *  
 * @returns tile IDs
 */
export function generateTileIDs() {

    const tiles = [];
    let leftSpacing = 0;
    for (const x in axisX) {
        let topSpacing = 0;
        for (const y in axisY) {
            const tileID = (axisX[x] + axisY[y]).toString();
            tiles.push(tileID);

            const css = {
                left: `${leftSpacing}%`,
                top: `${topSpacing}%`
            }

            // Same thing as below
            topSpacing += 12.5;
        }

        // 100(%) space / 8 tiles per space
        leftSpacing += 12.5;
    }

    return tiles;
}

function generateTileCSS() {
    const IDs = generateTileIDs();
    let CSS = '';
    let leftSpacing = 0;
    let topSpacing = 0;
    for (const id in IDs) {
        CSS.concat(`.${IDs[id]} {\n\n`);
        CSS.concat(`left: ${leftSpacing}%,\n`);
        CSS.concat(`top ${topSpacing}%\n`)
        if (IDs[id].endsWith('1')) {
            leftSpacing += 12.5;
            topSpacing = 0;
        }

        CSS.concat('}\n\n');
    }
    const fs = require('fs');
    fs.writeFileSync("generated.css", CSS, function (err: Error) {
        if (err) {
            return console.log("error")
        }
    })
}
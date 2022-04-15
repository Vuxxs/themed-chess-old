export const axisX = 'abcdefgh'.split('');
export const axisY = Array.from({ length: 9 }, (_, key) => key++).splice(1).reverse();

/**
 * a8 -> a1 | b8 -> b1 | ...
 *  
 * @returns tile IDs
 */
export function generateTileIDs() {

    const tiles = [];
    for (const x in axisX) {
        for (const y in axisY) {
            const tileID = (axisX[x] + axisY[y]).toString();
            tiles.push(tileID);
        }
    }
    return tiles;
}

// Used once to pre-generate each tile class
function generateTileCSS() {
    const IDs = generateTileIDs();
    let CSS = '';
    let leftSpacing = 0;
    let topSpacing = 0;
    for (const id in IDs) {
        CSS = CSS.concat(`.${IDs[id]} {\n`);
        CSS = CSS.concat(`left: ${leftSpacing}%;\n`);
        CSS = CSS.concat(`top: ${topSpacing}%;\n`)
        if (IDs[id].endsWith('1')) {
            leftSpacing += 12.5;
            topSpacing = 0;
        } else {
            topSpacing += 12.5;
        }

        CSS = CSS.concat('}\n\n');
    }
    console.log(CSS);
}

// generateTileCSS();
let createdHighlights: JSX.Element[] = [];

export function addHighlights(name: string, id: Array<string>, color: string) {
    createdHighlights = []; // reset highlight
    if (name === "pawn") {
        if (color === "black") {
            createdHighlights.push(<a className={`tiles ${id[0]}${parseInt(id[1]) + 1} highlighted`} />);
            createdHighlights.push(<a className={`tiles ${id[0]}${parseInt(id[1]) + 2} highlighted`} />);
        } else {

            createdHighlights.push(<a className={`tiles ${id[0]}${parseInt(id[1]) - 1} highlighted`} />);
            createdHighlights.push(<a className={`tiles ${id[0]}${parseInt(id[1]) - 2} highlighted`} />);
        }
    }
    return;
}

export function Highlights() {
    return <div>{createdHighlights}</div>
}
import { Component } from 'react';
import './Chessboard.css';

import { Board } from '../board/Board';
import { Pieces } from '../pieces/Pieces';
import { Highlights } from '../highlights/Highlights';

export default class Chessboard extends Component {
    render() {

        return (
            <div id="board" onClick={() => this.forceUpdate()}>
                <Board />
                <Pieces />
                <Highlights />
            </div>
        );
    }
}
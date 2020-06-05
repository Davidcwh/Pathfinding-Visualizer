import { combinedReducer } from 'react-redux';
import { generateInitalGrid, generateToggleWallGrid } from '../util/GridGenerationUtil'

const gridReducer = (state=generateInitalGrid(), action) => {
    switch(action.type) {
        case 'TOOGLE_WALL_NODE':
            return generateToggleWallGrid(action.payload.row, action.payload.col, state);

        default:
            return state;
    }
}

export default combinedReducer({
    grid: gridReducer
});
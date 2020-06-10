import { combineReducers } from 'redux';
import { generateInitalGrid, generateToggleWallGrid, generateToggleFrontierGrid, generateMarkVisitedGrid, generateMarkPathGrid } from '../util/GridGenerationUtil'

const gridReducer = (state=generateInitalGrid(), action) => {
    switch(action.type) {
        case 'TOOGLE_WALL_NODE':
            return generateToggleWallGrid(action.payload.row, action.payload.col, state);

        case 'TOGGLE_FRONTIER_NDOE':
            return generateToggleFrontierGrid(action.payload.row, action.payload.col, state);

        case 'TOGGLE_VISITED_NODE':
            return generateMarkVisitedGrid(action.payload.row, action.payload.col, state);

        case 'TOGGLE_PATH_NODE':
            return generateMarkPathGrid(action.payload.row, action.payload.col, state);

        case 'SHOW_INITIAL_BOARD':
            return generateInitalGrid();

        default:
            return state;
    }
}

const dataStructureReducer = (state=null, action) => {
    switch(action.type) {
        case 'RESET_DATA_STRUCTURE':
            return null;

        case 'SET_DATA_STRUCTURE':
            return action.payload;

        default:
            return state;
    }
}

const mousePressedReducer = (state=false, action) => {
    switch(action.type) {
        case 'PRESSED':
            return true;

        case 'NOT_PRESSED':
            return false;

        default:
            return state;
    }
}

const selectAlgorithmReducer = (state='none', action) => {
    switch(action.type) {
        case 'BFS':
            return 'BFS';

        default:
            return state;
    }
}

const algorithmStatusReducer = (state='STOPPED', action) => {
    switch(action.type) {
        case 'RUN_ALGORITHM':
            return 'RUNNING';

        case 'STOP_ALGORITHM':
            return 'STOPPED';

        case 'PAUSE_ALGORITHM':
            return 'PAUSED';

        default:
            return state;
    }
}

export default combineReducers({
    algorithmStatus: algorithmStatusReducer,
    selectedAlgorithm: selectAlgorithmReducer,
    grid: gridReducer,
    dataStructure: dataStructureReducer,
    isMousePressed: mousePressedReducer
});
import { combineReducers } from 'redux';
import { defaultStatistics } from '../constants';
import { gridDetails } from '../constants';
import { generateInitalGrid,
         generateToggleWallGrid, 
         generateToggleFrontierGrid, 
         generateMarkVisitedGrid, 
         generateMarkPathGrid, 
         generateGridWithWalls, 
         generateMarkHeadGrid, 
         generateUnmarkHeadGrid, 
         generateMarkBacktrackGrid, 
         getStatistics,
         generateRandomGrid,
         generatePlainGrid,
         generateNewStartGrid,
         generateNewEndGrid } from '../util/GridGenerationUtil';

const boardReducer = (state={ grid: generateInitalGrid(), statistics: defaultStatistics }, action) => {
    let newGrid = state.grid;
    let newStatistics = state.statistics;

    switch(action.type) {
        case 'TOOGLE_WALL_NODE':
            newGrid = generateToggleWallGrid(action.payload.row, action.payload.col, state.grid);
            break;

        case 'TOGGLE_FRONTIER_NDOE':
            newGrid = generateToggleFrontierGrid(action.payload.row, action.payload.col, state.grid);
            break;
            
        case 'TOGGLE_VISITED_NODE':
            newGrid = generateMarkVisitedGrid(action.payload.row, action.payload.col, state.grid);
            break;

        case 'TOGGLE_PATH_NODE':
            newGrid = generateMarkPathGrid(action.payload.row, action.payload.col, state.grid);
            break;

        case 'SHOW_INITIAL_BOARD':
            newGrid = generatePlainGrid(state.grid, action.payload.row, action.payload.col);
            break;

        case 'RESET_BOARD_WITH_WALLS':
            newGrid = generateGridWithWalls(state.grid, action.payload.row, action.payload.col);
            break;

        case 'MARK_HEAD_NODE':
            newGrid = generateMarkHeadGrid(action.payload.row, action.payload.col, state.grid);
            break;

        case 'UNMARK_HEAD_NODE':
            newGrid = generateUnmarkHeadGrid(action.payload.row, action.payload.col, state.grid);
            break;

        case 'MARK_BACKTRACK_NODE':
            newGrid = generateMarkBacktrackGrid(action.payload.array, state.grid);
            break;

        case 'GENERATE_RANDOM_GRID':
            newGrid = generateRandomGrid(state.grid, action.payload.row, action.payload.col);
            break;

        case 'SET_START_NODE':
            newGrid = generateNewStartGrid(action.payload.row, action.payload.col, state.grid);
            break;

        case 'SET_END_NODE':
            newGrid = generateNewEndGrid(action.payload.row, action.payload.col, state.grid);
            break;

        default:
            break;
    }

    newStatistics = getStatistics(newGrid);
    return { grid: newGrid, statistics: newStatistics };
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

        case 'DFS':
            return 'DFS';

        case 'ASTAR':
            return 'ASTAR';

        case 'GREED':
            return 'GREED';

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

        case 'COMPLETE_ALGORITHM':
            return 'COMPLETE';

        default:
            return state;
    }
}

const isShowingPathReducer = (state=false, action) => {
    switch(action.type) {
        case 'SHOWING_PATH':
            return true;

        case 'NOT_SHOWING_PATH':
            return false;
        
        default:
            return state;
    }
}

const initialMoveStartEnd = {
    start: { row: gridDetails.START_NODE_ROW, col: gridDetails.START_NODE_COL },
    isStartMoving: false,
    end: { row: gridDetails.FINISH_NODE_ROW, col: gridDetails.FINISH_NODE_COL },
    isEndMoving: false
}

const moveStartEndReducer = (state=initialMoveStartEnd, action) => {
    switch(action.type) {
        case 'START_NODE_MOVING':
            return { ...state, isStartMoving: true};

        case 'START_NODE_NOT_MOVING':
            return { ...state, isStartMoving: false};

        case 'END_NODE_MOVING':
            return { ...state, isEndMoving: true};

        case 'END_NODE_NOT_MOVING':
            return { ...state, isEndMoving: false};

        case 'SET_START_NODE':
            return { ...state, 
                    start: {
                        row: action.payload.row,
                        col: action.payload.col} 
                    }

        case 'SET_END_NODE':
            return { ...state, 
                    end: {
                        row: action.payload.row,
                        col: action.payload.col} 
                    }

        default:
            return state;
    }
}

export default combineReducers({
    algorithmStatus: algorithmStatusReducer,
    selectedAlgorithm: selectAlgorithmReducer,
    isShowingPath: isShowingPathReducer,
    board: boardReducer,
    dataStructure: dataStructureReducer,
    isMousePressed: mousePressedReducer,
    moveStartEnd: moveStartEndReducer
});
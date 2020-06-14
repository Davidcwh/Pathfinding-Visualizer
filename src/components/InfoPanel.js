import React from 'react';
import { connect } from 'react-redux';
import { updateStatistics, resetStatistics } from '../actions';

class InfoPanel extends React.Component {
    render() {

        const { show,
                unvisited,
                visited,
                wall,
                backtrack,
                frontier,
                path } = this.props.statistics;


        return (
            <div style={{width: "85%", margin: "auto", marginTop: "2vh"}}>
                <div className="ui small eight statistics">
    
                    <div class="statistic">
                        <div class="value">
                            <div className={`node node-start`} style={{border: "2px solid white", borderRadius: "5px"}} />
                        </div>
                        <div class="label">start</div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">
                            <div className={`node node-finish`} style={{border: "2px solid white", borderRadius: "5px"}} />
                        </div>
                        <div class="label">end</div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">{unvisited} <div className={`node node-unvisited`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div class="label">
                            <div>unvisited</div>
                        </div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">{wall} <div className={`node node-wall`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div class="label">
                            <div>wall</div>
                        </div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">{visited} <div className={`node node-visited`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div class="label">
                            <div>visited</div>
                        </div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">{backtrack} <div className={`node node-backtrack`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div class="label">
                            <div>backtrack</div>
                        </div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">{frontier} <div className={`node node-frontier`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div class="label">
                            <div>frontier</div>
                        </div>
                    </div>
    
                    <div class="statistic">
                        <div class="value">{path} <div className={`node node-path`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div class="label">
                            <div>path</div>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        grid: state.grid,
        dataStructure: state.dataStructure,
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus,
        isShowingPath: state.isShowingPath,
        statistics: state.statistics
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateStatistics: (grid) => dispatch(updateStatistics(grid)),
        resetStatistics: () => dispatch(resetStatistics())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);
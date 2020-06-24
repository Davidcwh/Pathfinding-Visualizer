import React from 'react';
import { connect } from 'react-redux';

class InfoPanel extends React.Component {
    render() {

        const { unvisited,
                visited,
                wall,
                backtrack,
                frontier,
                path } = this.props.statistics;

        const displayValue = (value) => (value === 0) ? "" : `${value} ` 


        return (
            <div style={{width: "85%", margin: "auto", marginTop: "2vh"}}>
                <div className="ui small eight statistics">
    
                    <div className="statistic">
                        <div className="value">
                            <div className={`node node-start`} style={{border: "2px solid white", borderRadius: "5px"}} />
                        </div>
                        <div className="label">start</div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">
                            <div className={`node node-finish`} style={{border: "2px solid white", borderRadius: "5px"}} />
                        </div>
                        <div className="label">end</div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">{displayValue(unvisited)} <div className={`node node-unvisited`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div className="label">
                            <div>unvisited</div>
                        </div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">{displayValue(wall)} <div className={`node node-wall`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div className="label">
                            <div>wall</div>
                        </div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">{displayValue(visited)} <div className={`node node-visited`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div className="label">
                            <div>visited</div>
                        </div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">{displayValue(backtrack)} <div className={`node node-backtrack`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div className="label">
                            <div>backtrack</div>
                        </div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">{displayValue(frontier)} <div className={`node node-frontier`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div className="label">
                            <div>frontier</div>
                        </div>
                    </div>
    
                    <div className="statistic">
                        <div className="value">{displayValue(path)} <div className={`node node-path`} style={{border: "2px solid white", borderRadius: "5px"}} /></div>
                        <div className="label">
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
        grid: state.board.grid,
        dataStructure: state.dataStructure,
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus,
        isShowingPath: state.isShowingPath,
        statistics: state.board.statistics
    }
}

export default connect(mapStateToProps)(InfoPanel);
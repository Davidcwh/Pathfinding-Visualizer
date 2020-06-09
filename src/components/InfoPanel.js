import React from 'react';

const LegendItem = ({nodeType}) => {
    return (
        <div className="column" style={{margin: "0 5vh 5vh 3vh"}}>
            <div className={`node node-${nodeType}`} style={{border: "2px solid white", borderRadius: "5px"}}></div>
            <div>{nodeType}</div>
        </div>
    )
}

const InfoPanel = () => {
    return (
        <div className="ui center aligned grid">
            <div className="row "style={{margin: "2vh 0 0 0"}}><h2 className="ui dividing header">Legend</h2></div>
            <LegendItem nodeType={'unvisited'} />
            <LegendItem nodeType={'start'} />
            <LegendItem nodeType={'finish'} />
            <LegendItem nodeType={'wall'} />
            <LegendItem nodeType={'visited'} />
            <LegendItem nodeType={'frontier'} />
            <LegendItem nodeType={'path'} />
        </div>
    )
}

export default InfoPanel;
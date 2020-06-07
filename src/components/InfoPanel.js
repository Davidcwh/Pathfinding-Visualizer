import React from 'react';
import '../css/Node.css';

const LegendItem = ({nodeType}) => {
    return (
        <div >
            <div className={`node node-${nodeType}`}></div>
            <div>{nodeType} node</div>
        </div>
    )
}

const InfoPanel = () => {
    return (
        <div className="container">
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
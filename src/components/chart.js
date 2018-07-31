import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average (data) {
    return _.round(_.sum(data)/data.length);
}

function Maximum (data) {
    return _.round(_.max(data));
}

export default (props) => { 
    return (
        <div>
            <Sparklines width={180} height={120} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
        <div>Max: {Maximum(props.data)} {props.units}</div>
        <div>Average: {average(props.data)} {props.units}</div>
        </div>
    )
    
}

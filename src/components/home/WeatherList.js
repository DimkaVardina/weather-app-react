import React, { PropTypes } from 'react';
import WeatherListRow from './WeatherListRow';

/**
 * Weather list component
 *
 * Lists weather info for 3 hour periods 
 *
 * @component
 */
const WeatherList = ({records}) => {
    return (
        <div>
            <div className="grid-row">
                <div id="time" className="grid-cell">Time</div>
                <div id="description" className="grid-cell">Description</div>
                <div id="temp" className="grid-cell">Temperature</div>
                <div id="wind" className="grid-cell">Wind Speed</div>
            </div>
            {records.map(record => 
                <WeatherListRow key={record.dt_txt} record={record} />
            )}
        </div>
    );
};

WeatherList.propTypes = {
    records: PropTypes.array.isRequired
};

export default WeatherList;
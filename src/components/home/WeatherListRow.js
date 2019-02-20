import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * WeatherListRow component
 *
 * Responsible for single weather record display
 *
 * @component
 */
const WeatherListRow = ({record}) => {
    return (
        <div key={record.dt_txt} class="grid-row">
            <div className="grid-cell">{record.dt_txt}</div>
            <div className="grid-cell">{record.weather[0].description}</div>
            <div className="grid-cell">{record.main.temp}</div>
            <div className="grid-cell">{record.wind.speed}</div>
        </div>
    );
};

WeatherListRow.propTypes = {
    record: PropTypes.object.isRequired,
};

export default WeatherListRow;

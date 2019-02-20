import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const WeatherListRow = ({record}) => {
    debugger;
    return (
        <tr>
            <td>{record.dt_txt}</td>
            <td>{record.weather[0].description}</td>
            <td>{record.main.temp}</td>
        </tr>
    );
};

WeatherListRow.propTypes = {
    record: PropTypes.object.isRequired
};

export default WeatherListRow;

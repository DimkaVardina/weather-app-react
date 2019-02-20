import React, { PropTypes } from 'react';
import WeatherListRow from './WeatherListRow';

const WeatherList = ({records}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
                {records.map(record => 
                    <WeatherListRow record={record}  />
                )}
            </tbody>
        </table>
    );
};

WeatherList.propTypes = {
    records: PropTypes.array.isRequired
};

export default WeatherList;
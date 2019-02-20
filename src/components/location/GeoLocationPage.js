import React from 'react';
import MessageBox from './MessageBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {geolocated} from 'react-geolocated';
import * as locationActions from '../../actions/locationActions';

/**
 * GeoLocationPage component
 *
 * Displaying initial page for location loading
 *
 * @component
 * @augments geolocated
 */
class GeoLocationPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            location: Object.assign({}, props.location)
        };

        this.confirmLocation = this.confirmLocation.bind(this);
    }

    confirmLocation(event) {
        event.preventDefault();
        let location = Object.assign({}, this.state.location);
        this.setState({location: location});

        this.context.router.push('/home');
    }

    render() {
        return !this.props.isGeolocationAvailable ?
                <MessageBox msg="Your browser does not support Geolocation"/>
            : !this.props.isGeolocationEnabled ?
                <MessageBox msg="Your geolocation is disabled"/>
            : this.props.coords ?
                <div>
                    <h2>Your location:</h2>
                    <br />
                    <table className="table">
                        <tbody>
                            <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                            <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                            <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                            <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                            <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
                        </tbody>
                    </table>
                    <br />
                    <Link to="home" className="btn btn-primary btn-lg">See forecast</Link>
                </div>
            : <MessageBox msg="Getting your location data..." />;
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(locationActions, dispatch)
    }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(connect(null, mapDispatchToProps)(GeoLocationPage));

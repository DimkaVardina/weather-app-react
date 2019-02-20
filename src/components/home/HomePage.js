import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as daysActions from '../../actions/daysActions';
import WeatherList from './WeatherList';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        debugger;
        const { days } = this.props
        return (
            <div className="jumbotron">
                <h1>Sofia</h1>
                <WeatherList records={days} />
            </div>
        );
    }
}

HomePage.propTypes = {
    days: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        days: state.days
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(daysActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
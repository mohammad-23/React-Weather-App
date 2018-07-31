import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-maps';

class WeatherList extends Component {
    renderWeather (CityData) {
        const name = CityData.city.name;
        const temps = _.map(CityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressure = CityData.list.map(weather => weather.main.pressure);
        const humidities = CityData.list.map(weather => weather.main.humidity);    
        const { lat, lon } = CityData.city.coord;
        
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} color='orange' units='°C' /></td>
                <td><Chart data={humidities} color='blue' units='%'/></td>
                <td><Chart data={pressure} color='blue' units='hPa'/></td>
            </tr>
        )    
    }
    
    render () {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Humidity (%)</th>
                        <th>Pressure (hPa)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps ({ weather }) {
    return { weather };
    //same as using state as parameter and returning weather: state.weather
}

export default connect(mapStateToProps)(WeatherList);
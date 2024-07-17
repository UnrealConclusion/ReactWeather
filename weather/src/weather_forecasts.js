import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

/**
 * Component used to display a list of weather forecasts
 */

export default function WeatherForecasts({forecasts, selectedForecast, onSelectForecast}) {
    return (
        <Card className='weather-forecasts-card' style={{minWidth: "500px"}}>
          <Card.Header>

          </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>

          </Card.Text>
        
        </Card.Body>
      </Card>
    );
  }
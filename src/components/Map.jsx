import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import SideMenu from './sideMenu';
import {Container} from 'semantic-ui-react';
export class MapContainer extends Component {
  constructor() {
    super();
      this.state = {
        lat: "",
        lng: ""
      }
  };
    componentDidMount() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition((location) =>{
          this.setState({
            lat: location.coords.latitude,
            lng: location.coords.longitude
          });

          console.log(this.state);
        });

      }
      else {
        console.log("Location not supported");
      }
    }
     handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {

  return (
    <Container fluid>

        <Map google={this.props.google} style={{width: '100%', height: '100%', position: 'relative'}} zoom={14}
        centerAroundCurrentLocation={true}>

        <Marker
       title={"Test Marker"}
       name={'TEST'}
       position={{lat: this.state.lat, lng: this.state.lng}} />

     </Map>
   </Container>
 );
}
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2Cumf3PzAtsiwiq5NlD9mthWlWO1yPVE'
})(MapContainer)

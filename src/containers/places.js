import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'Barcelona, Es'
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    console.log('event from places component', event)
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    // const options = {
    //   location: new google.maps.LatLng(48.85, 2.35),
    //   radius: 10000,
    //   types: ['address']
    // }

    const renderSuggestion = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)

    return (
      <form onSubmit={(e)=>{this.handleFormSubmit(e)}}>
        <PlacesAutocomplete
          inputProps={inputProps}
          renderSuggestion={renderSuggestion}/>
      </form>
    )
  }
}

export default SimpleForm

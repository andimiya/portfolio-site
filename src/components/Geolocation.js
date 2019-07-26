import React from "react";

class Geolocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      lat: null,
      lon: null
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  success = pos => {
    const crd = pos.coords;
    this.setState({ lat: crd.latitude, lon: crd.longitude });
  };

  error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    this.setState({ error: "Coordinates error" });
  };

  timeout() {
    this.setState({ error: "Timed out before coordinates were retrieved" });
  }

  locatorTimeout = () => {
    window.setTimeout(this.timeout, 20000);
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        this.locatorTimeout
      );
    } else {
      console.log("NO GEO FOUND");
    }
  };

  render(props) {
    const { lat, lon, error } = this.state;
    return (
      <div>
        <h2>Coordinates</h2>
        {error && <div>{error}</div>}
        {lat && lon && (
          <div>
            lat: {lat}, lon: {lon}
          </div>
        )}
      </div>
    );
  }
}

export default Geolocation;

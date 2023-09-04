import React from "react";

class AboutUsCardClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="user-card">
        <h1>{this.props.name}</h1>
        <h2>{this.props.location}</h2>
        <h3>{this.props.contact}</h3>
      </div>
    );
  }
}

export default AboutUsCardClass;

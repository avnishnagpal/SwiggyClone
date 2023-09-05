import React from "react";
import AboutUsCardClass from "./AboutUsCardClass";
//import AboutUsCard from "./AboutUsCard";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "US",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mojombo");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h1>AboutUs</h1>
        <AboutUsCardClass
          name={this.state.userInfo.name}
          contact={"@nagpalavnish11"}
          location={this.state.userInfo.location}
        ></AboutUsCardClass>
      </div>
    );
  }
}

export default AboutUs;

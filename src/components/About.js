import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy",
        bio: "Dummy",
      },
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users/pranjal8");
      const data = await response.json();
      this.setState({ userInfo: data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <UserClass userInfo={this.state.userInfo} />
      </div>
    );
  }
}

export default About;

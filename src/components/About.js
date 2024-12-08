import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo1: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy",
        bio: "Dummy",
      },
      userInfo2: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "Dummy",
        bio: "Dummy",
      },
    };
  }
  async componentDidMount() {
    try {
      const [response1, response2] = await Promise.all([
        fetch("https://api.github.com/users/pranjal8"),
        fetch("https://api.github.com/users/prajwalkamble369"),
      ]);

      const [data1, data2] = await Promise.all([
        response1.json(),
        response2.json(),
      ]);

      this.setState({ userInfo1: data1, userInfo2: data2 });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { userInfo1, userInfo2 } = this.state;
    return (
      <div>
        <UserClass userInfo={userInfo1} />
        <UserClass userInfo={userInfo2} />
      </div>
    );
  }
}

export default About;

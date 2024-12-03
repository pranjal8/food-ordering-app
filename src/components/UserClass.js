import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  render() {
    const { name, location, avatar_url, bio } = this.props.userInfo;

    return (
      <div className="user-container">
        <div className="user-card">
          <img src={avatar_url} alt="" />
          <p>
            <strong>Name: {name} </strong>
          </p>
          <p>
            <strong> Location: </strong> {location}{" "}
          </p>
          <p>
            <strong>Bio: </strong> {bio}
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;

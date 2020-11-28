import React from "react";

export default class Registration extends React.Component {
  constructor(props: any) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    console.log("Something happened");
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        {/* Logo Avatar here */}
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text" />

          <label>Password</label>
          <input type="text" />

          <select id="status" name="status">
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="dnd">Do not disturb</option>
          </select>

          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          <label htmlFor="remember">Remember me</label>

          <input
            type="checkbox"
            id="password"
            name="password"
            value="password"
          />
          <label htmlFor="password">Remember my password</label>

          <input
            type="checkbox"
            id="automatic"
            name="automatic"
            value="automatic"
          />
          <label htmlFor="automatic">Sign me in automatically</label>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export default class UsersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gen: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
      id: uuid(),
    };
    this.props.handleAddUser(newUser);
    this.setState({ name: "", email: "", gen: "", id: uuid() });
  }

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <h1>Class Form</h1>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Gen:
            <input
              type="text"
              name="gen"
              value={this.state.gen}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

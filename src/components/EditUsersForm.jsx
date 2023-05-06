import React, { Component } from "react";

export default class EditUsersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.user.id,
      name: props.user.name,
      email: props.user.email,
      gen: props.user.gen,
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
    this.props.saveChanges(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={this.handleSubmit}>
            <h1>Edit User</h1>
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
            <button type="submit" onClick={this.props.saveChanges}>
              Save
            </button>
            <span className="close" onClick={this.props.modalClose}>
              &times;
            </span>
          </form>
        </div>
      </div>
    );
  }
}

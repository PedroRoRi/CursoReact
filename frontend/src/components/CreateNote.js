import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    titulo: "",
    descripcion: "",
    fecha: new Date(),
    editing: false,
    _id: "",
  };

  componentDidMount = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.map((user) => user.username),
      userSelected: res.data[0].username,
    });

    if (this.props && this.props.params) {
      const idNote = this.props.params.id;
      console.log(idNote);

      if (idNote) {
        const res = await axios.get(
          "http://localhost:4000/api/notes/" + idNote
        );
        this.setState({
          titulo: res.data.titulo,
          descripcion: res.data.descripcion,
          autor: res.data.autor,
          fecha: new Date(res.data.fecha),
          editing: true,
          _id: this.props.params.id,
        });
      }
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,
      fecha: this.state.fecha,
      autor: this.state.userSelected,
    };

    if (this.state.editing) {
      await axios.put(
        "http://localhost:4000/api/notes/" + this.state._id,
        newNote
      );
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }
    window.location.href = "/";
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeDate = (fecha) => {
    this.setState({ fecha });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Crear una nota</h4>
          {/** SELECT USER */}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
              value={this.state.userSelected}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="titulo"
              name="titulo"
              value={this.state.titulo}
              onChange={this.onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="descripcion"
              className="form-control"
              placeholder="descripcion"
              value={this.state.descripcion}
              onChange={this.onInputChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={this.state.fecha}
              onChange={this.onChangeDate}
            ></DatePicker>
          </div>
          <form onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

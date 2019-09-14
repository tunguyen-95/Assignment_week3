import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import RenderModels from './RenderModels'

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class App extends React.Component {
  state = {
    value: ''
  }

  updateSelection = (event) => {
    this.setState({ value: event.target.value })
  }
  clickHandeler = (event) => {
    const model = data.find(model => {
      return model.name === this.state.value
    })
    this.addModel(model)
  }

  addModel = (model) => {
    if (model) {
      this.props.dispatch(
        {
          type: 'ADD_MODEL',
          payload: model
        }
      )
    }
  }

  makeOptions = ({ name, year }, index) => {
    return (
      <option key={index} value={name}>{name}({year})</option>
    )
  }

  render() {

    const { value } = this.state

    return (
      <div className="App" >
        <RenderModels />
        <select onChange={this.updateSelection} value={value}>
          <option value=''>-- Pick a model --</option>
          {data.map(this.makeOptions)}
        </select>
        <button onClick={this.clickHandeler}>Add</button>
      </div>
    );
  }
}

export default connect()(App);

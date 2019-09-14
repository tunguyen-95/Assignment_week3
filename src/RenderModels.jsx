import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails'

class RenderModels extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "-webkit-center"
        }}
      >
        {
          this.props.store.map((model, indx) => {
            return (
              <ModelDetails
                key={indx}
                model={model}
              />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    store
  }
}

export default connect(mapStateToProps)(RenderModels);

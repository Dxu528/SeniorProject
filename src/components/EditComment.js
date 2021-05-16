import React, { Component } from 'react';
import './EditComment.css';

class EditComment extends Component {

  state = {
    value: "This is my very first post. Other text features are soon to come.",
    isInEditMode: false
  }

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    })
  }

  renderEditView = () => {
    return <div>
      <input
        type="text"
        defaultValue={this.state.value}
        ref="theTextInput"
      />
      <button onClick={this.changeEditMode}>X</button>
      <button onClick={this.updateComponentValue}>OK</button>
    </div>
  }

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>
      {this.state.value}
    </div>
  }

  render() {
    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView() 
    
  }
}


export default EditComment;

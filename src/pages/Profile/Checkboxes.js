import React, { Component } from 'react';
import Checkbox from './Checkbox';
import axios from "../../axios";


class Checkboxes extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = (key, label) => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={key}
        />
  )

  createCheckboxes = () => (
    axios.get("/search/allgroup").then(res=>{
        const groups = (res.data)
        console.log(groups);
        groups.map((group) => 
            this.createCheckbox(group.groupId, group.groupName))
    }).catch(err=>console.log(err))
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Checkboxes;
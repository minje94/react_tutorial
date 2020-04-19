import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;

    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
      /* id와 data값을 넘기는 방법 2
       information: information.concat({
        name = data.name,
        phone = data.phone,
        id: this.id++
      })
      
       id와 data값을 넘기는 방법 3
       information: information.concat(object.assign({}, data, {
        id: this.id++
      }))
       */
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        <PhoneInfoList data = {this.state.information} />
      </div>
    );
  }
}

export default App;
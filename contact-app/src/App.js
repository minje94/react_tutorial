import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0000'
      },
      {
        id: 2,
        name: '홍길동',
        phone: '010-0000-0000'
      }
    ],
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

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information : information.filter(info => info.id !== id )
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id, 
              ...data,
            };
          }
          return info;
        }
      )
    })
  }


  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate}/>
        <PhoneInfoList
          data = {this.state.information} 
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
         />
      
      </div>
    );
  }
}

export default App;
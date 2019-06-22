import React, { Component } from 'react';
import Header from './app/components/Header';
import Item from './app/components/Item';
import Footer from './app/components/Footer';
import './scss/App.scss';

class App extends Component {

  state = {
    list: [
      // {
      //   desc: "Hello World",
      //   priority: 1,
      //   id: 1
      // },
      // {
      //   desc: "test",
      //   priority: 3,
      //   id: 2
      // },
      // {
      //   desc: "wut",
      //   priority: 2,
      //   id: 3
      // },

    ]
  };
  prevListItemId = 0;

  handleRemoveItem = (id) => {
    this.setState( prevState => {
      return {
        list: prevState.list.filter(l => l.id !== id)
      };
    })
  }

  handleAddItem = (listItem, itemPriority) => {
    this.setState(prevState => {
      return {
        list: [
          ...prevState.list,
          {
            desc: listItem,
            priority: itemPriority,
            id: this.prevListItemId++
          }
        ]
      }
    });
  }

  handleSortList = (priority) => {
    this.setState(prevState => {
      if (priority === "PriorityAsc") {
        return {
          list: prevState.list.sort((a,b) => {
            return b.priority - a.priority;
          })
        }
      } else if (priority === "PriorityDes") {
        return {
          list: prevState.list.sort((a,b) => {
            return a.priority - b.priority;
          })
        }
      }
      // console.log(prevState);
    });
  }
 
  render() {
    return (
      <div className="App">
        <Header 
          count = {this.state.list.length}
          addItem = {this.handleAddItem}
          sortItem={this.handleSortList}
        />
        {this.state.list.map( (item, index) => 
          <Item 
            desc = {item.desc}
            priority={item.priority}
            id={item.id}
            key={item.id.toString()}
            index={index}
            removeItem={this.handleRemoveItem}
          />
        )}
        <Footer />
      </div>
    );
  
  }
}

export default App;

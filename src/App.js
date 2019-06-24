import React, { Component } from 'react';
import Header from './app/components/Header';
import Item from './app/components/Item';
import Footer from './app/components/Footer';
import ShowMore from './app/components/ShowMore';
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

    ],
    showMoreBtn: false,
    btnOpen: false 
  };

  prevListItemId = 0;

  handleRemoveItem = (id) => {
    this.setState( prevState => {
      return {
        list: prevState.list.filter(l => l.id !== id)
      };
    })
  }

  handleAddItem = (listItem, itemPriority, time) => {
    this.setState(prevState => {
      return {
        list: [
          ...prevState.list,
          {
            desc: listItem,
            priority: itemPriority,
            itemTime: time,
            id: this.prevListItemId++
          }
        ]
      }
    });
  }

  handleShowMore = (bool) => {
    if (bool === true) {
      this.setState({showMoreBtn: true});
    } else {
      this.setState({showMoreBtn: false});
    }
  }

  showItems = () => {
    //console.log("hey");
    if (this.state.btnOpen === false) {
        this.setState({btnOpen: true});
    } else {
        this.setState({btnOpen: false});
    }
  }


  handleSortList = (value) => {
    this.setState(prevState => {
      if (value === "PriorityAsc") {
        return {
          list: prevState.list.sort((a,b) => {
            return b.priority - a.priority;
          })
        }
      } else if (value === "PriorityDes") {
        return {
          list: prevState.list.sort((a,b) => {
            return a.priority - b.priority;
          })
        }
      } else if (value === "TimeAsc") {
          return {
            list: prevState.list.sort((a,b) => {
              //console.log(Date.parse(`01/01/2013 ${a.itemTime}`), Date.parse(`01/01/2013 ${b.itemTime}`));
              return Date.parse(`01/01/2013 ${a.itemTime}`) - Date.parse(`01/01/2013 ${b.itemTime}`)
            })
          }
      } else if (value === "TimeDes") {
          return {
            list: prevState.list.sort((a,b) => {
              //return Date.parse('01/01/2013' + b.itemTime) - Date.parse('01/01/2013' + a.itemTime);
              return Date.parse(`01/01/2013 ${b.itemTime}`) - Date.parse(`01/01/2013 ${a.itemTime}`)
            })
          }
      }
    });
  }
 
  render() {
    return (
      <div className="App">
        <Header 
          count = {this.state.list.length}
          addItem = {this.handleAddItem}
          sortItem={this.handleSortList}
          length={this.state.list.length}
          showHideFunc={this.handleShowMore}
        />
        {this.state.list.map( (item, index) => 
          <Item 
            desc = {item.desc}
            priority={item.priority}
            id={item.id}
            key={item.id.toString()}
            time={item.itemTime}
            index={index}
            removeItem={this.handleRemoveItem}
            showHideFunc={this.handleShowMore}
            length={this.state.list.length}
            lengthMinusOne={this.state.list.length - 1}
            btnOpen={this.state.btnOpen}
          />
        )}
        <ShowMore 
          disp={this.state.showMoreBtn} 
          length={this.state.list.length}
          showHideFunc={this.handleShowMore}
          clicked={this.state.btnOpen}
          showItemFunc = {this.showItems}
        />
        <Footer />
      </div>
    );
  
  }
}

export default App;

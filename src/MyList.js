
import React, { Component } from 'react'
import ListItem from './ListItem'

class MyList extends Component {
    state = {
        taskArray: this.props.theList
    }
    
    clearList = () => {
        console.log("clearing list")
        this.setState({
            taskArray:[]
        })
    }
    handleChange = (e) => {
        this.setState({
            newItem: e.target.value
        })
    }
    addItem = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                taskArray: [...prevState.taskArray, prevState.newItem],
                newItem: ""
            }
        })
    }
    
    render() {
      const todoItems = this.state.taskArray.map((item, index) =>{
          return<ListItem task={item} key={index} />
      })
    // const todosComponents = this.props.theList.map((item, idx) => (
    //   <div>
    //     <ListItem task={item} key={`listitem-${idx}`} />
    //   </div>
    // ))

    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
            <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
            <button type="submit">Add to List</button>
        </form>

        <ul>

          {todoItems}

        </ul>
        <button onClick={this.clearList}>Finished the List!</button>
      </div>
    )
  }
}

export default MyList
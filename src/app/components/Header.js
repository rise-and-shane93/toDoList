import React, {Component} from 'react';

class Header extends Component {

    handleSubmit = (e) => {
        if (this.itemInput.current.value !== "") {
            e.preventDefault();
            this.props.addItem(this.itemInput.current.value, parseFloat(this.itemSelect.current.value));
            e.currentTarget.reset();    
        } else {
            e.preventDefault();
            alert("Please give your task a description");
        }
    }

    sortItemFunc = (e) => {
        e.preventDefault();
        if (this.itemSort.current.value !== "none") {
            this.props.sortItem(this.itemSort.current.value);
            e.currentTarget.reset();    
        }
    }

    itemInput = React.createRef();

    itemSelect = React.createRef();

    itemSort = React.createRef();

    render() {
        return (
            <header>
                <h1>To-Do List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="desc" id="desc" placeholder="Task Description"
                        ref={this.itemInput}
                    />
                    <div>
                        <label htmlFor="priority">Priority: </label>
                        <select name="priority" id="priority" ref={this.itemSelect}>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                    <button type="submit">Add!</button>
                </form>
                <div className="header-bottom">
                    <p>Items on list: <span>{this.props.count}</span></p>
                    <form onSubmit={this.sortItemFunc}>
                        <label htmlFor="sort">Sort by: </label>
                        <select name="sort" id="sort" ref={this.itemSort}>
                            <option value="none">None</option>
                            <option value="PriorityAsc">Priority: High to Low</option>
                            <option value="PriorityDes">Priority: Low to High</option>
                            {/* <option value="PriorityAsc">Priority: Low to High</option> */}
                            {/* Add an option for time submitted */}
                        </select>
                        <button type="submit">Sort!</button>
                    </form>
                </div>
            </header>
        );
    }
}

export default Header;
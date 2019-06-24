import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

class Header extends Component {


    showOrHide() {
        // console.log(this.props.length);
        // console.log(this.props.length + 1);
        if (this.props.length >= 5) {
            this.props.showHideFunc(true);
        }
    }

    handleSubmit = (e) => {
        //console.log(this.props.length + 1);
        if (this.itemInput.current.value !== "") {
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let currTime = `${h}:${m}:${s}`;
            e.preventDefault();
            this.props.addItem(this.itemInput.current.value, parseFloat(this.itemSelect.current.value), currTime);
            e.currentTarget.reset();    
        } else {
            e.preventDefault();
            alert("Please give your task a description");
        }
    }

    sortItemFunc = (e) => {
        e.preventDefault();
        this.props.sortItem(this.itemSort.current.value);
        e.currentTarget.reset();    
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
                    <button type="submit" onClick={
                        () => this.showOrHide()
                    }>Add!</button>
                </form>
                <div className="header-bottom">
                    <p>Items on list: <span>{this.props.count}</span></p>
                    <form onSubmit={this.sortItemFunc}>
                        <label htmlFor="sort">Sort by: </label>
                        <select name="sort" id="sort" ref={this.itemSort}>
                            <option value="TimeAsc">Time: Oldest to Newest</option>
                            <option value="TimeDes">Time: Newest to Oldest</option>
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
import React, {Component} from 'react';

class Item extends Component {

    numbertoItem = (num) => {
        if (num === 1) {
            return "Low";
        } else if (num === 2) {
            return "Medium";
        } else {
            return "High";
        }
    }

    render() {
        return(
            <div id="item" className={this.numbertoItem(this.props.priority)}>
                <p>{this.props.desc}</p>
                <div className="removeIcon" onClick={() => this.props.removeItem(this.props.id)}>
                    <span>&times;</span>
                </div>
            </div>
        );
    }
}

export default Item;
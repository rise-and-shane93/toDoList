import React, {Component} from 'react';

class Item extends Component {

    // componentDidMount() {
    // }

    componentWillUnmount() {
        if (this.props.lengthMinusOne <= 2) {
            this.props.showHideFunc(false);
        }
    }

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

        const priority = this.numbertoItem(this.props.priority);
        //const lnOvrNum = this.props.length >= 2 ? "overNum" : '';
        //const showHideItem = this.props.index >= 2 ? "hide" : "";
        const showHideItem = (() => {
            if (this.props.index >= 5 && this.props.btnOpen === false) {
                return "hide";
            } else {
                return "";
            }
        })();
        // const showHideItem = (() => {
        //     if (this.props.index >= 2) {
        //         return "hide";
        //     } else {
        //         return "";
        //     }
        // })();
        const classes = `${priority} ${showHideItem} item`;
        return(
            <div id={this.props.id} className={classes}>
                <div className="itemDesc">
                    <p className="itemDesc">{this.props.desc}</p>
                </div>
                <div className="itemTime">
                    <p>{this.props.time}</p>
                </div>
                <div className="removeIcon" onClick={() =>this.props.removeItem(this.props.id)}>
                    <span>&times;</span>
                </div>
            </div>
        );
    }
}

export default Item;
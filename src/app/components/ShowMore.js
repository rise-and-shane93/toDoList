import React, {Component} from 'react';

class ShowMore extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showMore: false
    //     }
    //     this.handleShowMore = this.handleShowMore.bind(this);
    // }

    // handleShowMore = () => {
    //     if (this.props.length > 2) {
    //       this.setState({showMore: true});
    //     } else {
    //       this.setState({showMore: false});
    //     }
    // }
    

    // showOnAdd() {
    //     console.log("wut");
    //         this.props.showHideFunc("show");
    //     } else {
    //         this.props.showHideFunc("hide");
    //     }
    // }

    // h3 = React.createRef();

    // this.h3.innerText = "sadf";

    render() {

        return(
            <article id="showMore" className={this.props.disp ? "show" : "hide"} onClick={this.props.showItemFunc}>
                <h3>{this.props.clicked ? "Hide" : "Show"} 
                    <span> {this.props.length - 5}</span> More
                </h3>
            </article>
        );
    }
}

export default ShowMore;
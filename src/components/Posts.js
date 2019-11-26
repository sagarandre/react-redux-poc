import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeText} from '../actions/postActions'

 class Posts extends Component {
   
    changeTxt = () => {
        this.props.changeText("hello world1");
    }

    render()
    {
        return (
            <div>
                {this.props.todo} <br />
                <button onClick={this.changeTxt}>
                    Change text
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo : state.todo
    }
}

const mapDisptachToProps = (disptach) => {

    return {
        changeText : (text) => {
            disptach(changeText(text))
        }
    }
}

export default connect(mapStateToProps,mapDisptachToProps) (Posts);
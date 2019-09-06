import React, { Component } from 'react'
import { SEARCH_RESULT } from '../action/types';
import { connect } from 'react-redux'

 class Postform extends Component {

    constructor(props){
        super(props);
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    onSearchChange = (e) => {
        let searchKey = e.currentTarget.value ? e.currentTarget.value.trim().toLowerCase() : '';
        this.props.searchResult(searchKey);
        
    }

    render() {
        return (
            <div>
                <h5>Search </h5>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Search  : </label>
                        <br />
                        <input type="search" placeholder="What are you looking for?"  onKeyUp={this.onSearchChange}  />
    
                    </div>
                  
                </form>


                <br/>
            </div>
        )
    }
}


const mapStateToProps = state =>({
   // post: state.post
});

const mapDispatchToProps = dispatch =>({
    searchResult : (payload) => dispatch({type: SEARCH_RESULT, payload }), 
});

export default connect(mapStateToProps,mapDispatchToProps)(Postform);


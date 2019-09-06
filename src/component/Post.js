import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css';

class Posts extends Component {
    
    render() {
        const postItem = this.props.post.map(po => (
              <div key={po._id}>
                  <div className="left">{po._id}</div>
                  <div className="left">{po.name}</div>
                  <div className="left">{po.gender}</div>
              </div>  
        ));
        return (
            <div>
                <h4>Tabel Data</h4>
                {postItem}  
            </div>
        )
    }
}

const mapStateToProps = state =>({
    post: state.post
});

const mapDispatchToProps = dispatch =>({

});

export default connect (mapStateToProps,mapDispatchToProps)(Posts);

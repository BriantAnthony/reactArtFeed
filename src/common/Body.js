import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomCardThunk, likeThunk } from '../cardFeed/cardActions';
import CardWithAvatar from './Card';
import Login from '../user/UserLogin';
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi."
         
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchRandomArt = this.fetchRandomArt.bind(this);
    this.likeArtwork = this.likeArtwork.bind(this);
  }

  fetchRandomArt(){
    this.props.dispatch(randomCardThunk());
  }

  likeArtwork(){
    this.props.dispatch(likeThunk(this.props.art._id, {user_id: this.props.user._id}))
  }

  componentMount(){
    this.props.dispatch(randomCardThunk());
  }

  render() {
    const props = this.props;
    //console.log('props: ', this.props);
    const {art, user, isFetching} = props;
    return this.props.isAuthenticated ? (
      <div className="container">
        <CardWithAvatar 
          action1={() => this.likeArtwork()}
          actionLabel1="Like"
          action2={() => this.fetchRandomArt()}
          actionLabel2="Random Image"
          avatar='https://avatars2.githubusercontent.com/u/5712135?v=3&s=460'
          artworkImg={art.img}
          artistName={art.artist}
          artistNiche={art.style}
          artworkTitle={art.title}
          genre={art.genre}
          artworkDescription={description}
          isFetching={isFetching}
          likes={art.yVotes}
          collectors={art.collectedBy}
        />
      </div>
    ) : (
      <div className="container">
        <Login />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log('newState: ', state)
  return {
    isAuthenticated: state.app.isAuthenticated,
    user: state.app.user,
    art: state.artCard.data,
    isFetching: state.artCard.isFetching
  }
}

export default connect(mapStateToProps)(Body);

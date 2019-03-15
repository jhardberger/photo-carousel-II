import React, { Component } from 'react';
import Firebase from './Firebase';
import './App.css';

import Title        from './Title';
import WelcomeModal from './WelcomeModal';
import PhotoModal   from './PhotoModal';
import Display      from './Display';

const db = Firebase.firestore();

class App extends Component {
  constructor(){
    super();
    this.state = {
      showModal: true,
      showPhoto: false,
      photos: [],
      currentDisplay: null,
    };
    this.handleShowModal    = this.handleShowModal.bind(this);
    this.displayPhoto       = this.displayPhoto.bind(this);
    this.hidePhoto          = this.hidePhoto.bind(this);
    this.displayPhotoTraits = this.displayPhotoTraits.bind(this);
    this.hidePhotoTraits    = this.hidePhotoTraits.bind(this);
  }

  handleShowModal(){
    this.setState({ showModal: false});
  }

  displayPhoto(e){
    const photoURL = e.target.src; 

    const clickedPhoto = this.state.photos.filter(photo => photo.url === photoURL);
    console.log(clickedPhoto[0]);
    this.setState({
      currentDisplay: clickedPhoto[0],
      showPhoto: true
    });
  }

  displayPhotoTraits(){
    this.setState({
      currentDisplay: {
        display: true,
        location: this.state.currentDisplay.location,
        tags: this.state.currentDisplay.tags,
        url: this.state.currentDisplay.url
      }
    });
  }

  hidePhotoTraits(){
     this.setState({
      currentDisplay: {
        display: false,
        location: this.state.currentDisplay.location,
        tags: this.state.currentDisplay.tags,
        url: this.state.currentDisplay.url
      }
    });
  }

  hidePhoto(){
    this.setState({
      currentDisplay: null,
      showPhoto: false
    })
  }

  componentDidMount(){
    let newState = []

    db.collection('photos').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log(doc.id, " => ", doc.data());
        newState.push(doc.data());
      });
    });
    console.log(newState);
    this.setState({
      photos: newState
    })
  };

  render() {

    return (
      <div className="App">

        <WelcomeModal 
          showModal={this.state.showModal} 
          handleShowModal={this.handleShowModal}
        />

        <PhotoModal
          currentDisplay={this.state.currentDisplay}
          showPhoto={this.state.showPhoto}

          displayPhotoTraits={this.displayPhotoTraits}
          hidePhotoTraits={this.hidePhotoTraits}
          hidePhoto={this.hidePhoto}
        />
        <Title />
        <Display 
          showNav={this.state.showNav}
          photos={this.state.photos}
  
          displayPhoto={this.displayPhoto}
          hidePhoto={this.hidePhoto} 
        />
        
      </div>    
    );
  }
}

export default App;
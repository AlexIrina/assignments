import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg',
      allMemeImages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes').then((response) =>
      response.json().then((response) => {
        const { memes } = response.data;
        this.setState({
          allMemeImages: memes,
        });
      })
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // get a random int (index in the array)
    const randomNumber = Math.floor(
      Math.random() * this.state.allMemeImages.length
    );

    // get the meme from that index
    const randomMemeImage = this.state.allMemeImages[randomNumber].url;
    console.log(randomMemeImage);
    // set `randomImg` to the `.url` of the random item I grabbed
    this.setState({ randomImage: randomMemeImage });
  }

  render() {
    return (
      <div>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='topText'
            placeholder='top text'
            value={this.state.topText}
            onChange={this.handleChange}
          />{' '}
          <input
            type='text'
            name='bottomText'
            placeholder='bottom text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />{' '}
          <button>Gen</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImage} alt='meme' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;

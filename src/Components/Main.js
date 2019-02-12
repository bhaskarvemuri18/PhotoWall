import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'



class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts: [
                {
                    id: "0",
                    description: "Red Apples!",
                    imageLink: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1065583.jpg"
                },
                {
                    id: "1",
                    description: "Mangoes yummy!!",
                    imageLink: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5470556.jpg"
                },
                {
                    id: "2",
                    description: "Juicy Watermelons!!",
                    imageLink: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX14919593.jpg"
                }
            ]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }


    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }


    render() {
        return <div>
            <Title title={"PhotoWall"} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
    }
}

export default Main
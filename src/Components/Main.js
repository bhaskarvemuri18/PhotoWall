import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'

const posts = [
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



class Main extends Component {
    render() {
        return <div>
            <Title title={"PhotoWall"} />
            <PhotoWall posts={posts} />
        </div>
    }
}

export default Main
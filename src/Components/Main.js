import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'



class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
        this.removePhoto = this.removePhoto.bind(this);
        console.log('constructor')
    }


    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    // Lifecycle Method
    componentDidMount() {
        const data = SimulateFetchFromDatabase();
        this.setState({
            posts: data
        });
        console.log('component did mount')
    }

    // Lifecycle Method
    componentDidUpdate() {
        alert('rerender');
    }

    render() {
        console.log('render')
        return <div>
            <Title title={"FruitWall"} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
    }

}


function SimulateFetchFromDatabase(params) {
    return [{
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
    }]
}

export default Main
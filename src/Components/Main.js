import React, { Component } from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'


class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts: [{
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
            }],
            screen: 'photos' // photos, addPhoto
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.navigate = this.navigate.bind(this);
    }


    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }


    navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }

    // Lifecycle Method
    componentDidMount() {
        console.log('component did mount')
    }

    // Lifecycle Method
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts);
        console.log(this.state);
    }

    render() {
        console.log('render')
        return <div>

            {
                this.state.screen === 'photos' && (
                    <div>
                        <Title title={"FruitWall"} />
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                    </div>
                )
            }
            {
                this.state.screen === 'addPhoto' && (
                    < div >
                        <AddPhoto />
                    </div>)
            }
        </div>
    }

}


export default Main
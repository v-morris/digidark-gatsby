import React from 'react';

let API = "https://jsonplaceholder.typicode.com/photos";
class ImageAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then (res => {
            let filter10 = res.filter((image, index) => index <10); //this variable needs set state to be used outside of here
            this.setState({photos: filter10});
        })
        .catch(error => alert('error: ', error)) //this is a callback function
    }

    render() {
        console.log('Rendered!');
        const style = {
            padding: `10px`
        }
        return (
            <div >
                {this.state.photos.map(pic => (
                    <img key = {pic.id} src = {pic.thumbnailUrl} style = {style} />                ))}
            </div>
            
        );
    }

}


export default ImageAPI;

import React from 'react';

let API = "https://api.github.com/users/v-morris/repos?sort=created_at";
class GithubAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: []
        };
    }

    componentDidMount() {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                let filter20 = res.filter((repo, index) => index < 20); //this variable needs set state to be used outside of here
                this.setState({ repos: filter20 });
            })
            .catch(error => alert('error: ', error)) //this is a callback function
    }

    render() {
        console.log('Rendered!');
        const style = {
            padding: `3px`,
            margin: `10px`,
            width: `250px`,
            height: `200px`,
            textAlign: `center`,
            border: `4px solid transparent`,
            padding: `10px`,
            borderImage: `linear-gradient(30deg, #3686A0 50%, #5F4B8B 100%)`,
            borderImageSlice: `1`,
            boxShadow: `3px 1px 8px #444444`
        }


        return (
            <div style={{
                textAlign: `center`,
                display: `flex`, flexWrap: `wrap`, justifyContent: `space-evenly`, paddingBottom:`50px`
            }}>
                {this.state.repos.map(repo => (
                    <a href={repo.html_url} target="_blank">
                        <div style={style}>
                            <h5 key={repo.id} > {repo.name}</h5>
                            <p style={{ fontSize: `0.8rem`, padding: `0` }}>{repo.description}</p>
                        </div>
                    </a>
                ))}
            </div>

        );
    }

}


export default GithubAPI;

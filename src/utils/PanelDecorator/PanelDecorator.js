import React from 'react';

export default class Panel extends React.Component{

    render(){
        return(
            <a href={'http://www.google.com'} id="Link">            
                <img alt={this.props.altText} src={"http://image.tmdb.org/t/p/"+this.props.size+this.props.src} fluid='true' />
            </a>
        )
    }
}
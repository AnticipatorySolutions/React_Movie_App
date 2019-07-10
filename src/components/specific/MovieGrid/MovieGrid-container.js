import React from 'react';
import Panel from '../../../utils/PanelDecorator/PanelDecorator';

class MovieGridContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            details: [],
            done: false,
            error: null
        }
    }

    componentDidMount() {
        fetch('http://api.themoviedb.org/3/movie/popular?api_key=Insert_Your_API_Key_Here')
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                done: true,
                details: result.results
              });
            },
            // error handler
            (error) => {
              this.setState({
                done: true,
                error
              });
            }
          )
      }


    render(){
        const {error, done, details } = this.state;

        if(error){
            return(
                <div>Error: {error.message}</div>
            );        
        } else if(!done){
        return(
            <div>
                Loading
            </div>
        )} else {
            return (
                <div className="mt-1">
                  {details.map((detail) => <Panel key={detail.id} size={"w185"} altText={detail.title} src={detail.backdrop_path}/>)}
                </div>
            )}
    }
}

export default MovieGridContainer;
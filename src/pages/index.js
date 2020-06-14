import React,{Component} from 'react';
import {connect} from 'react-redux';



class Index extends Component{
    render(){

        const test =() =>{
            this.props.testAction({data:1});
        }

        return(
            <div>
                <h1>Index Page</h1>
                <button onClick={this.props.loadImages}>Load Images</button>
                {this.props.images.map((item)=>{
                    return(
                    <p>{item}</p>
                    )
                })}
                <button onClick={test}>Load data with params</button>
            <p>Save Test  {this.props.saveTest}</p>
            </div>
        )
    }
}

const mapStateToProps = ({isLoading,images,error,saveTest}) =>({
  isLoading,
  images,
  error,
  saveTest
})

const mapDispatchToProps = (dispatch) =>({
 loadImages : (data) => dispatch(loadImages(data)),
 testAction :(data)  => dispatch(testAction(data)),
})


// const mapDispatchToProps = (dispatch) =>{
//     return(bindActionCreators({
//         //deleteFromArray: (array) => {getTheArray(array)},
    
//     }, dispatch))
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
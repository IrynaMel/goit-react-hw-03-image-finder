import { Component} from 'react';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { FetchImages } from './API/Api';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import LoaderSpinner from './Loader/Loader';


class App extends Component{
 state ={
   query: '',
   imagesList: [],
   page: 1,
   button: false,
   loading: false
 }

getImages=()=>{
 FetchImages(this.state.query, this.state.page)
  .then((imagesList) => {
    if(imagesList.length===0){
toast.error(`No images for ${this.state.query}`)
    }
    if(imagesList.length>=12){
      this.setState({button: true})
    }else{
      this.setState({button: false})}
    this.setState((prevState)=>(
      {imagesList: [...prevState.imagesList, ...imagesList]}))})
  .catch(error=> console.log(error))
  .finally(() => {
    
    this.setState({ loading: false });
  });
}

 handlerFormSubmit = (query)=>{
  this.setState({query: query,
    page:1,
  imagesList:[],
  loading: true})
  
 this.getImages()
 }

 onLoadMoreClick=()=>{
  this.setState((prevState)=>({page: prevState.page + 1,
    loading: true}) )
   
 this.getImages()

 }
 
 
  render(){
    const {imagesList, button, loading}= this.state
  return (
    <div>
    <ToastContainer />
    <Searchbar onSubmit={this.handlerFormSubmit}/>
    {imagesList &&(
    <ImageGallery
     imagesList ={imagesList}/>)}
     {loading && <LoaderSpinner />}
     {button && <ButtonLoadMore 
     onClick = {this.onLoadMoreClick}/>}
     
    </div>
  );
}
};

export default App
import React, { Component}from 'react';
import { Card, CardImg, CardText, CardImgOverlay,CardBody,CardTitle, Button,Jumbotron } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import SlideImage from '../shared/slideimage';

class Home  extends Component {
  state = {
    redirect: false,
    redirect1:false
  }
  setRoute = () => {
    this.setState({
      redirect: true
    })
  }

  renderRoute = () => {
    if (this.state.redirect) {
      return <Redirect to='/module1a' />
    }
  }

  setRoute1 = () => {
    this.setState({
      redirect1: true
    })
  }

  renderRoute1 = () => {
    if (this.state.redirect1) {
      return <Redirect to='/module2b' />
    }
  }

  render()
  {  
    const home = this.props.courses.map((course) => {
      return( 

        <div key ={course.id } className="col-12 col-md-6 ">
        <div className="box text-center">
           <Card onClick={this.setRoute} className="pointer">
               <CardImg src={course.image} alt={course.name}/>
               
                <CardImgOverlay>
		              <div className="box-content">
		                <ul className="icon">
		                  <li><i className="fa fa-play-circle"></i></li>
		                </ul>  
                    <CardText>{course.name}</CardText>
		              </div>  
		            </CardImgOverlay>
           </Card> 
           </div>   


        </div>
    
        
      );
    })
    const cours1 = this.props.courses1.map((course1) => {
      return(
        <div key ={course1.id } className="col-12 col-md-3 ">
           <Card className=" text-card pointer" onClick={this.setRoute}  >
              <CardImg   src={course1.image} alt={course1.name}/>
              <CardImgOverlay className="box">
              <div className="box-content">
		                <ul className="icon">
		                  <Button outline color="secondary" size="lg" block  ><li><i className="fa fa-play-circle"></i></li><br/>Preview Course</Button>
		                </ul>  
		              </div>  
                  </CardImgOverlay>
                  <CardBody>   
                    <CardTitle><h4>{course1.name}</h4></CardTitle>    
                    <CardText>{course1.description }</CardText>
              </CardBody>
            
              
                
                
           </Card> 
           </div>
      );
    })

    
    return(
      <div className="conatiner">
       <Jumbotron className="jumbotron" >
                    <div className="container">    
                        <div className="row row-header">
                            <div className="col-12 col-sm-10">
                           <h1>Immeasurable</h1>
                           <h3> <p>As there is a technology to create external wellbeing, there is a whole dimension of science and technology to create inner wellbeing.</p></h3>
                                <Button  className="btn-sub">Subscribe Now</Button>
                            </div>
                        </div>
                        </div>
                    </Jumbotron>
        <div className="row row-content">
          <div className=" col-12 col-md-6">
           <div className="box text-center">
            <Card  className="pointer" onClick={this.setRoute1}>
              <CardImg src="assets/images/conqueringthemind.jpg" />
                <CardImgOverlay>
		              <div className="box-content">
		                <ul className="icon">
		                  <li><i className="fa fa-play-circle fa-lg"></i></li>
		                </ul>
                    <CardText className="text-center">
		                  Conquering the Mind 
		                </CardText>
		              </div>  
		            </CardImgOverlay>
            </Card>
            </div>
          </div>

             <div className=" col-12 col-md-6">
               <div className="row">
                {home} 
                {this.renderRoute()}
                {this.renderRoute1()}
               </div>
             </div>
          </div>  
          <div className="row row-col m-3 ">
            <div className="col-12 col-md-3 text-center">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Unlimited Access</h4>
             <p>Choose what you'd like to learn from our extensive subscription library.
              </p>
            </div>

            <div className="col-12 col-md-4 text-center">
            <i className="fa fa-graduation-cap fa-lg" aria-hidden="true"></i>
             <h4>Expert Masters</h4>
             <p>Switch between your computer, tablet, or mobile device. </p>
                <Button className="btn-chacha" color="warning">Subscribe now</Button>
            </div>

            <div className="col-12 col-md-4 text-center ">
            <i className="fa fa-mobile-phone fa-lg " aria-hidden="true" ></i>
             <h4>Learn Anywhere</h4>
             <p>Learn from industry experts who are
               passionate about Teaching.
              </p>
            </div>
          </div>
          <h3 className="text-center">Browse our top courses</h3>
          <div className="row">
          {cours1}
      
          </div>
          <div className="row row-content row-slide ">
         
          </div>

          <SlideImage />
          </div>
            
           
     
    );
    
  }


  
}

export default Home;
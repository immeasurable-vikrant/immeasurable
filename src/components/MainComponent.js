import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Learning from './LearningComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';																																																																																																																																																																																																																																																																																																																																																			import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../authenticate/SignInComponent';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders:LEADERS
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }
    return (
      <div>
        <Route path="/signin" component={SignIn} />
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/Learning" component= {() => <Learning/>} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
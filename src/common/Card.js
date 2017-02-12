import React, { Component } from 'react';
import {
  Card, 
  CardActions, 
  CardHeader, 
  CardMedia, 
  CardTitle, 
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  defaultImg: {
    width: 600,
    backgroundColor: '#999'
  },
  ul: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginTop: 0
  },
  horizontalList: {
    display: 'inline-block',
    paddingRight: 10,
  }
}

export class CardWithAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.artMapper = this.artMapper.bind(this);
  }

  artMapper(array){
    if(array){
      return (
        <ul style={styles.ul}>
          {array.map((item, index) => (
            <li 
              style={styles.horizontalList} 
              key={index}>
              {index === array.length-1 ? `${item}` : `${item},`}
            </li>
          ))}
        </ul>
      );
    }
  }

  render(){
    const props = this.props;
    //const mediums = this.artMapper(this.props.artistMediums)

    return (
      <Card>
        <CardHeader
          title={props.artistName}
          subtitle={props.artistNiche}
          avatar={props.avatar}
        />
        <CardMedia>
          <img 
            style={styles.defaultImg} 
            src={props.artworkImg}
            role="presentation" 
          />
        </CardMedia>
        <CardTitle title={props.artworkTitle} subtitle={props.genre} />
        <CardText>
          {props.artworkDescription}
        </CardText>
        <CardActions>
          <FlatButton label={props.actionLabel1} onTouchTap={props.action1} />
          <FlatButton label={props.actionLabel2} onTouchTap={props.action2} />
        </CardActions>
      </Card>
    );  
  }
}

CardWithAvatar.propTypes = {
  action1: React.PropTypes.func.isRequired
}

export default CardWithAvatar;

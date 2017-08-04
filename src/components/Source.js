import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Loading from './Loading';
import Article from './Article.js';

class Source extends Component {
  constructor (props) {
    super(props)

    this.state = {
      news: null,
      loading: true,
      hidden: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.helpFetch = this.helpFetch.bind(this);
  }

  helpFetch(source) {
    fetch(`/api/get/?source=${source}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            news: data,
            loading: false
          }
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  componentWillMount() {
    var source = this.props.source;
    console.log(source);
    if (this.props.source === undefined) {
      this.setState(function() {
        return {
          loading: false
        }
      })
    }
    this.helpFetch(source);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(() => {return {hidden: !this.state.hidden}})
  }

  render() {
    var news = this.state.news
    var loading = this.state.loading;
    if (!loading && this.props.source === undefined) {
      return (
        <div className='hidden'></div>
      )
    }
    if (loading) {
      return (
          <Loading/>
      )
    }
    if (this.state.hidden) {
      return (
        <Row>
          <Col><Button className='custom' onClick={this.handleClick} bsSize="large">{this.props.label}</Button></Col>
        </Row>
      )
    }
    return (
      <Grid id={this.props.source}>
      <Row>
        <Col><Button className='custom' onClick={this.handleClick} bsSize="large">{this.props.label}</Button></Col>
        <Col>
          {news.slice(0,5).map((article, index) => <a target='_blank' rel='noopener noreferrer'key={'a' + index} href={article.url}><Article image={article.urlToImage}
            abstract={article.description} title={article.title} redir={article.url} key={index}/></a>)}
        </Col>
      </Row>
    </Grid>
    )
  }
}

export default Source;

import React, { Component } from 'react';
import { Grid, Modal, Row, Col, Button } from 'react-bootstrap';
import Source from './Source'
import Footer from './Footer';

class Splash extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true,
      sources: [],
      label: [],
      news: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var source = e.target.value;
    var label = e.target.name
    if (this.state.sources.includes(source)) {
      var sourceArr = this.state.sources;
      var labelArr =this.state.label;
      var sourceIndex = sourceArr.indexOf(source)
      var labelIndex = labelArr.indexOf(label)
      sourceArr.splice(sourceIndex, 1);
      labelArr.splice(labelIndex, 1)
      this.setState(function() {
        return {
          sources: sourceArr,
          label: labelArr
        }
      })
    } else {
      this.setState(function() {
        return {
          sources: this.state.sources.concat(source),
          label: this.state.label.concat(label)
        }
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(function () {
      return {
        loading: false
      }
    })
  }

  render() {
    var loading = this.state.loading;
    let label = this.state.label
    if (loading) {
      return (
        <div className='app'>
        <div className='static-modal'>
          <Modal.Dialog>

            <Modal.Header>
              <Modal.Title>
                Select sources (up to 4):
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <input
                type='checkbox'
                name='The New York Times'
                value='the-new-york-times'
                onChange={this.handleChange} /><label> The New York Times</label><br />
              <input
                type='checkbox'
                name='The Guardian'
                value='the-guardian-uk'
                onChange={this.handleChange} /><label> The Guardian UK</label><br />
              <input
                type='checkbox'
                name='The Economist'
                value='the-economist'
                onChange={this.handleChange} /><label> The Economist</label><br />
              <input
                type='checkbox'
                name='Reuters'
                value='reuters'
                onChange={this.handleChange} /><label> Reuters</label><br />
              <input
                type='checkbox'
                name='The Washington Post'
                value='the-washington-post'
                onChange={this.handleChange} /><label> The Washington Post</label><br />
              <input
                type='checkbox'
                name='BBC News'
                value='bbc-news'
                onChange={this.handleChange} /><label>BBC News</label><br />
              <input
                type='checkbox'
                name='Associated Press'
                value='associated-press'
                onChange={this.handleChange} /><label>Associated Press</label><br />
              <input
                type='checkbox'
                name='The Wall Street Journal'
                value='the-wall-street-journal'
                onChange={this.handleChange} /><label>The Wall Street Journal</label><br />
              <input
                type='checkbox'
                name='Die Zeit'
                value='die-zeit'
                onChange={this.handleChange} /><label>Die Zeit</label><br />
            </Modal.Body>

            <Modal.Footer>
            <form onSubmit={this.handleSubmit}>
              <Button bsStyle='primary' type='submit'>Submit</Button>
            </form>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
        <Footer />
      </div>
      )
    }
    return (
      <Grid className='app'>
        <Row className='container'>
          {this.state.sources.map((source, i) => {
            return (
              <Col xs={12} lg={3} sm={6} md={6} className={(i === 0) ? 'outer-div left-div' : (i === 3) ? 'outer-div right-div' : 'outer-div'}>
                <Source source={source} label = {label[i]} />
              </Col>
            )
          })}
        </Row>
        <Footer sources={this.state.sources} labels={this.state.label}/>
      </Grid>
    )
  }
}

export default Splash

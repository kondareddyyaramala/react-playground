import React, { Fragment } from 'react';

class Hello extends React.Component {
  constructor(props) {
    super();
    console.log('Received props', props);
  }

   getSnapshotBeforeUpdate(prevProps, prevState) {
     console.log('Component will receive props', prevProps, prevState);
   }

  render() {
     const { name } = this.props;
    return (
      <React.Fragment>
       <h1>Hello {name}!</h1>
      </React.Fragment>
    );
  }
}

export default Hello;
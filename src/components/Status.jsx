import React, { Component } from 'react';
import './status.css'; // Import the CSS file

export class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Pending'
    };
  }

  // Method to handle application submission
  handleApplication = () => {
    // Assuming some logic here to submit the application
    // Once the application is submitted, update the status
    this.setState({ status: 'Pending' });
  }

  render() {
    const { status } = this.state;

    return (
      <div className="status-container">
        <h2 className="status-heading">Status: {status}</h2>
        <div className="status-message">
          {status === 'Pending' && <p>Your application is currently pending.</p>}
          {status === 'Approved' && <p>Congratulations! Your application has been approved.</p>}
          {status === 'Rejected' && <p>We regret to inform you that your application has been rejected.</p>}
        </div>
        <button className="status-button" onClick={this.handleApplication}>Apply for Bursary</button>
      </div>
    );
  }
}

export default Status;

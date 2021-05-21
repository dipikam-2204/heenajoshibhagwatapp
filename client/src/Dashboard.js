import React, { Component } from 'react';

class Dashboard extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => 
     { console.log(list)
      this.setState({ list })})
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
              <table className='table'>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Vaccinated</th>
                    <th>Travelled</th>
                    <th>Symptoms</th>
                    <th>Realtor</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                  {list.map(({first_name, last_name,vaccinated, travelled,symptoms,realtor,email_id,phone_number}) =>
                    <tr key={1}>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{vaccinated?"Vaccinated":"Not Vaccinated"}</td>
                        <td>{travelled?"Travelled":"Not Travelled"}</td>
                        <td>{symptoms?"Symptoms":"Not Symptoms"}</td>
                        <td>{realtor?"Realtor":"Not Realtor"}</td>
                        <td>{email_id}</td>
                        <td>{phone_number}</td>
                    </tr>
                )}
                </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2>No Responses yet</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Dashboard;
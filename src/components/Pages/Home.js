import React, { Fragment } from 'react';
import { Table, Container, Button } from 'react-bootstrap';

const Home = () => {
  const tourData = [
    { date: 'JUL 16', location: 'DETROIT, MI', venue: 'DTE ENERGY MUSIC THEATRE', tickets: 'BUY TICKETS' },
    { date: 'JUL 19', location: 'TORONTO, ON', venue: 'BUDWEISER STAGE', tickets: 'BUY TICKETS' },
    { date: 'JUL 22', location: 'BRISTOW, VA', venue: 'JIGGY LUBE LIVE', tickets: 'BUY TICKETS' },
    { date: 'JUL 29', location: 'PHOENIX, AZ', venue: 'AK-CHIN PAVILION', tickets: 'BUY TICKETS' },
    { date: 'AUG 2', location: 'LAS VEGAS, NV', venue: 'T-MOBILE ARENA', tickets: 'BUY TICKETS' },
    { date: 'AUG 7', location: 'CONCORD, CA', venue: 'CONCORD PAVILION', tickets: 'BUY TICKETS' },
  ];

  return (
    <Fragment>
      <Container>
        <h1 className="text-center font-weight-bold mt-5 my-4">TOURS</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Venue</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {tourData.map((tour, index) => (
              <tr key={index}>
                <td>{tour.date}</td>
                <td>{tour.location}</td>
                <td>{tour.venue}</td>
                <td><Button>{tour.tickets}</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <div className="bg-info text-white text-center py-4 mt-5">
        <Container>
          <h1 className="font-weight-bold display-4 my-6">The Generics</h1>
        </Container>
      </div>
    </Fragment>

  );
};

export default Home;

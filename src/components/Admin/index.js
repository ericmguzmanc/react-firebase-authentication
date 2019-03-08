import React, { Fragment, PureComponent } from 'react';
import { ListGroup, ListGroupItem, Spinner, Row, Col } from 'reactstrap';

import { withFirebase } from '../Firebase';

import '../styles/common.css';

class AdminPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <Fragment>
        <h3>Admin</h3>
        {loading && <Spinner color="primary" />}

        <UserList users={users} />
      </Fragment>
    );
  }

}

const UserList = ({ users }) => (
  <Col xs="3" sm="3">
    <ListGroup>
      {users.map(user => (
        <ListGroupItem key={user.uid}  className="pl-5">
          <ListGroup>
            <Row>
              <strong>ID: </strong> {user.uid}
            </Row>
            <Row>
              <strong>E-Mail: </strong> {user.email}
            </Row>
            <Row>
              <strong>Username: </strong> {user.username}
            </Row>
          </ListGroup>
        </ListGroupItem>
      ))}
    </ListGroup>
  </Col>
);

export default withFirebase(AdminPage);
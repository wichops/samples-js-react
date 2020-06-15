import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Header, Card } from 'semantic-ui-react';

const Profile = () => {
  const { authState, authService } = useOktaAuth();
  const [token, setToken] = useState(null);
  const [request, setRequest] = useState({
    status: 'none',
    body: {},
  });

  const fetchToken = () => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${authState.accessToken}`);

    fetch('https://dry-cliffs-97591.herokuapp.com/secure', { headers: myHeaders })
      .then(response => {
        setRequest({
          status: response.status,
          body: response.text(),
        });
      })
      .catch(console.error);
  }

  return (
    <div>
      <div>
        <Header as="h1">
          Test your token on the server-side
        </Header>
        <Header as="h2">
          {authState.isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
        </Header>
      </div>
      <div class="ui divider" />
      <div>
        <Card
          link
          header={request.status}
          description={request.body}
        />
      </div>
    </div>
  );
};

export default Profile;

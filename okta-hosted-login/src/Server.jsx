import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Header, Card, Button } from 'semantic-ui-react';

import config from './config';

const Profile = () => {
  const { authState } = useOktaAuth();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(0);
  const [body, setBody] = useState('{}');

  const fetchToken = () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${authState.accessToken}`);

    fetch(`${config.apiUrl}/secure`, { headers: myHeaders })
      .then((response) => {
        setLoading(false);
        setStatus(response.status);
        return response.text();
      })
      .then(setBody)
      .catch(console.error);
  };

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
      <div className="ui divider" />
      <div>
        <Card>
          <Card.Content>
            <Card.Header>{status}</Card.Header>
              <Card.Description>
                <code>{body}</code>
              </Card.Description>
          </Card.Content>
          <Card.Content>
            <Button secondary loading={loading} onClick={fetchToken}>
              Fetch secure endpoint
            </Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

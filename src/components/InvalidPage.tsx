import { Link } from 'react-router-dom';

function InvalidPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>
        404 - The page you're looking for doesn't exist, Go to the{' '}
        <Link to="/Specbee-React-Assignment/">Homepage</Link>{' '}
      </h1>
    </div>
  );
}

export default InvalidPage;

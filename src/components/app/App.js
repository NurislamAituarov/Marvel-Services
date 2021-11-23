import { Helmet } from 'react-helmet';
import ErrorBoundary from '../../error/error-boundary';
import Footer from '../footer/Footer';
import Head from '../head/head';
import Section from '../section/section';
import './App.scss';

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
        <title>Marvel information</title>
      </Helmet>
      <ErrorBoundary>
        <Head />
        <Section />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;

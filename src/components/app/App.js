import ErrorBoundary from '../../error/error-boundary';
import Head from '../head/head';
import Section from '../section/section';
import './App.scss';
function App() {
  return (
    <>
      <ErrorBoundary>
        <Head />
        <Section />
      </ErrorBoundary>

    </>
  );
}

export default App;

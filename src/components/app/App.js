import { Helmet } from 'react-helmet'
import ErrorBoundary from '../../error/error-boundary';
import Head from '../head/head';
import Section from '../section/section';
import './App.scss';

function App() {

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Marvel information</title>
      </Helmet>
      <ErrorBoundary>
        <Head />
        <Section />
        <footer id="footer">
          <img src="https://www.desktopbackground.org/download/1280x900/2013/12/07/681835_black-and-white-iron-man_1600x900_h.jpg" alt="footer"></img>
          <span>Кто знает как сделать так, что бы при нажатии на, например, кнопку в главном меню автоматически совершался переход к нужному месту страницы? Помогите?!

          </span>
        </footer>
      </ErrorBoundary>
    </>
  );
}

export default App;

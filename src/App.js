import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { LanguageProvider } from './components/languages/Languages';

function App() {
  return (
    <LanguageProvider>
      <Header/>
      <Main/>
      <Footer/>
    </LanguageProvider>
  );
}

export default App;
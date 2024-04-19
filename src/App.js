import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
function App(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Hero>
          <Content/>
        </Hero>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

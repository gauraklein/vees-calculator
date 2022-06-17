import Input from "../components/input";
import Layout from "../components/layout";

// TODO: make a form component which will handle the inputs 
// think about state management
// should have some mobile friendly styling 

const Index = () => (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Vee's Baking Calculator</h1>
      </div>
    </section>
    <section className="section">
      <Input type="number" label="Percentage" placeholder="Bakers percentage" />
    </section>
  </Layout>
);

export default Index;

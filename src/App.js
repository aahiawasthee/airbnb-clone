import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const card = cardData.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div className="whole-app">
      <Navbar />
      <Hero />
      <section className="card-list">{card}</section>
    </div>
  );
}

export default App;

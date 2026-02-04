import "./App.css";
import Card from "./components/Card";

function App() {
  const All_products = [
    { id: 1, name: "coffee", description: "healthy low fat", price: 50 },
    { id: 2, name: "tea", description: "refreshing drink", price: 30 },
    { id: 3, name: "juice", description: "fresh fruit", price: 40 },
  ];

  return (
    <div className="app-container">
      {All_products.map(({ id, name, description, price }) => (
        <Card key={id} name={name} description={description} price={price} />
      ))}
    </div>
  );
}

export default App;

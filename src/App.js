import "./App.css";
import AsideLeft from "./js/asideLeft/AsideLeft";
import AsideRight from "./js/asideRight/AsideRight";

export default function App() {
  return (
    <main className="main">
      <div className="App">
        <AsideLeft/>
        <AsideRight/>
      </div>
    </main>
  );
}

import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Cards image="https://img.freepik.com/free-photo/fresh-natural-green-schefflera-arboricola-background_53876-153311.jpg?w=1060&t=st=1703316580~exp=1703317180~hmac=84da4124e03dc67f215f62d113b4b9a36d00e80739850f1b7b45848a62358ba3">
        <h5 className="card-title">Название карточки</h5>
        <p className="card-text">
          Немного примера текста для карточки.
        </p>
        <a href="#1" className="btn btn-primary">
          Переход по ссылке
        </a>
      </Cards>
      <Cards>
        <h5 className="card-title">Особое название карточки</h5>
        <p className="card-text">
          Другой примера текста для карточки.
        </p>
        <a href="#2" className="btn btn-primary">
          Переход по другой ссылке
        </a>
      </Cards>
    </div>
  );
}

export default App;
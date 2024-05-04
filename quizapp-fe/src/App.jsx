import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import QuestionComponent from "./components/QuestionComponent";
import { ListQuestionComponent } from "./components/ListQuestionComponent";
import Quiz from "./Quiz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div><HeaderComponent/></div>
          <Routes>
            <Route path="/" element={<ListQuestionComponent />}></Route>
            <Route path="/question/allQuestions" element={<ListQuestionComponent />}></Route>
            <Route path="/add-question" element = {<QuestionComponent />}>  </Route>
            <Route path="/quiz" element = {<Quiz />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}


export default App;

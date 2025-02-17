import React from "react";
import { Provider} from "react-redux";
import store from "./store";
import StudentList from "./StudentList";



const App = () => (
  <Provider store={store}>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <StudentList />
    </div>
  </Provider>
);

export default App;

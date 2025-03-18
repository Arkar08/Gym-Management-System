import AdminContextProvider from "./contextProvider/AdminContextProvider";
import TrainerContextProvider from "./contextProvider/TrainerContextProvider";
import View from "./utils/View";

function App() {

  const token = localStorage.getItem("token")

  if(token === 'admin'){
    return (
      <AdminContextProvider>
        <View />  
      </AdminContextProvider>    
    )
  }

  // if(token === 'trainer'){
  //   <TrainerContextProvider>
  //     <View />
  //   </TrainerContextProvider>
  // }

  return (
    <TrainerContextProvider>
       <View />
    </TrainerContextProvider>
  );
}

export default App;

import ClassProvider from "./hooks/ClassContext"
import TableProvider from "./hooks/TableContext"
import UserProvider from "./hooks/User"
import View from "./utils/View"


function App() {
  return (
    <TableProvider>
      <ClassProvider>
        <UserProvider>
            <View />
        </UserProvider>
      </ClassProvider>
    </TableProvider>
  )
}

export default App

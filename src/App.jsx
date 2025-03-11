import BookingProvider from "./hooks/BookingContext"
import ClassProvider from "./hooks/ClassContext"
import TableProvider from "./hooks/TableContext"
import UserProvider from "./hooks/User"
import View from "./utils/View"


function App() {
  return (
    <TableProvider>
      <BookingProvider>
        <ClassProvider>
          <UserProvider>
              <View />
          </UserProvider>
        </ClassProvider>
      </BookingProvider>
    </TableProvider>
  )
}

export default App

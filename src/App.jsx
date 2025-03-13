import BookingProvider from "./hooks/BookingContext"
import ClassProvider from "./hooks/ClassContext"
import PlanProvider from "./hooks/PlanContext"
import ReportProvider from "./hooks/ReportContext"
import SalePlanProvider from "./hooks/SalePlanContext"
import TableProvider from "./hooks/TableContext"
import UserProvider from "./hooks/User"
import View from "./utils/View"


function App() {
  return (
    <TableProvider>
      <ReportProvider>
        <SalePlanProvider>
          <PlanProvider>
            <BookingProvider>
              <ClassProvider>
                <UserProvider>
                    <View />
                </UserProvider>
              </ClassProvider>
            </BookingProvider>
          </PlanProvider>
        </SalePlanProvider>
      </ReportProvider>
    </TableProvider>
  )
}

export default App

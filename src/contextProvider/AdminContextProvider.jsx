import React from 'react'
import TableProvider from '../hooks/TableContext'
import ReportProvider from '../hooks/ReportContext'
import SalePlanProvider from '../hooks/SalePlanContext'
import PlanProvider from '../hooks/PlanContext'
import BookingProvider from '../hooks/BookingContext'
import ClassProvider from '../hooks/ClassContext'
import UserProvider from '../hooks/User'

const AdminContextProvider = ({children}) => {
  return (
    <TableProvider>
        <ReportProvider>
          <SalePlanProvider>
            <PlanProvider>
              <BookingProvider>
                <ClassProvider>
                  <UserProvider>
                    {children}
                  </UserProvider>
                </ClassProvider>
              </BookingProvider>
            </PlanProvider>
          </SalePlanProvider>
        </ReportProvider>
      </TableProvider>
  )
}

export default AdminContextProvider

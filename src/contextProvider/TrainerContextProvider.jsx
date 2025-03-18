import React from 'react'
import TableProvider from '../hooks/TableContext'
import MemberProvider from '../hooks/MemberContext';
import {MyClassProvider} from '../hooks/MyClassContext'
import IncomeProvider from '../hooks/IncomeContext';

const TrainerContextProvider = ({children}) => {
  return (
    <TableProvider>
      <MyClassProvider>
        <MemberProvider>
          <IncomeProvider>
            {children}
          </IncomeProvider>
        </MemberProvider>
      </MyClassProvider>
    </TableProvider>
  )
}

export default TrainerContextProvider

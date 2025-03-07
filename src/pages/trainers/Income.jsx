import React from 'react'
import DataTable from '../../components/Table';

const Income = () => {

   
  function createData(id, name, classlist, training, paymentType,packages, total,createdDate) {
    return {
      id,
      name,
      classlist,
      training,
      paymentType,
      packages,
      total,
      createdDate
    };
  }
  
  const rows = [
      createData(1,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(2,'arkar','-','kyawkyaw','cash','member',10000,'06-03-2025'),
      createData(3,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(4,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(5,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(6,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(7,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(8,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(9,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(10,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(11,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(12,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(13,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(14,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(15,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(16,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(17,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(18,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(19,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(20,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
      createData(21,'arkar','yoga','kyawkyaw','cash','booking',10000,'06-03-2025'),
  ];

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'Id',
    },
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Customer Name',
    },
    {
      id: 'classlist',
      numeric: false,
      disablePadding: true,
      label: 'Class Name',
    },
    {
      id: 'training',
      numeric: false,
      disablePadding: true,
      label: 'Training By Trainer',
    },
    {
      id: 'packages',
      numeric: false,
      disablePadding: true,
      label: 'Package',
    },
    {
      id: 'paymentType',
      numeric: false,
      disablePadding: true,
      label: 'Payment Type',
    },
    {
      id: 'total',
      numeric: true,
      disablePadding: true,
      label: 'Total Amount',
    },
    {
      id: 'createdDate',
      numeric: false,
      disablePadding: true,
      label: 'Payment Date',
    },
  ];

  return (
    <div className='tableContainer'>
      <DataTable name="Income" rows={rows} headCells={headCells}/>
    </div>
  )
}

export default Income

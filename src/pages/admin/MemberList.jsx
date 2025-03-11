import React from 'react'
import DataTable from '../../components/Table'

const MemberList = () => {

  function createData(id, name, plan, accessType, price, startDate,endDate,training,payment,status,createdDate,updatedDate) {
    return {
      id,
      name,
      plan,
      accessType,
      price,
      startDate,
      endDate,
      training,
      payment,
      status,
      createdDate,
      updatedDate
    };
  }
  
  const rows = [
    createData(1, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(2, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(3, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(4, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(5, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(6, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(7, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(8, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(9, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(10, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(11, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(12, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(13, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(14, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(15, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(16, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(17, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(18, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(19, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
    createData(20, 'arkar','Basic','monthly',29.99,"06-03-2025","06-04-2025","kyawkyaw","Accept","06-03-2025", " - "),
  ];

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'ID',
    },
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Customer Name',
    },
    {
      id: 'plan',
      numeric: false,
      disablePadding: true,
      label: 'Plan Name',
    },
    {
      id: 'training',
      numeric: false,
      disablePadding: true,
      label: 'Traing By Trainer',
    },
    {
      id: 'accessType',
      numeric: false,
      disablePadding: true,
      label: 'Access Type',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: true,
      label: 'Price (Per Month)',
    },
    {
      id: 'startDate',
      numeric: false,
      disablePadding: true,
      label: 'Start Date',
    },
    {
      id: 'endDate',
      numeric: false,
      disablePadding: true,
      label: 'End Date',
    },
    {
      id: 'payment',
      numeric: false,
      disablePadding: true,
      label: 'Payment Type',
    },
    {
      id: 'status',
      numeric: false,
      disablePadding: true,
      label: 'Status',
    },
    {
      id: 'createdDate',
      numeric: false,
      disablePadding: true,
      label: 'Created Date',
    },
    {
      id: 'updatedDate',
      numeric: false,
      disablePadding: true,
      label: 'Updated Date',
    },
  ];

  return (
    <div className='tableContainer'>
      <DataTable name="Sale Plan" rows={rows} headCells={headCells}/>
    </div>
  )
}

export default MemberList

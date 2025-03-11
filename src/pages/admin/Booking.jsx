import React, { useContext } from 'react'
import DataTable from '../../components/Table'
import { BookingContext } from '../../hooks/BookingContext';

const Booking = () => {

  // function createData(id, name,classlist,trainer, price, classCount,payment, status,createdDate,updatedDate) {
  //   return {
  //     id,
  //     name,
  //     classlist,
  //     trainer,
  //     price,
  //     classCount,
  //     payment,
  //     status,
  //     createdDate,
  //     updatedDate,
  //   };
  // }
  
  // const rows = [
  //   createData(1,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(2,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(3,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(4,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(5,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(6,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(7,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(8,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(9,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(10,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(11,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(12,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(13,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(14,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(15,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(16,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(17,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(18,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(19,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-'),
  //   createData(20,'arkar','yoga','kyawkyaw',100000,2,'cash','pending','25-05-2025','-')
  // ];

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
      id: 'classlist',
      numeric: false,
      disablePadding: true,
      label: 'Class Name',
    },
    {
      id: 'trainer',
      numeric: false,
      disablePadding: true,
      label: 'Training By Traniner',
    },
    {
      id: 'classCount',
      numeric: true,
      disablePadding: true,
      label: 'Class Count',
    },
    {
      id: 'payment',
      numeric: false,
      disablePadding: true,
      label: 'Payment Type',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: true,
      label: 'Price',
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
  
  const {bookings} = useContext(BookingContext)

  return (
    <div className='tableContainer'>
      <DataTable name="Class Bookings" rows={bookings} headCells={headCells}/>
    </div>
  )
}

export default Booking

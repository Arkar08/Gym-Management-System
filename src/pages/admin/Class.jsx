import React, { useContext } from 'react'
import DataTable from '../../components/Table'
import { ClassContext } from '../../hooks/ClassContext';

const Class = () => {

  // function createData(id, name, starttime,endtime,duration, day, price,trainer, capacity,notes,createdDate,updatedDate) {
  //   return {
  //     id,
  //     name,
  //     starttime,
  //     endtime,
  //     duration,
  //     day,
  //     price,
  //     trainer,
  //     capacity,
  //     notes,
  //     createdDate,
  //     updatedDate
  //   };
  // }
  
  // const rows = [
  //   createData(1, 'Yoga', '12:00AM', '22.05.2025',4.3,'-', 5,'Outplay (No Trainer)','Cupcake','Cupcake' ),
  //   createData(2, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(3, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(4, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(5, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(6, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(7, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(8, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(9, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(10, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(11, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(12, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(13, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(14, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(15, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(16, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(17, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(18, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(19, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
  //   createData(20, 'Yoga', '12:00AM', '22.05.2025',4.3,'kyawkyaw', 5 ,'-','Cupcake','Cupcake' ),
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
      label: 'Class Name',
    },
    {
      id: 'trainer',
      numeric: false,
      disablePadding: true,
      label: 'Training By Traniner',
    },
    {
      id: 'day',
      numeric: false,
      disablePadding: true,
      label: 'Day(s)',
    },
    {
      id: 'starttime',
      numeric: false,
      disablePadding: true,
      label: 'Start Time',
    },
    {
      id: 'endtime',
      numeric: false,
      disablePadding: true,
      label: 'End Time',
    },
    {
      id: 'duration',
      numeric: false,
      disablePadding: true,
      label: 'Duration',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: true,
      label: 'Price',
    },
    {
      id: 'capacity',
      numeric: true,
      disablePadding: true,
      label: 'Capacity',
    },
    {
      id: 'notes',
      numeric: false,
      disablePadding: true,
      label: 'Notes',
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

  const {classes} = useContext(ClassContext)

  return (
    <div className='tableContainer'>
        <DataTable name='Class Listings' rows={classes} headCells={headCells}/>
    </div>
  )
}

export default Class

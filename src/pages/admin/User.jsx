import React from 'react'
import DataTable from '../../components/Table'

const User = () => {

  function createData(id, name, email, password, phoneNumber,address, role,createdDate,updatedDate) {
    return {
      id,
      name,
      email,
      password,
      phoneNumber,
      address,
      role,
      createdDate,
      updatedDate
    };
  }
  
  const rows = [
    createData(1, 'Cupcake', 'Cupcake', 'Cupcake',4.3, 'yangon','Cupcake','Cupcake','Cupcake' ),
    createData(2, 'Donut', 'Cupcake', 'Cupcake', 4.9, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(3, 'Eclair', 'Cupcake','Cupcake',6.0, 'yangon', 'Cupcake','Cupcake','Cupcake' ),
    createData(4, 'Frozen yoghurt', 'Cupcake', 'Cupcake', 4.0, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(5, 'Gingerbread', 'Cupcake', 'Cupcake', 3.9, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(6, 'Honeycomb', 'Cupcake', 'Cupcake', 6.5, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(7, 'Ice cream ','sandwich', 'Cupcake', 37, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(8, 'Jelly Bean', 'Cupcake', 'Cupcake', 0.0, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(9, 'KitKat', 'Cupcake', 'Cupcake', 7.0, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(10, 'Lollipop', 'Cupcake','Cupcake', 0.0, 'yangon', 'Cupcake','Cupcake','Cupcake'),
    createData(11, 'Marshmallow', 'Cupcake', 'Cupcake', 81, 'yangon','Cupcake','Cupcake','Cupcake'),
    createData(12, 'Nougat', 'Cupcake', 'Cupcake', 37.0, 'yangon','Cupcake','Cupcake','Cupcake' ),
    createData(13, 'Oreo', 'Cupcake', 'Cupcake', 4.0, 'yangon', 'Cupcake','Cupcake','Cupcake'),
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
      label: 'FullName',
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: true,
      label: 'Email',
    },
    {
      id: 'password',
      numeric: false,
      disablePadding: true,
      label: 'Password',
    },
    {
      id: 'phoneNumber',
      numeric: true,
      disablePadding: true,
      label: 'Phone Number',
    },
    {
      id: 'address',
      numeric: false,
      disablePadding: true,
      label: 'Address',
    },
    {
      id: 'role',
      numeric: false,
      disablePadding: true,
      label: 'Role',
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
      <DataTable name="User Listings" rows={rows} headCells={headCells}/>
    </div>
  )
}

export default User

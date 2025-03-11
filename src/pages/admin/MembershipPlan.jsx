import React from 'react'
import DataTable from '../../components/Table'

const MembershipPlan = () => {

  function createData(id, name, price, accessType, duration, features,capacity,training,createdDate,updatedDate) {
    return {
      id,
      name,
      price,
      accessType,
      duration,
      features,
      capacity,
      training,
      createdDate,
      updatedDate
    };
  }
  
  const rows = [
    createData(1, 'Basic', 29.99, 'Gym Access Only', 'Monthly','Access to gym equipment, 1 free personal training session per month','20-05-2025','kyawkyaw','24-05-2025'),
    createData(2, 'Standard', 49.99,'Gym + Group Classes', 'Monthly','Access to gym equipment, unlimited group fitness classes, 2 free PT sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(3, 'Premium', 69.99, 'Full Access', 'Monthly','Access to gym, group classes, sauna, unlimited personal training sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(4, 'Annual Basic	', 299.99, 'Gym Access Only','12 Months','Access to gym equipment, 1 free personal training session per month','20-05-2025','kyawkyaw','24-05-2025'),
    createData(5, 'Annual Standard', 499.99, 'Gym + Group Classes	','12 Months', 'Access to gym equipment, unlimited group fitness classes, 2 free PT sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(6, 'Annual Premium	', 799.99, 'Full Access	', '12 Months	', 'Access to gym, group classes, sauna, unlimited personal training sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(7, 'Basic', 29.99, 'Gym Access Only', 'Monthly','Access to gym equipment, 1 free personal training session per month','20-05-2025','kyawkyaw','24-05-2025'),
    createData(8, 'Standard', 49.99,'Gym + Group Classes', 'Monthly','Access to gym equipment, unlimited group fitness classes, 2 free PT sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(9, 'Premium', 69.99, 'Full Access', 'Monthly','Access to gym, group classes, sauna, unlimited personal training sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(10, 'Annual Basic	', 299.99, 'Gym Access Only','12 Months','Access to gym equipment, 1 free personal training session per month','20-05-2025','kyawkyaw','24-05-2025'),
    createData(11, 'Annual Standard', 499.99, 'Gym + Group Classes	','12 Months', 'Access to gym equipment, unlimited group fitness classes, 2 free PT sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(12, 'Annual Premium	', 799.99, 'Full Access	', '12 Months	', 'Access to gym, group classes, sauna, unlimited personal training sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(13, 'Basic', 29.99, 'Gym Access Only', 'Monthly','Access to gym equipment, 1 free personal training session per month','20-05-2025','kyawkyaw','24-05-2025'),
    createData(14, 'Standard', 49.99,'Gym + Group Classes', 'Monthly','Access to gym equipment, unlimited group fitness classes, 2 free PT sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(15, 'Premium', 69.99, 'Full Access', 'Monthly','Access to gym, group classes, sauna, unlimited personal training sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(16, 'Annual Basic	', 299.99, 'Gym Access Only','12 Months','Access to gym equipment, 1 free personal training session per month','20-05-2025','kyawkyaw','24-05-2025'),
    createData(17, 'Annual Standard', 499.99, 'Gym + Group Classes	','12 Months', 'Access to gym equipment, unlimited group fitness classes, 2 free PT sessions','20-05-2025','kyawkyaw','24-05-2025'),
    createData(18, 'Annual Premium	', 799.99, 'Full Access	', '12 Months	', 'Access to gym, group classes, sauna, unlimited personal training sessions','20-05-2025','kyawkyaw','24-05-2025'),
  ];

  const headCells = [
    {
      id: 'id',
      numeric: true,
      disablePadding: true,
      label: 'ID',
    },
    {
      id: 'name',
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
      id: 'duration',
      numeric: false,
      disablePadding: true,
      label: 'Duration',
    },
    {
      id: 'capacity',
      numeric: true,
      disablePadding: true,
      label: 'Capacity',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: true,
      label: 'Price (Per Month)',
    },
    {
      id: 'features',
      numeric: false,
      disablePadding: true,
      label: 'Features',
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
      <DataTable name="Membership Plan" rows={rows} headCells={headCells}/>
    </div>
  )
}

export default MembershipPlan

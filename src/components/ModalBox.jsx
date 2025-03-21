import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid2';
import { Button, ButtonGroup, Menu, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { UserContext } from '../hooks/User';
import { ClassContext } from '../hooks/ClassContext';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import { PlanContext } from '../hooks/PlanContext';
import { BookingContext } from '../hooks/BookingContext';
import { SalePlanContext } from '../hooks/SalePlanContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '10px'
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function ModalBox(props) {

    const [activeModal , setActiveModal] = React.useState(false)
    const {open ,selectedName,filterOpen,filterClose,filterName,editedName,handleEditClose,editOpen,updateUser,handleUpdateUser,userOnChange,handleUpdateClass,updateClass} = props;
    const [role] = React.useState('');
    const [hide ,setHide] = React.useState(false)
    
    const {roles,createUser,handleCreate,handleChange,handleCloseUser,trainer,customer} = React.useContext(UserContext)
    const {createClass,handleClassChange,createClassChange,handleCloseClass,daysType} = React.useContext(ClassContext)
    const {durationMonths,type,createPlan,handlePlanChange,handleCreatePlan,handlePlanClose}  = React.useContext(PlanContext)
    const{selectTrainer,handleSelect,trainerClass,handleBookingChange,createBooking,handleBookingCreate,handleBookingClose,handleDoubleBookingChange,totalAmount} = React.useContext(BookingContext)
    const {createSale,handleSelectTrainer,selectTrainers,planList,handleDoublePlanChange,totalAmounts,accessTypeName,handleSaleChange,handleSaleClose,handleSaleSave} = React.useContext(SalePlanContext)


  React.useEffect(()=>{
    if(window.innerWidth > 900){
      setActiveModal(false)
    }else if(window.innerWidth < 900){
      setActiveModal(true)
    }
  },[activeModal])

  if(selectedName === 'User Listings' ){
    return (
      <Modal
        open={open}
        onClose={handleCloseUser}
        aria-labelledby="parent-modal-title"
      >
        <Box  sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create User</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='name'>Name <span className='star'>*</span></label>
                <TextField label='FullName' variant="outlined" autoComplete='off' value={createUser.name} name="name" onChange={handleChange}/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="email" >Email <span className='star'>*</span></label>
                <TextField label='Email' variant="outlined" autoComplete='off' value={createUser.email} name="email" onChange={handleChange}/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="password">Password <span className='star'>*</span></label>
                  <TextField label='Password' variant="outlined" type={hide ? 'text':'password'} autoComplete='off' value={createUser.password} name="password" onChange={handleChange}/>
                    {
                      hide ? <VisibilityIcon className='eyeIcon' onClick={() =>setHide(!hide)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setHide(!hide)}/>
                    }
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Phone Number">Phone Number <span className='star'>*</span></label>
                  <TextField label='Phone Number' variant="outlined" autoComplete='off' type='number' value={createUser.phoneNumber} name="phoneNumber" onChange={handleChange}/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Address">Address <span className='star'>*</span></label>
                <TextField label='Address' variant="outlined" autoComplete='off' value={createUser.address} name='address' onChange={handleChange}/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Role">Role <span className='star'>*</span></label>
                <Select
                  value={createUser.roleId}
                  onChange={handleChange}
                  name='roleId'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    roles.map((role)=>{
                      return (
                        <MenuItem key={role.id} value={role.name}>
                          {role.name}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup>
              <Button variant='contained' color='error' onClick={handleCloseUser} className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleCreate} className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(editedName === 'User Listings' ){
    return (
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="parent-modal-title"
      >
        <Box  sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Update User</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='name'>Name <span className='star'>*</span></label>
                <TextField label='FullName' variant="outlined" autoComplete='off' name="name" value={updateUser.name} onChange={userOnChange}/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="email" >Email <span className='star'>*</span></label>
                <TextField label='Email' variant="outlined" autoComplete='off' name="email" value={updateUser.email} onChange={userOnChange}/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="password">Password <span className='star'>*</span></label>
                  <TextField label='Password' variant="outlined" type={hide ? 'text':'password'} autoComplete='off'  name="password" value={updateUser.password} onChange={userOnChange}/>
                    {
                      hide ? <VisibilityIcon className='eyeIcon' onClick={() =>setHide(!hide)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setHide(!hide)}/>
                    }
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Phone Number">Phone Number <span className='star'>*</span></label>
                  <TextField label='Phone Number' variant="outlined" autoComplete='off' type='number' name="phoneNumber" value={updateUser.phoneNumber} onChange={userOnChange}/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Address">Address <span className='star'>*</span></label>
                <TextField label='Address' variant="outlined" autoComplete='off' name='address' value={updateUser.address} onChange={userOnChange}/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Role">Role <span className='star'>*</span></label>
                <Select
                  name='roleId'
                  value={updateUser.roleId}
                  onChange={userOnChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    roles.map((role)=>{
                      return (
                        <MenuItem key={role.id} value={role.name}>
                          {role.name}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup>
              <Button variant='contained' color='error' onClick={handleEditClose} className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleUpdateUser} className='btn'>Update</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Class Listings' ){
    return (
      <Modal
        open={open}
        onClose={handleCloseClass}
        aria-labelledby="parent-modal-title"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create ClassList</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Class Name'>Class Name <span className='star'>*</span></label>
                <TextField label='ClassName' variant="outlined" value={createClass.className} name="className" onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Select Trainer" >Select Trainer <span className='star'>*</span></label>
                <Select
                  value={createClass.trainer}
                  onChange={handleClassChange}
                  name='trainer'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    trainer.map((train)=>{
                      return(
                        <MenuItem key={train.id} value={train.name}>
                          {train.name}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Start Time">Start Time <span className='star'>*</span></label>
                  <input type="time" placeholder='Start Time' className='inputTime' value={createClass.startTime} name='startTime'  min="09:00" max="18:00" required onChange={handleClassChange}/>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="End Time ">End Time <span className='star'>*</span></label>
                  <input type="time" placeholder='End Time' className='inputTime' value={createClass.endTime} name='endTime' min="09:00" max="18:00" required onChange={handleClassChange}/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Days">Days <span className='star'>*</span></label>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={createClass.days}
                  onChange={handleClassChange}
                  name='days'
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                {daysType.map((days) => (
                  <MenuItem key={days} value={days}>
                    <Checkbox checked={createClass.days.includes(days)} />
                    <ListItemText primary={days} />
                  </MenuItem>
                ))}
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity <span className='star'>*</span></label>
                <TextField label='Capacity' variant="outlined" type='number' value={createClass.capacity} name='capacity' onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined" type='number' value={createClass.price} name='price'onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Notes">Notes <span className='star'>*</span></label>
                <TextField label='Notes' variant="outlined" value={createClass.notes} name='notes'onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleCloseClass}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={createClassChange}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Class Listings' ){
    return (
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="parent-modal-title"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Update ClassList</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Class Name'>Class Name <span className='star'>*</span></label>
                <TextField label='ClassName' variant="outlined" value={updateClass.className} name="className" onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Select Trainer" >Select Trainer <span className='star'>*</span></label>
                <Select
                  value={updateClass.trainer}
                  onChange={handleClassChange}
                  name='trainer'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    trainer.map((train)=>{
                      return(
                        <MenuItem key={train.id} value={train.name}>
                          {train.name}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Start Time">Start Time <span className='star'>*</span></label>
                  <input type="time" placeholder='Start Time' className='inputTime' value={updateClass.startTime} name='startTime'  min="09:00" max="18:00" required onChange={handleClassChange}/>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="End Time ">End Time <span className='star'>*</span></label>
                  <input type="time" placeholder='End Time' className='inputTime' value={updateClass.endTime} name='endTime' min="09:00" max="18:00" required onChange={handleClassChange}/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Days">Days <span className='star'>*</span></label>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={updateClass.days}
                  onChange={handleClassChange}
                  name='days'
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                {daysType.map((days) => (
                  <MenuItem key={days} value={days}>
                    <Checkbox checked={updateClass.days.includes(days)} />
                    <ListItemText primary={days} />
                  </MenuItem>
                ))}
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity <span className='star'>*</span></label>
                <TextField label='Capacity' variant="outlined" type='number' value={updateClass.capacity} name='capacity' onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined" type='number' value={updateClass.price} name='price'onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Notes">Notes <span className='star'>*</span></label>
                <TextField label='Notes' variant="outlined" value={updateClass.notes} name='notes'onChange={handleClassChange} autoComplete='off'/>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleEditClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleUpdateClass}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Membership Plan' ){
    return (
      <Modal
        open={open}
        onClose={handlePlanClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create MemberShip Plan</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Plan Name'>Plan Name <span className='star'>*</span></label>
                <TextField label='Plan Name' variant="outlined" autoComplete='off' value={createPlan.planName} name='planName' onChange={handlePlanChange}/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Trainer" >Trainer <span className='star'>*</span></label>
                <Select
                  value={createPlan.trainer}
                  onChange={handlePlanChange}
                  name='trainer'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    trainer.map((train)=>{
                      return(
                        <MenuItem key={train.id} value={train.name}>
                          {train.name}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Access Type">Access Type <span className='star'>*</span></label>
                  <Select
                  value={createPlan.accessType}
                  onChange={handlePlanChange}
                  name='accessType'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    {
                      type.map((typ)=>{
                        return(
                          <MenuItem key={typ.id} value={typ.name}>{typ.name}</MenuItem>
                        )
                      })
                    }
                  </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Duration">Duration<span className='star'>*</span></label>
                  <Select
                  value={createPlan.duration}
                  onChange={handlePlanChange}
                  name='duration'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    {
                        durationMonths.map((duration)=>{
                          return(
                            <MenuItem key={duration} value={duration}>
                              {duration}
                            </MenuItem>
                          )
                        })
                    }
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity <span className='star'>*</span></label>
                <TextField label='Capacity' variant="outlined" autoComplete='off' type='number' value={createPlan.capacity} name='capacity' onChange={handlePlanChange}/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined" autoComplete='off' type='number' value={createPlan.price} name='price' onChange={handlePlanChange}/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Features">Features <span className='star'>*</span></label>
                <TextField label='Features' variant="outlined" autoComplete='off' value={createPlan.features} name='features' onChange={handlePlanChange}/>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handlePlanClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleCreatePlan}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Class Bookings' ){
    return (
      <Modal
        open={open}
        onClose={handleBookingClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create Booking</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Customer Name'>Customer Name <span className='star'>*</span></label>
                <Select
                  value={createBooking.name}
                  onChange={handleBookingChange}
                  name='name'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    customer.map((cus)=>{
                      return (
                        <MenuItem key={cus.id} value={cus.name}>
                          {cus.name}
                        </MenuItem>
                      )
                    })
                  }
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Trainer">Trainer <span className='star'>*</span></label>
                  <Select
                  value={selectTrainer}
                  onChange={handleSelect}
                  name='trainer'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    {
                      trainer?.map((trainer)=>{
                        return(
                          <MenuItem key={trainer.id} value={trainer.name}>
                            {trainer.name}
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
                <div className='formField'>
                  <label htmlFor='Class Name'>Class Name <span className='star'>*</span></label>
                  <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={createBooking.classlist}
                  onChange={handleDoubleBookingChange}
                  name='classlist'
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                  disabled = {trainerClass.length === 0}
                >
                {trainerClass?.map((classs) => (
                  <MenuItem key={classs.id} value={classs.className}>
                    <Checkbox checked={createBooking.classlist.includes(classs.className)} />
                    <ListItemText primary={classs.className} />
                  </MenuItem>
                ))}
                </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Price">Price <span className='star'>*</span></label>
                  <TextField label='Price' variant="outlined" type='number'  autoComplete='off' value={totalAmount} disabled/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Type">Payment Type <span className='star'>*</span></label>
                <Select
                  value={createBooking.payment}
                  name='payment'
                  onChange={handleBookingChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="KBZ Pay">KBZ Pay</MenuItem>
                  <MenuItem value="Wave Pay">Wave Pay</MenuItem>
                  <MenuItem value="OK $">OK $</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleBookingClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleBookingCreate}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Sale Plan' ){
    return (
      <Modal
        open={open}
        onClose={handleSaleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title"> Create Sale Plan</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor='Customer Name'>Customer Name <span className='star'>*</span></label>
                  <Select
                    value={createSale.customerName}
                    onChange={handleSaleChange}
                    name='customerName'
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    {
                      customer.map((cus)=>{
                        return (
                          <MenuItem key={cus.id} value={cus.name}>
                            {cus.name}
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Trainer">Trainer <span className='star'>*</span></label>
                  <Select
                    value={selectTrainers}
                    onChange={handleSelectTrainer}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    {
                      trainer.map((train)=>{
                        return(
                          <MenuItem key={train.id} value={train.name}>{train.name}</MenuItem>
                        )
                      })
                    }
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Plan Name" >Plan Name <span className='star'>*</span></label>
                  <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={createSale.planName}
                  onChange={handleDoublePlanChange}
                  name='planName'
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                  disabled = {planList.length === 0}
                >
                  {planList?.map((plan) => (
                    <MenuItem key={plan.id} value={plan.planName}>
                      <Checkbox checked={createSale.planName.includes(plan.planName)} />
                      <ListItemText primary={plan.planName} />
                    </MenuItem>
                  ))}
                </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Access Type">Access Type <span className='star'>*</span></label>
                  <TextField label='Access Type' variant="outlined" value={accessTypeName} disabled/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Start Date">Start Date <span className='star'>*</span></label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Start Date" value={createSale.startDate} disabled/>
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="End Date">End Date <span className='star'>*</span></label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="End Date"  value={createSale.endDate} disabled/>
                </LocalizationProvider>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined" value={totalAmounts} disabled/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Type">Payment Type <span className='star'>*</span></label>
                <Select
                  value={createSale.payment}
                  onChange={handleSaleChange}
                  name='payment'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="KBZ Pay">KBZ Pay</MenuItem>
                  <MenuItem value="Wave Pay">Wave Pay</MenuItem>
                  <MenuItem value="OK $">OK $</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleSaleClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleSaleSave}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(filterName === 'User Listings' ){
    return (
      <Modal
        open={filterOpen}
        onClose={filterClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
         <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Filter</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="From Date">From Date </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="From Date" />
                  </LocalizationProvider>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="To Date">To Date </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="To Date" />
                  </LocalizationProvider>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Address">Address </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Role">Role </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  {
                    roles.map((role) =>{
                      return (
                        <MenuItem value={role.name} key={role.roleId}>
                          {role.name}
                        </MenuItem>
                      )
                    })
                  }
                  {/* <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem> */}
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={filterClose}  className='btn'>Clear</Button>
              <Button variant='contained' color='success' onClick={filterClose}  className='btn'>Apply</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(filterName === 'Class Listings' ){
    return (
      <Modal
        open={filterOpen}
        onClose={filterClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
         <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Filter</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Class Name">Class Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Trainer">Trainer </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Days">Days </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Duration">Duration </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={filterClose}  className='btn'>Clear</Button>
              <Button variant='contained' color='success' onClick={filterClose}  className='btn'>Apply</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(filterName === 'Membership Plan' ){
    return (
      <Modal
        open={filterOpen}
        onClose={filterClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Filter</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Plan Name">Plan Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Trainer">Trainer </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Access Type">Access Type </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Duration">Duration </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={filterClose}  className='btn'>Clear</Button>
              <Button variant='contained' color='success' onClick={filterClose}  className='btn'>Apply</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(filterName === 'Class Bookings' ){
    return (
      <Modal
        open={filterOpen}
        onClose={filterClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Filter</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Customer Name">Customer Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Class Name">Class Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Trainer">Trainer</label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Class Count">Class Count </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Type">Payment Type </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Status">Status </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={filterClose}  className='btn'>Clear</Button>
              <Button variant='contained' color='success' onClick={filterClose}  className='btn'>Apply</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(filterName === 'Sale Plan' ){
    return (
      <Modal
        open={filterOpen}
        onClose={filterClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Filter</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="From Date">From Date </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="From Date" />
                  </LocalizationProvider>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="To Date">To Date </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="To Date" />
                  </LocalizationProvider>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Customer Name">Customer Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Plan Name">Plan Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Trainer">Trainer </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Access Type">Access Type </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Type">Payment Type </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Status">Status </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={filterClose}  className='btn'>Clear</Button>
              <Button variant='contained' color='success' onClick={filterClose}  className='btn'>Apply</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  return (
    <div>
      <Modal
        open={filterOpen}
        onClose={filterClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Filter</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Date"> Payment Date </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Payment Date" />
                </LocalizationProvider>
              </div>
            </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Customer Name">Customer Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Package">Package </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Class Name">Class Name </label>
                  <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Trainer">Trainer</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                  </Select>
                </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Trainer">Trainer</label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Type">Payment Type </label>
                <Select
                  value={role}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="Customer">Customer</MenuItem>
                  <MenuItem value="Trainer">Trainer</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                </Select>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={filterClose}  className='btn'>Clear</Button>
              <Button variant='contained' color='success' onClick={filterClose}  className='btn'>Apply</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
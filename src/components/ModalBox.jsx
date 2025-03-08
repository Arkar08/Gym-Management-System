import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid2';
import { Button, ButtonGroup, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

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


export default function ModalBox(props) {

    const [activeModal , setActiveModal] = React.useState(false)
    const {open , handleClose,selectedName,filterOpen,filterClose,filterName} = props;
    const [role, setRole] = React.useState('');
    const [hide ,setHide] = React.useState(false)

  const handleChange = (event) => {
    setRole(event.target.value);
  };

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
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
      >
        <Box  sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create User</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='name'>Name <span className='star'>*</span></label>
                <TextField label='FullName' variant="outlined"/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="email" >Email <span className='star'>*</span></label>
                <TextField label='Email' variant="outlined"/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="password">Password <span className='star'>*</span></label>
                  <TextField label='Password' variant="outlined" type={hide ? 'text':'password'}/>
                    {
                      hide ? <VisibilityIcon className='eyeIcon' onClick={() =>setHide(!hide)}/> : <VisibilityOffIcon className='eyeIcon' onClick={() =>setHide(!hide)}/>
                    }
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="Phone Number">Phone Number <span className='star'>*</span></label>
                  <TextField label='Phone Number' variant="outlined"/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Address">Address <span className='star'>*</span></label>
                <TextField label='Address' variant="outlined"/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Role">Role <span className='star'>*</span></label>
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
              <Button variant='contained' color='error' onClick={handleClose} className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleClose} className='btn'>Create</Button>
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
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create ClassList</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Class Name'>Class Name <span className='star'>*</span></label>
                <TextField label='ClassName' variant="outlined"/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Select Trainer" >Select Trainer <span className='star'>*</span></label>
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
                  <label htmlFor="Start Time">Start Time <span className='star'>*</span></label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="Start Time" />
                  </LocalizationProvider>
                </div>
              </Grid>
              <Grid size={6}>
                <div className='formField'>
                  <label htmlFor="End Time ">End Time <span className='star'>*</span></label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker label="End Time" />
                  </LocalizationProvider>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Days">Days <span className='star'>*</span></label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Basic date picker" />
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity <span className='star'>*</span></label>
                <TextField label='Capacity' variant="outlined" type='number'/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined" type='number'/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Notes">Notes <span className='star'>*</span></label>
                <TextField label='Notes' variant="outlined" />
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleClose}  className='btn'>Create</Button>
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
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
          <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create MemberShip Plan</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Plan Name'>Plan Name <span className='star'>*</span></label>
                <TextField label='Plan Name' variant="outlined"/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Trainer" >Trainer <span className='star'>*</span></label>
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
                  <label htmlFor="Access Type">Access Type <span className='star'>*</span></label>
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
                  <label htmlFor="Duration">Duration<span className='star'>*</span></label>
                  <TextField label='Duration' variant="outlined"/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Capacity">Capacity <span className='star'>*</span></label>
                <TextField label='Capacity' variant="outlined"/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined"/>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Features">Features <span className='star'>*</span></label>
                <TextField label='Features' variant="outlined"/>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleClose}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Bookings' ){
    return (
      <Modal
        open={open}
        onClose={handleClose}
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
                <label htmlFor='Class Name'>Class Name <span className='star'>*</span></label>
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
                  <label htmlFor="Trainer">Trainer <span className='star'>*</span></label>
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
                  <label htmlFor="Class Count">Class Count <span className='star'>*</span></label>
                  <TextField label='Class Count' variant="outlined" type='number'/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined" type='number'/>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Payment Type">Payment Type <span className='star'>*</span></label>
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
              <Button variant='contained' color='error' onClick={handleClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleClose}  className='btn'>Create</Button>
            </ButtonGroup>
          </div>
        </Box>
      </Modal>
    )
  }

  if(selectedName === 'Member Lists' ){
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style}} className={activeModal ? 'activeModal' : 'modal'}>
          <h2 className='userCreate' id="parent-modal-title">Create MemberList</h2>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
              <div className='formField'>
                <label htmlFor='Customer Name'>Customer Name <span className='star'>*</span></label>
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
                <label htmlFor="Plan Name" >Plan Name <span className='star'>*</span></label>
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
                  <label htmlFor="Trainer">Trainer <span className='star'>*</span></label>
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
                  <label htmlFor="Access Type">Access Type <span className='star'>*</span></label>
                  <TextField label='Access Type' variant="outlined"/>
                </div>
              </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Start Date">Start Date <span className='star'>*</span></label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Start Date" />
                </LocalizationProvider>
              </div>
            </Grid>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="End Date">End Date <span className='star'>*</span></label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="End Date" />
                </LocalizationProvider>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid size={6}>
               <div className='formField'>
                <label htmlFor="Price">Price <span className='star'>*</span></label>
                <TextField label='Price' variant="outlined"/>
              </div>
            </Grid>
          </Grid>
          <div className='btnGroup'>
            <ButtonGroup >
              <Button variant='contained' color='error' onClick={handleClose}  className='btn'>Cancel</Button>
              <Button variant='contained' color='success' onClick={handleClose}  className='btn'>Create</Button>
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

  if(filterName === 'Bookings' ){
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

  if(filterName === 'Member Lists' ){
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
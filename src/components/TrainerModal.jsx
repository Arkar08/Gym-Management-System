import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


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

export const TrainerModal = ()=>{

    const [activeModal1 , setActiveModal1] = React.useState(false)
        const [role] = React.useState('');
        const [filterOpen] = React.useState(true)
        const[filterClose] = React.useState(false)

     React.useEffect(()=>{
        if(window.innerWidth > 900){
            setActiveModal1(false)
        }else if(window.innerWidth < 900){
            setActiveModal1(true)
        }
      },[activeModal1])


      return(
         <div>
              <Modal
                open={filterOpen}
                onClose={filterClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{...style}} className={activeModal1 ? 'activeModal' : 'modal'}>
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
                      <Button variant='contained' color='error'   className='btn'>Clear</Button>
                      <Button variant='contained' color='success'  className='btn'>Apply</Button>
                    </ButtonGroup>
                  </div>
                </Box>
              </Modal>
            </div>
      )
}
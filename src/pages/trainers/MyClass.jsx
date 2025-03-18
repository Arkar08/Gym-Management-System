import React, { useContext } from 'react'
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { MyClassContext } from '../../hooks/MyClassContext';





const MyClass = () => {

  const{myClassList,error} = useContext(MyClassContext)


  if(error){
    alert(error.message)
    return(
      <div>{error.message}</div>
    )
  }

  return (
    <div>
      <h3>My Class</h3>
      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}className='gridClass'>
        {
          myClassList?.map((classList)=>{
            return(
              <Grid size={{xs:4,md:3}} key={classList.id}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardContent>
                      <p className='cardHeader'>Yoga</p>
                      <div className='cardBody'>
                        <p>Start Time</p>
                        <p>End Time</p>
                      </div>
                      <div className='cardBody'>
                        <p className='cardDate1'>{classList.startTime}</p>
                        <p className='cardDate1'> {classList.endTime} ( {classList.duration})</p>
                      </div>
                      <div className='cardBody'>
                        <p className='cardDate'>{classList.days.join(",")}</p>
                        <p className='cardDate'>{classList.capacity}people</p>
                      </div>
                      <div className='cardBody'>
                        <p>Notes: {classList.notes}</p>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default MyClass

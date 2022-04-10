import React from 'react'
import { 
  Stack,
  Skeleton,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material'

export default function VehicleCardSkeleton() {

  const vehicleInfo = () => {
    return (
      <Grid container item sm={2} xs={4}>
        <Grid item xs={12}>
          <Typography variant='caption'>
            <Skeleton />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='caption'>
            <Skeleton />
          </Typography>
        </Grid>
      </Grid>
    )
  }

  const card = () => {
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>

              <Grid item xs={12} sx={{ display: {xs: 'block', sm: 'none'} }}>
                <Typography variant="h6"><Skeleton /></Typography>
              </Grid>
                
              <Grid item xs={12} sm={3}>
                <Skeleton variant='rectangular' sx={{wdith:'100%', height:'100%'}} />
              </Grid>

              <Grid item xs={12} sm={9}>
                <Grid container spacing={1}>
                  <Grid 
                    item 
                    xs={8} 
                    md={8} 
                    sx={{ 
                      display: {
                        xs: 'none', 
                        sm: 'block'
                      },
                    }}
                  >
                    <Typography variant="h6">
                      <Skeleton />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ padding: 1 }}>
                    <Typography sx={{ float: 'right' }}>
                      <Skeleton width={125}/>
                    </Typography>
                  </Grid>
                </Grid>                      
                <Grid container spacing={1}>
                    
                  {vehicleInfo()}
                  {vehicleInfo()}
                  {vehicleInfo()}
                  {vehicleInfo()}
                  {vehicleInfo()}
                  {vehicleInfo()}

                  <Grid item xs={12}>
                    <Typography variant='caption'>
                      <Skeleton />
                      <Skeleton />
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <React.Fragment>
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
    </React.Fragment> 
  )
}

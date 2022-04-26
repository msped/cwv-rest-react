import React from 'react'
import {
    Grid, 
    Typography,
    Card,
    CardContent,
    Skeleton
} from '@mui/material'

export default function GalleryDetailSkeleton() {

  return (
    <Grid container spacing={1}>
      {/* Images */}
      <Grid item xs={12} md={8}>
        <Skeleton variant='rectangular' width='100%' height={375}/>
      </Grid>

      {/* Vehicle */}
      <Grid item xs={12} md={4}>
        <Typography component="h1" variant="h3" sx={{ fontWeight: 500 }}>
          <Skeleton />
        </Typography>
      </Grid>

      {/* Vehicle Description */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item container xs={12} sm={4} sx={{ maxHeight: 150}}>
                <Grid item xs={12}>
                  <Typography component="div" variant="body1">
                    <Skeleton />
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="div" variant="body1">
                    <Skeleton />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography component="div" variant="body1">
                  <Skeleton />
                  <Skeleton variant='rectangular' width='100%' height={250} />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
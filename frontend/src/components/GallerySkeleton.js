import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Skeleton,
} from '@mui/material'

export default function GallerySkeleton() {
  const skeleton = (index) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Skeleton variant="rectangular" width="100%" height={150} />
              </Grid>
              <Grid container item xs={12} spacing={1}>
                <Grid item xs={12}>
                  <Typography component="h2" variant="h6">
                    <Skeleton />
                  </Typography>
                </Grid>

                <Grid container item xs={6}>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <b>Year:</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <Skeleton />
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container item xs={6}>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <b>Power:</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <Skeleton />
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption">
                  <Skeleton />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>
      {[...Array(6)].map((elem, index) => 
        skeleton(index)
      )}
    </Grid>
  )
}
import React from 'react'
import {
    Grid, 
    Typography,
    Stack,
    Card,
    CardContent,
    Box,
    Skeleton,
} from '@mui/material'

export default function SaleDetailSkeleton() {

    return (
      <Grid container spacing={1}>
        {/* Images */}
        <Grid item xs={12} md={6}>
          <Skeleton variant='rectangular' width='100%' height={300}/>
        </Grid>

        {/* Vehicle */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h3" sx={{ fontWeight: 500 }}>
                <Skeleton />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">
                <Skeleton />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">
                <Skeleton />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12} sx={{ marginY: 4 }}>
                  <Stack direction="row">
                    <Typography variant="body1">
                      <Skeleton width={175} />
                    </Typography>
                    <Box sx={{ marginLeft: 2, minWidth: 200 }}>
                      <Skeleton />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Vehicle Details */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography>
                    <Skeleton width={250} />
                  </Typography>
                </Grid>
                {[...Array(5)].map((elem, index) => (
                  <Grid item xs={6} md={2} key={index}>
                    <Typography component="div" variant="body1">
                      <Skeleton />
                      <Skeleton />
                    </Typography>
                  </Grid>
                ))}
                <Grid item xs={6} md={2}>
                  <Typography component="div" variant="body1">
                    <Skeleton />
                    <Skeleton />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Vehicle Extras */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography component="div" variant="body1">
                <Skeleton width={125} />
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Skeleton width='50%'/>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
}

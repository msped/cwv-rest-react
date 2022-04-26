import React from 'react'
import {
    Grid, 
    Typography,
    Card,
    CardContent,
} from '@mui/material'
import ImageCarousel from './ImageCarousel'

export default function GalleryDetailCard({ vehicle }) {
  let newExtraText = vehicle.description
    .split("\n")
    .map((item, i) => <p key={i}>{item}</p>);

  return (
    <Grid container spacing={1}>
      {/* Images */}
      <Grid item xs={12} md={8}>
        <ImageCarousel images={vehicle.images} />
      </Grid>

      {/* Vehicle */}
      <Grid item xs={12} md={4}>
        <Typography component="h1" variant="h3" sx={{ fontWeight: 500 }}>
          {vehicle.make} {vehicle.model} {vehicle.trim}
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
                    <p>
                      Year: {vehicle.year}
                    </p>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="div" variant="body1">
                    <p>
                      Power: {vehicle.power}
                    </p>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography component="div" variant="body1">
                  <label
                    htmlFor="#description"
                    style={{ textDecoration: "underline", fontWeight: "800" }}
                  >
                    Description:
                  </label>
                  {newExtraText}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
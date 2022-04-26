import React from 'react'
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
} from '@mui/material'
import { Link } from 'react-router-dom'
import TextTruncate from 'react-text-truncate'
import LazyLoad from 'react-lazyload';

import defaultImage from '../images/defaultImage.jpg'

export default function GalleryCard({ vehicle }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/gallery/${vehicle.slug}`}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {vehicle.images.length === 0 ? (
                <LazyLoad>
                  <img
                    src={defaultImage}
                    alt="Default"
                    width="150"
                    height="150"
                    style={{
                      width: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </LazyLoad>
              ) : (
                <LazyLoad height={150} key={vehicle.images.id}>
                  <img
                    src={vehicle.images.image}
                    alt={`${vehicle.make} ${vehicle.model} ${vehicle.trim}`}
                    width="150"
                    height="150"
                    style={{
                      width: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </LazyLoad>
              )}
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={12}>
                <Typography
                  component='h2'
                  variant='h6'
                >
                  {vehicle.make} {vehicle.model} {vehicle.trim}
                </Typography>
              </Grid>

              <Grid container item xs={6}>
                <Grid item xs={6}>
                  <Typography variant="caption">
                    <b>Year:</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">{vehicle.year}</Typography>
                </Grid>
              </Grid>

              <Grid container item xs={6}>
                <Grid item xs={6}>
                  <Typography variant="caption">
                    <b>Power:</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">{vehicle.power}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                <TextTruncate
                  line={2}
                  element="p"
                  truncateText="..."
                  text={vehicle.description}
                />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
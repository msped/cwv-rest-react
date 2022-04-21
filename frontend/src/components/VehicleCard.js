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

export default function VehicleCard({ vehicle }) {
    return (
        <Card>
            <CardActionArea component={Link} to={`/buy/${vehicle.slug}`}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ display: {xs: 'block', sm: 'none'} }}>
                            <Typography variant="h6">
                                { vehicle.make } { vehicle.model } { vehicle.trim }
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            { vehicle.images.length === 0 ? 
                                <LazyLoad>
                                    <img 
                                        src={defaultImage}
                                        alt="Default"
                                        width='150'
                                        height='150'
                                        style={{
                                            width: '100%',
                                            maxHeight: "100%"
                                        }}
                                    />
                                </LazyLoad>
                                :
                                <LazyLoad height={150} key={vehicle.images.id}>
                                    <img
                                        src={vehicle.images.image}
                                        alt={`${vehicle.make} ${vehicle.model} ${vehicle.trim}`}
                                        width='150'
                                        height='150'
                                        style={{
                                            width: '100%',
                                            maxHeight: "100%",
                                            objectFit: 'contain' 
                                        }}
                                    />
                                </LazyLoad>
                            }
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
                                        { vehicle.make } { vehicle.model } { vehicle.trim }
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4} sx={{ padding: 1 }}>
                                    <Typography sx={{ float: 'right' }}>
                                        { vehicle.reserved === 'Reserved' ? 'Reserved' : `£${vehicle.price}`}
                                    </Typography>
                                </Grid>
                            </Grid>                      
                            <Grid container spacing={1}>

                                <Grid container item sm={2} xs={4}>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            <b>Year:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            { vehicle.year }
                                        </Typography>
                                    </Grid>                                
                                </Grid>

                                <Grid container item sm={2} xs={4}>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            <b>Mileage:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            { vehicle.mileage }
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container item sm={2} xs={4}>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            <b>Fuel:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            { vehicle.fuel }
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container item sm={2} xs={4}>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            <b>Body Type:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            { vehicle.body_type }
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container item sm={2} xs={4}>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            <b>Engine Size:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            { vehicle.engine_size }
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container item sm={2} xs={4}>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            <b>MOT Expiry:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant='caption'>
                                            { vehicle.mot_expiry }
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='caption'>
                                    <TextTruncate
                                        line={2}
                                        element="p"
                                        truncateText='...'
                                        text={vehicle.extras}
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

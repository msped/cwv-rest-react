import React from 'react'
import {
    Grid, 
    Typography,
    Stack,
    Card,
    CardContent,
} from '@mui/material'
import moment from 'moment'
import ImageCarousel from './ImageCarousel'
import Reserve from './Reserve'
import { Box } from '@mui/system'

export default function VehicleDetailCard({ vehicle }) {

    let newExtraText = vehicle.extras.split('\n').map(
        (item, i) => <p key={i}>{item}</p>)

    const vehicleDetails = [
        {'data': 'year', 'label': 'Year'},
        {'data': 'mileage', 'label': 'Mileage'},
        {'data': 'fuel', 'label': 'Fuel'},
        {'data': 'body_type', 'label': 'Body Type'},
        {'data': 'engine_size', 'label': 'Engine Size'},
    ]

    const mot_date = moment(vehicle.mot_expiry)

    return (
        <Grid container spacing={1}>
            {/* Images */}
            <Grid item xs={12} md={6}>
                <ImageCarousel images={vehicle.images} />
            </Grid>
            
            {/* Vehicle */}
            <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component='h1' variant='h3' sx={{ fontWeight: 500 }}>
                            { vehicle.make } { vehicle.model } { vehicle.trim }
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4'>
                            [{vehicle.reserved}]
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4'>
                            £{vehicle.price}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            { vehicle.reserved === 'For Sale' ?
                                <Grid item xs={12} sx={{ marginY: 4 }}>
                                    <Stack direction="row">
                                        <Typography variant='body1'>
                                            Don't miss out! Reserve it now with a £100 refundable deposit
                                        </Typography>
                                        <Box sx={{ marginLeft: 2, minWidth: 200 }}>
                                            <Reserve />
                                        </Box>
                                    </Stack>
                                </Grid>
                                :
                                ''
                            }
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
                                <Typography 
                                    component='label'
                                    sx={{ 
                                        textDecoration: 'underline',
                                        fontWeight: '800'
                                    }}
                                >
                                    Vehicle Details:
                                </Typography>
                            </Grid>
                            {vehicleDetails.map((item) => (
                                <Grid item xs={6} md={2} key={item.data}>
                                    <Typography component='div' variant='body1'>
                                        <label 
                                            htmlFor={`#${item.data}`}
                                            style={{
                                                fontWeight: '800',
                                                textDecoration: 'underline'
                                            }}
                                        >{item.label}:</label>
                                        <p id={item.data}>{ vehicle[item.data] }</p>
                                    </Typography>
                                </Grid>
                            ))}
                            <Grid item xs={6} md={2}>
                                <Typography component='div' variant='body1'>
                                    <label 
                                        htmlFor='#mot-expiry'
                                        style={{
                                            fontWeight: '800',
                                            textDecoration: 'underline'
                                        }}
                                    >MOT Expiry:</label>
                                    <p id='mot-expiry'>{ mot_date.format('DD/MM/yyyy') }</p>
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
                        <Typography component='div' variant='body1'>
                            <label 
                                htmlFor='#description' 
                                style={{ textDecoration: 'underline', fontWeight: '800' }}
                            >Description:</label>
                            { newExtraText }
                            { vehicle.car_state === 'Frontline' ?
                                <p>
                                    <strong>Warranty:</strong> This vehicle is part of our frontline stock and comes with <strong>28 days warranty.</strong>
                                </p>    
                                :
                                <p>
                                    <strong>Warranty:</strong> This vehicle <strong>does not</strong> come with any warranty upon purchase.
                                </p>   
                            }
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

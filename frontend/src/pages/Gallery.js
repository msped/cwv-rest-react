import Api from "../Api"
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from "@mui/material/Stack"
import Pagination from '@mui/material/Pagination'

import GalleryCard from '../components/GalleryCard'
import GallerySkeleton from '../components/GallerySkeleton'

export default function Gallery() {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const search = async () => {
            const { data } = await Api.get('/gallery/', {
                params: {
                page: page
                }
            })
            setResponse(data)
            setLoading(false)
            console.log(data)
        }
        search()
    }, [page])

    const handlePagination = (e, v) => {
        setPage(v)
    }

    return (
        <Container maxWidth="md">
            <Stack alignItems="center" sx={{ marginY: 5 }}>
                <Typography variant="h2" component="h1" sx={{ fontWeight: "400" }}>
                    Gallery
                </Typography>
                <Typography
                sx={{
                    fontFamily: "Signika",
                    fontWeight: "400",
                    textAlign: "center",
                }}
                variant="body1"
                component="div"
                >
                <p>
                    See builds and restorations completed by Cheshire West Vehicles for
                    cusomters here in our featured gallery. <br />
                    For more information about what we can do for you, contact us.
                </p>
                </Typography>
            </Stack>
                {loading ? (
                <GallerySkeleton />
                ) : response.results.length === 0 ? (
                <Stack alignItems="center">
                    <Typography variant="body1">
                    Sorry, we currently don't have any vehicles in the gallery.
                    </Typography>
                </Stack>
                ) : (
                <Grid container spacing={1} sx={{ marginY: 5 }}>
                {response.results.map((vehicle) => (
                    <Grid item xs={12} sm={6} md={4} key={vehicle.slug}>
                        <GalleryCard vehicle={vehicle} />
                    </Grid>))}
                </Grid>
                )}

                {!loading && (response.next || response.previous) ? (
                <Grid item xs={12} sx={{ marginY: 5 }}>
                    <Stack alignItems="center">
                    <Pagination
                        count={Math.floor(response.count / 10)}
                        onChange={(e, v) => handlePagination(e, v)}
                    />
                    </Stack>
                </Grid>
                ) : (
                ""
                )}
            
        </Container>
    );
}

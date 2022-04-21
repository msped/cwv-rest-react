import Api from "../Api"
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from "@mui/material/Stack"
import Pagination from '@mui/material/Pagination'

import VehicleCardSkeleton from "../components/VehicleCardSkeleton"
import VehicleCard from "../components/VehicleCard"

export default function Sales() {
  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const search = async () => {
      const { data } = await Api.get('/sales/', {
        params: {
          page: page
        }
      })
      setResponse(data)
      setLoading(false)
    }
    search()
  }, [page])

  const handlePagination = (e, v) => {
    setPage(v)
  }
  
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" sx={{ marginY: 5 }}>
        <Typography
          variant='h2'
          sx={{ fontWeight: '400' }}
        >
          Buy
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Signika',
            fontWeight: '400',
            textAlign: 'center',
          }}
          variant="p"
        >
          View our available stock and see what fits your needs.
        </Typography>
      </Stack>
      <Grid container spacing={1} sx={{ marginY: 5 }}>
        {loading ?
          <VehicleCardSkeleton />
          :
          response.results.length === 0 ? 
          <Stack alignItems="center">
            <Typography variant="body1">There is no vehicles in stock.</Typography>
          </Stack>
          : 
          response.results.map((vehicle) => (
            <Grid item xs={12} key={vehicle.slug}>
              <VehicleCard vehicle={vehicle} />
            </Grid>
          ))
        }

        { !loading && (response.next || response.previous) ?
        <Grid item xs={12} sx={{ marginY: 5 }}>
          <Stack alignItems="center">
            <Pagination 
              count={Math.floor(response.count / 10)}
              onChange={(e, v) => handlePagination(e, v)}
            />
          </Stack>
        </Grid>
        :
          ''
        }

      </Grid>
    </Container>
  )
}

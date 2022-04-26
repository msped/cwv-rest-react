import Api from '../Api'
import React, { useState, useEffect } from 'react'
import {
    Container,
    Box,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import VehicleDetailCard from '../components/VehicleDetailCard'
import GoBack from '../components/GoBack'
import SaleDetailSkeleton from '../components/SaleDetailSkeleton'

export default function SaleDetail() {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)

    let { slug } = useParams()

    useEffect(() => {
        const search = async () => {
            const { data } = await Api.get(`/sales/${slug}/`)
            setResponse(data)
            setLoading(false)
        }
        search()
    }, [])

    return (
        <Container maxWidth="lg">
            <Box sx={{ marginY: 5 }}>
            {loading ?
                <SaleDetailSkeleton />
                :
                <div>
                    <GoBack />
                    <VehicleDetailCard vehicle={response}/>
                </div>
            }
            </Box>
        </Container>
    )
}

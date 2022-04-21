import Api from '../Api'
import React, { useState, useEffect } from 'react'
import {
    Container,
    Box,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import DetailCard from '../components/DetailCard'
import GoBack from '../components/GoBack'

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
            {loading ?
                <div>loading..</div>
                :
                <Box sx={{ marginY: 5 }}>
                    <GoBack />
                    <DetailCard vehicle={response}/>
                </Box>
            }
        </Container>
    )
}

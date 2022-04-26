import Api from '../Api'
import React, { useState, useEffect } from 'react'
import {
    Container,
    Box,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import GalleryDetailCard from '../components/GalleryDetailCard'
import GoBack from '../components/GoBack'
import GalleryDetailSkeleton from '../components/GalleryDetailSkeleton'

export default function SaleDetail() {
    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)

    let { slug } = useParams()

    useEffect(() => {
        const search = async () => {
            const { data } = await Api.get(`/gallery/${slug}/`)
            setResponse(data)
            setLoading(false)
        }
        search()
    }, [])

    return (
        <Container maxWidth="lg">
            <Box sx={{ marginY: 5 }}>
            {loading ?
                <GalleryDetailSkeleton />
                :
                <div>
                    <GoBack />
                    <GalleryDetailCard vehicle={response}/>
                </div>
            }
            </Box>
        </Container>
    )
}

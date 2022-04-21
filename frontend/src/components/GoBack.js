import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom"

export default function GoBack() {
    let history = useNavigate();
    return (
        <Button
            variant='outlined'
            color='secondary'
            onClick={() => history(-1)}
            sx={{ marginBottom: 2 }}
        >
            <ArrowBackIosNewIcon/> Back
        </Button>
    )
}

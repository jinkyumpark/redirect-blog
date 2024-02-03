import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const HomeId = () => {
    const { id } = useParams()

    useEffect(() => {
        window.location.href = `https://jinkpark.tistory.com/${id}`
    }, [id])

    return <div>Redirecting...</div>
}

export default HomeId
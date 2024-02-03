import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
		window.location.href = 'https://jinkpark.tistory.com'
	}, [])

    return <div>Redirecting...</div>
}

export default Home
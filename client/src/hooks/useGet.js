
import { useState, useEffect } from 'react'
import axios from 'axios'

function useGet (url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)

    axios.get(url)
      .then((response) => {
        response.data.success ? setData(response.data.data) : setError(response.data.msg)
      }).catch((err) => {
        setError(err)
      }).finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

export default useGet

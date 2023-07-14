import React from 'react'
import {get} from '../../httprequest/httprequest'
import { useEffect, useState } from 'react'

const QuotesList = () => {
  const [gettingData, setGettingData] = useState(true)
  const url = 'http://localhost:3002/api/v1'

  const cbResponse = (Response) => {
    console.log(Response);
    setGettingData(false)
  }

  useEffect(()=> {
    gettingData && get(`${url}/quotes/all`, cbResponse)
  }, [gettingData, url])


  return (
    <div>Citas Pendientes</div>
  )
}

export default QuotesList
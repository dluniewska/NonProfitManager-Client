import React, { useEffect } from 'react'
import { fetchTransports } from '../../features/TransportsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { Row, Col } from 'react-bootstrap'
import TransportCard from './TransportCard/TransportCard'


const TransportCards = () => {

    const dispatch = useDispatch();
    const transports = useSelector(state => state.Transports.transports);

    useEffect(()=> {
        dispatch(fetchTransports());
    },[dispatch])

  return (
    !transports.length ? <CircularProgress color="inherit" /> : (
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 p-5">
      {transports.map((tp) => (
        <Col key={tp.transportId}>
          <TransportCard transport={tp}/>
        </Col>
      ))}
      </Row>
    )
  );
}

export default TransportCards
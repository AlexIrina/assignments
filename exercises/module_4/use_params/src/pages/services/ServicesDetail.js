import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './servicesData';
function ServiceDetail(props) {
  const { serviceId } = useParams();
  const foundService = servicesData.find(
    (service) => service._id === serviceId
  );

  return (
    <div>
      <h1>Service Detail Page</h1>{' '}
      <h3>
        {foundService.name} - ${foundService.price}{' '}
      </h3>{' '}
      <p> {foundService.description}</p>{' '}
    </div>
  );
}

export default ServiceDetail;

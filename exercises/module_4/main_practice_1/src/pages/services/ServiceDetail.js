import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const foundService = servicesData.find(
    (service) => service._id === serviceId
  );
  return (
    <div>
      <h2>
        {foundService.name} - ${foundService.price}
      </h2>
      <p>{foundService.description}</p>
    </div>
  );
};

export default ServiceDetail;

// details about each service
// need to match serviceID with the serviceId variable using find
// need to use the {useParam } hook to work with the :serviceId variable

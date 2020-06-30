import React from 'react';
import servicesData from './servicesData';
import { Link } from 'react-router-dom';

function ServicesList() {
  const services = servicesData.map((service, key) => (
    <h3 key={key}>
      <Link to={`./services/${service._id}`}>
        {service.name} - ${service.price}
      </Link>
    </h3>
  ));
  return (
    <div>
      <h1>Services List Page</h1>
      {services}
    </div>
  );
}

export default ServicesList;

import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from './servicesData';
const ServicesList = () => {
  const services = servicesData.map((service, key) => (
    <h2 key={key}>
      <Link to={`/services/${service._id}`}>{service.name}</Link> - $
      {service.price}
    </h2>
  ));

  return (
    <div>
      <h1>Welcome to Services Page</h1>
      <h3>Click on each of our services to see more info.</h3>
      {services}
    </div>
  );
};

export default ServicesList;


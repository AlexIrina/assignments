import React from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import servicesData from './servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  // useHistory hook
  const history = useHistory();
  // useLocation hook lets me know where i am on the site. Use pathname and search.
  const location = useLocation();
  console.log(location);

  const foundService = servicesData.find(
    (service) => service._id === serviceId
  );

  // useHistory hook practice to go back to all services page after 2 seconds
  const handleClick = () => {
    console.log('Submitting... ');
    setTimeout(() => {
      history.push('/services');
    }, 2000);

    // this will let me go back one place
    // history.goBack();
  };
  const goHome = () => {
    console.log('Going Home... ');
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <div>
      <h3>
        {foundService.name} - ${foundService.price}
      </h3>
      <p>{foundService.description}</p>
      <button onClick={handleClick}>Go back to all services</button>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
};

export default ServiceDetail;

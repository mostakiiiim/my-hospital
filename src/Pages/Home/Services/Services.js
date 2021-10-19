import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-5 py-5">Our <span className="text-info">
                Services</span>
            </h1>
            <div className="row">
                {
                    services.map(service =>
                        <Service
                            key={service.key}
                            service={service}

                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
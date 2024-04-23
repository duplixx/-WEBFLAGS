import React, { Fragment, useState } from 'react'
import { Card } from './card';
import Marquee from 'react-fast-marquee';


const dummyData = [
    { imageSrc: "https://dummyimage.com/300x200", title: "Product Listings", description: "Display your products with detailed information, images, and pricing." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Shopping Cart", description: "Allow users to add products to their cart for purchase." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Checkout Process", description: "Smooth and secure checkout process for customers to complete their purchases." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Payment Gateway Integration", description: "Integrate popular payment gateways like PayPal, Apple Pay, Google Pay, etc., based on client preference." },
    { imageSrc: "https://dummyimage.com/300x200", title: "User Accounts", description: "Allow users to create accounts for personalized shopping experiences." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Search Functionality", description: "Enable users to easily find products using search functionality." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Product Categories and Filters", description: "Organize products into categories and provide filtering options for better navigation." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Shipping and Delivery Options", description: "Offer multiple shipping methods and delivery options to cater to different needs." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Security Features", description: "Implement security measures to protect user data and transactions." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Responsive Design", description: "Ensure your website is fully responsive and accessible on all devices." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Product Reviews and Ratings", description: "Allow customers to leave reviews and ratings for products." },
    { imageSrc: "https://dummyimage.com/300x200", title: "Product Management System", description: "Admin panel to manage products, orders, and inventory efficiently." }
];

function Services() {
  return (
    <div className='container services flex flex-col space-y-6 '>
        <h1 className='text-center text-4xl'>
            Services We Offer
        </h1>
        <Marquee className='flex items-center justify-center p-4 card'>
            {dummyData.map((data, index) => (
              <Card
                key={index}
                imageSrc={data.imageSrc}
                title={data.title}
                description={data.description}
              />
            ))}
        </Marquee>
    </div>
  );
};

export default Services
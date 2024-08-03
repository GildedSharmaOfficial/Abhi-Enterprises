import React from "react";

const services = [
  {
    title: "Material Supply",
    details: [
      "Core Building Materials: Bricks, cement, sand, gravel, steel, wood, etc.",
      "Specialty Materials: Insulation, roofing materials, flooring, etc.",
      "Eco-friendly Materials: Sustainable or recycled materials."
    ]
  },
  {
    title: "Custom Orders",
    details: [
      "Customized Cuts and Sizes: Cutting wood, glass, or other materials to specific sizes.",
      "Pre-mixed Concrete: Providing concrete mixes ready for use."
    ]
  },
  {
    title: "Logistics and Delivery",
    details: [
      "On-Site Delivery: Transporting materials directly to construction sites.",
      "Heavy Equipment Rentals: Offering trucks, cranes, or forklifts for transporting large materials."
    ]
  },
  {
    title: "Consultation and Advice",
    details: [
      "Material Selection Guidance: Helping customers choose the right materials for their projects.",
      "Cost Estimation: Providing quotes and cost breakdowns for required materials."
    ]
  },
  {
    title: "Installation Services",
    details: [
      "Installation Assistance: Offering professional installation for products like flooring, roofing, or cabinetry.",
      "Partnerships with Contractors: Connecting customers with trusted contractors for full installation services."
    ]
  },
  {
    title: "Waste Management and Recycling",
    details: [
      "Recycling Services: Handling the disposal and recycling of construction waste.",
      "Debris Removal: Offering services to remove waste materials from the construction site."
    ]
  },
  {
    title: "Inventory Management",
    details: [
      "Bulk Storage: Storing large quantities of materials for ongoing projects.",
      "Stock Management: Keeping track of stock levels and ensuring timely replenishment."
    ]
  },
  {
    title: "Financing Options",
    details: [
      "Credit Facilities: Offering credit or financing options for large purchases.",
      "Payment Plans: Providing flexible payment plans to ease the financial burden on customers."
    ]
  },
  {
    title: "Training and Workshops",
    details: [
      "Product Demonstrations: Showing how to use new or specialized materials.",
      "Workshops: Conducting training sessions for builders and contractors on best practices."
    ]
  },
  {
    title: "Online Services",
    details: [
      "E-commerce Platforms: Allowing customers to purchase materials online.",
      "Virtual Consultations: Offering remote guidance and consultations."
    ]
  },
  {
    title: "Support Services",
    details: [
      "Customer Support: Providing ongoing support and after-sales services.",
      "Warranty Services: Offering warranties on materials and handling claims."
    ]
  },
  {
    title: "Sustainability Services",
    details: [
      "Green Building Certifications: Assisting clients in obtaining certifications for sustainable building practices.",
      "Energy Efficiency Solutions: Supplying materials and advice to improve energy efficiency in buildings."
    ]
  }
];

const ServicesList = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;

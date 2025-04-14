import React from "react";

const Footer = ({ companyName, companyAddress, companyEmail, companyPhone }) => {
  // props
//   const { companyName, companyAddress, companyEmail, companyPhone } = props;

  return (
    <div className="mt-5">
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p> Adress:{companyAddress}</p>
          <p>Email: {companyEmail}</p>
          <p>Phone: {companyPhone}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

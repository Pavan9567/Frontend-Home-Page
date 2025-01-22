import React from "react";

const TrustedCompanies = () => {
  const companies = ["Oracle", "Zoom", "Slack", "Dropbox", "Google"];
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Trusted by Over 100+ Startups and Freelance Businesses</h3>
        <div className="flex justify-center items-center flex-wrap space-x-6">
          {companies.map((company, index) => (
            <span key={index} className="text-gray-500 text-lg font-semibold">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;

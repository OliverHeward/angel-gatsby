import React from "react"

const CompanyList = company_logos => {

  const result = Object.entries(company_logos).map((key, value) => {
    return (
      <div className="client" key={value}>
        <img src={key[1].logo.source_url} alt=""/>
      </div>
    )
  });
  return <div className="clients-container content-width">{result}</div>
}

export default CompanyList

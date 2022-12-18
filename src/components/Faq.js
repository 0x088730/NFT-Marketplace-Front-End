import React, { useState } from "react";
import clsx from "clsx";

const Faq = () => {
  const [filter, setFilter] = useState("howToBuy");
  const [selectedFaq, setSelectedFaq] = useState("howToBuy");

  const faqs = [
    {
      filter: "howToBuy",
      data: [
        "DO I NEED CRYPTO TO BUY AN INSTRUMENTAL NFT ?",
        "HOW CAN I BUY AN INSTRUMENTAL NFT ?",
        "WHAT ARE THE PERKS FOR BUYING AN INSTRUMENTAL NFT ?",
        "WHAT IS THE GOT TOKEN?"
      ]
    },
    {
      filter: "gotToken",
      data: [
        "DO I NEED CRYPTO TO BUY AN INSTRUMENTAL NFT ?",
        "WHAT ARE THE PERKS FOR BUYING AN INSTRUMENTAL NFT ?",
        "WHAT IS THE GOT TOKEN?"
      ]
    },
    {
      filter: "perks",
      data: [
        "HOW CAN I BUY AN INSTRUMENTAL NFT ?",
        "WHAT ARE THE PERKS FOR BUYING AN INSTRUMENTAL NFT ?",
        "WHAT IS THE GOT TOKEN?"
      ]
    },
    {
      filter: "instrumentals",
      data: [
        "DO I NEED CRYPTO TO BUY AN INSTRUMENTAL NFT ?",
        "HOW CAN I BUY AN INSTRUMENTAL NFT ?"
      ]
    }
  ];

  return (
    <div className="faq-section">
      <div className="row">
        <div className="col-md-6 align-center">
          <img
            className="width-100"
            src="assets/images/commonly_image.png"
            alt=""
          ></img>
        </div>
        <div className="col-md-5">
          <div className="faq-block">
            <div>
              <span className="section-tag main-font">
                <span className="section-tag-font">Faqs</span>
              </span>
            </div>
            <div className="section-title main-font">
              Commonly Asked <br /> Questions
            </div>
            <div className="section-title-caption our-collection-caption faq-caption subtext-font">
              Below is a list of frequently asked questions and answers. Please
              check this FAQ first before contacting us.
            </div>
            <div className="d-flex flex-wrap faq-btns">
              {faqs.map(cell => (
                <button
                  className={clsx("main-font", {
                    "view-more-btn": filter === cell.filter,
                    "faq-btn": filter !== cell.filter
                  })}
                  onClick={() => setFilter(cell.filter)}
                  key={cell.filter}
                >
                  {cell.filter}
                </button>
              ))}
            </div>

            <div>
              {faqs.find((cell) => cell.filter === filter).data.map((title, index) => (
                <div
                  className={clsx("faq-item", {
                    activeFaq: selectedFaq === title
                  })}
                  key={index}
                  onClick={() => setSelectedFaq(selectedFaq === title ? '' : title)}
                >
                  <div className="faq-header d-flex align-items-center justify-content-between">
                    <div className="faq-number text-white font-weight-bold text-center">
                      {`${`${index + 1}`.padStart(2, "0")}.`}
                    </div>
                    <h6 className="faq-title text-white py-0 my-0">
                      {title}
                    </h6>
                    <div className="faq-expand d-flex">
                      {selectedFaq === title ? (
                        <img
                          src="/assets/images/minus.png"
                          alt=""
                          width={16}
                          height={2}
                        />
                      ) : (
                        <img
                          src="/assets/images/plus.png"
                          width={16}
                          height={16}
                          alt=""
                          className="plus-icon"
                        />
                      )}
                    </div>
                  </div>
                  <div className="faq-content">
                    <p className="p-0 m-0 text-white">
                      Below is a list of frequently asked questions and answers.
                      Please check this FAQ first before contacting us.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row apply-now-section">
        <div className="col-lg-10 d-flex justify-content-end">
          <img
            className="apply-now-img"
            src="assets/images/apply_now.png"
            alt=""
          ></img>
        </div>
        <div className="row apply-now-content">
          <div className="col-lg-1 col-md-0"></div>
          <div className="col-lg-10 col-md-12">
            <div className="client-review-bg submit-collection-bg">
              <div className="stripe-bg">
                <div className="submit-collection-title main-font">
                  Submit Collection
                </div>
                <div className="submit-collection-text subtext-font">
                  Apply to get your Music listed on our Platform
                </div>
                <div className="d-flex">
                  <div className="collection-apply">
                    <button className="collection-apply-btn">Apply Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 col-md-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

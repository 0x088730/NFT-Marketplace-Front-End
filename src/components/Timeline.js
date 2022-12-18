import React from "react";
import clsx from "clsx";

const TimeLine = () => {
  return (
    <div className="section-block timeline-block section-spacing">
      <div className="text-center">
        <span className="section-tag main-font">
          <span className="section-tag-font">Road Map</span>
        </span>
        <div className="section-title main-font">Got Instrumental Timeline</div>
        <div className="section-title-caption our-collection-caption subtext-font">
          This roadmap outlines our goals and where we want to take our Brand.
        </div>
      </div>
      <div className="timeline-list position-relative d-flex justify-content-between flex-wrap">
        <div className='time-line-middle-line'></div>
        <div className="timeline-item d-flex phase-1">
          <div className="timeline-verse">
            <span>First Verse</span>
          </div>
          <h3 className="timeline-phase position-relative text-white">
            Phase One
          </h3>
          <div className="timeline-details">
            1. Upgrade To Web3 Tech
            <br />
            2. UI/UX Design
            <br />
            3. Web2 DSP Integration
          </div>
        </div>

        <div className="timeline-item phase-2">
          <div className="timeline-verse">
            <span>Second Verse</span>
          </div>
          <h3 className="timeline-phase position-relative text-white">
            Phase Two
          </h3>
          <div className="timeline-details">
            1. The Got Token Integration
            <br />
            2. Web Player Integration
            <br />
            3. Onboarding curated Artists & Producers
          </div>
        </div>

        <div className="timeline-item phase-3">
          <div className="timeline-verse">
            <span>Third Verse </span>
          </div>
          <h3 className="timeline-phase position-relative text-white">
            Phase 3
          </h3>
          <div className="timeline-details">
            1. A.I. Beat Creator Tool
            <br />
            2. Metaverse / IRL Producer Showcase
            <br />
            3. Online Launch
          </div>
        </div>

        <div className="timeline-item mb-0 phase-4">
          <div className="timeline-verse">
            <span>Fourth Verse</span>
          </div>
          <h3 className="timeline-phase position-relative text-white">
            Phase Four
          </h3>
          <div className="timeline-details">
            1. Metaverse / IRL Beat Battle
            <br />
            2. Got Instrumentals Web3 Publishing
            <br />
            3. Got Instrumentals Web3 Syncs <br />
            4. Official Launch IRL Event
          </div>
        </div>
      </div>
      <div className="text-center d-flex justify-content-center">
        <div className="view-more">
          <button className="view-more-btn main-font">View Full Roadmap</button>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;

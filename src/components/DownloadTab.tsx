import React from 'react';
import { DownloadEntry } from './DownloadEntry';

export const DownloadTab: React.FC = () => (
  <div className="row gy-4">
    <div className="col-lg-12">
      <div className="search-box">
        <input type="text" className="common-input common-input--lg pill border border-gray-five" placeholder="Search Your Downloads" />
        <button type="submit" className="btn btn-main btn-icon icon border-0"><img src="assets/images/icons/search.svg" alt="" /></button>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="download-wrapper ">
        <DownloadEntry
          imgSrc="assets/images/thumbs/rejected1.png"
          title="CityScape - Real Estate HTML Template"
          licenseType="Tools License"
          checkboxId="notifiedd"
        />
        <DownloadEntry
          imgSrc="assets/images/thumbs/rejected2.png"
          title="FixTurbo - Car Repairing HTML Template"
          licenseType="Tools License"
          checkboxId="notified"
        />
        <DownloadEntry
          imgSrc="assets/images/thumbs/rejected1.png"
          title="CityScape - Real Estate HTML Template"
          licenseType="Tools License"
          checkboxId="notifiedddd"
        />
        <DownloadEntry
          imgSrc="assets/images/thumbs/rejected2.png"
          title="FixTurbo - Car Repairing HTML Template"
          licenseType="Tools License"
          checkboxId="notifieds"
        />
      </div>
    </div>
  </div>
);

import React from 'react';
import { DownloadItem } from './DownloadItem';

const downloadsData = [
  { id: '1', thumbSrc: 'assets/images/thumbs/rejected1.png', title: 'CityScape - Real Estate HTML Template', license: 'Tools License', checkboxId: 'notifiedd' },
  { id: '2', thumbSrc: 'assets/images/thumbs/rejected2.png', title: 'FixTurbo - Car Repairing HTML Template', license: 'Tools License', checkboxId: 'notified' },
  { id: '3', thumbSrc: 'assets/images/thumbs/rejected1.png', title: 'CityScape - Real Estate HTML Template', license: 'Tools License', checkboxId: 'notifiedddd' },
  { id: '4', thumbSrc: 'assets/images/thumbs/rejected2.png', title: 'FixTurbo - Car Repairing HTML Template', license: 'Tools License', checkboxId: 'notifieds' },
];

const DownloadsContent: React.FC = () => {
  return (
    <div className="row gy-4">
      <div className="col-lg-12">
        <div className="search-box">
          <input type="text" className="common-input common-input--lg pill border border-gray-five" placeholder="Search Your Downloads" />
          <button type="submit" className="btn btn-main btn-icon icon border-0"><img src="assets/images/icons/search.svg" alt=""/></button>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="download-wrapper bg-white border border-gray-five">
          {downloadsData.map((item) => (
            <DownloadItem
              key={item.id}
              id={item.id}
              thumbSrc={item.thumbSrc}
              title={item.title}
              license={item.license}
              checkboxId={item.checkboxId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { DownloadsContent };

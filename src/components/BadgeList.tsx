import React from 'react';

interface BadgeListProps {
  small?: boolean;
}

export const BadgeList: React.FC<BadgeListProps> = ({ small = false }) => (
  <ul className={`badge-list flx-align gap-2 ms-0 ${small ? 'badge-list--sm gap-1 mt-3' : 'mt-32'}`.trim()}>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge1.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge2.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge3.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge4.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge5.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge6.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge7.png" alt="" />
    </li>
    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
      <img src="assets/images/thumbs/badge8.png" alt="" />
    </li>
  </ul>
);

import React from 'react';
import ReviewTableRow from './ReviewTableRow';

const ReviewTable: React.FC = () => {
  const reviews = [
    {
      productImg: 'assets/images/thumbs/rejected1.png',
      productName: 'CityScape - Real Estate',
      productDate: '2024-03-13  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
    },
    {
      productImg: 'assets/images/thumbs/rejected2.png',
      productName: 'FixTurbo - Car Repair',
      productDate: '2024-02-10  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
    },
    {
      productImg: 'assets/images/thumbs/rejected1.png',
      productName: 'CityScape - Real Estate',
      productDate: '2024-03-13  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
    },
    {
      productImg: 'assets/images/thumbs/rejected2.png',
      productName: 'FixTurbo - Car Repair',
      productDate: '2024-02-10  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
    },
    {
      productImg: 'assets/images/thumbs/rejected1.png',
      productName: 'CityScape - Real Estate',
      productDate: '2024-03-13  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
    },
    {
      productImg: 'assets/images/thumbs/rejected2.png',
      productName: 'FixTurbo - Car Repair',
      productDate: '2024-02-10  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
    },
  ];

  return (
    <div className="table-responsive">
      <table className="table text-body mt--24">
        <thead>
          <tr>
            <th>Product | Date</th>
            <th>User</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <ReviewTableRow
              key={index}
              productImg={review.productImg}
              productName={review.productName}
              productDate={review.productDate}
              userName={review.userName}
              userComment={review.userComment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
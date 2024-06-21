import React from 'react';

const AdminSummary = ({ formData }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <div className="mb-4">
        <p className="text-gray-700"><strong>Name:</strong> {formData.name}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Email:</strong> {formData.email}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Age:</strong> {formData.age}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Attending with Guest:</strong> {formData.attendingWithGuest}</p>
      </div>
      {formData.attendingWithGuest === 'Yes' && (
        <div className="mb-4">
          <p className="text-gray-700"><strong>Guest Name:</strong> {formData.guestName}</p>
        </div>
      )}
    </div>
  );
};

export default AdminSummary;

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  const filterDoctor = () => {
    if (doctors.length > 0 && speciality) {
      const doctorData = doctors
        .filter((item) => docId !== item._id && item.speciality === speciality)
        .slice(0, 4);
      setRelDoc(doctorData);
    }
  };

  useEffect(() => {
    filterDoctor();
  }, [docId, speciality, doctors]);

  return (
    <div className='mt-10 flex flex-col items-center gap-1'>
      <h1 className='text-3xl font-medium'>Related Doctors</h1>
      <p className='text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='py-10 w-full flex justify-center flex-wrap gap-4'>
        {relDoc.length > 0 ? (
          relDoc.map((item) => (
            <div
              onClick={() => {navigate(`/appointment/${item._id}`),scrollTo(0,0)}}
              key={item._id}
              className='cursor-pointer w-[220px] border border-blue-200 rounded-xl overflow-hidden tablet:w-[45%] mobile:w-full hover:translate-y-[-10px] transition-all duration-300'
            >
              <img className='w-full bg-blue-50' src={item.image} alt={`${item.name}`} />
              <div className='p-4'>
                <div className='flex gap-2 items-center text-sm'>
                  <p className='w-2 h-2 bg-green-600 rounded-full'></p>
                  <p className='text-green-600'>Available</p>
                </div>
                <p className='text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No related doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedDoctors;

import { CircleCheckBig } from 'lucide-react';
import React from 'react';

function PricingFeature({feature}) {
  return (
    <p className='flex gap-2 mt-2 bg-green-700 text-white rounded-xl p-2'><CircleCheckBig></CircleCheckBig> {feature}</p>
  );
}

export default PricingFeature;
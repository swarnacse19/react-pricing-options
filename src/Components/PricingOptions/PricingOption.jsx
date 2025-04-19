import React, {use} from 'react';
import PricingCard from '../pricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

function PricingOption({pricingPromise}) {

    const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className='text-5xl my-8'>Get our Membership</h2>
      <div className='grid md:grid-cols-3 gap-5'>
        {
          pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
        }
      </div>
    </div>
  );
}

export default PricingOption;
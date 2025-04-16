import React, {use} from 'react';
import PricingCard from '../pricingCard/PricingCard';

function PricingOption({pricingPromise}) {

    const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className='text-5xl'>Get our Membership</h2>
      <div className='grid md:grid-cols-3 gap-5'>
        {
          pricingData.map(pricing => <PricingCard 
            key={pricing.id} 
            pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
}

export default PricingOption;
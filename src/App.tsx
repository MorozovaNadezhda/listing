import React from 'react';
import data from './data.json';
import Listing from './components/Listing/Listing';
import { ListingItem } from './components/Listing/Listing';

function App() {
  return (
    <div className='App'>
      <Listing items={data as ListingItem[]} />
    </div>
  );
}

export default App;

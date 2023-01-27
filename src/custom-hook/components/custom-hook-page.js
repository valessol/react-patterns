import React from 'react';

import {NormalDevelopero} from './normal-developero.js';
import {CustomHookDevelopero} from './custom-hook-developero.js';

export const CustomHookPage = () => (
  <>
    <h2>Custom Hook</h2>
    <h3>Ejemplo sin Custom Hook</h3>
    <NormalDevelopero />
    <hr />

    <h3>Ejemplo con Custom Hook</h3>
    <CustomHookDevelopero />
  </>
);

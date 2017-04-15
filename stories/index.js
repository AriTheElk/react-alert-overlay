import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';

import SuccessOverlay from '../src/components/SuccessOverlay';
import WarningOverlay from '../src/components/WarningOverlay';

storiesOf('Overlay', module)
  .add('Success', () => (
    <SuccessOverlay />
  ))
  .add('Warning', () => (
    <WarningOverlay />
  ));

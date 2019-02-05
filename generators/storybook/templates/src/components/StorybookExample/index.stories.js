import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from './';

storiesOf('Component Example', module).add('Default', () => (
    <Example text={'storybook example'} />
));

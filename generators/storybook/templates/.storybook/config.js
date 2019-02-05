import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/);
const load = () => req.keys().forEach(filename => req(filename));
configure(load, module);

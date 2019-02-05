import React from 'react'
import { storiesOf } from '@storybook/react'
import Example from './'

storiesOf('Storybook Example', module).add('Default', () => (
    <Example text={'storybook example'} />
))

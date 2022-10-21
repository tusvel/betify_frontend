import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import React from 'react';

import Home from '@/pages/home/Home';

import HomePage from '../pages';

import { PaletteTree } from './palette';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Home">
        <Home />
      </ComponentPreview>
      <ComponentPreview path="/HomePage">
        <HomePage />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;

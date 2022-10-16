import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import Home from '@/pages/Home';
import HomePage from '../pages';

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path='/Home'>
      <Home />
    </ComponentPreview>
    <ComponentPreview path='/HomePage'>
      <HomePage />
    </ComponentPreview>
  </Previews>;
};

export default ComponentPreviews;

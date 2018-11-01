import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/snaptopixel/stencil-test',
      resourcesUrl: '/snaptopixel/stencil-test/build/app',
      dir: 'docs'
    }
  ]
};

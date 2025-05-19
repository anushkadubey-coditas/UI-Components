import type { Preview } from '@storybook/angular'
import '!style-loader!css-loader!sass-loader!../projects/ui-library/src/styles.scss';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
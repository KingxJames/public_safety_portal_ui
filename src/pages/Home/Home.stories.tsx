// Home.stories.tsx

import  { Home } from './Home'; // Make sure to use PascalCase for component names

export default {
  title: 'pages/Home', // PascalCase for storybook title
  component: Home,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

type Story = {
};

export const HomeComponent: Story = {
  
};
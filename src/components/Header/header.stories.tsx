import type { Meta, StoryObj } from '@storybook/react';


import Header from './header';

const meta: Meta<typeof Header> = {
    component: Header,
    parameters: {
        layout: "fullscreen",
    }
};

export default meta;

type Story = StoryObj<typeof Header>;

/**Header for the MemeGenerator component*/
export const Primary: Story = {
    render: () => <Header />,
}


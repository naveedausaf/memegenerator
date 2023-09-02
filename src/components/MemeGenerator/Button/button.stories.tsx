import { Meta, StoryObj } from '@storybook/react';
import Button from './button';


const meta: Meta<typeof Button> = {
    component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {}
}

export const InVerticalFlexContainer: Story = {
    args: {

    },

    decorators: [
        (Story) => (
            <main style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%"
            }}>
                <Story />
            </main >
        )
    ]
}




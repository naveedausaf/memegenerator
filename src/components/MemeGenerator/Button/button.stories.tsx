import { Meta, StoryObj } from '@storybook/react';
import Button from './button';


const meta: Meta<typeof Button> = {
    component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;


/**Shows button for fetching a new meme image*/
export const Primary: Story = {
    args: {}
}

/**
 * This shows the button within a flex container
 * with `flex-direction="column"` which is how
 * it would be shown within the top level component.
 *
 * It automatically appears fully expanded left to right
 */
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




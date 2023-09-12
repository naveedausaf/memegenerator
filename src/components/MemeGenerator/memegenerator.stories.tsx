import type { Meta, StoryObj } from '@storybook/react';
import MemeGenerator from './memegenerator';

const meta: Meta<typeof MemeGenerator> = {
    component: MemeGenerator,
    decorators: [
        (Story) => (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        chromatic: { viewports: [400, 600, 900, 1200] },
        layout: "fullscreen",
    }
};

export default meta;

type Story = StoryObj<typeof MemeGenerator>;

/** MemeGenerator component for user to interact with.
 *
 * ### TODO
 *
 * * Vertical scrollbars appear momentarily, and therefore the whole layout judders right to left and back again, when viewport height is reduced, but not when it is increased.
 */
export const Primary: Story = {
    render: () =>

        <MemeGenerator />
    ,
}

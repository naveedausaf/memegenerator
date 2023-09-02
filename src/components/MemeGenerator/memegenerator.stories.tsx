import type { Meta, StoryObj } from '@storybook/react';
import MemeGenerator from './memegenerator';

const meta: Meta<typeof MemeGenerator> = {
    component: MemeGenerator,
    decorators: [
        (Story) => (
            <div style={{ height: '95vh' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof MemeGenerator>;

export const Primary: Story = {
    render: () => <MemeGenerator />,
}

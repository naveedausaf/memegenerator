import type { Meta, StoryObj } from '@storybook/react';

import Meme from './meme';

const meta: Meta<typeof Meme> = {
    component: Meme,
    decorators: [
        (Story) => (
            <div style={{ background: 'green', height: '95vh' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Meme>;

export const Primary: Story = {
    render: () => <Meme />,
}

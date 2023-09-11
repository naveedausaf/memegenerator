import type { Meta, StoryObj } from '@storybook/react';
import Meme from './meme';

/**
 *
 */
const meta: Meta<typeof Meme> = {
    component: Meme,
    decorators: [
        (Story) => (
            <div style={{
                height: '100vh', display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center'
            }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        layout: "fullscreen",
    }
};

export default meta;

type Story = StoryObj<typeof Meme>;

/**
 * Meme component showing an image with phrases superimposed.
 */
export const WithImageAndPhrases: Story = {
    args: {
        firstPhrase: 'shut it',
        secondPhrase: 'and take my money',
        memeImageUrl: 'https://i.imgflip.com/25w3.jpg',
        memeImageAltText: 'Matrix Morpheus'
    },

}
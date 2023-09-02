import type { Meta, StoryObj } from '@storybook/react';

import Meme from './meme';

const meta: Meta<typeof Meme> = {
    component: Meme
};

export default meta;

type Story = StoryObj<typeof Meme>;

export const WithImageAndPhrases: Story = {
    args: {
        firstPhrase: 'shut up',
        secondPhrase: 'and take my money',
        memeImageUrl: 'https://i.imgflip.com/25w3.jpg',
        memeImageAltText: 'Matrix Morpheus'
    }

}
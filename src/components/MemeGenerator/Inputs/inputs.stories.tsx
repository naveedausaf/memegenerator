import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { useState } from 'react';
import Inputs from './inputs';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Inputs> = {
    component: Inputs,
    argTypes: {
        firstPhrase: { control: { disable: true } },
        secondPhrase: { control: { disable: true } }
    }
};

export default meta;

type Story = StoryObj<typeof Inputs>;

/**This story shows Inputs control into which the user will enter the two phrases that will be superimposd on a meme image */
export const Primary: Story = {

    args: {

    },

}




import MemeGen from '../pages/memegen';

import type { Meta, StoryObj } from '@storybook/react';


import { allModes } from '../../.storybook/modes';

const meta: Meta<typeof MemeGen> = {
    component: MemeGen,
    parameters: {
        chromatic: {
            modes: {
                ...allModes
            }
        },
        layout: "fullscreen"
    }

}

export default meta;

type Story = StoryObj<typeof MemeGen>;

/** Complete MemeGenerator page for user to interact with.
 *
 * ### TODO
 * * I am seeing both inner containers expand slightly on large images. Probably whenthe image is wider larger than the width available to the inner container.
 *
 * * Page expands vertically when image is taller than available height in viewport. THIS WAS NOT SUPPOSED TO BE THE CASE as I progammes Meme component to take
 * care of this issue.
 *     This could be why on MemeGenerator component, on smallest vewports, scrollbar were appearing on certain images.
 */
export const Primary: Story = {
    args: {}
}
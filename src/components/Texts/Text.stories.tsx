import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // color: { control: 'string' },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => {
    const { ...rest } = args;
    
    return (
        <Text {...rest}>
            Hello, World!
        </Text>
    );
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    styles: {
        color: 'primary',
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
  // label: 'Button',
};

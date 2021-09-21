import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'StyledInput',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: {
      options: ['date', 'password', 'text'],
      control: { type: 'radio' },
    },
  },
};

export const StyledInput = (args) => ({
  template: hbs`
    <StyledInput
      @label={{this.label}}
      @disabled={{this.disabled}}
      @placeholder={{this.placeholder}}
      @type={{this.type}}
    />
  `,
  context: args,
});

StyledInput.args = {
  label: 'Enter your name',
  disabled: false,
  type: 'text',
};

import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'CustomButton',
  argTypes: {
    buttonTitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const ClassicButton = (args) => ({
  template: hbs`
    <CustomButton
      @buttonTitle={{this.buttonTitle}}
      @disabled={{this.disabled}}
    />
  `,
  context: args,
});

ClassicButton.args = {
  buttonTitle: 'Button',
  disabled: false,
};

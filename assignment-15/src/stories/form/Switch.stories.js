// Switch.stories.js

import FormSwitch from '../../components/form/FormSwitch.vue';

export default {
  title: 'form/Switch',
  component: FormSwitch,
  argTypes: {
    checked: { control: 'boolean', description: 'Current state of the switch' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormSwitch },
  props: Object.keys(argTypes),
  template: `
    <div>
      <FormSwitch v-bind="$props" />
    </div>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

Basic.parameters = {
  docs: {
    description: { story: 'A basic switch component.' },
  },
};

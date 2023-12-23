import FormRadiobox from '../../components/form/FormRadiobox.vue';

export default {
  title: 'Form/Radiobox',
  component: FormRadiobox,
  argTypes: {
    checked: { control: 'boolean', description: 'Whether the radio input is checked or not' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormRadiobox },
  props: Object.keys(argTypes),
  template: `
    <div>
      <FormRadiobox v-bind="$props" />
    </div>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

Basic.parameters = {
  docs: {
    description: { story: 'A basic radio input field.' },
  },
};

import FormSelect from '../../components/form/FormSelect.vue';

export default {
  title: 'Form/Select',
  component: FormSelect,
  argTypes: {
    options: { control: 'array', description: 'Array of options for the select input' },
    value: { control: 'text', description: 'Current selected value of the select input' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormSelect },
  props: Object.keys(argTypes),
  template: `
    <div>
      <FormSelect v-bind="$props" />
    </div>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  value: 'option1',
};

Basic.parameters = {
  docs: {
    description: { story: 'A basic select input field.' },
  },
};

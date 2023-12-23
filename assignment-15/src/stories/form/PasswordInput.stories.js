import FormPasswordInput from '../../components/form/FormPasswordInput.vue';

export default {
  title: 'Form/FormPasswordInput',
  component: FormPasswordInput,
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder for the input field' },
    value: { control: 'text', description: 'Current value of the input field' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormPasswordInput },
  props: Object.keys(argTypes),
  template: `
    <div>
      <FormPasswordInput v-bind="$props" />
    </div>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Enter your password',
  value: '',
};

Basic.parameters = {
  docs: {
    description: { story: 'A password input field with toggleable visibility.' },
  },
};

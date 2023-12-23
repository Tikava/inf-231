import FormTextare from '../../components/form/FormTextarea.vue';

export default {
  title: 'Form/Textarea',
  component: FormTextare,
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text for the textarea' },
    value: { control: 'text', description: 'Current value of the textarea' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormTextare },
  props: Object.keys(argTypes),
  template: `
    <div>
      <FormTextare v-bind="$props" />
    </div>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Enter text here...',
  value: '',
};

Basic.parameters = {
  docs: {
    description: { story: 'A basic textarea component.' },
  },
};

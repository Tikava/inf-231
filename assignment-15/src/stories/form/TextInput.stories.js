import FormInput from '../../components/form/FormInput.vue';

export default {
    tags: ['autodocs'],
    title: 'Form/TextInput',
    component: FormInput,
    argTypes: {
        type: { control: 'text', description: 'Input type (text, email, password, etc.)' },
        placeholder: { control: 'text', description: 'Input placeholder text' },
        value: { control: 'text', description: 'Current value of the input' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { FormInput },
    props: Object.keys(argTypes),
    template: `
    <div>
      <FormInput v-bind="$props"/>
    </div>`,
});

export const Basic = Template.bind({});
Basic.args = {
    type: 'text',
    placeholder: 'Enter text',
    value: '',
};

Basic.parameters = {
    docs: {
        description: { story: 'Displays a basic text input field.' },
    },
};

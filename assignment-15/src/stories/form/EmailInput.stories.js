import FormEmailInput from '../../components/form/FormEmailInput.vue';

export default {
    tags: ['autodocs'],
    title: 'Form/EmailInput',
    component: FormEmailInput,
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the email input',
        },
        value: {
            control: 'text',
            description: 'Initial value for the email input',
        },
    },
};

const Template = (args, { argTypes }) => ({
    components: { FormEmailInput },
    props: Object.keys(argTypes),
    template: `
    <div>
      <FormEmailInput v-bind="$props" />
    </div>`,
});

export const Basic = Template.bind({});
Basic.args = {
    placeholder: 'Enter your email...',
    value: '',
};

Basic.parameters = {
    docs: {
        description: { story: 'Displays a basic email input field with customizable placeholder and initial value.' },
    },
};

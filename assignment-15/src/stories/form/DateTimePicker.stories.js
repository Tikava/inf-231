import FormDateTimePicker from '../../components/form/FormDateTimePicker.vue';

export default {
    tags: ['autodocs'],
    title: 'Form/DateTimePicker',
    component: FormDateTimePicker,
    argTypes: {
        value: { control: 'text', description: 'Initial value for the datetime picker' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { FormDateTimePicker },
    props: Object.keys(argTypes),
    template: `
    <div>
      <FormDateTimePicker v-bind="$props" />
    </div>`,
});

export const Basic = Template.bind({});
Basic.args = {
    value: '2023-01-01T12:00',
};

Basic.parameters = {
    docs: {
        description: { story: 'Displays a basic datetime picker with customizable initial value.' },
    },
};

import FormNumberInput from '../../components/form/FormNumberInput.vue';

export default {
    tags: ['autodocs'],
    title: 'Form/NumberInput',
    component: FormNumberInput,
    argTypes: {
        placeholder: { control: 'text', description: 'Input placeholder text' },
        value: { control: 'number', description: 'Current value of the input' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { FormNumberInput },
    props: Object.keys(argTypes),
    template: `
    <div>
      <FormNumberInput v-bind="$props"/>
    </div>`,
});

export const Basic = Template.bind({});
Basic.args = {
    placeholder: 'Enter a number',
    value: 0,
};

Basic.parameters = {
    docs: {
        description: { story: 'Displays a basic number input field.' },
    },
};

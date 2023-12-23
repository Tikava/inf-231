import FormCheckbox from '../../components/form/FormCheckbox.vue';

export default {
    tags: ['autodocs'],
    title: 'Form/Checkbox',
    component: FormCheckbox,
    argTypes: {
        checked: { control: 'boolean', description: 'Initial checked state of the checkbox' },
    },
};

const Template = (args, { argTypes }) => ({
    components: { FormCheckbox },
    props: Object.keys(argTypes),
    template: `
    <div>
      <FormCheckbox v-bind="$props" />
    </div>`,
});

export const Basic = Template.bind({});
Basic.args = {
    checked: true,
};

Basic.parameters = {
    docs: {
        description: { story: 'Displays a basic checkbox with customizable checked state.' },
    },
};

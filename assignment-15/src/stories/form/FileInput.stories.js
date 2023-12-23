import FormFileInput from '../../components/form/FormFileInput.vue';

export default {
    tags: ['autodocs'],
    title: 'Form/FileInput',
    component: FormFileInput,
};

const Template = (args, { argTypes }) => ({
    components: { FormFileInput },
    props: Object.keys(argTypes),
    template: `
    <div>
      <FormFileInput/>
    </div>`,
});

export const Basic = Template.bind({});

Basic.parameters = {
    docs: {
        description: { story: 'Displays a basic file input field.' },
    },
};

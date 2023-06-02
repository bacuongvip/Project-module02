import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, Pagination} from 'react-admin';
export const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;
export const ListItem = (props) => {
    return (
        <List pagination={<PostPagination />} {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='category'/>
                <TextField source='title' />
                <TextField source='price' />
                <TextField source='img' />
                <TextField source='rate' />

                <EditButton basePath='/products' />
            </Datagrid>
        </List>
    );
};

export const EditItem = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='category' />
            <TextInput source='title' />
            <TextInput source='price' />
            <TextInput source='rate' />
        </SimpleForm>
    </Edit>
);

export const CreateItem = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='category' />
            <TextInput source='title' />
            <TextInput source='price' />
            <TextInput source='img' />
            <TextInput source='rate' />
        </SimpleForm>
    </Create>
);

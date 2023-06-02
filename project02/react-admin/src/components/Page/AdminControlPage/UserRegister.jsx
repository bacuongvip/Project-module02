import {
    List,
    Datagrid,
    TextField,
    Edit,
    Labeled,
    SimpleForm,
    EditButton,
    TextInput,
    Create,
    EmailField,
    FunctionField,
    SelectInput,
    ArrayInput, SimpleFormIterator
} from 'react-admin';
import { useRecordContext } from 'react-admin';


export const ListUser = (props) => {
    const CustomPayMethodField = () => {
        const record = useRecordContext();
        const payMethodValue = record.pay_method;
        const payMethodLabel = payMethodValue == 1 ? 'Đã Thanh Toán' : 'Chưa Thanh Toán';
        return (
            <Labeled label="Pay Method">
                <span>{payMethodLabel}</span>
            </Labeled>
        );
    };
    const CustomPayMethodField2 = () => {
        const record = useRecordContext();
        const payMethodValue = record.deliverd;
        const payMethodLabel = payMethodValue ? 'Đã Giao Hàng' : 'Chưa Giao Hàng';
        return (
            <Labeled label="Deliver">
                <span>{payMethodLabel}</span>
            </Labeled>
        );
    };
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="telephone" />
                <TextField source="address" />
                <TextField source="receive_username" />
                <TextField source="receive_telephone" />
                <TextField source="receive_address" />
                <TextField source="receive_note" />
                <FunctionField
                    label="Pay Method"
                    render={record => <CustomPayMethodField record={record} />}
                />
                <FunctionField
                    label="Deliver"
                    render={record => <CustomPayMethodField2 record={record} />}
                />
                <EditButton basePath="/info" />
            </Datagrid>
        </List>
    );
};



export const EditUser = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='receive_username' />
            <TextInput source='receive_telephone' />
            <TextInput source='receive_address' />
            <SelectInput source="pay_method" choices={[
                { id: 0, name: 'Chưa Thanh Toán' },
                { id: 1, name: 'Đã Thanh Toán' },
            ]} />
            <SelectInput source="deliverd" choices={[
                { id: false, name: 'Chưa Giao Hàng' },
                { id: true, name: 'Đã Giao Hàng' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const CreateUser = (props) => (
    <Create disableAuthentication>
    </Create>
);


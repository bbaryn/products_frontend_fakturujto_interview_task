import { useField, useFormikContext } from 'formik';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

interface Props {
    name: string;
}

export const DatePickerField = ({ name }: Props) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(name);
    return (
        <Datepicker
            {...field}
            value={new Date(field.value).toLocaleDateString('pl-PL')}
            name={name}
            showMonthDropdown
            showYearDropdown
            dateFormat="dd-MM-yyyy"
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
                setFieldValue(field.name, val);
            }}
        />
    );
};

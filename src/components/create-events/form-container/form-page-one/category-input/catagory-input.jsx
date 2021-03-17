import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import CreateIcon from '@material-ui/icons/Create';

export default function CatagoryInput({ register, setValue, getValues }) {
    const [forceUpdate, setforceUpdate] = useState(false);
    const styles = formPageOneStyles();

    useEffect(() => {
        register('category', {
            required: {
                value: true,
                message: "'Category' is a required field",
            },
        });
    }, []);

    useEffect(() => {}, [forceUpdate]);

    const handleChange = (e) => {
        setforceUpdate(!forceUpdate);
        setValue(e.target.name, e.target.value);
    };

    return (
        <>
            <div className={styles.inputDiv}>
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={getValues('category')}
                    onChange={handleChange}
                    className={styles.input}
                />
                <CreateIcon color="disabled" className={styles.icon} />
            </div>
        </>
    );
}

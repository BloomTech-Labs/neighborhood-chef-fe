import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import CreateIcon from '@material-ui/icons/Create';

export default function CatagoryInput({ register }) {
    const styles = formPageOneStyles();

    return (
        <>
            <div className={styles.inputDiv}>
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    ref={register}
                    className={styles.input}
                />
                <CreateIcon color="disabled" />
            </div>
        </>
    );
}

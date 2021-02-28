import React from 'react';
import { Icon } from '@iconify/react';
import { modifierStyles } from './Modifier.styles';

const Modifier = ({ modifier, modifiers, setModifiers }) => {
    const styles = modifierStyles();

    const updateModifier = (item) => {
        if (modifiers.includes(item)) {
            item.active = false;
            setModifiers(modifiers.filter((mod) => mod.id !== item.id));
        } else {
            item.active = true;
            setModifiers([...modifiers, item]);
        }
    };

    return (
        <div className={styles.root}>
            <div
                onClick={() => updateModifier(modifier)}
                className={`${styles.modifierNotActive} ${
                    modifier.active ? styles.modifierActive : ''
                }`}
            >
                <Icon
                    icon={modifier.icon}
                    style={{ fontSize: '2.5rem', color: 'white' }}
                />
            </div>

            <p style={{ opacity: '0.3', paddingTop: '10px' }}>
                {modifier.title}
            </p>
        </div>
    );
};

export default Modifier;

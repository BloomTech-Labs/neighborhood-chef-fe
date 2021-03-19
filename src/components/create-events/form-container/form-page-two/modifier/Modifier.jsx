import React from 'react';
import { Icon } from '@iconify/react';
import { modifierStyles } from './Modifier.styles';

const Modifier = ({ modifier, values, setValues }) => {
  const styles = modifierStyles();

  const updateModifier = () => {
    if (values.modifiers.includes(modifier.title)) {
      modifier.active = false;
      setValues({ ...values, modifiers: values.modifiers.filter((mod) => mod !== modifier.title) });
    } else {
      modifier.active = true;
      setValues({ ...values, modifiers: [...values.modifiers, modifier.title] });
    }
  };

  return (
    <div className={styles.root}>
      <div
        onClick={() => updateModifier()}
        className={`${styles.modifierNotActive} ${modifier.active ? styles.modifierActive : ''}`}
      >
        <Icon icon={modifier.icon} className={styles.icon} />
      </div>

      <p className={styles.p}>{modifier.title}</p>
    </div>
  );
};

export default Modifier;

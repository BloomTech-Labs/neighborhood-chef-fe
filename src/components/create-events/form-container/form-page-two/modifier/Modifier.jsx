import React from 'react';
import { Icon } from '@iconify/react';
import { modifierStyles } from './Modifier.styles';

const Modifier = ({ title, active, icon, getValues, setValue, setForceUpdate }) => {
  const styles = modifierStyles();

  const updateModifier = () => {
    setValue('modifiers', { ...getValues('modifiers'), [title]: !active });
    setForceUpdate((prevState) => !prevState);
  };

  return (
    <div className={styles.root}>
      <div
        onClick={() => updateModifier()}
        className={`${styles.modifierNotActive} ${active ? styles.modifierActive : ''}`}
      >
        <Icon icon={icon} className={styles.icon} />
      </div>

      <p className={styles.p}>{title}</p>
    </div>
  );
};

export default Modifier;

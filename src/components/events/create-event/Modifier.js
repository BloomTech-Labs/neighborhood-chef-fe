import React from 'react';
import { Icon } from '@iconify/react';

const Modifier = ({ modifier, modifiers, setModifiers }) => {
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
      }}
    >
      <div
        onClick={() => updateModifier(modifier)}
        className={`modifierNotActive${
          modifier.active ? ' modifierActive' : ''
        }`}
      >
        <Icon
          width="1.1em"
          icon={modifier.icon}
          style={{ fontSize: '3.4rem', color: 'white' }}
        />
      </div>

      <p style={{ opacity: '0.3' }}>{modifier.title}</p>
    </div>
  );
};

export default Modifier;

import React from "react";
import { Icon } from "@iconify/react";

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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <div
        onClick={() => updateModifier(modifier)}
        className={`modifierNotActive${
          modifier.active ? " modifierActive" : ""
        }`}
      >
        <Icon
          icon={modifier.icon}
          style={{ fontSize: "3.5rem", color: "white" }}
        />
      </div>

      <p style={{ opacity: "0.3" }}>{modifier.title}</p>
    </div>
  );
};

export default Modifier;

import React from "../lib/react.js";

const h = React.createElement;

interface SwitchProps {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
  onToggle?: () => void; // (() => void) | undefined
}

type SwitchText = "ON" | "OFF" | null;

function Switch({ active = false, disabled = false, showOnOffText = false, children, onToggle }: SwitchProps) {
  let switchText: SwitchText = !showOnOffText ? null : active ? "ON" : "OFF";

  let switchTextNode = null;

  if (switchText) {
    switchTextNode = h("span", { className: "Switch--text", "aria-hidden": true }, switchText);
  }

  return h(
    "div",
    {
      role: "switch",
      "aria-checked": active,
      "aria-disabled": disabled,
      tabIndex: 0,
      className: "Switch",
      // onClick: onToggle,
      onClick: onToggle,
    },
    h("span", { className: "Switch--label" }, children),
    h("span", { className: "Switch--info" }, h("span", { className: "Switch--knob" }), switchTextNode)
  );
}

export default Switch;

import { ExpandMore, ExpandLess } from "@styled-icons/material";

type ExpandIconPros = {
  isExpanded: Boolean;
  handleClick: () => void;
};

export default function ExpandIcon({
  isExpanded,
  handleClick,
}: ExpandIconPros) {
  return isExpanded ? (
    <ExpandLess onClick={handleClick} />
  ) : (
    <ExpandMore onClick={handleClick} />
  );
}

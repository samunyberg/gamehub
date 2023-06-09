import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  maxChars: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, maxChars) + "...";

  return (
    <>
      <Text>{summary}</Text>
      <Button
        colorScheme="yellow"
        fontWeight="bold"
        marginY={3}
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;

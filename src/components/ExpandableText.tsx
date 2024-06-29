import React, { ReactNode, useState } from 'react';

interface Probs {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Probs) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <>
      <p>
        {text}...
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? 'show less' : 'show more'}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;

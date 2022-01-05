import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";

const codeBlockStyle = {
  padding: "1.5rem",
  borderRadius: "10px",
  fontFamily: "auto",
};

const CodeBlock = (props) => {
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language="javascript"
      theme={oceanicNext}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, ...codeBlockStyle }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;

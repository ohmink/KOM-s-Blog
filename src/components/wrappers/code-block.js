import React, { useContext } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import { themeStateContext } from "../themeProvider";

const CodeBlock = (props) => {
  const theme = useContext(themeStateContext);
  const codeBlockStyle = {
    margin: "2rem 0",
    padding: "1.5rem",
    borderRadius: "10px",
    fontFamily: "auto",
    overflowX: "auto",
    backgroundColor: theme.mode === "light" ? "#282C34" : "#3F4552",
  };

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

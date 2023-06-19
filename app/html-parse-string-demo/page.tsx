"use client";

import { parse } from "../../html-parse-string/src";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { useState } from "react";
import "./style.css";

const HtmlParseStringDemo = () => {
  const [code, setCode] = useState("");
  return (
    <div className="h-full">
      <h1 className="text-5xl text-center my-10">html-parse-string</h1>
      <div className="flex justify-around h-4/5">
        <CodeMirror
          className="w-2/5"
          value={code}
          height="100%"
          theme={darcula}
          extensions={[html()]}
          onChange={setCode}
        />
        <CodeMirror
          className="w-2/5"
          value={JSON.stringify(parse(code), null, 2)}
          height="100%"
          theme={darcula}
          extensions={[json()]}
          editable={false}
        />
      </div>
    </div>
  );
};

export default HtmlParseStringDemo;

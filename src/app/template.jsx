"use client";

import { useState } from "react";

const Template = ({children}) => {
    const [state, setState] = useState(0)
  return (
    <div>
      {/* <h1>Ini template {state}</h1>
      <button onClick={() => setState(state+1)}>Click</button> */}
      {children}
    </div>
  )
}

export default Template

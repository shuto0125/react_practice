import React, { useState, useRef, useImperativeHandle } from 'react'

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))
  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

export const UseImperativeHandleSample = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null) {
      // 子のuseImperativeHandleで指定した値を参照
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <h2>UseImperativeHandleSample</h2>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}

"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="rounded-md border border-gray7">
      <div className="flex items-center justify-center rounded-t-md bg-gray2 px-6 py-4">
        <p className="font-mono text-lg md:text-xl">Counter</p>
      </div>
      <div className="flex items-center justify-center border-y border-gray7 bg-gray1 px-6 py-4">
        <p className="font-mono text-xl font-medium md:text-2xl">{count}</p>
      </div>
      <div className="flex items-center justify-center rounded-b-md bg-gray2 px-6 py-4">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md border border-gray7 px-3 py-1.5 font-mono text-lg hover:border-gray8 md:text-xl"
        >
          Increment
        </button>
      </div>
    </div>
  )
}

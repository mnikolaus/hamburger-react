import React from 'react'

export default ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="rounded-full bg-gray-700 flex items-center justify-center w-24 h-24">
    {children}
  </div>
)

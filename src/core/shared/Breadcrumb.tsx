import React from 'react'

type Props = {}

const Breadcrumb = (props: Props) => {
  return (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item"><a className="text-decoration-none">Strona główna</a></li>
          <li className="breadcrumb-item" aria-current="page"><a className="text-decoration-none">Samochody</a></li>
          <li className="breadcrumb-item active" aria-current="page">Wyszukiwanie</li>
        </ol>
      </nav>
  )
}

export default Breadcrumb
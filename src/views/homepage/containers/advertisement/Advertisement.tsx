import React from 'react'

import FirstCar from '../../../../core/images/first.jpg'
import './advertisement.scss'

type Props = {}

const Advertisement = (props: Props) => {
  return (
    <div className="advertisement">
        <img
        className="slide-img-style"
        src={FirstCar}
        alt="BMW Z4 sports car E85 roadster"
      />
      <div className="ms-md-2 ms-xl-3 d-md-block carosel-text">
        <h3 className="p-1 slide-text">BMW Z4 sports car E85 roadster</h3>
      <br/>
        <p className="p-2 slide-text">Consequatur adipisci incidunt atque, libero atque consequatur quidem earum error et.</p>
      </div>
    </div>
  )
}

export default Advertisement
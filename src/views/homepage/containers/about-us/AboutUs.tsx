import { faFolderOpen, faPhone, faSackDollar, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import CardAboutUs from './components/CardAboutUs'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className="bg-white rounded-3 p-3 my-3">
  <div className="container-lg my-4">



    <div className="row text-center">
      <h2>Praesentium recusandae labore culpa</h2>
      <span
        >Fugiat natus et aliquid maiores, aut ea rerum et voluptas. Sapiente
        consequatur quia in dolor est.</span
      >
    </div>


  <div className="justify-content-center row my-5">
    <div className="row">
      <div className="col-sm-12 col-md-6"><CardAboutUs icon={faPhone} text={'Quibusdam aperiam natus dolores voluptatem expedita nesciunt. Illum pariatur consectetur provident est quis officiis voluptas ab perspiciatis. Enim magni quisquam est quasi velit sit. Fugiat velit dolor facere quidem quidem harum.'} /></div>
      <div className="col-sm-12 col-md-6"><CardAboutUs icon={faSackDollar} text={'Facere quam illum magnam est cum vel. Qui odio consequatur nam. Repellendus aperiam temporibus sit dolorem ut magnam porro et. Vitae id qui est et. Nihil eos facilis et omnis commodi.'} /></div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-6"><CardAboutUs icon={faShieldHalved} text={'Aut rerum sint eaque ut. Nam non explicabo aut ex non ducimus maiores id quo. Quisquam rerum facilis et saepe id pariatur accusamus.'} /></div>
      <div className="col-sm-12 col-md-6"><CardAboutUs icon={faFolderOpen} text={'Ex voluptatibus et assumenda velit vero dolorem ipsam. Voluptas autem sit fugiat est at reprehenderit sit rerum. Nihil aliquam quo doloremque. Nihil velit veritatis aliquid aliquam.'} /></div>
    </div>
</div>

  </div>
</div>

  )
}

export default AboutUs
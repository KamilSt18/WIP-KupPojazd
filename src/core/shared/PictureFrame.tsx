import React from "react"
import { Carousel } from "react-bootstrap"

type Props = {}

const PictureFrame = (props: Props) => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="slide"
					src="https://platform.cstatic-images.com/xlarge/in/v2/a70e4473-c609-5cf8-8208-6c8dae4d41fb/70c39aba-6947-40ad-951f-0c4d70a95f7b/rzjAQwbeCrmRPSsVWuaP_MbcPps.jpg"
					alt="First slide"
				/>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className="slide"
					src="https://unsplash.it/500/400"
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="slide"
					src="https://unsplash.it/600/400"
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	)
}

export default PictureFrame

import React from "react"

type Props = {}

const Map = (props: Props) => {
	return (
		<>
			<h3 className="mt-3">Mapa</h3>
			<iframe
				title="map"
				className="my-2"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160255.4106076734!2d16.9918639!3d51.1270779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1spl!2spl!4v1662497829491!5m2!1spl!2spl"
				width="600"
				height="200"
				style={{ border: 0 }}
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</>
	)
}

export default Map

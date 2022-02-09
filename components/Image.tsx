import NextImage from 'next/image'

const Image = ({ src, ...rest }) => <NextImage {...rest} src={src} />

export default Image

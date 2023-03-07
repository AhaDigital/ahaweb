import dynamic from 'next/dynamic'

const Icon = ({ iconName }) => {
  const IconComponent = dynamic(() => import(`./${iconName}`), {
    loading: () => null,
    ssr: false,
  })

  return <IconComponent />
}

export default Icon

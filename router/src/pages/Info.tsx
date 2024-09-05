import { Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'

function Info() {

    const  {id} = useParams();

  return (
    <Text>Mais informações sobre o produto: {id}</Text>
  )
}

export default Info
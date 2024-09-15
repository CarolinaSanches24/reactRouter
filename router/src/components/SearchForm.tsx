import { Button, HStack, Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        navigate("/search?q=" + query);
    }

  return (
    <form onSubmit={handleSubmit}>
        <HStack marginTop="15vh">
            <Input onChange={(e)=>setQuery(e.target.value)} 
            type="text" placeholder="Pesquisar por ..."></Input>
            <Button type="submit">Buscar</Button>
         </HStack>
    </form>
  )
}

export default SearchForm
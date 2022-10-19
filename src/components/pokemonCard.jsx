import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./starbutton";
import { useDispatch } from "react-redux";
import  './pokemonList.css';
import { setFavorite } from "../slices/dataSlice";



const PokemonCard = ({ name,  image, types, id }) => {
    const dispacth = useDispatch();
    const typeString = types.map(elemt => elemt.type.name).join(', ');

const handleOnfavorite = () => {
    dispacth(setFavorite({ pokemonId:  id }));
}

    return <Card
        title= { name }
        cover={<img src={image} alt={name} />}
        extra={<StarButton isFavorite onClick={handleOnfavorite}/>}
    >
        <Meta description= {typeString}/>
    </Card>
}

export default PokemonCard;

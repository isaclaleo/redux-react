import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import  './pokemonList.css';

const PokemonCard = ({ name,  image }) => {
    return <Card
        title= { name }
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined />}
    >
        <Meta description= 'Camufalje, form'/>
    </Card>
}

export default PokemonCard;

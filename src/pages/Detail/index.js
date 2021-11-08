import React from "react";
import Gif from "../../components/Gif/Gif";
import { useGifs } from "../../hooks/useGifs";

export default function Detail({ params }) {
	const { gifs } = useGifs();
	const gif = gifs.find((gif) => gif.id === params.id);
	return <Gif {...gif} />;
}

//recibo la lista de gifs ustilizando el hook creado
//uso el método find comparando la id de la url con las del array gifs
//retorno el componente Gif con los atributos {title,id,url} de la busqueda

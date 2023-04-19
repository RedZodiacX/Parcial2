import {GetImages} from "../GetImages";
import { Datos } from "./Datos";

export const DatosList = ({ datoslist = [] }) => {
    const {Data=[]} = GetImages();
    return (
        <>
            <div className="list-group">
            {
                Data.map( (image, key) => {
                    return <Datos key={key} {...image}></Datos>
                })
            }

            </div>
        </>
    )
}
import Link from "next/link";
import Image from "next/image";
import {PhotoProps} from "./types";
/**
 * Photo compnent that render the photos in public/data file
 * @param   {id}  string    id of the Photo
 * @param   {src}  string   the image resource
 * @param   {placeholder}  string   the image placeholder
 * @param   {width}  number  the image width
 * @param   {height}  number  the image height
 * @returns {*}   A React Component that act as redirect button
 */
function Photo  ({id , src , title, placeholder , width, height}: PhotoProps)  {
    return (
        <Link href={`/photo/${id}`} scroll={false} key={id}>
                <Image
                    src={src}
                    alt={title}
                    placeholder="blur"
                    blurDataURL={placeholder}
                    width={width}
                    height={height}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                />
        </Link>
    )
}

export default Photo;

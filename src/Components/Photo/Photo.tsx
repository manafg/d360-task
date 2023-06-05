import Link from "next/link";
import Image from "next/image";
import {PhotoProps} from "./types";

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

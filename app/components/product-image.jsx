
export default function ProductImage({ LightImageSrc, DarkImageSrc, ImageAlt }) {
    return (
        <div className="grid justify-center mt-12 xl:my-12 xl:px-36">
            <img
                className="block dark:hidden rounded-2xl border-2 border-400"
                src={LightImageSrc}
                alt={ImageAlt}
            />
            <img
                className="hidden dark:block rounded-2xl border-2 dark:border-400"
                src={DarkImageSrc}
                alt={ImageAlt}
            />
        </div>
    );
}

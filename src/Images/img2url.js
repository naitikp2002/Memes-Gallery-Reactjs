export default function img2url(image) {
    const url = "https://api.imgbb.com/1/upload?expiration=600&key=560ee889afebce5ed612e7bd205484c3" ;
    fetch(url, {
        method: 'POST',
        body: {
            image: image
        }
    }
)
}
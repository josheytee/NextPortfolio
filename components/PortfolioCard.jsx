import { useEffect } from "react";
import Link from 'next/link';
import slugify from '../library/utils'

export default function PortfolioCard({ data, category, project }) {
    let id = slugify(data.name);
    let modal_id = id + "-modal";
    let modal_image = id + "-mimage";
    let modal_caption = id + "-mcaption";
    let modal_close = id + "-close";

    useEffect(() => {
        // Get the modal
        let modal = document.getElementById(modal_id);

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        let img = document.getElementById(id);
        let modalImg = document.getElementById(modal_image);
        let captionText = document.getElementById(modal_caption);
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        let span = document.getElementById(modal_close);

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    }, []);
    return (
        <section className="portfolio-card">
            <img src={data.img} id={id} alt={data.name} />
            <h3><Link href={'/portfolio/' + category + '/' + project}><a>{data.name}</a></Link></h3>
            <p>{data.description}</p>
            {data.url ? <a href={data.url}> View Project </a> : <a href={data.repo}> View on Github </a>}

            {/* <!-- The Modal --> */}
            <div id={modal_id} className="modal">

                <span className="close" id={modal_close}>&times;</span>

                <img className="modal-content" id={modal_image} />

                <div id={modal_caption}></div>
            </div>
        </section >
    )
}
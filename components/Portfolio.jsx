import Link from 'next/link';
import data from '../data';
import PortfolioCard from './PortfolioCard';
class Portfolio extends React.Component {

    modal() {
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    render() {
        let { type } = this.props;
        let count = 0;
        return (
            <section className="portfolio">
                <div className="container">
                    <div className="portfolio-title">
                        <h2>{type}</h2>
                        <Link href="/portfolio"><a >See All</a></Link>
                    </div>
                    <section className="portfolio-cards">
                        {
                            // Object.entries(data).map(([key, value]) => (
                            Object.entries(data[type]).map(([project, data]) => {
                                count++
                                return (
                                    (count <= 4) ?
                                        <PortfolioCard data={data} category={type} project={project} key={project} /> : ""
                                )

                            })
                            // ))
                        }
                    </section>
                </div>
            </section>
        );
    }
}

export default Portfolio;
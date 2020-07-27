import Head from 'next/head';
import data from '../../../data';
import Layout from '../../../layout'

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {}
        };
    }
    componentDidMount() {
        let { category ,name} = this.props.router.query;
        // const router = useRouter();
        console.log(category,name);
        
        let project = data[category][name];
        if(project){

            this.setState({
                project   
            });
        }else{
            document.location = '/';
        }

        // console.log(match, data, data[match.params.category][match.params.name]);
    }
    
    render() {
        let { project } = this.state;

        return (
           <Layout>
               <Head>
                   <title>@josheytee | {project.name}</title>
               </Head>
            <section className="container project">
                <h1>{project.name}</h1>
                <div className="image-wrapper">
                    <img src={project.img} alt={project.name} srcset="" />
                </div>
                <h2>PROJECT SUMMARY</h2>
                <p>
                    <b>Client: </b>
                    <span className="primary-color"> {project.client ? project.client.name : null} </span>
                </p>
                <p>
                    <b>Technology Used: </b>
                    <span className="primary-color">
                        {project.technology}
                    </span>
                </p>
                {
                    project.url ? <p><b>Site Url:</b>  <a href={project.url} className="primary-color"> {project.url} </a></p> : ''
                }
                {
                    project.repo ? <p><b>Github Repo Url:</b>  <a href={project.repo} className="primary-color"> {project.repo} </a> </p> : ''
                }
                <p dangerouslySetInnerHTML={{__html: project.problem}} />
                <div className="info">
                    <h3>I helped with</h3>
                    <ul>
                        
                        {project.helped ? project['helped'].map((key,value) => (
                            <li>
                                {key}
                            </li>
                        )):null}
                    </ul>

                </div>
                {/* <div className="image-wrapper">
                    <img src={project.img} />
                </div>
                <div className="testimony">
                    <blockquote>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aliquam provident inventore natus maxime officia quod harum cupiditate magni impedit quo obcaecati perspiciatis dolores facere, molestiae suscipit ad, a voluptas.
                </blockquote>
                    <div>
                        <img src="" alt="" />
                        <div>
                            name
                            title
                    </div>
                    </div>
                </div> */}
            </section>
            </Layout>
        );
    }
}

Project.getInitialProps =  async () => {
    return {}
}

export default Project;

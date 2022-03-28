import Layout from "../layouts/Layout";
import {projects} from "../data/index.json";

const Portoflio = () => {
    return (
        <Layout>
            <h1>Portfolio Page</h1>
            {
                projects.map((p) => {
                    return <h1>{p.name}</h1>
                })
            }
        </Layout>
    )
}

export default Portoflio;

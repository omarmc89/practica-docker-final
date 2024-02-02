
import docker from '../assets/docker.svg'
import mongo from '../assets/mongo.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'

export default function Header () {
    return (
        <header>
            <div className="title-container">
            <h1 className="title">Art Gallery</h1>

            </div>
            <div className="secondLine">
                <p>App for DAW practice using</p>
                <img src={docker} alt="docker icon" width={45} height={45}/>
                <img src={mongo} alt="mongo icon" width={45} height={45}/>
                <img src={node} alt="node icon" width={45} height={45}/>
                <img src={react} alt="react icon" width={45} height={45}/>
            </div>
            <footer>
        </footer>
        </header>
    )
}
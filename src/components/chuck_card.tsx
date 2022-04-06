import ChuckImage from '../assets/chuck_norris.jpg';

const ChuckCard: React.FC<{chuckGreeting : string}> = ({chuckGreeting}) => 
<div>
    <h2>{chuckGreeting}</h2>

    <img src='{ChuckImage}' alt='A handsome man' />
</div>

export default ChuckCard;

const ChuckInfo : React.FC<{whalesSaved : number, roundHouseKicks : number}> = ({whalesSaved, roundHouseKicks}) => 
    <div>
        <p>Number of Whales Saved: {whalesSaved}</p>

        <p>Number of Round House Kicks (in the last day): {roundHouseKicks}</p>
    </div>

export default ChuckInfo;
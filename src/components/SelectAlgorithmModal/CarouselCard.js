import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CarouselCard = () => (
//   <Card>
//     <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Matthew</Card.Header>
//       <Card.Meta>
//         <span className='date'>Joined in 2015</span>
//       </Card.Meta>
//       <Card.Description>
//         Matthew is a musician living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         22 Friends
//       </a>
//     </Card.Content>
//   </Card>
    <div>
        <h1 className="ui header">Breath First Search (BFS)</h1>
        <Image src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
        <div>Breath First Search gurantees the shortest path distance</div>
    </div>
)

export default CarouselCard;
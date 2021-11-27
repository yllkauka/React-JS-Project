import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import {format} from 'date-fns';
import axios from 'axios';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {
    const [a, seta] =  useState(false);
    return (
        <Segment.Group style={{
            display: a ? "none" : "auto"
        }}>
      
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png'/>
                     <Item.Content>
                         <Item.Header as={Link} to={`/activities/${activity.id}`}>
                             {activity.title}
                         </Item.Header>
                         <Item.Description>Hosted by Bob</Item.Description>
                     </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {format(activity.date!,  'dd MMM yyyy h:mm aa')}
                    <Icon name='marker'/> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here 
            </Segment>
            <Segment clearing>
                 <span> {activity.description} </span>
                <Button
                as={Link}
                to={`/activities/${activity.id}`}
                color='green'
                floated='right'
                content='View'
                />
                 <Button
                onClick={(e)=>{
                    e.preventDefault();
                    axios.delete('http://localhost:5000/api/activity'+activity.id).then(()=>{
                        seta(true);
                    })
                }}
                color='black'
                floated='right'
                content='Delete'
                />
            </Segment>
      </Segment.Group>
        
    )
}
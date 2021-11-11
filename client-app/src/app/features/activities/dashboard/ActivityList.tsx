import  React from 'react';
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props {
    activities: Activity[]; 
}

export default function ActivityList({activities}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as='a'>{activity.title}</ItemHeader>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city},{activity.venue}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button floatet='right' content='View' color='blue'/>
                                <Label basic content={activity.category}/>
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
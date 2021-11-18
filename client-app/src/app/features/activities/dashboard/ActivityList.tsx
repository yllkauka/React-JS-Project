import { observer } from 'mobx-react-lite';
import  React, { SyntheticEvent, useState } from 'react';
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';

export default observer(function ActivityList () {

    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }
    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                <Item key={activity.id}>
                    <ItemContent>
                        <ItemHeader as='a'>{activity.title}</ItemHeader>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <ItemDescription>
                            <div>{activity.description}</div>
                            <div>{activity.city},{activity.venue}</div>
                        </ItemDescription>                            <ItemExtra>
                        <Button onClick={() => activityStore.selectActivity(activity.id)} floatet ='right' content='View' color='blue'/>
                         <Button 
                        loading={loading && target === activity.id}
                        onClick={(e) => handleActivityDelete (e, activity.id)} 
                        floatet ='right' 
                        content='Delete' 
                        color='red'/> 
                        <Label basic content={activity.category}/>
                        </ItemExtra>
                    </ItemContent>
                </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})




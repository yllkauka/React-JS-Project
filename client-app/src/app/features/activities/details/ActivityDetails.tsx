import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react'
import LoadingComponent from '../../../layout/LoadingComponent';
import { useStore } from '../../../stores/store';


export default function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore; 
    const {id} = useParams<{id: string}>(); 

    useEffect(() =>{
      if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent/>;

    return (
    <Card>
    <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
    <Card.Content>
      <Card.Header>{activity.title}</Card.Header>
      <Card.Meta>
        <span> {activity.date}</span>
      </Card.Meta>
      <Card.Description>
        {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Button.Group widths='2'>
            <Button as={Link} to={`/manage/${activity.id}`} basic color='blue'content='Edit'/>
            <Button as={Link} to='/activities' basic color='grey'content='Cancel'/>
        </Button.Group>
    </Card.Content>
  </Card>
    )
}



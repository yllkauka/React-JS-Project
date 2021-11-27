import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return(
        <Segment placeholder>
            <Header icon>
                <Icon name='search'/>
                Oops - Kemi kerkuar ne cdo vend, por nuk gjetem asgje!
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>
                    Kthehuni tek faqja e Air Kosova
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
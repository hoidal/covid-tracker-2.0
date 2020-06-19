import React from 'react';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function NewsContainer({ data }) {
    
    const stateName = data.location ? data.location.provinceOrState : null;
    const recentNews = data.news ? data.news : null;
    
    const newsHeader = stateName ? <h3>{`Recent ${stateName} COVID-19 News`}</h3> : null;

    const createNewsCards = recentNews => {
        if(!recentNews || recentNews.length === 0) return null;
        return recentNews.sort((a, b) => a.heat - b.heat).map((article, i) => {
            return (
                <Card key={i}>
                    <Card.Img variant="top" src={article.images[0].url}/>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.excerpt}</Card.Text>
                        <a href={article.webUrl}>Read More...</a>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{article.provider.name}</small>
                    </Card.Footer>
                </Card>
            );
        })
    }

    const newsCards = createNewsCards(recentNews);
    console.log(recentNews)
    return (
        <Card style={{padding: '2rem'}}>
            {newsHeader}
            <CardColumns>
                {newsCards}
            </CardColumns>
        </Card>
    )
}

export default NewsContainer;

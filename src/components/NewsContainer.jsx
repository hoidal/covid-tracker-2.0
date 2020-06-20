import React from 'react';
import { newsDateFormatter } from '../helper-functions/formatters';

import Card from 'react-bootstrap/Card';
import Masonry from 'react-masonry-component';

function NewsContainer({ data }) {
    
    const locale = (
        data.location 
        ? data.location.provinceOrState 
            ? data.location.provinceOrState
            : 'U.S.'
        : null
    );

    const newsHeader = locale ? <h3>{`Recent ${locale} COVID-19 News`}</h3> : null;

    const recentNews = data.news ? data.news : null;

    const createNewsCards = recentNews => {
        if(!recentNews || recentNews.length === 0) return null;
        return recentNews.sort((a, b) => a.heat - b.heat).map((article, i) => {
            return (
                <Card key={i} style={{width: '20rem', margin: '0.5rem'}}>
                    <Card.Img variant="top" src={article.images ? article.images[0].url : null}/>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.excerpt}</Card.Text>
                        <a href={article.webUrl}>Read More...</a>
                    </Card.Body>
                    <Card.Footer>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <small className="text-muted">{article.provider.name}</small>
                            <small className="text-muted">{newsDateFormatter(article.publishedDateTime)}</small>
                        </div>
                    </Card.Footer>
                </Card>
            );
        })
    }

    const newsCards = createNewsCards(recentNews);

    return (
        <Card style={{padding: '2rem', alignContent: 'center'}}>
            {newsHeader}
            <Masonry>
                {newsCards}
            </Masonry>
        </Card>
    )
}

export default NewsContainer;

interface SlideShowCard{
    imageUrl: string,
    title: string,
    description: string
}

function SlideShowCard({cardInfo} : {cardInfo: SlideShowCard}) {
    return (
        <div style={{height: '100vh'}}>
            <div style={{
                width: '100%', 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <img 
                    src={cardInfo.imageUrl} 
                    alt="Card Image" 
                    style={{ 
                        maxHeight: '70%', 
                        width: '70%',
                        alignSelf: 'center'}}
                    />
                <header aria-live="assertive" style={{marginTop: '1em', fontWeight: '700', fontSize: '2rem'}}>{cardInfo.title}</header>
                <span aria-live="polite" style={{margin: '1em', fontStyle: 'italic'}}>{cardInfo.description}</span>
            </div>
        </div>
    )
}

export default SlideShowCard
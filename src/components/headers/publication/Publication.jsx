import './Publication.css'

export default function Publication(props) {

    const { userInfo, userPhotos, userPosts } = props

    const randomPost = userPosts[Math.floor(Math.random() * userPosts.length)]

    return (
        <article className='pub'>
            <div className='pub__person'>
                <div className='person__img'>
                    <img src={userPhotos[Math.floor(Math.random() * userPhotos.length)].thumbnailUrl} />
                </div>
                <div className='person__data'>
                    <p className='person__name'>
                        Author: {userInfo.name}
                    </p>
                    <p className='person__company'>
                        Company: {userInfo.company.name}
                    </p>
                </div>
            </div>
            <div className='pub__title'>
                Title: {randomPost.title}
            </div>
            <div className='pub__body'>
                {randomPost.body}
            </div>
        </article>
    )
}
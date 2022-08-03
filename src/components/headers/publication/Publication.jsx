import './Publication.css'

export default function Publication(props) {

    const { userInfo, userPhotos, userPosts } = props

    const randomPost = userPosts[Math.floor(Math.random() * userPosts.length)]

console.log(userPhotos)
    return (
        <article>
            <div>
                <div>
                    {/* <img src={userPhotos[Math.floor(Math.random() * userPhotos.length)].thumbnailUrl} /> */}
                </div>
                <div>
                    <p>
                        Author: {userInfo.name}
                    </p>
                    <p>
                        Company: {userInfo.company.name}
                    </p>
                </div>
            </div>
            <div>
                <p>
                    Title: {randomPost.title}
                </p>
            </div>
            <div>
                {randomPost.body}
            </div>
        </article>
    )
}
import MainHeader from '../../components/headers/MainHeader/MainHeader'
import Publication from '../../components/headers/publication/Publication'
import './MainPage.css'

export default function MainPage(props) {

    const {photos, users, posts} = props

    return (
        <>
        <MainHeader />
        <main className='content'>
            {users.map(user => (
                <Publication 
                userInfo={user} 
                userPhotos={photos.filter(item => item.albumId === user.id)}
                userPosts={posts.filter(post => post.userId === user.id)}
                key={user.id}
                />
            ))}
        </main>
        </>
    )
}
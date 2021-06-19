import styles from './BlogCard.module.css'

function BlogCard(props) {
    return (
        <div className={styles.blogCard}>
            <img className={styles.blogImg} src={props.imgurl}
                alt="blog_img" />
            <div className={styles.bottomSection}>
                <h2 className={styles.heading1}>{ props.title}</h2>
            <p className={styles.content}>{props.desc}</p>
            <a href="https://jssconnect.herokuapp.com/blogs"
                className={styles.btn}>Read More</a>
            </div>
        </div>
    )
}

export default BlogCard


const Blog = ({blog}) => {
    console.log(blog);
    const {title, cover} = blog;
    return (
        <div className="py-4">
            <img src= {cover} alt="" />
            <h2>Name: {title} </h2>
        </div>
    );
};

export default Blog;

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

export default Bookmark;
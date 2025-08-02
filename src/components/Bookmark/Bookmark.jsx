
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white mb-4 rounded-lg">
            <h3 className="text-xl p-4 font-semibold">{title}</h3>
        </div>
    );
};

export default Bookmark;
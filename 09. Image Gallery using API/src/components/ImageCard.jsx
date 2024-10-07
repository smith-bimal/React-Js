/* eslint-disable react/prop-types */
const ImageCard = ({ image }) => {
    return (
        <div className='w-80 h-[37rem] border rounded-xl overflow-hidden shadow-md'>
            <img src={image.largeImageURL} alt="" className="w-full h-80 object-cover" />

            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="text-purple-500 text-xl mb-2">
                    Photo By <span className="font-bold">@{image.user}</span>
                </div>
                <ul>
                    <li>
                        Views: <strong>{image.views.toLocaleString()}</strong>
                    </li>
                    <li>
                        Downloads: <strong>{image.downloads.toLocaleString()}</strong>
                    </li>
                    <li>
                        Likes: <strong>{image.likes.toLocaleString()}</strong>
                    </li>
                </ul>
                <div className="flex flex-wrap mt-4 gap-2">{image.tags.split(",").map((tag, idx) => (
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700' key={idx}>
                        # {tag}
                    </span>))}</div>
            </div>
        </div>
    )
}

export default ImageCard
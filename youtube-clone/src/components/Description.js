const Description = ({ views = 5, time = "2 days", description = "WANT to create a business selling courses and content" }) => {
    return (
        <div className="bg-gray-200 p-3 rounded-xl">
            <p className="font-semibold" s> {views}K views</p>
            <p className="font-semibold"> {time} ago </p>
            <p className="mt-8">{description}</p>

        </div>
    )
}

export default Description
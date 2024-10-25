


const Blog = ({ blog }) => {
    const {image, name, country, role, battingType, biddingPrice, bowlingType} = blog;

    return (
        <div>
            <div className="border rounded-xl p-4">
            <div className="rounded-xl">
                <img className="rounded-xl mb-5" src={image} alt="" />
                {/* Name start */}
                <div className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
                    </svg>
                    <h2 className="font-bold">{name}</h2>
                </div>
                {/* Name end*/}

                {/* country start*/}
                <div className="flex justify-between mb-5">
                    <div className="flex items-center gap-3 text-[#8a8585]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0v-4.392l1.657-.348a6.449 6.449 0 0 1 4.271.572 7.948 7.948 0 0 0 5.965.524l2.078-.64A.75.75 0 0 0 18 12.25v-8.5a.75.75 0 0 0-.904-.734l-2.38.501a7.25 7.25 0 0 1-4.186-.363l-.502-.2a8.75 8.75 0 0 0-5.053-.439l-1.475.31V2.75Z" />
                        </svg>
                        <h2 className="text-[#8a8585]">{country}</h2>
                    </div>
                    <div>
                        <button className="btn ">{role}</button>
                    </div>
                </div>
                {/* country end */}
            </div>
            <h3 className="border-b mb-3"></h3>
            <h2 className="font-bold mb-3">Rating</h2>
          {/* battingType start */}
          <div className="flex justify-between">
            <h4 className="font-bold">{battingType}</h4>
            <div>
                <button className="text-[#8a8585] mb-5">{battingType}</button>
            </div>
          </div>
          {/* battingType start */}

          {/* biddingPrice start */}
          <div className="flex justify-between">
                <h3 className="font-bold">{biddingPrice}</h3>
            <div>
                <button className="border p-1">{bowlingType}</button>
            </div>
          </div>
          {/* biddingPrice start */}
          </div>
          
        </div>
    );
};

export default Blog;
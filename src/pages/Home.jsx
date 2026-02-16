import React, { useState } from 'react'

const Home = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div>
            <section className="relative w-screen h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/Home.jpg)'}}>
                {/* Top 4 small glassmorphism boxes */}
                <div className="absolute left-0 right-0 px-8">
                    <div className="absolute top-[350px] left-0 right-0 flex justify-center gap-[48rem]">
                        {/* Box 1 */}
                        <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white text-center w-64 mr-48">
                            <p className="text-4xl font-bold" style={{fontFamily: "'Abhaya Libre', serif", fontWeight: 800}}>10,000+</p>
                            <p className="text-base" style={{fontFamily: "'Abhaya Libre', serif", }}>Happy Travelers Served</p>
                        </div>
                        {/* Box 2 */}
                        <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white text-center w-64">
                            <p className="text-4xl font-bold" style={{fontFamily: "'Abhaya Libre', serif", fontWeight: 800}}>15+</p>
                            <p className="text-base" style={{fontFamily: "'Abhaya Libre', serif", }}>Global Destinations Covered</p>
                        </div>
                    </div>
                    <div className="absolute top-[200px] left-0 right-0 flex justify-center gap-48">
                        {/* Box 3 */}
                        <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white text-center w-64">
                            <p className="text-4xl font-bold" style={{fontFamily: "'Abhaya Libre', serif", fontWeight: 800}}>500+</p>
                            <p className="text-base" style={{fontFamily: "'Abhaya Libre', serif", }}>Holiday Packages Delivered</p>
                        </div>
                        {/* Box 4 */}
                        <div className="bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white text-center w-64">
                            <p className="text-4xl font-bold" style={{fontFamily: "'Abhaya Libre', serif", fontWeight: 800}}>19+</p>
                            <p className="text-base" style={{fontFamily: "'Abhaya Libre', serif", }}> Years of Travel Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Bottom left glassmorphism box */}
                <div className="absolute bottom-8 left-44 bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-white max-w-lg">
                    <p className="font-bold font-pethra" style={{fontSize: '72px'}}>Your Perfect Journey Starts Here</p>
                </div>

                {/* Bottom right glassmorphism box */}
                <div className="absolute bottom-8 right-36 bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-8 text-white max-w-lg">
                    <p className="mb-6 text-lg" style={{fontFamily: "'Afacad', sans-serif"}}>Discover hassle-free travel with expert planning, exclusive packages, and unforgettable destinations.</p>
                    <div className="flex gap-4">
                        <button className="bg-white bg-opacity-30 hover:bg-opacity-40 px-6 py-3 rounded-md transition-all text-lg" style={{fontFamily: "'Afacad', sans-serif"}}>Explore Packages</button>
                        <button className="bg-white bg-opacity-30 hover:bg-opacity-40 px-6 py-3 rounded-md transition-all text-lg" style={{fontFamily: "'Afacad', sans-serif"}}>Plan Your Trip</button>
                    </div>
                </div>
            </section>

            {/* Tour Packages Section */}
            <section className="w-full px-36 min-h-screen bg-white py-16">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <p className="text-base text-gray-500 mb-10" style={{fontFamily: "'Afacad', sans-serif"}}>Tour Packages</p>
                        <h2 className="text-5xl font-bold text-gray-900 font-pethra" style={{fontWeight: 100}}>Explore Our Best<br/>Travel Packages</h2>
                        <div className="w-24 h-1 bg-blue-600 mt-2 mx-auto"></div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-xs text-right" style={{fontFamily: "'Afacad', sans-serif"}}>Handpicked holiday experiences<br/>designed for comfort, adventure,<br/>and unforgettable memories.</p>
                </div>

                {/* Cards Container */}
                <div className="flex justify-center items-center gap-8">
                    <div className="flex gap-8">
                        {/* Kerala Card */}
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 0 || hoveredCard === null ? 'w-[32rem]' : 'w-72'}`} onMouseEnter={() => setHoveredCard(0)}>
                            <div className="relative">
                                <img src="/kerala.jpg" alt="Kerala" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 0 || hoveredCard === null ? 'h-96' : 'h-[32rem]'}`}/>
                                <div className="absolute top-8 left-8 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                    South Asia
                                </div>
                            </div>
                            <div className="p-8 pt-2">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-2xl font-semibold text-gray-900" style={{fontFamily: "'Abhaya Libre', serif"}}>Kerala</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        <span className="text-gray-900 font-semibold text-lg">4.5</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Abhaya Libre', serif"}}>₹24,999</p>
                                <ul className={`space-y-2 text-base text-gray-600 mb-6 ${hoveredCard === 0 || hoveredCard === null ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Backwater cruises</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Ayurvedic treatments</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Spice plantation visits</li>
                                </ul>
                                <button className={`bg-blue-600 text-white px-8 py-3 rounded-full text-base hover:bg-blue-700 transition-all ${hoveredCard === 0 || hoveredCard === null ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>Booking</button>
                            </div>
                        </div>

                        {/* Maldives Card */}
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 1 ? 'w-[32rem]' : 'w-72'}`} onMouseEnter={() => setHoveredCard(1)}>
                            <div className="relative">
                                <img src="/maldives.jpg" alt="Maldives" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 1 ? 'h-96' : 'h-[32rem]'}`}/>
                                <div className="absolute top-8 left-8 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                    Indian Ocean
                                </div>
                            </div>
                            <div className="p-8 pt-2">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-2xl font-semibold text-gray-900" style={{fontFamily: "'Abhaya Libre', serif"}}>Maldives</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        <span className="text-gray-900 font-semibold text-lg">4.5</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Abhaya Libre', serif"}}>₹18,999</p>
                                <ul className={`space-y-2 text-base text-gray-600 mb-6 ${hoveredCard === 1 ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Overwater villas</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Water sports</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Private beaches</li>
                                </ul>
                                <button className={`bg-blue-600 text-white px-8 py-3 rounded-full text-base hover:bg-blue-700 transition-all ${hoveredCard === 1 ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>Booking</button>
                            </div>
                        </div>

                        {/* Europe Card */}
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 2 ? 'w-[32rem]' : 'w-72'}`} onMouseEnter={() => setHoveredCard(2)}>
                            <div className="relative">
                                <img src="/europe.jpg" alt="Europe" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 2 ? 'h-96' : 'h-[32rem]'}`}/>
                                <div className="absolute top-8 left-8 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                    Europe
                                </div>
                            </div>
                            <div className="p-8 pt-2">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-2xl font-semibold text-gray-900" style={{fontFamily: "'Abhaya Libre', serif"}}>Europe</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        <span className="text-gray-900 font-semibold text-lg">4.5</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Abhaya Libre', serif"}}>₹47,999</p>
                                <ul className={`space-y-2 text-base text-gray-600 mb-6 ${hoveredCard === 2 ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Historical monuments</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Wine tasting tours</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Scenic train rides</li>
                                </ul>
                                <button className={`bg-blue-600 text-white px-8 py-3 rounded-full text-base hover:bg-blue-700 transition-all ${hoveredCard === 2 ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>Booking</button>
                            </div>
                        </div>

                        {/* Thailand Card */}
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 3 ? 'w-[32rem]' : 'w-72'}`} onMouseEnter={() => setHoveredCard(3)}>
                            <div className="relative">
                                <img src="/thailand.jpg" alt="Thailand" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 3 ? 'h-96' : 'h-[32rem]'}`}/>
                                <div className="absolute top-8 left-8 bg-gray-800 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                                    Southeast Asia
                                </div>
                            </div>
                            <div className="p-8 pt-2">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-2xl font-semibold text-gray-900" style={{fontFamily: "'Abhaya Libre', serif"}}>Thailand</h3>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        <span className="text-gray-600 font-semibold text-lg">4.5</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Abhaya Libre', serif"}}>₹35,999</p>
                                <ul className={`space-y-2 text-base text-gray-600 mb-6 ${hoveredCard === 3 ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Island hopping</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Temple visits</li>
                                    <li className="flex items-center gap-2"><span className="text-green-600">✓</span> Street food experiences</li>
                                </ul>
                                <button className={`bg-blue-600 text-white px-8 py-3 rounded-full text-base hover:bg-blue-700 transition-all ${hoveredCard === 3 ? '' : 'hidden'}`} style={{fontFamily: "'Afacad', sans-serif"}}>Booking</button>
                            </div>
                        </div>
                    </div>

                    {/* Next Navigation Box */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-32 h-96 flex items-center justify-center">
                        <button className="text-gray-600 hover:text-blue-600 text-4xl transition-all">&gt;</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home

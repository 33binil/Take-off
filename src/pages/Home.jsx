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
            <section className="w-full lg:px-24 xl:px-36 2xl:px-48 min-h-screen bg-white py-16">
                {/* Header */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <p className="text-base text-gray-500 mb-10" style={{fontFamily: "'Afacad', sans-serif"}}>Tour Packages</p>
                        <h2 className="lg:text-5xl xl:text-6xl font-bold text-gray-900 font-pethra" style={{fontWeight: 100}}>Explore Our Best<br/>Travel Packages</h2>
                        <div className="w-24 h-1 bg-blue-600 mt-2 mx-auto"></div>
                    </div>
                    <p className="text-gray-600 text-lg max-w-xs text-right" style={{fontFamily: "'Afacad', sans-serif"}}>Handpicked holiday experiences<br/>designed for comfort, adventure,<br/>and unforgettable memories.</p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-4 lg:gap-6 xl:gap-8">
                    <div className="flex gap-4 lg:gap-6 xl:gap-8">
                        {/* Kerala Card */}
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 0 || hoveredCard === null ? 'md:w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem]' : 'w-48 md:w-56 lg:w-64 xl:w-72'}`} onMouseEnter={() => setHoveredCard(0)}>
                            <div className="relative">
                                <img src="/kerala.jpg" alt="Kerala" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 0 || hoveredCard === null ? 'h-72 md:h-80 lg:h-96' : 'h-[24rem] md:h-[28rem] lg:h-[32rem]'}`}/>
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
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 1 ? 'md:w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem]' : 'w-48 md:w-56 lg:w-64 xl:w-72'}`} onMouseEnter={() => setHoveredCard(1)}>
                            <div className="relative">
                                <img src="/maldives.jpg" alt="Maldives" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 1 ? 'h-72 md:h-80 lg:h-96' : 'h-[24rem] md:h-[28rem] lg:h-[32rem]'}`}/>
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
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 2 ? 'md:w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem]' : 'w-48 md:w-56 lg:w-64 xl:w-72'}`} onMouseEnter={() => setHoveredCard(2)}>
                            <div className="relative">
                                <img src="/europe.jpg" alt="Europe" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 2 ? 'h-72 md:h-80 lg:h-96' : 'h-[24rem] md:h-[28rem] lg:h-[32rem]'}`}/>
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
                        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${hoveredCard === 3 ? 'md:w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem]' : 'w-48 md:w-56 lg:w-64 xl:w-72'}`} onMouseEnter={() => setHoveredCard(3)}>
                            <div className="relative">
                                <img src="/thailand.jpg" alt="Thailand" className={`object-cover rounded-2xl m-4 w-[calc(100%-2rem)] ${hoveredCard === 3 ? 'h-72 md:h-80 lg:h-96' : 'h-[24rem] md:h-[28rem] lg:h-[32rem]'}`}/>
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
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-24 md:w-32 lg:w-36 h-72 md:h-80 lg:h-96 flex items-center justify-center">
                        <button className="text-gray-600 hover:text-blue-600 text-2xl md:text-3xl lg:text-4xl transition-all">&gt;</button>
                    </div>
                </div>
            </section>

            {/* Service Cards Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                        {/* Left Section - Travel Made Effortless Box */}
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-3xl shadow-xl p-12 mb-8 lg:mb-8">
                                <h2 className="text-4xl font-bold text-gray-800 font-pethra text-center lg:text-left mb-6">Travel Made Effortless</h2>
                                <p className="text-lg text-gray-600 text-center lg:text-left" style={{fontFamily: "'Afacad', sans-serif"}}>
                                    From ticket bookings to luxury transfers, we handle every detail so you can focus on enjoying your journey.
                                </p>
                            </div>
                            
                            {/* Images and All Services Button */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                                    <img src="/service1.jpg" alt="Scenic Road" className="w-full h-94 object-cover" />
                                </div>
                                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                                    <img src="/service2.jpg" alt="Airplane Wing" className="w-full h-94 object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Service Cards */}
                        <div className="lg:w-1/2">
                            <h3 className="text-6xl font-bold text-gray-800 mb-8 font-pethra">Service Cards</h3>
                            <div className="w-24 h-1 bg-blue-600 mt-2 left-1/4 relative "></div>
                            
                            <div className="space-y-6 mt-16">
                                {/* Service Card 1 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
                                    <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Flight Booking</h4>
                                        <p className="text-gray-600">Affordable flights with flexible options.</p>
                                    </div>
                                </div>

                                {/* Service Card 2 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
                                    <div className="bg-green-100 text-green-600 rounded-full p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Rail & Bus Tickets</h4>
                                        <p className="text-gray-600">Smooth domestic travel arrangements.</p>
                                    </div>
                                </div>

                                {/* Service Card 3 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
                                    <div className="bg-purple-100 text-purple-600 rounded-full p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m0 0v8m0-8l-8 8m8-8l8 8"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Premium Transfers</h4>
                                        <p className="text-gray-600">Comfortable taxi and private transport.</p>
                                    </div>
                                </div>

                                {/* Service Card 4 */}
                                <div className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4">
                                    <div className="bg-orange-100 text-orange-600 rounded-full p-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Hotel Reservations</h4>
                                        <p className="text-gray-600">Trusted stays at top destinations.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 w-full lg:w-auto mt-12" style={{fontFamily: "'Afacad', sans-serif"}}>
                            All Services....
                        </button>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home

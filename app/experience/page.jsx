

const Experiences = () => {
    return (
      <section id="experience" className="mt-20">
          <div className="text-center">
              <h1 className="text-[23px] gardient-text capitalize">experiences</h1> 
              <h1 className="text-gray-300 text-[26px] font-semibold capitalize">Where I’ve been employed</h1>  
          </div>
  
          <div className='mt-20'>
            <ul className="timeline relative w-full">
  
              <li className="wrapper relative z-[3] w-[85%] md:w-[47%] py-5 md:py-2 my-9">
                <div className="text-box relative z-[3] rounded-md bg-gray-300 py-3 ps-6 lg:ps-8 pe-3">
                  <span className="circle">
                    <img 
                      src='/images/mather.jpg'
                      alt="The Mather" 
                      className="absolute top-0 rounded-full flex items-center justify-center"
                    />
                  </span>
                  <span className="arrow"></span>
                  <h2 className="text-base sm:text-[17px] font-semibold pb-2 leading-5"> Front-end Developer / <span className="inline-block leading-5 text-emerald-800"> The Mather </span> </h2>
                  <small className="locate-time"> May 2021 - December 2023 / Lat Phrao, BKK </small>
                  <div className="desc">
                    <ul className="list-disc text-gray-700 text-[15px] sm:text-base">
                      <li>Develop front-end web-based applications using HTML, CSS, Bootstrap5, Tailwind CSS, JavaScript, React.js, Next.js,  CodeIgniter.</li>
                      <li>Build a website or application based on designs from a UX/UI Designer.</li>
                      <li>UX/UI designed using Figma.</li>
                      <li>Collaborate with back-end developers, designers, and product managers to implement new features and improve existing ones.</li>
                      <li>Create a user manual for a mobile application.</li>
                      <li>Debug in the existing code and improve it as assigned.</li>
                      <li>As an admin, managed Content Management Systems (CMS), including adding, deleting, and editing content to display according to Entrepreneur requirements.</li>
                      <li>As a developer, directly managed modules, including adding, deleting, modifying, and customizing Content Management Systems (CMS).</li>
                      <li>Responsible for any special assignment assigned.</li>
                    </ul>
                  </div>
                </div>
              </li>
  
              <li className="wrapper relative z-[3] w-[85%] md:w-[47%] py-5 md:py-2 my-9">
                <div className="text-box relative z-[3] rounded-md bg-gray-300 py-3 ps-6 lg:ps-8  pe-3">
                  <span className="circle">
                    <img 
                      src='/images/kk.jpg'
                      alt="The Mather" 
                      className="absolute top-0 rounded-full flex items-center justify-center"
                    />
                  </span>
                  <span className="arrow"></span>
                  <h2 className="text-base sm:text-[17px] font-semibold pb-2 leading-5"> Programmer Staff / <span className="inline-block text-emerald-800 leading-5 "> Kangzen Kenko International Co., Ltd. </span> </h2>
                  <small className="locate-time"> September 2020- February 2021 / Bangkapi, BKK </small>
                  <div className="desc">
                    <ul className="list-disc text-gray-700 text-[15px] sm:text-base">
                      <li>Write and test code, fix bugs, and improve the system using PHP.</li>
                      <li>Manage SQL Server databases, including adding, deleting, and updating data as assigned.</li>
                      <li>Responsible for any special assignment assigned.</li>
                    </ul>
                  </div>
                </div>
              </li>
  
              <li className="wrapper relative z-[3] w-[85%] md:w-[47%] py-5 md:py-2 my-9">
                <div className="text-box relative z-[3] rounded-md bg-gray-300 py-3 ps-6 lg:ps-8 pe-3">
                  <span className="circle">
                    <img 
                      src='/images/gpo.png'
                      alt="The Mather" 
                      className="absolute top-0 rounded-full flex items-center justify-center"
                    />
                  </span>
                  <span className="arrow"></span>
                  <h2 className="text-base sm:text-[17px] font-semibold pb-2 leading-5"> Pharmaceutical production department(Permanent Employees) / <span className="inline-block text-emerald-800 leading-5"> Government Pharmaceutical Organization </span> </h2>
                  <small className="locate-time"> July 2010 - December 2019 / Ratchathewi, BKK </small>
                  <div className="desc">
                    <ul className="list-disc text-gray-700 text-[15px] sm:text-base">
                      <li>Machine control and pack the pills into the packaging box.</li>
                      <li>Write a summary report of the amount of packaging each day.</li>
                      <li>Big cleaning for the product line after work every day.</li>
                      <li>Responsible for any special assignment assigned.</li>
                    </ul>
                  </div>
                </div>
              </li>
  
              <li className="wrapper relative z-[3] w-[85%] md:w-[47%] py-5 md:py-2 my-9">
                <div className="text-box relative z-[3] rounded-md bg-gray-300 py-3 ps-6 lg:ps-8 pe-3">
                  <span className="circle">
                    {/* <img 
                      src=''
                      alt="The Mather" 
                      className="absolute top-0 rounded-full flex items-center justify-center"
                    /> */}
                  </span>
                  <span className="arrow"></span>
                  <h2 className="text-base sm:text-[17px] font-semibold pb-2 leading-5"> Programmer Staff / <span className=" leading-5 inline-block text-emerald-800"> Globalpoint Company Limited </span> </h2>
                  <small className="locate-time"> March 2009 - June 2010 / Phayathai, BKK </small>
                  <div className="desc">
                    <ul className="list-disc text-gray-700 text-[15px] sm:text-base">
                      <li>Get requirements from the end user and write a summary of the meeting.</li>
                      <li>Coordinate between end user and programmer.</li>
                      <li>Mock up designed.</li>
                      <li>Participate in prototype build and solve problems.</li>
                      <li>Responsible for any special assignment assigned. bbb</li>
                    </ul>
                  </div>
                </div>
              </li>
                          
            </ul>
          </div>
  
      </section>
    )
  }
  export default Experiences
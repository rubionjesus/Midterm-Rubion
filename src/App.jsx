import { useState, useEffect } from 'react';
import './index.css';
import profileImage from './assets/profile.jpg';

const Home = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => observer.observe(element));
    return () => fadeElements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-[#CBD5E1] to-[#94A3B8] py-16">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            I am your Jesus <span className="text-[#1E3A5F]">Rubion</span>
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">Integrative Programming and Technologies 2</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg fade-in">
            BSIT 3-A
          </p>
          <div className="space-y-4">
            <div className="flex items-center fade-in">
              <svg className="w-6 h-6 text-[#1E3A5F] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-700">Location: Abra de Ilog, Occidental Mindoro</span>
            </div>
            <div className="flex items-center fade-in">
              <svg className="w-6 h-6 text-[#1E3A5F] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span className="text-gray-700">rubionjesusjr@example.com</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#475569] to-[#1E3A5F] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <img src={profileImage} alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#94A3B8] text-gray-800 px-4 py-2 rounded-full font-bold shadow-lg">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => observer.observe(element));
    return () => fadeElements.forEach(element => observer.unobserve(element));
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I am a third-year Information Technology student who
              is still in the early stages of my journey in the field. 
              As a beginner, I am continuously exploring different areas of IT,
              such as programming, web development, and system design,
              while building my skills step by step. 
              I may not know everything yet, but I am eager to learn, 
              improve, and gain hands-on experience through projects and practice.
              My goal is to develop a strong foundation in technology and 
              eventually become a competent and confident IT professional 
              in the future.
            </p>
            
            <div className="bg-[#CBD5E1] p-6 rounded-lg border-l-4 border-[#1E3A5F] fade-in">
              <h4 className="font-bold text-gray-800 mb-2">My Biggest Accomplishment</h4>
              <p className="text-gray-700">
               One of my biggest accomplishments as a third-year Information Technology student 
               is my continuous growth despite being a beginner in the field. 
               I have successfully learned the basics of programming and started 
               creating simple projects, which helped me understand how systems and
               applications work. Completing these tasks, even when they were challenging, 
               showed my dedication and willingness to improve. This accomplishment 
               may seem small, but it represents my progress, perseverance, and commitment 
               to becoming better in the IT field.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">My Interests & Goals</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg fade-in">
                <h4 className="font-medium text-gray-800 mb-2">Area of Interest</h4>
                <p className="text-gray-600">
                 My area of interest in Information Technology is focused 
                 on web development, where I enjoy creating and designing websites
                 and applications. As a beginner, I am particularly interested
                 in learning how front-end and back-end technologies work together
                 to build functional and user-friendly systems. I am eager to explore
                 various tools and programming languages that can help me improve my 
                 skills and creativity in this field. In the future, I hope to develop 
                 applications that are not only useful but also visually appealing and 
                 accessible to users.

                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg fade-in">
                <h4 className="font-medium text-gray-800 mb-2">Future Goals</h4>
                <p className="text-gray-600">
                  My future goal as an Information Technology student is to become 
                  a skilled and competent developer who can create efficient and
                   user-friendly applications. I aim to continuously improve my 
                   knowledge in programming, web development, and modern technologies 
                   while gaining real-world experience through projects and internships. 
                   In the long run, I hope to contribute to meaningful systems that can help people and solve real-life problems, 
                   while also building a successful and stable career in the IT industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [skillBarsAnimated, setSkillBarsAnimated] = useState(false);

  useEffect(() => {
    const skillBarObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !skillBarsAnimated) {
          setSkillBarsAnimated(true);
          skillBarObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) skillBarObserver.observe(skillsSection);
    return () => skillBarObserver.disconnect();
  }, [skillBarsAnimated]);

  const skills = [
    { name: 'JavaScript', percent: 20, color: 'bg-[#1E3A5F]' },
    { name: 'HTML/CSS', percent: 45, color: 'bg-[#475569]' },
    { name: 'C++', percent: 60, color: 'bg-[#94A3B8]' },
    { name: 'Java', percent: 35, color: 'bg-[#334155]' },
  ];

  const tools = [
    { name: 'Git', description: 'Version control system' },
    { name: 'Bootstrap', description: 'Front-end framework' },
    { name: 'Visual Studio Code', description: 'Code editor ' },
    { name: 'Express', description: 'Back-end framework ' }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-[#1E3A5F] inline-block">
              Programming Languages
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`${skill.color} h-2.5 rounded-full skill-bar`}
                      style={{ 
                        width: skillBarsAnimated ? `${skill.percent}%` : '0%',
                        '--skill-percent': `${skill.percent}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-[#1E3A5F] inline-block">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 fade-in">
                  <h4 className="font-bold text-[#1E3A5F] mb-1">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-50 rounded-xl p-12 shadow-md">
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No Projects Yet</h3>
            <p className="text-gray-600 text-lg mb-6">
              I'm currently working on new projects and building my portfolio. 
              Check back soon for updates!
            </p>
            <div className="bg-[#CBD5E1] p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Looking forward to:</strong> Creating innovative solutions and gaining hands-on experience with modern technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reflection = () => {
  const reflections = [
    {
      question: 'What technologies did you use and why?',
      answer: 'In creating my web portfolio, I used HTML, CSS, JavaScript, and React as my main technologies. I chose React because it allows me to build a more dynamic and interactive user interface using reusable components, which made my code more organized and easier to manage. HTML and CSS helped me structure and design the layout of my website, while JavaScript supported the functionality behind it. I also used tools like Visual Studio Code for coding and GitHub for version control and deployment. I chose these technologies because they are widely used in modern web development and helped me improve my understanding of how real-world web applications are built.'},
    {
      question: 'Which parts of the portfolio were easiest for you?',
      answer: 'The easiest parts of the portfolio for me were designing the layout and creating the static sections such as the Home and About Me pages. Using React made it easier to organize these sections into components, which helped me manage my code more efficiently. I also found it enjoyable to apply styles using CSS, as I could easily see the visual changes and improvements in my design. These parts were easier because they focused more on structure and creativity rather than complex functionality.'
    },
    {
      question: 'Which parts were most challenging?',
      answer: 'The most challenging parts of creating my web portfolio were implementing interactivity and ensuring smooth navigation between different sections. Adding animations and making sure that components updated correctly in React required careful attention to detail and debugging. I also found it challenging to make the portfolio fully responsive so that it looks good on different screen sizes. These parts pushed me to problem-solve and learn more about React’s functionality and CSS techniques, which ultimately helped me improve my skills.'
    },
    {
      question: 'What technologies are you most interested in learning?',
      answer: 'I am most interested in learning advanced web development technologies and frameworks that can help me create more dynamic and efficient applications. Specifically, I want to deepen my knowledge of React.js and explore Node.js and Express.js for back-end development. I am also curious about TypeScript for writing more robust and scalable code, as well as learning database management with tools like MongoDB or MySQL. Additionally, I am interested in exploring mobile app development and AI integration in web applications, as these technologies are becoming increasingly important in the IT industry.'
    },
    {
      question: 'What kind of applications do you want to build in the future?',
      answer: 'In the future, I want to build applications that are both useful and user-friendly, focusing on solving real-world problems. I am particularly interested in creating web and mobile applications that can help people manage tasks, access information easily, or improve daily life. For example, I would like to develop productivity apps, educational platforms, or community-based solutions for farmers, students, or small businesses. I also hope to explore applications that incorporate interactive features, responsive design, and possibly AI tools, so they are not only functional but also engaging for users.'
    }
  ];

  return (
    <section id="reflection" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Reflection</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="space-y-8">
            {reflections.map((item, index) => (
              <div key={index} className="fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'jesus', text: "Hello! I'm Jesus, a passionate developer 💻", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getAutoResponse = (customerMessage) => {
    const message = customerMessage.toLowerCase();
    
    if (message.includes('project') || message.includes('work')) {
      return "I specialize in full-stack development and modern web technologies! 🚀";
    } else if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
      return "I'd be happy to discuss pricing! Let's schedule a call to talk about your project requirements.";
    } else if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return "You can reach me at jesusrubion@example.com or through the contact form!";
    } else if (message.includes('skill') || message.includes('technology') || message.includes('stack')) {
      return "I work with React, Node.js, TypeScript, PHP, MySQL, and Cloud Firestore. Always learning new technologies! 💪";
    } else if (message.includes('available') || message.includes('hire') || message.includes('freelance')) {
      return "Yes, I'm available for opportunities! Feel free to send me an email with project details.";
    } else if (message.includes('location') || message.includes('where')) {
      return "I'm based in Mamburao, Occidental Mindoro, Philippines. Open to remote work! 🌍";
    } else if (message.includes('experience') || message.includes('background')) {
      return "I'm a third-year BSIT student with experience in frontend development and UI/UX design.";
    } else if (message.includes('time') || message.includes('deadline') || message.includes('long')) {
      return "Project timelines depend on complexity. Let's discuss your requirements for a better estimate!";
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hi there! 👋 How can I help you today?";
    } else if (message.includes('thank')) {
      return "You're welcome! Feel free to ask anything else. 😊";
    } else {
      return "Thanks for your message! For detailed discussions, please email me at jesusrubion@example.com 📧";
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add customer message
    const customerMsg = {
      id: messages.length + 1,
      sender: 'customer',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, customerMsg]);
    setInputValue('');
    setIsTyping(true);

    // Auto-response after delay
    setTimeout(() => {
      const responseMsg = {
        id: messages.length + 2,
        sender: 'jesus',
        text: getAutoResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, responseMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;        
        if (window.pageYOffset >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-[#1E3A5F] text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">My Portfolio</div>
          <ul className="flex space-x-6">
            {['home', 'about', 'skills', 'projects', 'reflection'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`}
                  onClick={(e) => scrollToSection(e, section)}
                  className={`hover:text-blue-200 transition capitalize ${activeSection === section ? 'text-yellow-300' : ''}`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Reflection />

      <footer className="bg-[#1E3A5F] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; 2026 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#94A3B8] transition">GitHub</a>
            <a href="mailto:jesusrubion@example.com" className="hover:text-[#94A3B8] transition">Email</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#1E3A5F] hover:bg-[#475569] text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
          </svg>
        </button>

        {isChatOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl w-80 overflow-hidden border-2 border-[#1E3A5F]">
            <div className="bg-[#1E3A5F] text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold">Chat with Jesus</h3>
                <p className="text-xs text-[#CBD5E1]">{isTyping ? 'Typing...' : 'Online'}</p>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-[#ECCFC3] transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex items-start ${msg.sender === 'customer' ? 'justify-end' : ''}`}>
                    {msg.sender === 'jesus' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#475569] to-[#1E3A5F] flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                        J
                      </div>
                    )}
                    <div className={`${
                      msg.sender === 'jesus' 
                        ? 'bg-[#CBD5E1] rounded-lg rounded-tl-none' 
                        : 'bg-[#1E3A5F] text-white rounded-lg rounded-tr-none'
                    } p-3 max-w-xs`}>
                      <p className="text-sm text-gray-800">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'jesus' ? 'text-gray-600' : 'text-gray-300'
                      }`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {msg.sender === 'customer' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#94A3B8] to-[#CBD5E1] flex items-center justify-center text-white text-xs font-bold ml-2 flex-shrink-0">
                        C
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#475569] to-[#1E3A5F] flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                      J
                    </div>
                    <div className="bg-[#CBD5E1] rounded-lg rounded-tl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1E3A5F] text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#1E3A5F] hover:bg-[#475569] text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Click send or press Enter</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
